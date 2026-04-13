import { randomUUID } from "node:crypto";
import { mkdtemp, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { spawn } from "node:child_process";
import { Router, type IRouter } from "express";

type ProcessResult = {
  exitCode: number | null;
  stdout: string;
  stderr: string;
  timedOut: boolean;
};

const router: IRouter = Router();
const maxSourceLength = 100_000;
const maxInputLength = 20_000;
const maxOutputLength = 50_000;

function trimOutput(value: string) {
  if (value.length <= maxOutputLength) return value;
  return `${value.slice(0, maxOutputLength)}\n\n[Output stopped because it was too long.]`;
}

function runProcess(command: string, args: string[], options: { cwd: string; input?: string; timeoutMs: number }) {
  return new Promise<ProcessResult>((resolve, reject) => {
    const child = spawn(command, args, {
      cwd: options.cwd,
      shell: false,
      stdio: ["pipe", "pipe", "pipe"],
    });

    let stdout = "";
    let stderr = "";
    let timedOut = false;

    const timeout = setTimeout(() => {
      timedOut = true;
      child.kill("SIGKILL");
    }, options.timeoutMs);

    child.stdout.on("data", (chunk: Buffer) => {
      stdout = trimOutput(stdout + chunk.toString("utf8"));
    });

    child.stderr.on("data", (chunk: Buffer) => {
      stderr = trimOutput(stderr + chunk.toString("utf8"));
    });

    child.on("error", reject);

    child.on("close", (exitCode) => {
      clearTimeout(timeout);
      resolve({ exitCode, stdout, stderr, timedOut });
    });

    child.stdin.end(options.input ?? "");
  });
}

router.post("/c/run", async (req, res) => {
  const code = typeof req.body?.code === "string" ? req.body.code : "";
  const input = typeof req.body?.input === "string" ? req.body.input : "";

  if (!code.trim()) {
    res.status(400).json({ ok: false, stage: "request", error: "No C code was provided." });
    return;
  }

  if (code.length > maxSourceLength) {
    res.status(413).json({ ok: false, stage: "request", error: "Code is too long for the practice compiler." });
    return;
  }

  if (input.length > maxInputLength) {
    res.status(413).json({ ok: false, stage: "request", error: "Input is too long for the practice compiler." });
    return;
  }

  const workDir = await mkdtemp(path.join(tmpdir(), "lu-c-"));

  try {
    const sourcePath = path.join(workDir, `${randomUUID()}.c`);
    const binaryPath = path.join(workDir, "program");

    await writeFile(sourcePath, code, "utf8");

    const compile = await runProcess(
      "gcc",
      ["-std=c11", "-Wall", "-Wextra", "-O0", "-fno-diagnostics-color", sourcePath, "-lm", "-o", binaryPath],
      { cwd: workDir, timeoutMs: 8_000 },
    );

    if (compile.timedOut) {
      res.status(408).json({
        ok: false,
        stage: "compile",
        stdout: compile.stdout,
        stderr: compile.stderr,
        error: "Compilation timed out.",
      });
      return;
    }

    if (compile.exitCode !== 0) {
      res.status(200).json({
        ok: false,
        stage: "compile",
        exitCode: compile.exitCode,
        stdout: compile.stdout,
        stderr: compile.stderr,
      });
      return;
    }

    const run = await runProcess(binaryPath, [], { cwd: workDir, input, timeoutMs: 4_000 });

    res.status(200).json({
      ok: run.exitCode === 0 && !run.timedOut,
      stage: "run",
      exitCode: run.exitCode,
      timedOut: run.timedOut,
      stdout: run.stdout,
      stderr: run.stderr,
      error: run.timedOut ? "Program stopped because it ran too long. Check loops or missing input." : undefined,
    });
  } catch (error) {
    const message = error && typeof error === "object" && "message" in error ? String(error.message) : String(error);
    res.status(500).json({ ok: false, stage: "server", error: message });
  } finally {
    await rm(workDir, { recursive: true, force: true });
  }
});

export default router;