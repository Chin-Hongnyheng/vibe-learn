# Vibelearn Implementation Roadmap

This roadmap defines the strict order of implementation for the Vibelearn project. 

**AI INSTRUCTION:** When implementing this project, you must follow this roadmap sequentially. Do not skip phases or combine tasks unless explicitly instructed by the user. Before writing code for any phase, create the implementation prompt in `prompts/` and get user approval as per `AGENTS.md`.

---

## Phase 1: Foundation (Repo Setup)
**Goal:** Initialize the monorepo structure and establish the core technology stack.

- [ ] 1.1: Initialize `frontend` folder with Vite (React, JavaScript).
- [ ] 1.2: Initialize `backend` folder with Node.js (Express, JavaScript).
- [ ] 1.3: Setup TailwindCSS in the `frontend`.
- [ ] 1.4: Configure ESLint and Prettier across both workspaces.
- [ ] 1.5: Create `.env.example` in both `frontend` and `backend` (stubs for Clerk, Supabase, API URLs).
- [ ] 1.6: Verify both development servers start successfully (`npm run dev`).
- [ ] 1.7: **CHECKPOINT:** Get user approval before moving to the frontend.

## Phase 2: Frontend First (UI & Layouts)
**Goal:** Build the complete UI using mock data before touching the backend.

- [ ] 2.1: Draft and finalize `docs/system_design/DESIGN.md` to establish UI consistency guidelines.
- [x] 2.2: Implement the global design system (typography, colors) in Tailwind.
- [x] 2.3: Integrate Clerk React SDK into the `frontend` for Sign Up / Log In UI.
  - [x] Custom Clerk UI and appearance styling for Sign In and Sign Up pages aligned with Vibe Learn theme.
- [x] 2.4: Protect specific frontend routes (e.g., `/my-learning`) using Clerk components.
- [x] 2.5: Build the Public Catalog Page (using mock course data).
  - [x] Implement the reference hero with responsive layout, learning illustration, and Explore Courses anchor.
  - [x] Generate custom course images for all 10 courses based on their content.
- [x] 2.6: Build the Course Detail Page (using mock module/lesson data).
- [x] 2.7: Build the Lesson Page UI (YouTube embed, curriculum sidebar, text notes).
- [x] 2.8: Build the "My Learning" Dashboard (`src/pages/my-learning-page.tsx`).
- [x] 2.9: Ensure mobile responsiveness across all pages.
- [x] 2.10: **CHECKPOINT:** Perform a full UI audit against the provided reference images and verify auth flows.

## Phase 3: Backend & Database
**Goal:** Create the database schema, seed data, and expose the APIs.

- [x] 3.1: Setup Supabase connection using credentials in `.env` (`src/lib/supabase.ts`).
- [x] 3.2: Design and define PostgreSQL schema (`users`, `courses`, `modules`, `lessons`, `progress`).
- [x] 3.3: Generate initial database migration script (`supabase/migrations/01_initial_schema.sql`).
- [x] 3.4: Write and execute seeding script (`scripts/seed-supabase.js` and `supabase/seed.sql`) parsing `docs/seed.ndjson` and `docs/videos.json`.
- [x] 3.5: Create read-only CRUD services (`courseService.fetchCourses`, `fetchCourseBySlug`, `fetchLessonBySlug`).
- [x] 3.6: Create progress tracking CRUD services (`progressService.fetchUserProgress`, `upsertProgress`, `markLessonComplete`).
- [x] 3.7: **CHECKPOINT:** Verify Supabase PostgREST client connection, schema, and CRUD services.

## Phase 4: Integration (Auth & Data Hookup)
**Goal:** Secure the application and connect the frontend to the real backend APIs.

- [x] 4.1: Setup Clerk authentication & user sync provider (`UserSyncProvider`).
- [x] 4.2: Swap frontend mock data with real data calls via `courseService` across catalog, course detail, and lesson pages.
- [x] 4.3: Integrate progress tracking: periodically save video timestamps to `progressService` and implement interactive "Mark as Complete".
- [x] 4.4: **CHECKPOINT:** End-to-end testing: User can log in, watch a video, leave, and resume from the saved timestamp.

## Phase 5: Deployment
**Goal:** Deploy the application to production.

- [x] 5.1: Run linting and typecheck on the application.
- [x] 5.2: Prepare deployment configurations for Vercel (`vercel.json`).
- [ ] 5.3: Prepare deployment configurations for Render (Backend).
- [ ] 5.4: Deploy and verify production environment variables.
- [ ] 5.5: **CHECKPOINT:** Project is live and fully functional.
