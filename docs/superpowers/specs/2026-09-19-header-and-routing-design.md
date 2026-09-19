# Header and Routing Specification

## Overview
This specification defines the implementation of the primary application header and routing structure for the Vibe Learn web application based on the UI design in `docs 2/design/home-page.png` and design system in `DESIGN.md`.

## Architecture & Layout

### Persistent Layout
- **Component**: `src/components/layout/root-layout.tsx`
- Contains the persistent `<NavigationSection />` (header) at the top and an `<Outlet />` wrapped in a `<main className="min-h-[calc(100vh-72px)] bg-neutral-50">` container for child pages.

### Routing Configuration
- Implemented with `react-router-dom` in `src/App.tsx` (using `BrowserRouter`, `Routes`, and `Route`).
- **Routes**:
  1. `/` - `HomePage` (Index page displaying course overview / hero preview)
  2. `/courses` - `CoursesPage` (List of all available courses)
  3. `/course` - Redirect to `/courses` (`<Navigate to="/courses" replace />`)
  4. `/courses/:id` - `CourseDetailPage` (Course detail view with dynamic ID parameter)
  5. `/course/:id` - Dynamic route handling or redirect to `/courses/:id`
  6. `/my-learning` - `MyLearningPage` (User's learning progress and enrolled courses)
  7. `*` - `NotFoundPage` (404 page with link back to `/`)

## Component Specifications

### Header Navigation (`src/sections/navigationsection.tsx`)
- **Dimensions & Positioning**:
  - Height: `72px` (`h-[72px]`)
  - Position: Sticky top (`sticky top-0 z-50`)
  - Surface: `backdrop-blur-md bg-white/90 border-b border-neutral-200`
- **Left - Brand Logo**:
  - Logo icon: Vibe Learn dual-leaf SVG in brand green (`#10B981`)
  - Typography: "Vibe Learn" (`font-bold text-xl text-neutral-900 tracking-tight font-sans`)
  - Link target: `/`
- **Center - Navigation Links**:
  - "Courses":
    - Target: `/courses`
    - Active condition: Current pathname starts with `/course` or `/courses`
  - "My Learning":
    - Target: `/my-learning`
    - Active condition: Current pathname starts with `/my-learning`
  - Visual styling:
    - Active: `text-neutral-900 font-semibold` with a 2px high `#10B981` underline bar positioned at the bottom edge of the header.
    - Inactive: `text-neutral-500 hover:text-neutral-900 font-medium transition-colors`.
- **Right - User Actions**:
  - Notification Bell:
    - Button with Lucide `Bell` outline icon (`size-5 text-neutral-700 hover:text-neutral-900`).
    - Emerald notification dot badge (`w-2 h-2 bg-primary-500 rounded-full absolute top-1 right-1`).
  - User Avatar:
    - Circular avatar (`w-10 h-10 rounded-full border border-neutral-200 overflow-hidden`).
    - User image matching design with fallback initials.
  - Mobile Menu:
    - Mobile toggle button (`md:hidden`) with Lucide `Menu` / `X`.
    - Collapsible dropdown drawer with navigation links and active states.

### Page Shells
- `HomePage` (`src/pages/home-page.tsx`): Overview banner and link to courses.
- `CoursesPage` (`src/pages/courses-page.tsx`): Grid of courses utilizing `MOCK_COURSES` and `CourseCard` linking to `/courses/:id`.
- `CourseDetailPage` (`src/pages/course-detail-page.tsx`): Displays selected course title, ID from route params, and back navigation.
- `MyLearningPage` (`src/pages/my-learning-page.tsx`): Displays enrolled course progress cards.
- `NotFoundPage` (`src/pages/not-found-page.tsx`): Friendly 404 message and return button.

## Verification & Testing
- Run `npm run typecheck` to verify TypeScript compliance.
- Run `npm run build` to verify production build passes with Vite and React Router.
- Verify active navigation state changes when switching between `/`, `/courses`, `/courses/:id`, and `/my-learning`.
