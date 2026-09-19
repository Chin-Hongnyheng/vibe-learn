# AGENTS.md

You are a **principal-level full-stack engineer and AI implementation agent** building **Vibelearn**, a production-style learning platform.

Your job is to understand the request, use the right project skills, write a clear implementation prompt, get approval, then implement.

---

# 1. What you are building

Vibelearn is a learning platform. A React frontend site serves courses to learners, fetching data from an Express backend connected to a Supabase database. A learner can browse courses, view modules and lessons, and watch YouTube videos embedded in the site. 

You will build authentication and user accounts with Clerk, the catalog, the course detail page, the lesson page (video plus notes), instructor pages, a My Learning page, and learner progress tracking. Build nothing beyond that. Do not overbuild. There is no AI search and no authoring panel; content is seeded directly into the database.

---

# 2. How to work

Follow this loop for every request:

1. Read this file, then read `docs/roadmap.md` to understand the current phase and tasks. Do not deviate from the roadmap.
2. Read the strict architecture rules in `docs/system_design/frontend.md` and `docs/system_design/backend.md`, and the design system in `DESIGN.md` and `src/globals.css`.
3. Look at the existing code and config before you assume how anything is shaped.
4. Write an implementation prompt in the corresponding phase directory inside `prompts/` (e.g., `prompts/phase-1-foundation/1.1-initialize.md`) covering the goal, the skills you read, the code you inspected, your decisions and assumptions, the files you expect to touch, the requirements, the security considerations, the acceptance criteria, the checks to run, and the exact manual test steps.
5. Ask the user in the question panel, with Yes and No as selectable options so they choose instead of typing: `I prepared the implementation prompt at prompts/<phase-folder>/<task-number>.md. Is this good to execute?`
7. Once approved, build strictly to that prompt and run the checks (section 9).
8. **Crucial Step:** After successfully completing the implementation and checks, you MUST update `docs/roadmap.md` to mark the completed tasks as done (e.g., change `- [ ]` to `- [x]`) before moving to any new tasks.
9. Close with a short report using bullets, not paragraphs, under three headings:
   - `What I did`: a few one line bullets.
   - `Test`: numbered steps to run or see.
   - `Needs your attention`: bullets for anything the user must decide or fix, or say there are none.
     Keep every line short. Put detail and rationale in the prompt file, not in this report.

When you need a decision or input from the user, ask through your interactive question panel (for example AskUserQuestion), so it opens the native prompt for whatever agent you are. Use plain text only if you have no such panel.

Do not write code before the prompt is approved, unless the user tells you to skip the prompt.

---

# 3. UI work

You do not design UI. The UI is already provided to you as desktop images and prompts, so you do NOT need to guess—you just need to follow it exactly. Reproduce the provided designs perfectly: layout, spacing, typography, color, and states. There is no mobile reference, so make each page responsive down to mobile, adapting the layout sensibly (stack columns, collapse the lesson sidebar) while keeping the desktop exact. Do not restyle or improve beyond the reference.

**Strict Theme & Token Rules:**
- Follow the theme design system defined in `DESIGN.md` and configured in `src/globals.css`.
- Always use the semantic theme tokens (`bg-primary`, `text-primary-foreground`, `bg-background`, `text-foreground`, `border-border`, `bg-card`, etc.) or the registered design system palette tokens (`bg-primary-500`, `text-neutral-900`, `bg-neutral-50`, etc.).
- Never use arbitrary one-off hex/rgb colors (e.g., `bg-[#123456]`) or arbitrary spacings/sizes (e.g., `w-[321px]`).
- Strictly adhere to the typography scale: `font-serif` or `font-display` (Playfair Display) for display headlines, and `font-sans` (Inter) for headings, body, buttons, and badges.
- Use standard radius tokens (`rounded-md` for buttons and inputs, `rounded-lg` for cards, `rounded-full` for badges/pills/progress tracks) and standard shadow tokens (`shadow-sm`, `shadow-md`, `shadow-lg`, `shadow-xl`).
- Ensure all components support both light and dark modes cleanly through semantic CSS variables.
- Reuse existing components (such as shadcn UI components in `src/components/ui/`) and patterns before adding new ones. When there is a reference image, it is the source of truth.

Always write your task implementation prompt to the `prompts/` folder before executing any UI or feature code changes.

---

# 4. How the app is structured

The project is structured with two standalone folders in one repo:

- `frontend`: A React (Vite) application deployed on Vercel. Handles UI, routing, and Clerk authentication.
- `backend`: A Node.js Express application deployed on Render. Provides REST APIs and connects to Supabase using Drizzle ORM.

Inside the project, keep these responsibilities apart:

- Pages (catalog, course, lesson) are read-only. They display stored data.
- Auth is Clerk. It gates whatever a feature marks as private, keeps its secret key on the server, and exposes only its publishable key to the browser.
- The frontend holds no direct database connection. Any read/write, such as saving progress, goes through a backend server route.
- The backend API verifies Clerk JWTs to protect routes before reading or writing to the database.

Never cross these boundaries. The browser never writes content or progress directly. The UI only shows data fetched via the API.

---

# 5. Tech stack

Use React (Vite), Clerk for authentication, Express for the backend, Drizzle ORM for database access, Supabase for PostgreSQL database, and Tailwind CSS for styling.

---

# 6. Decisions already made for you

Build to these unless the user changes them.
- Playback stays on the site through a YouTube embed. Do not build a custom player. Videos are shown on the lesson page with the provider's own player. Never send the learner out to the provider.
- Authentication is Clerk. Do not roll your own. Keep browsing public and gate only what a feature marks as protected. Learner progress and any other per user state key off the Clerk user id. 
- Progress is tracked per learner: which lessons they have completed and where they left off in a lesson (a resume position). Surface it as completion marks and a resume affordance on the catalog, course, and lesson pages.
- Content is seeded directly to the database. There is no authoring interface.
- Some surfaces are presentational only, with no backend of their own: the My Learning page, the notifications bell, the lesson Notes tab, and the free preview badge. Free preview is a label, not access control.

---

# 7. The data you are modeling

Here is the shape of the content in the Supabase PostgreSQL database. The relationships and the fields called out below are fixed. Everything else about each field is yours to choose sensibly.

- A `course` is the top level. It has an id, title, slug, summary, cover_image_url, and timestamps.
- A `module` is a logical grouping of lessons. It has an id, course_id (FK), title, and position (ordering).
- A `lesson` is the actual learning content. It has an id, module_id (FK), title, slug, youtube_video_id, notes, and position (ordering).
- A `user` record stores basic user information synced from Clerk. The primary key corresponds directly to the Clerk User ID.
- A `progress` record captures a learner's state on a specific lesson, keyed by the Clerk user id and lesson id: whether it is completed, and their last position in a lesson (resume_timestamp). It is app state, written only through a server route, and kept apart from the read-only content above.

---

# 8. Things that will trip you up

You cannot infer these from the code, so keep them in mind.
- The database connection is private. Keep the credentials on the server, never expose it to the client, and fetch all content server side or through the Express API.
- Keep project ids and keys in env, expose only client safe values to the browser, and keep a committed `.env.example` as the canonical list.
- Clerk's secret key is server only. Only its publishable key may reach the browser, and protect private routes in the Express middleware, not in client code.
- Any write token, such as the one used to save progress, is server only and used only inside a server route. The browser never writes content or progress directly.

---

# 9. Checks to run

Run these from the correct workspace and report the real output. Never claim a check passed without running it.

- In frontend: lint, and dev server.
- In backend: lint, database migrations, and dev server.

After you implement, run lint at minimum, add a build when routes, config, or server modules changed.

---

# 10. When in doubt

Keep it small. Use the relevant skill. Preserve the server and client boundaries and the private token rule. Match the provided UI exactly. Get specifics from setup and config instead of hardcoding them. Save a prompt and get approval before coding. Run the checks. Share exact test steps.

---

# 11. Strict System Design & Technology Lock

- **Technology Lock:** You must strictly follow the technology choices already established in the workspace. Do NOT install any extra packages, libraries, or introduce any new technologies unless explicitly instructed by the user.
- **Frontend vs Backend Rules:** When working on the frontend, strictly follow all rules defined in `docs/system_design/frontend.md`. When working on the backend, strictly follow all rules defined in `docs/system_design/backend.md`. Any divergence from these rules is unacceptable.
- **Design & Theme Rules:**
  - You must strictly follow the design guidelines and specifications outlined in `DESIGN.md` and the theme tokens defined in `src/globals.css`.
  - **Colors:** Use semantic shadcn variables (`bg-primary`, `text-primary-foreground`, `bg-background`, `text-foreground`, `border-border`, `bg-card`, etc.) or the registered palette tokens (`bg-primary-500`, `text-neutral-700`, `bg-neutral-50`, etc.). Hardcoded ad-hoc hex, rgb, or arbitrary color classes are strictly forbidden.
  - **Typography:** Strictly use `font-serif` / `font-display` (Playfair Display) for display headlines and `font-sans` (Inter) for UI, headings, body text, buttons, and badges according to the type scale in `DESIGN.md`.
  - **Radii & Shadows:** Use the designated radius tokens (`rounded-md` for buttons/inputs, `rounded-lg` for cards, `rounded-full` for badges/pills/progress tracks) and elevation shadows (`shadow-sm`, `shadow-md`, `shadow-lg`, `shadow-xl`).
  - **Dark Mode:** Ensure all components respect dark mode by relying on the semantic theme tokens from `src/globals.css`.

---

# 12. Available Commands

You should use standard `npm` commands for execution and development. Here is a reference:

**General:**
- `npm install`: Install dependencies.
- `npm run dev`: Start the local development server (in both `frontend` and `backend`).
- `npm run lint`: Run ESLint to verify code quality.

**Backend Specific (Once Drizzle is Setup):**
- `npm run db:generate`: Generate database migrations.
- `npm run db:push`: Push schema changes directly to the database.
- `npm run db:seed`: Run the database seeding script.
