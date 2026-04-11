import { useState, useRef, useEffect } from "react";
import { Subject } from "../data/subjects";
import { Search, Moon, Sun, Menu, X, BookOpen } from "lucide-react";

interface TopNavProps {
  subjects: Subject[];
  activeSubjectId: string;
  onSubjectChange: (id: string) => void;
  darkMode: boolean;
  onToggleDark: () => void;
  onMenuToggle: () => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
}

export default function TopNav({
  subjects,
  activeSubjectId,
  onSubjectChange,
  darkMode,
  onToggleDark,
  onMenuToggle,
  searchQuery,
  onSearchChange,
}: TopNavProps) {
  const [searchOpen, setSearchOpen] = useState(false);
  const searchRef = useRef<HTMLInputElement>(null);
  const tabsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (searchOpen && searchRef.current) {
      searchRef.current.focus();
    }
  }, [searchOpen]);

  useEffect(() => {
    const tab = tabsRef.current?.querySelector("[data-active='true']");
    tab?.scrollIntoView({ inline: "nearest", behavior: "smooth" });
  }, [activeSubjectId]);

  return (
    <nav className="lu-topnav" style={{ backgroundColor: "#04AA6D" }}>
      {/* Logo */}
      <div className="flex items-center gap-2 px-3 shrink-0">
        <button
          className="md:hidden text-white p-1"
          onClick={onMenuToggle}
          data-testid="btn-menu-toggle"
          aria-label="Toggle sidebar"
        >
          <Menu size={20} />
        </button>
        <div className="flex items-center gap-1.5 text-white">
          <BookOpen size={20} />
          <span className="font-bold text-sm whitespace-nowrap hidden sm:block">LU Reviewer</span>
        </div>
      </div>

      {/* Subject Tabs */}
      {!searchOpen && (
        <div
          ref={tabsRef}
          className="flex items-center overflow-x-auto flex-1 mx-1"
          style={{ scrollbarWidth: "none" }}
        >
          {subjects.map(subject => (
            <button
              key={subject.id}
              data-active={subject.id === activeSubjectId}
              data-testid={`tab-subject-${subject.id}`}
              onClick={() => onSubjectChange(subject.id)}
              className="px-3 py-1 text-sm font-medium whitespace-nowrap transition-all shrink-0"
              style={{
                backgroundColor: subject.id === activeSubjectId ? "rgba(255,255,255,0.25)" : "transparent",
                color: "white",
                borderBottom: subject.id === activeSubjectId ? "3px solid white" : "3px solid transparent",
                lineHeight: "44px",
              }}
            >
              {subject.shortTitle}
            </button>
          ))}
        </div>
      )}

      {/* Search Bar (when open) */}
      {searchOpen && (
        <div className="flex-1 mx-2">
          <input
            ref={searchRef}
            type="search"
            placeholder="Search topics..."
            value={searchQuery}
            onChange={e => onSearchChange(e.target.value)}
            className="w-full px-3 py-1.5 rounded text-sm bg-white/20 text-white placeholder-white/70 border border-white/30 outline-none focus:bg-white/30"
            data-testid="input-search"
          />
        </div>
      )}

      {/* Right Actions */}
      <div className="flex items-center gap-1 px-2 shrink-0">
        <button
          onClick={() => { setSearchOpen(o => !o); if (searchOpen) onSearchChange(""); }}
          className="text-white p-1.5 rounded hover:bg-white/15 transition"
          data-testid="btn-search-toggle"
          aria-label="Search"
        >
          {searchOpen ? <X size={18} /> : <Search size={18} />}
        </button>
        <button
          onClick={onToggleDark}
          className="text-white p-1.5 rounded hover:bg-white/15 transition"
          data-testid="btn-dark-mode"
          aria-label="Toggle dark mode"
        >
          {darkMode ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </div>
    </nav>
  );
}
