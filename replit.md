# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Artifacts

### LU Reviewer — BSIT 1st Year (`artifacts/lu-reviewer`)
- **Type**: React + Vite (frontend-only, no backend)
- **Preview Path**: `/`
- **Purpose**: W3Schools-style academic reviewer website for 1st-year BSIT students at Laguna University (Philippines)
- **Data files**:
  - `src/data/types.ts` — Shared TypeScript interfaces
  - `src/data/subjects-ge.ts` — GE 1–8 (General Education subjects)
  - `src/data/subjects-cc.ts` — CC 1100, CC 1101, CC 1202 (Intermediate C Programming), IT 1201 (Discrete Math)
  - `src/data/subjects-other.ts` — MST 01, MST 02, NSTP 1, NSTP 2, PE 1, PE 2
  - `src/data/midterm-focus.ts` — Expanded attached-module midterm focus overrides for GE 6, GE 7, GE 8, MST 02, NSTP 2, and PE 2, including detailed subtopic quizzes and comprehensive exams
  - `src/data/subjects.ts` — Main index combining all subject arrays + helper functions

- **Complete Subjects Covered**:
  | Code | Title |
  |------|-------|
  | GE 1 | Understanding the Self |
  | GE 2 | Readings in Philippine History |
  | GE 3 | The Contemporary World |
  | GE 4 | Purposive Communication |
  | GE 5 | Arts |
  | GE 6 | Art Appreciation |
  | GE 7 | Science, Technology & Society |
  | GE 8 | Ethics |
  | CC 1100 | Introduction to Computing |
  | CC 1101 | Computer Programming 1 |
  | CC 1102 | Computer Programming 2 |
  | IT 1201 | IT Infrastructure and Networking |
  | MST 01 | Mathematics in the Modern World |
  | MST 02 | Statistics and Probability |
  | NSTP 1 | National Service Training Program 1 |
  | NSTP 2 | National Service Training Program 2 |
  | PE 1 | Physical Education 1 (Movement Enhancement) |
  | PE 2 | Physical Education 2 (Rhythmic Activities) |

- **Features**:
  - Sticky top nav with all 18 subject tabs
  - Collapsible sidebar: PRELIM / MIDTERM / FINALS → Module → Topic
  - Rich content: definitions, notes, examples, tables, bullet lists
  - Learning objectives per topic
  - Built-in quiz mode with multiple-choice, scoring, and explanations
  - Dark mode toggle (localStorage persistent)
  - Search/filter topics
  - Previous/Next topic navigation
  - Mobile-responsive with slide-out sidebar

- **Current Midterm Focus Update (April 2026)**:
  - GE 5: updated coverage follows sir's corrected format: Module 1–2 for Prelim, Module 3–4 for Midterm. Priority source is GE5NOTES / sir's verbal explanations; PPT/modules provide main topics; the course guide supports objectives and module outcomes. Added detailed timelines, source priority notes, deeper economic globalization, global politics, and UN governance review tables.
  - GE 6: attached Art Appreciation midterm content (Modules 4–5) added as a focused midterm override with subject/form/content lessons, artists vs. artisans, art market/careers, complete National Artists review tables, complete GAMABA review table, lesson quizzes, and a 50-item comprehensive exam.
  - GE 7, GE 8, MST 02, NSTP 2, PE 2: attached module midterm content with lesson quizzes and comprehensive exams (in midterm-focus.ts).
  - CC 1202 (Intermediate C Programming): MIDTERM ONLY. Modules 5-7 restructured with lesson-numbered topics from PDF TOC. Module 5: 9 lessons + Assessment Task. Module 6: 2 lessons + Assessment Task. Module 7: Lessons 1-4 + Lessons 5.1-5.6 string library functions + Assessment Task. W3Schools-style chunked C code examples.
  - IT 1201 (Discrete Mathematics): MIDTERM ONLY. Modules 5-7 with lesson-numbered topics. Module 5 Counting (L1-2 + Assessment Task), Module 6 Pigeonhole (L1-2 + Assessment Task), Module 7 Permutations/Combinations (L1-3 + Assessment Task).
  - All Assessment Task topics have 10-20 comprehensive exam questions per module.
  - CC1202 code compiler UI: primary run path now uses the API server's real GCC C compiler endpoint, with browser JSCPP retained only as fallback. The UI focuses on the editable example code, uses compact Program Input only for `scanf`/stdin examples, shows compiler/runtime output below the editor, supports local browser save, whole-file `.c` download, and loading saved `.c/.h/.cpp/.txt` files back into the editor. Added a CC1202 Compiler Practice Guide topic before Module 5 lessons.

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.
