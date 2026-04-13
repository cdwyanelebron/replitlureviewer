import { useEffect, useMemo, useRef, useState } from "react";
import { Topic, Subject, ContentSection, QuizQuestion } from "../data/subjects";
import { ChevronLeft, ChevronRight, CheckSquare, BookOpen, RotateCcw, Play, Copy, Check, Terminal, Download, Upload, Save } from "lucide-react";

interface ContentAreaProps {
  topic: Topic;
  subject: Subject;
  quizMode: boolean;
  onToggleQuiz: () => void;
  onPrev: (() => void) | null;
  onNext: (() => void) | null;
}

export default function ContentArea({ topic, subject, quizMode, onToggleQuiz, onPrev, onNext }: ContentAreaProps) {
  const content = topic.content;
  const hasQuiz = content.quiz && content.quiz.length > 0;

  return (
    <div>
      {/* Breadcrumb */}
      <div className="text-xs text-muted-foreground mb-2 flex items-center gap-1">
        <span>{subject.code}</span>
        <span>›</span>
        <span>{content.term}</span>
        <span>›</span>
        <span className="truncate max-w-[200px]">{content.module}</span>
      </div>

      {/* Term badge */}
      <div className="mb-3">
        <span className={`term-badge term-${content.term.toLowerCase().replace("-", "-").replace(" ", "-")}`}>
          {content.term}
        </span>
      </div>

      {/* Title */}
      <h1 className="content-h1">{content.heading}</h1>

      {/* Learning Objectives */}
      <div className="definition-box my-4">
        <div className="font-semibold text-sm mb-2 text-green-700 dark:text-green-400">Learning Objectives</div>
        <ul className="space-y-1">
          {content.objectives.map((obj, i) => (
            <li key={i} className="text-sm flex items-start gap-2">
              <span className="text-green-600 dark:text-green-400 mt-0.5 shrink-0">✓</span>
              <span>{obj}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Mode Toggle */}
      {hasQuiz && (
        <div className="flex gap-2 mb-6">
          <button
            className={`nav-btn`}
            style={quizMode ? { background: "hsl(var(--muted))", color: "hsl(var(--foreground))", border: "1px solid hsl(var(--border))" } : {}}
            onClick={() => { if (quizMode) onToggleQuiz(); }}
            data-testid="btn-reviewer-mode"
          >
            <BookOpen size={16} />
            Reviewer
          </button>
          <button
            className={`nav-btn`}
            onClick={() => { if (!quizMode) onToggleQuiz(); }}
            style={!quizMode ? { background: "hsl(var(--muted))", color: "hsl(var(--foreground))", border: "1px solid hsl(var(--border))" } : {}}
            data-testid="btn-quiz-mode"
          >
            <CheckSquare size={16} />
            Quiz
          </button>
        </div>
      )}

      {/* Content */}
      {!quizMode ? (
        <ReviewContent sections={content.sections} />
      ) : (
        <QuizSection questions={content.quiz!} onDone={onToggleQuiz} />
      )}

      {/* Navigation Buttons */}
      {!quizMode && (
        <div className="flex justify-between mt-10 pt-6 border-t border-border">
          {onPrev ? (
            <button className="nav-btn secondary" onClick={onPrev} data-testid="btn-prev-topic">
              <ChevronLeft size={16} />
              Previous
            </button>
          ) : <div />}
          {onNext ? (
            <button className="nav-btn" onClick={onNext} data-testid="btn-next-topic">
              Next
              <ChevronRight size={16} />
            </button>
          ) : <div />}
        </div>
      )}
    </div>
  );
}

function ReviewContent({ sections }: { sections: ContentSection[] }) {
  return (
    <div>
      {sections.map((section, i) => {
        switch (section.type) {
          case "h2":
            return <h2 key={i} className="content-h2">{section.content}</h2>;
          case "h3":
            return <h3 key={i} className="content-h3">{section.content}</h3>;
          case "text":
            return <p key={i} className="content-p">{section.content}</p>;
          case "definition":
            return (
              <div key={i} className="definition-box">
                <strong className="text-green-700 dark:text-green-400">Definition: </strong>
                {section.content}
              </div>
            );
          case "note":
            return (
              <div key={i} className="note-box">
                <strong>📌 Note: </strong>
                {section.content}
              </div>
            );
          case "example":
            return (
              <div key={i} className="example-box">
                <div className="text-xs font-bold text-muted-foreground uppercase tracking-wide mb-1">Example</div>
                <div className="text-sm whitespace-pre-line">{section.content}</div>
              </div>
            );
          case "code":
            return <CodeBlock key={i} code={section.content} language={section.language ?? "c"} codeInput={section.codeInput} />;
          case "list":
            return (
              <div key={i} className="my-3">
                {section.content && <div className="font-semibold text-sm mb-2">{section.content}</div>}
                <ul className="space-y-1.5 pl-2">
                  {section.items?.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm">
                      <span className="text-green-600 dark:text-green-400 mt-1 shrink-0">▸</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          case "table":
            return (
              <div key={i} className="my-4 overflow-x-auto">
                {section.content && <div className="text-sm font-semibold mb-2">{section.content}</div>}
                <table className="table-nice">
                  {section.headers && (
                    <thead>
                      <tr>
                        {section.headers.map((h, j) => <th key={j}>{h}</th>)}
                      </tr>
                    </thead>
                  )}
                  <tbody>
                    {section.rows?.map((row, j) => (
                      <tr key={j}>
                        {row.map((cell, k) => <td key={k}>{cell}</td>)}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}

type CompilerResponse = {
  ok: boolean;
  stage?: "request" | "compile" | "run" | "server";
  exitCode?: number | null;
  timedOut?: boolean;
  stdout?: string;
  stderr?: string;
  error?: string;
};

function CodeBlock({ code: initialCode, language, codeInput }: { code: string; language: string; codeInput?: string }) {
  const storageKey = useMemo(() => {
    let hash = 0;
    const source = `${language}:${initialCode}`;
    for (let i = 0; i < source.length; i++) hash = ((hash << 5) - hash + source.charCodeAt(i)) | 0;
    return `lu-reviewer-code-${language}-${Math.abs(hash)}`;
  }, [initialCode, language]);

  const [code, setCode] = useState(() => localStorage.getItem(`${storageKey}:code`) ?? initialCode);
  const [stdinVal, setStdinVal] = useState(() => localStorage.getItem(`${storageKey}:input`) ?? codeInput ?? "");
  const [output, setOutput] = useState<string | null>(null);
  const [running, setRunning] = useState(false);
  const [copied, setCopied] = useState(false);
  const [saved, setSaved] = useState(false);
  const [isError, setIsError] = useState(false);
  const [runnerLabel, setRunnerLabel] = useState("GCC C compiler");
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const jscppRef = useRef<null | { run: (code: string, input: string, cfg: object) => void }>(null);

  useEffect(() => {
    localStorage.setItem(`${storageKey}:code`, code);
    localStorage.setItem(`${storageKey}:input`, stdinVal);
  }, [code, stdinVal, storageKey]);

  useEffect(() => {
    setCode(localStorage.getItem(`${storageKey}:code`) ?? initialCode);
    setStdinVal(localStorage.getItem(`${storageKey}:input`) ?? codeInput ?? "");
    setOutput(null);
    setIsError(false);
  }, [initialCode, codeInput, storageKey]);

  const getJSCPP = async () => {
    if (jscppRef.current) return jscppRef.current;
    const mod = await import("JSCPP");
    const lib = (mod as { default?: typeof mod }).default ?? mod;
    jscppRef.current = lib as { run: (code: string, input: string, cfg: object) => void };
    return jscppRef.current;
  };

  const runWithGcc = async (): Promise<CompilerResponse> => {
    const baseUrl = import.meta.env.BASE_URL.endsWith("/") ? import.meta.env.BASE_URL : `${import.meta.env.BASE_URL}/`;
    const endpoints = [
      `${baseUrl}api/c/run`,
      "/api/c/run",
    ];

    let lastError = "";

    for (const endpoint of endpoints) {
      try {
        const controller = new AbortController();
        const timeout = window.setTimeout(() => controller.abort(), 12_000);
        const response = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ code, input: stdinVal }),
          signal: controller.signal,
        });
        window.clearTimeout(timeout);

        if (!response.ok && response.status !== 400 && response.status !== 408 && response.status !== 413) {
          lastError = `Compiler server returned HTTP ${response.status}.`;
          continue;
        }

        return await response.json() as CompilerResponse;
      } catch (error: unknown) {
        lastError = error && typeof error === "object" && "message" in error ? String(error.message) : String(error);
      }
    }

    throw new Error(lastError || "Compiler server is not reachable.");
  };

  const formatGccResult = (result: CompilerResponse) => {
    const stdout = (result.stdout ?? "").trimEnd();
    const stderr = (result.stderr ?? "").trimEnd();

    if (result.stage === "compile") {
      return `Compilation failed:\n${stderr || stdout || result.error || "Unknown compile error."}`;
    }

    if (result.timedOut) {
      return `${stdout ? `${stdout}\n\n` : ""}${stderr ? `${stderr}\n\n` : ""}${result.error || "Program stopped because it ran too long."}`;
    }

    if (result.error && result.stage !== "run") {
      return result.error;
    }

    const parts = [];
    if (stdout) parts.push(stdout);
    if (stderr) parts.push(`Warnings/errors:\n${stderr}`);
    if (!stdout && !stderr) parts.push("(no output)");
    parts.push(`Program finished with exit code ${result.exitCode ?? 0}.`);
    return parts.join("\n\n");
  };

  const runWithBrowserFallback = async () => {
    let out = "";
    const JSCPP = await getJSCPP();
    const exitCode = JSCPP.run(code, stdinVal, {
      stdio: { write: (s: string) => { out += s; } },
      unsigned_overflow: "warn",
    });
    const finalOutput = out.trimEnd();
    return `${finalOutput || "(no output)"}\n\nProgram finished with exit code ${exitCode ?? 0}.\n\nRunner: browser fallback.`;
  };

  const runCode = async () => {
    setRunning(true);
    setOutput(null);
    setIsError(false);
    try {
      const result = await runWithGcc();
      setRunnerLabel("GCC C compiler");
      setOutput(formatGccResult(result));
      setIsError(!result.ok);
    } catch (e: unknown) {
      try {
        const fallbackOutput = await runWithBrowserFallback();
        setRunnerLabel("browser fallback");
        setOutput(fallbackOutput);
      } catch (fallbackError: unknown) {
        const msg = fallbackError && typeof fallbackError === "object" && "message" in fallbackError ? String(fallbackError.message) : String(fallbackError);
        const cleaned = msg
          .replace(/^ERROR:\s*/i, "")
          .replace(/\n{3,}/g, "\n\n")
          .trim();
        setOutput(`Compiler/runtime error:\n${cleaned}\n\nCheck syntax, missing semicolons/braces, #include lines, scanf format, and input values.`);
        setIsError(true);
      }
    }
    setRunning(false);
  };

  const reset = () => {
    setCode(initialCode);
    setStdinVal(codeInput ?? "");
    localStorage.removeItem(`${storageKey}:code`);
    localStorage.removeItem(`${storageKey}:input`);
    setOutput(null);
    setIsError(false);
  };

  const copyCode = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const saveCode = () => {
    localStorage.setItem(`${storageKey}:code`, code);
    localStorage.setItem(`${storageKey}:input`, stdinVal);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const downloadCode = () => {
    const ext = language.toLowerCase().includes("c") ? "c" : "txt";
    const blob = new Blob([code], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `cc1202-practice.${ext}`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  };

  const loadCodeFile = (file?: File) => {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      setCode(String(reader.result ?? ""));
      setOutput(null);
      setIsError(false);
    };
    reader.readAsText(file);
  };

  const lineCount = code.split("\n").length;
  const hasInput = /scanf\s*\(|getchar\s*\(|gets\s*\(|fgets\s*\(/.test(code);

  return (
    <div className="my-5 rounded-xl border border-border overflow-hidden text-sm shadow-sm bg-background">
      <div className="flex items-center justify-between px-3 py-2 bg-slate-950 text-slate-100 border-b border-slate-800 flex-wrap gap-2">
        <div className="flex items-center gap-1.5 text-xs font-mono">
          <Terminal size={12} />
          <span className="font-semibold">{language.toUpperCase()} compiler</span>
          <span className="text-green-400 text-[10px]">● {runnerLabel}</span>
        </div>
        <div className="flex gap-1 flex-wrap">
          <button
            onClick={copyCode}
            className="flex items-center gap-1 text-xs px-2 py-1 rounded border border-slate-700 bg-slate-900 hover:bg-slate-800 transition-colors"
          >
            {copied ? <Check size={11} className="text-green-500" /> : <Copy size={11} />}
            {copied ? "Copied!" : "Copy"}
          </button>
          <button
            onClick={saveCode}
            className="flex items-center gap-1 text-xs px-2 py-1 rounded border border-slate-700 bg-slate-900 hover:bg-slate-800 transition-colors"
            title="Save code and input in this browser"
          >
            {saved ? <Check size={11} className="text-green-500" /> : <Save size={11} />}
            {saved ? "Saved" : "Save"}
          </button>
          <button
            onClick={downloadCode}
            className="flex items-center gap-1 text-xs px-2 py-1 rounded border border-slate-700 bg-slate-900 hover:bg-slate-800 transition-colors"
            title="Download the whole C file"
          >
            <Download size={11} />
            .c File
          </button>
          <button
            onClick={() => fileInputRef.current?.click()}
            className="flex items-center gap-1 text-xs px-2 py-1 rounded border border-slate-700 bg-slate-900 hover:bg-slate-800 transition-colors"
            title="Load a saved C file"
          >
            <Upload size={11} />
            Load
          </button>
          <input
            ref={fileInputRef}
            type="file"
            accept=".c,.h,.cpp,.txt,text/plain"
            className="hidden"
            onChange={e => {
              loadCodeFile(e.target.files?.[0]);
              e.currentTarget.value = "";
            }}
          />
          <button
            onClick={reset}
            className="flex items-center gap-1 text-xs px-2 py-1 rounded border border-slate-700 bg-slate-900 hover:bg-slate-800 transition-colors"
            title="Reset to original"
          >
            <RotateCcw size={11} />
            Reset
          </button>
          <button
            onClick={runCode}
            disabled={running}
            className="flex items-center gap-1 text-xs px-2 py-1 rounded bg-green-600 text-white hover:bg-green-700 transition-colors disabled:opacity-60 font-semibold"
          >
            <Play size={11} />
            {running ? "Running…" : "▶ Run"}
          </button>
        </div>
      </div>

      <div className="px-3 py-2 bg-green-50 text-green-900 dark:bg-green-950/30 dark:text-green-200 border-b border-border text-xs leading-5">
        Edit the example directly, then press Run. This uses real C compilation when online; input is only needed for programs with <code className="font-mono">scanf</code>.
      </div>

      <textarea
        value={code}
        onChange={e => setCode(e.target.value)}
        className="w-full min-h-[390px] bg-gray-950 text-green-300 p-4 font-mono text-sm leading-6 outline-none resize-y border-none"
        rows={Math.max(lineCount + 2, 16)}
        spellCheck={false}
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
      />

      {hasInput && (
        <div className="border-t border-border bg-slate-50 dark:bg-slate-950/40">
          <div className="px-3 py-2 grid gap-2 sm:grid-cols-[minmax(0,1fr)_220px] sm:items-center">
            <div className="text-xs text-muted-foreground">
              <span className="font-semibold text-foreground">Program input for scanf:</span> optional compact stdin values, one per line.
            </div>
            <textarea
              value={stdinVal}
              onChange={e => setStdinVal(e.target.value)}
              className="w-full min-h-[54px] max-h-[120px] bg-gray-900 text-yellow-100 p-2 font-mono text-xs leading-5 outline-none resize-y rounded-md border border-slate-700"
              rows={2}
              placeholder={"10\n20"}
              spellCheck={false}
            />
          </div>
        </div>
      )}

      {output !== null && (
        <div className="border-t border-border">
          <div className="px-3 py-2 bg-muted/30 border-b border-border text-xs font-mono text-muted-foreground flex items-center gap-1.5">
            <Terminal size={11} />
            Output / errors:
          </div>
          <pre className={`min-h-[160px] p-4 text-sm leading-6 font-mono whitespace-pre-wrap m-0 ${isError ? "bg-red-950 text-red-200" : "bg-gray-900 text-white"}`}>
            {output}
          </pre>
        </div>
      )}
    </div>
  );
}

function QuizSection({ questions, onDone }: { questions: QuizQuestion[]; onDone: () => void }) {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleSelect = (qIdx: number, optIdx: number) => {
    if (submitted) return;
    setAnswers(prev => ({ ...prev, [qIdx]: optIdx }));
  };

  const handleSubmit = () => {
    if (Object.keys(answers).length < questions.length) {
      alert("Please answer all questions before submitting.");
      return;
    }
    setSubmitted(true);
  };

  const handleReset = () => {
    setAnswers({});
    setSubmitted(false);
  };

  const score = submitted
    ? questions.filter((q, i) => answers[i] === q.answer).length
    : 0;

  const pct = submitted ? Math.round((score / questions.length) * 100) : 0;

  return (
    <div>
      <h2 className="content-h2">Practice Quiz</h2>
      <p className="text-sm text-muted-foreground mb-6">
        {submitted
          ? `You scored ${score} out of ${questions.length} (${pct}%)`
          : `Answer all ${questions.length} questions then submit.`}
      </p>

      {submitted && (
        <div className={`definition-box mb-6 ${pct >= 80 ? "" : "border-l-4 border-yellow-500"}`}>
          <div className="font-bold text-lg mb-1">
            {pct >= 80 ? "🎉 Excellent!" : pct >= 60 ? "👍 Good job!" : "📚 Keep reviewing!"}
          </div>
          <div className="text-sm">
            Score: {score}/{questions.length} — {pct}%
          </div>
          <div className="progress-bar-outer mt-2">
            <div className="progress-bar-inner" style={{ width: `${pct}%`, background: pct >= 80 ? "#04AA6D" : pct >= 60 ? "#f59e0b" : "#ef4444" }} />
          </div>
        </div>
      )}

      <div className="space-y-8">
        {questions.map((q, i) => {
          const selected = answers[i];
          const isCorrect = submitted && selected === q.answer;
          const _isWrong = submitted && selected !== undefined && selected !== q.answer; void _isWrong;

          return (
            <div key={i} data-testid={`quiz-question-${i}`}>
              <div className="font-semibold text-sm mb-3">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 text-xs font-bold mr-2">{i + 1}</span>
                {q.question}
              </div>
              <div className="space-y-2">
                {q.options.map((opt, j) => {
                  let extraClass = "";
                  if (submitted) {
                    if (j === q.answer) extraClass = "correct";
                    else if (j === selected && j !== q.answer) extraClass = "wrong";
                  } else if (j === selected) {
                    extraClass = "border-green-600";
                  }

                  return (
                    <button
                      key={j}
                      className={`quiz-option w-full text-left ${extraClass}`}
                      onClick={() => handleSelect(i, j)}
                      data-testid={`quiz-option-${i}-${j}`}
                      style={j === selected && !submitted ? { borderColor: "#04AA6D", background: "hsl(var(--sidebar-accent))" } : {}}
                    >
                      <span className="inline-flex items-center justify-center w-5 h-5 rounded-full border-2 border-current text-xs font-bold shrink-0 mt-0.5">
                        {String.fromCharCode(65 + j)}
                      </span>
                      <span className="text-sm">{opt}</span>
                    </button>
                  );
                })}
              </div>

              {submitted && (
                <div className="mt-2 text-xs text-muted-foreground bg-muted px-3 py-2 rounded">
                  <strong>{isCorrect ? "✓ Correct!" : "✗ Incorrect."}</strong> {q.explanation}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="flex gap-3 mt-8">
        {!submitted ? (
          <button
            className="nav-btn"
            onClick={handleSubmit}
            data-testid="btn-submit-quiz"
          >
            Submit Quiz
          </button>
        ) : (
          <>
            <button className="nav-btn secondary" onClick={handleReset} data-testid="btn-retry-quiz">
              <RotateCcw size={16} />
              Retry Quiz
            </button>
            <button className="nav-btn" onClick={onDone} data-testid="btn-back-to-reviewer">
              Back to Reviewer
            </button>
          </>
        )}
      </div>
    </div>
  );
}
