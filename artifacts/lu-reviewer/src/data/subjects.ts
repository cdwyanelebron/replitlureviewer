export * from "./types";
import { Subject, Topic, Term, Module } from "./types";
import { GE_SUBJECTS } from "./subjects-ge";
import { CC_SUBJECTS } from "./subjects-cc";
import { OTHER_SUBJECTS } from "./subjects-other";
import { MIDTERM_FOCUS_SUBJECTS } from "./midterm-focus";

const MIDTERM_FOCUS_BY_ID = new Map(MIDTERM_FOCUS_SUBJECTS.map(subject => [subject.id, subject]));

export const SUBJECTS: Subject[] = [
  ...GE_SUBJECTS,
  ...CC_SUBJECTS,
  ...OTHER_SUBJECTS,
].map(subject => MIDTERM_FOCUS_BY_ID.get(subject.id) ?? subject);

export function getAllTopics(subject: Subject): Array<{ termId: string; termLabel: string; moduleId: string; moduleTitle: string; topic: Topic }> {
  const result: Array<{ termId: string; termLabel: string; moduleId: string; moduleTitle: string; topic: Topic }> = [];
  for (const term of subject.terms) {
    for (const mod of term.modules) {
      for (const topic of mod.topics) {
        result.push({ termId: term.id, termLabel: term.label, moduleId: mod.id, moduleTitle: mod.title, topic });
      }
    }
  }
  return result;
}

export function findTopic(subject: Subject, topicId: string): { topic: Topic; term: Term; mod: Module } | null {
  for (const term of subject.terms) {
    for (const mod of term.modules) {
      for (const topic of mod.topics) {
        if (topic.id === topicId) return { topic, term, mod };
      }
    }
  }
  return null;
}
