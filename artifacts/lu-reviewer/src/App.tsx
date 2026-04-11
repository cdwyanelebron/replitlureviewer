import { useState, useEffect, useCallback } from "react";
import { SUBJECTS, Subject, findTopic } from "./data/subjects";
import Sidebar from "./components/Sidebar";
import TopNav from "./components/TopNav";
import ContentArea from "./components/ContentArea";

function App() {
  const [activeSubjectId, setActiveSubjectId] = useState<string>(SUBJECTS[0].id);
  const [activeTopicId, setActiveTopicId] = useState<string | null>(null);
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    try {
      return localStorage.getItem("lu-dark") === "true";
    } catch {
      return false;
    }
  });
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [quizMode, setQuizMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    try {
      localStorage.setItem("lu-dark", String(darkMode));
    } catch {
    }
  }, [darkMode]);

  const activeSubject: Subject = SUBJECTS.find(s => s.id === activeSubjectId) ?? SUBJECTS[0];

  const firstTopicId = activeSubject.terms[0]?.modules[0]?.topics[0]?.id ?? null;
  const currentTopicId = activeTopicId ?? firstTopicId;

  const found = currentTopicId ? findTopic(activeSubject, currentTopicId) : null;
  const activeTopic = found?.topic ?? null;

  const handleSubjectChange = useCallback((id: string) => {
    setActiveSubjectId(id);
    setActiveTopicId(null);
    setQuizMode(false);
    setSidebarOpen(false);
  }, []);

  const handleTopicChange = useCallback((id: string) => {
    setActiveTopicId(id);
    setQuizMode(false);
    setSidebarOpen(false);
  }, []);

  const allTopicIds: string[] = [];
  for (const term of activeSubject.terms) {
    for (const mod of term.modules) {
      for (const topic of mod.topics) {
        allTopicIds.push(topic.id);
      }
    }
  }

  const currentIndex = currentTopicId ? allTopicIds.indexOf(currentTopicId) : -1;
  const prevTopicId = currentIndex > 0 ? allTopicIds[currentIndex - 1] : null;
  const nextTopicId = currentIndex < allTopicIds.length - 1 ? allTopicIds[currentIndex + 1] : null;

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="bg-background text-foreground min-h-screen">
        <TopNav
          subjects={SUBJECTS}
          activeSubjectId={activeSubjectId}
          onSubjectChange={handleSubjectChange}
          darkMode={darkMode}
          onToggleDark={() => setDarkMode(d => !d)}
          onMenuToggle={() => setSidebarOpen(o => !o)}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />

        <div
          className={`lu-sidebar${sidebarOpen ? " open" : ""}`}
          style={{}}
        >
          <Sidebar
            subject={activeSubject}
            activeTopicId={currentTopicId}
            onTopicSelect={handleTopicChange}
            searchQuery={searchQuery}
          />
        </div>

        {sidebarOpen && (
          <div
            className="fixed inset-0 z-40 bg-black/40 md:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        <main className="lu-main">
          {activeTopic ? (
            <ContentArea
              topic={activeTopic}
              subject={activeSubject}
              quizMode={quizMode}
              onToggleQuiz={() => setQuizMode(q => !q)}
              onPrev={prevTopicId ? () => handleTopicChange(prevTopicId) : null}
              onNext={nextTopicId ? () => handleTopicChange(nextTopicId) : null}
            />
          ) : (
            <WelcomeScreen subject={activeSubject} onStart={() => firstTopicId && handleTopicChange(firstTopicId)} />
          )}
        </main>
      </div>
    </div>
  );
}

function WelcomeScreen({ subject, onStart }: { subject: Subject; onStart: () => void }) {
  const totalTopics = subject.terms.reduce((a, t) => a + t.modules.reduce((b, m) => b + m.topics.length, 0), 0);
  const totalModules = subject.terms.reduce((a, t) => a + t.modules.length, 0);

  return (
    <div className="max-w-2xl mx-auto py-8">
      <div className="mb-2 text-sm font-semibold text-green-600 dark:text-green-400">{subject.code}</div>
      <h1 className="content-h1 mb-4">{subject.title}</h1>
      <p className="content-p text-muted-foreground mb-6">{subject.description}</p>

      <div className="flex gap-4 mb-8 flex-wrap">
        <div className="example-box flex-1 min-w-[120px] text-center">
          <div className="text-2xl font-bold text-green-600 dark:text-green-400">{subject.units}</div>
          <div className="text-sm text-muted-foreground">Units</div>
        </div>
        <div className="example-box flex-1 min-w-[120px] text-center">
          <div className="text-2xl font-bold text-green-600 dark:text-green-400">{subject.terms.length}</div>
          <div className="text-sm text-muted-foreground">Terms</div>
        </div>
        <div className="example-box flex-1 min-w-[120px] text-center">
          <div className="text-2xl font-bold text-green-600 dark:text-green-400">{totalModules}</div>
          <div className="text-sm text-muted-foreground">Modules</div>
        </div>
        <div className="example-box flex-1 min-w-[120px] text-center">
          <div className="text-2xl font-bold text-green-600 dark:text-green-400">{totalTopics}</div>
          <div className="text-sm text-muted-foreground">Topics</div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="content-h2">Coverage</h2>
        <div className="space-y-3">
          {subject.terms.map(term => (
            <div key={term.id} className="example-box">
              <div className="font-semibold text-sm mb-1">{term.label}</div>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                {term.modules.map(mod => (
                  <li key={mod.id}>{mod.title}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <button className="nav-btn" onClick={onStart} data-testid="btn-start-reviewer">
        Start Reviewing →
      </button>
    </div>
  );
}

export default App;
