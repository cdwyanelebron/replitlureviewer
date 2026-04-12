import { useState } from "react";
import { Topic, Subject, ContentSection, QuizQuestion } from "../data/subjects";
import { ChevronLeft, ChevronRight, CheckSquare, BookOpen, RotateCcw, Play, Copy, Check, Terminal } from "lucide-react";

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

function CodeBlock({ code, language, codeInput }: { code: string; language: string; codeInput?: string }) {
  const [output, setOutput] = useState<string | null>(null);
  const [running, setRunning] = useState(false);
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState(false);

  const runCode = async () => {
    setRunning(true);
    setOutput(null);
    setError(false);
    try {
      const res = await fetch("https://emkc.org/api/v2/piston/execute", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          language,
          version: "*",
          files: [{ content: code }],
          ...(codeInput ? { stdin: codeInput } : {}),
        }),
      });
      if (!res.ok) throw new Error("API error");
      const data = await res.json();
      const result = (data.run?.stdout || "") + (data.run?.stderr || "");
      setOutput(result.trim() || "(no output)");
      if (data.run?.stderr) setError(true);
    } catch {
      setOutput("Could not connect to the compiler. Check your internet connection.");
      setError(true);
    }
    setRunning(false);
  };

  const copyCode = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="my-4 rounded-lg border border-border overflow-hidden text-sm">
      <div className="flex items-center justify-between px-3 py-1.5 bg-muted/50 border-b border-border">
        <div className="flex items-center gap-1.5 text-xs font-mono text-muted-foreground">
          <Terminal size={12} />
          <span>{language.toUpperCase()} Program</span>
          {codeInput && <span className="text-xs text-muted-foreground ml-2">(sample input provided)</span>}
        </div>
        <div className="flex gap-1.5">
          <button
            onClick={copyCode}
            className="flex items-center gap-1 text-xs px-2 py-1 rounded border border-border bg-background hover:bg-muted transition-colors"
          >
            {copied ? <Check size={11} className="text-green-500" /> : <Copy size={11} />}
            {copied ? "Copied!" : "Copy"}
          </button>
          <button
            onClick={runCode}
            disabled={running}
            className="flex items-center gap-1 text-xs px-2 py-1 rounded bg-green-600 text-white hover:bg-green-700 transition-colors disabled:opacity-60"
          >
            <Play size={11} />
            {running ? "Running…" : "Run"}
          </button>
        </div>
      </div>
      <pre className="bg-gray-950 text-green-300 p-4 overflow-x-auto text-xs leading-5 font-mono m-0">
        <code>{code}</code>
      </pre>
      {output !== null && (
        <div className="border-t border-border">
          <div className="px-3 py-1.5 bg-muted/30 border-b border-border text-xs font-mono text-muted-foreground flex items-center gap-1.5">
            <Terminal size={11} />
            Output:
          </div>
          <pre className={`p-3 text-xs font-mono whitespace-pre-wrap m-0 ${error ? "bg-red-950 text-red-300" : "bg-gray-900 text-white"}`}>
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
