# Frontend System Design & Best Practices

This document outlines the architectural patterns, folder structure, and rules for the React (Vite) frontend.

## 1. Architectural Pattern
The frontend follows a component-driven architecture with a clear separation between UI presentation, state management, and data fetching.

- **Pages:** Top-level components mapped to specific routes. They handle data fetching and pass data down to presentation components.
- **Components:** Dumb, reusable presentation components (e.g., Buttons, Cards, VideoPlayers).
- **Services (API Client):** Centralized functions for making HTTP requests to our Node.js backend.
- **Hooks:** Custom React hooks for abstracting complex state or side-effects.

## 2. Folder Structure
The AI must adhere to this folder structure when initializing and building the frontend:

```text
frontend/
├── src/
│   ├── assets/          # Static files (images, icons)
│   ├── components/      # Reusable UI components (e.g., ui/Button.jsx, course/CourseCard.jsx)
│   ├── pages/           # Route-level components (e.g., Catalog.jsx, Lesson.jsx)
│   ├── hooks/           # Custom React hooks (e.g., useProgress.js)
│   ├── services/        # API client functions (e.g., api/courses.js)
│   ├── utils/           # Helper functions (e.g., formatting dates, time)
│   ├── App.jsx          # Main application component & Router setup
│   └── main.jsx         # React entry point
├── tailwind.config.js   # Tailwind configuration
└── .env.example         # Environment variable template
```

## 3. Core Rules & What NOT to Do
- **NO Direct Database Access:** The frontend MUST NEVER connect directly to Supabase. All data reads and writes must go through the Node.js backend APIs.
- **NO Custom Auth Logic:** Do not build custom login forms or JWT management. Use Clerk's `<SignIn>`, `<SignUp>`, and `<SignedIn>` components strictly.
- **NO Inline API Calls in Components:** Do not write `fetch` or `axios` calls directly inside a UI component's `useEffect`. Extract data fetching to the `services/` directory and use a hook.
- **NO Massive Components:** Break down large pages into smaller, reusable components. If a component exceeds 150 lines, it's likely doing too much.
- **NO Hardcoded Credentials:** Never expose the Clerk Secret Key or Backend Database URLs in the frontend codebase.

## 4. Keeping Code Clean and Simple
- **Design System First:** Stick strictly to the global typography and color system established in Tailwind. Do not use random hex codes or arbitrary spacing classes (e.g., `w-[321px]`).
- **Mock First (Phase 2):** During the frontend-first phase, build the UI against hardcoded mock data structures before hooking up real APIs.
- **Declarative over Imperative:** Embrace React's declarative nature. Avoid direct DOM manipulation (no `document.getElementById`).
- **Responsive by Default:** Ensure all components are built mobile-first using Tailwind's `md:` and `lg:` modifiers to adapt to desktop.
