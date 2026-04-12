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
  - `src/data/subjects-cc.ts` — CC 1100, CC 1101, CC 1102, IT 1201
  - `src/data/subjects-other.ts` — MST 01, MST 02, NSTP 1, NSTP 2, PE 1, PE 2
  - `src/data/midterm-focus.ts` — Expanded attached-module midterm focus overrides for GE 7, MST 02, and PE 2, including detailed subtopic quizzes and comprehensive exams
  - `src/data/subjects.ts` — Main index combining all subject arrays + helper functions

- **Complete Subjects Covered**:
  | Code | Title |
  |------|-------|
  | GE 1 | Understanding the Self |
  | GE 2 | Readings in Philippine History |
  | GE 3 | The Contemporary World |
  | GE 4 | Purposive Communication |
  | GE 5 | Art Appreciation |
  | GE 6 | Science, Technology, and Society |
  | GE 7 | Ethics |
  | GE 8 | Filipino sa Piling Larang (Tech/IT) |
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
  - GE 7 now uses the attached Science, Technology and Society midterm modules: Environmental Awareness, Energy Crisis, Information Age, and Gene.
  - MST 02 now uses the attached Living in the IT Era midterm modules: Networks and Types, Data Security/Data Privacy, and Political/Economic/Societal Impacts of ICT.
  - PE 2 now uses the attached PATH-FIT 2 midterm modules: Health Appraisal, HIIT, Core Exercises, and Lower Body Exercises.
  - Each covered subtopic has a quiz, and each focused subject has a final “Midterm Comprehensive Exam” topic at the end of the sidebar with 50 questions.
  - Each focused lesson includes module-objective exam focus notes and additional lesson-level quiz items to keep review questions aligned with the attached module coverage.
  - Top navigation uses a W3Schools-like dark header in both light and dark modes, with a green rectangular active subject tab and white underline indicators.

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.
