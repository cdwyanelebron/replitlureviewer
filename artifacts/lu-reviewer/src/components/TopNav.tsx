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
    <nav className="lu-topnav">
      {/* Logo */}
      <div className="lu-topnav-brand">
        <button
          className="lu-topnav-icon-button"
          onClick={onMenuToggle}
          data-testid="btn-menu-toggle"
          aria-label="Toggle sidebar"
        >
          <Menu size={25} />
        </button>
        <div className="lu-topnav-logo" aria-label="LU Reviewer">
          <BookOpen size={24} />
        </div>
      </div>

      {/* Subject Tabs */}
      {!searchOpen && (
        <div
          ref={tabsRef}
          className="lu-subject-tabs"
          style={{ scrollbarWidth: "none" }}
        >
          {subjects.map(subject => (
            <button
              key={subject.id}
              data-active={subject.id === activeSubjectId}
              data-testid={`tab-subject-${subject.id}`}
              onClick={() => onSubjectChange(subject.id)}
              className={`lu-subject-tab ${subject.id === activeSubjectId ? "active" : ""}`}
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
            className="w-full px-3 py-2 text-sm bg-white/15 text-white placeholder-white/70 border border-white/20 outline-none focus:bg-white/25"
            data-testid="input-search"
          />
        </div>
      )}

      {/* Right Actions */}
      <div className="lu-topnav-actions">
        <button
          onClick={() => { setSearchOpen(o => !o); if (searchOpen) onSearchChange(""); }}
          className="lu-topnav-icon-button"
          data-testid="btn-search-toggle"
          aria-label="Search"
        >
          {searchOpen ? <X size={24} /> : <Search size={24} />}
        </button>
        <button
          onClick={onToggleDark}
          className="lu-topnav-icon-button"
          data-testid="btn-dark-mode"
          aria-label="Toggle dark mode"
        >
          {darkMode ? <Sun size={24} /> : <Moon size={24} />}
        </button>
      </div>
    </nav>
  );
}
