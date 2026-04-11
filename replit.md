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
- **Features**:
  - Sticky top nav with subject tabs (GE 1, GE 4, NSTP 1, CC 101, MATH 1)
  - Collapsible sidebar organized by PRELIM / MIDTERM / FINALS / terms
  - Per-topic reviewer content with definitions, notes, examples, and tables
  - Learning objectives per topic
  - Built-in quiz mode with multiple-choice questions, scoring, and explanations
  - Dark mode toggle with localStorage persistence
  - Search/filter topics across the current subject
  - Mobile-responsive with slide-out sidebar
  - Previous/Next navigation between topics
- **Subjects covered**:
  - GE 1: Understanding the Self (Philosophical, Sociological, Physical, Digital, Political, Spiritual self)
  - GE 4: Purposive Communication (Communication models, types, academic writing)
  - NSTP 1: National Service Training Program (RA 9163, Filipino values)
  - CC 101: Introduction to Computing (Computer history, number systems, programming)
  - MATH 1: Mathematics in the Modern World (Patterns, Fibonacci, mathematical language)

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.
