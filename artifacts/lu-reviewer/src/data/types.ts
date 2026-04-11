export interface QuizQuestion {
  question: string;
  options: string[];
  answer: number;
  explanation: string;
}

export interface ContentSection {
  type: "text" | "definition" | "note" | "example" | "list" | "table" | "h2" | "h3";
  content: string;
  items?: string[];
  headers?: string[];
  rows?: string[][];
}

export interface TopicContent {
  heading: string;
  term: string;
  module: string;
  objectives: string[];
  sections: ContentSection[];
  quiz?: QuizQuestion[];
}

export interface Topic {
  id: string;
  title: string;
  content: TopicContent;
}

export interface Module {
  id: string;
  title: string;
  topics: Topic[];
}

export interface Term {
  id: string;
  label: string;
  modules: Module[];
}

export interface Subject {
  id: string;
  code: string;
  title: string;
  shortTitle: string;
  units: number;
  description: string;
  terms: Term[];
}
