# Backend System Design & Best Practices

This document outlines the architectural patterns, folder structure, and rules for the Node.js/Express backend. 

## 1. Architectural Pattern
The backend strictly follows a layered architecture to maintain a clean separation of concerns:
**Routes -> Controllers -> Services -> Repositories**

- **Routes:** Maps HTTP verbs and paths to the appropriate controller.
- **Controllers:** Handles HTTP request/response flow. Extracts parameters, validates input, calls the service layer, and returns the appropriate HTTP status code and JSON.
- **Services:** Contains all business logic (e.g., verifying user state, calculating progress). 
- **Repositories:** Responsible for all database interactions using Drizzle ORM. No SQL or ORM calls should exist outside of this layer.

## 2. Folder Structure
The AI must adhere to this folder structure when initializing and building the backend:

```text
backend/
├── src/
│   ├── config/          # Environment variables and global configs
│   ├── db/              # Drizzle ORM setup, schema definitions, and migrations
│   ├── middlewares/     # Express middlewares (Clerk Auth, Error Handling)
│   ├── routes/          # Express route definitions (e.g., course.routes.js)
│   ├── controllers/     # Route handlers (e.g., course.controller.js)
│   ├── services/        # Business logic (e.g., course.service.js)
│   ├── repositories/    # Database queries (e.g., course.repository.js)
│   └── index.js         # Application entry point
├── drizzle.config.js    # Drizzle configuration
└── .env.example         # Environment variable template
```

## 3. Core Rules & What NOT to Do
- **NO Business Logic in Controllers:** Controllers should only orchestrate. If a controller is longer than 20-30 lines, the logic should likely be moved to a Service.
- **NO Database Queries outside Repositories:** Do not call Drizzle directly inside a Controller or Service. Always inject or call a Repository method.
- **NO Bypassing Authentication:** Any route dealing with user progress MUST pass through the Clerk authentication middleware.
- **NO "God" Files:** Do not put all routes or all controllers into a single file. Split them by feature (e.g., `course`, `lesson`, `progress`).
- **NO Magic Strings:** Use enums or constants for repetitive string values.

## 4. Keeping Code Clean and Simple
- **Single Responsibility Principle:** Each function should do exactly one thing.
- **Error Handling:** Use a centralized error-handling middleware instead of scattering `try/catch` blocks that send manual 500 responses.
- **Consistent Data Structures:** Ensure strict and predictable structures for all API responses and database models.
- **Drizzle Best Practices:** Utilize Drizzle's relational query API where appropriate to keep data fetching clean and performant.
