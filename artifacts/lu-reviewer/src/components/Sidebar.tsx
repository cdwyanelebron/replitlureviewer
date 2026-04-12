import { useState } from "react";
import { Subject } from "../data/subjects";
import { ChevronDown, ChevronRight } from "lucide-react";

interface SidebarProps {
  subject: Subject;
  activeTopicId: string | null;
  onTopicSelect: (id: string) => void;
  searchQuery: string;
}

export default function Sidebar({ subject, activeTopicId, onTopicSelect, searchQuery }: SidebarProps) {
  const [expandedTerms, setExpandedTerms] = useState<Set<string>>(() => {
    const s = new Set<string>();
    subject.terms.forEach(t => s.add(t.id));
    return s;
  });
  const [expandedModules, setExpandedModules] = useState<Set<string>>(() => {
    const s = new Set<string>();
    subject.terms.forEach(t => t.modules.forEach(m => s.add(m.id)));
    return s;
  });

  const toggleTerm = (id: string) => {
    setExpandedTerms(prev => {
      const n = new Set(prev);
      n.has(id) ? n.delete(id) : n.add(id);
      return n;
    });
  };

  const toggleModule = (id: string) => {
    setExpandedModules(prev => {
      const n = new Set(prev);
      n.has(id) ? n.delete(id) : n.add(id);
      return n;
    });
  };

  const q = searchQuery.toLowerCase().trim();

  const totalTopics = subject.terms.reduce((a, t) => a + t.modules.reduce((b, m) => b + m.topics.length, 0), 0);
  const completedCount = 0; 

  return (
    <div className="pb-8">
      {/* Subject header */}
      <div className="px-4 py-3 border-b border-sidebar-border">
        <div className="text-xs font-bold text-muted-foreground uppercase tracking-wide mb-0.5">{subject.code}</div>
        <div className="text-sm font-semibold text-sidebar-foreground leading-tight">{subject.title}</div>
        <div className="mt-2">
          <div className="flex justify-between text-xs text-muted-foreground mb-1">
            <span>Progress</span>
            <span>{completedCount}/{totalTopics}</span>
          </div>
          <div className="progress-bar-outer">
            <div className="progress-bar-inner" style={{ width: totalTopics > 0 ? `${(completedCount / totalTopics) * 100}%` : "0%" }} />
          </div>
        </div>
      </div>

      {/* Terms and modules */}
      {subject.terms.map(term => {
        const filteredModules = q
          ? term.modules.map(mod => ({
              ...mod,
              topics: mod.topics.filter(t => t.title.toLowerCase().includes(q)),
            })).filter(mod => mod.topics.length > 0)
          : term.modules;

        if (filteredModules.length === 0) return null;

        const isTermExpanded = expandedTerms.has(term.id);

        return (
          <div key={term.id}>
            <button
              className={`sidebar-term-header sidebar-term-header--${term.id} w-full text-left`}
              onClick={() => toggleTerm(term.id)}
              data-testid={`sidebar-term-${term.id}`}
            >
              <span>{term.label}</span>
              {isTermExpanded ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
            </button>

            {(isTermExpanded || q) && filteredModules.map(mod => {
              const isModExpanded = expandedModules.has(mod.id);

              return (
                <div key={mod.id}>
                  <button
                    className="sidebar-module-header w-full text-left"
                    onClick={() => toggleModule(mod.id)}
                    data-testid={`sidebar-module-${mod.id}`}
                  >
                    <span className="text-xs leading-tight">{mod.title}</span>
                    {isModExpanded ? <ChevronDown size={12} /> : <ChevronRight size={12} />}
                  </button>

                  {(isModExpanded || q) && mod.topics.map(topic => (
                    <button
                      key={topic.id}
                      className={`sidebar-topic w-full text-left ${topic.id === activeTopicId ? "active" : ""}`}
                      onClick={() => onTopicSelect(topic.id)}
                      data-testid={`sidebar-topic-${topic.id}`}
                    >
                      {q ? (
                        <HighlightedText text={topic.title} query={q} />
                      ) : (
                        topic.title
                      )}
                    </button>
                  ))}
                </div>
              );
            })}
          </div>
        );
      })}

      {q && subject.terms.every(t => t.modules.every(m => !m.topics.some(tp => tp.title.toLowerCase().includes(q)))) && (
        <div className="px-4 py-6 text-center text-sm text-muted-foreground">
          No topics found for "{searchQuery}"
        </div>
      )}
    </div>
  );
}

function HighlightedText({ text, query }: { text: string; query: string }) {
  const idx = text.toLowerCase().indexOf(query);
  if (idx === -1) return <span>{text}</span>;
  return (
    <span>
      {text.slice(0, idx)}
      <mark className="bg-yellow-200 dark:bg-yellow-800 rounded px-0.5">{text.slice(idx, idx + query.length)}</mark>
      {text.slice(idx + query.length)}
    </span>
  );
}
