# Product Requirements Document (PRD)

## 1. Product Overview
Vibelearn is a lightweight, full-stack learning application designed for users to consume educational content. It provides structured courses containing modules and video-based lessons (YouTube embeds). The app focuses on a seamless learning experience, tracking user progress to allow learners to pick up right where they left off.

## 2. Target Audience
Learners looking to consume structured video courses.

## 3. Implementation Scope & Features Table

This table strictly defines the boundaries of the project to prevent scope creep.

| Category | Key Feature | Ability / Description | Scope Status |
| :--- | :--- | :--- | :--- |
| **Auth** | Sign Up & Log In | Users authenticate using Clerk's pre-built UI components. | **IN SCOPE** |
| **Auth** | Session Management | Express API verifies Clerk JWTs for protected routes. | **IN SCOPE** |
| **Frontend** | Catalog Page (Public) | Displays a grid of all available courses (cover image, title, summary). | **IN SCOPE** |
| **Frontend** | Course Detail Page | Shows description, lists all modules/lessons, and a "Start/Resume" button. | **IN SCOPE** |
| **Frontend** | Lesson Page | Embeds YouTube video, shows text notes, sidebar for curriculum, and "Mark as Complete". | **IN SCOPE** |
| **Frontend** | My Learning Dashboard | Displays started courses with progress bars and quick links to resume. | **IN SCOPE** |
| **Backend** | Content APIs | Public endpoints to fetch courses, modules, and lessons from the database. | **IN SCOPE** |
| **Backend** | Progress APIs | Protected endpoints (`POST/GET /api/progress`) to save completed status and video timestamps. | **IN SCOPE** |
| **Database** | Supabase & Drizzle | Managed PostgreSQL schema mapping strictly to the features above. | **IN SCOPE** |
| **Data Seeding**| Database Seeding | Parse and seed data from `docs/seed.ndjson` and `docs/videos.json` into the database. | **IN SCOPE** |
| **Workflow** | AI Implementation | The AI assistant is explicitly responsible for implementing the above features (including the seeding script). | **IN SCOPE** |
| **Content** | Authoring Panel | A UI for creators to upload and manage courses. | **OUT OF SCOPE** (Seeded directly) |
| **Search** | AI Semantic Search | AI-powered or semantic search to find specific topics in videos. | **OUT OF SCOPE** |
| **Video** | Custom Video Player | A bespoke video player with custom controls. | **OUT OF SCOPE** (Use YouTube standard embed) |
| **Monetization**| Payments/Subscriptions| Paywalls, Stripe integration, or paid courses. | **OUT OF SCOPE** (All free) |

## 4. User Flows
1. **Onboarding:** User lands on the catalog -> Signs up via Clerk -> Redirected back to catalog.
2. **Learning:** User selects a course -> Clicks a lesson -> Video plays -> System automatically records progress -> User marks lesson as complete.
3. **Resuming:** User visits "My Learning" -> Clicks a course they started previously -> Taken directly to the uncompleted lesson and the specific timestamp.
