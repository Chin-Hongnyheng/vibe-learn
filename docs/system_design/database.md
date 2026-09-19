# Database Design

## 1. Entity Relationship Diagram

```mermaid
erDiagram
    USERS ||--o{ PROGRESS : tracks
    COURSES ||--o{ MODULES : contains
    MODULES ||--o{ LESSONS : contains
    LESSONS ||--o{ PROGRESS : has

    USERS {
        string id PK "Clerk User ID"
        string email
        timestamp created_at
    }

    COURSES {
        uuid id PK
        string title
        string slug
        string summary
        string cover_image_url
        timestamp created_at
    }

    MODULES {
        uuid id PK
        uuid course_id FK
        string title
        integer position "Ordering"
    }

    LESSONS {
        uuid id PK
        uuid module_id FK
        string title
        string slug
        string youtube_video_id
        text notes
        integer position "Ordering"
    }

    PROGRESS {
        uuid id PK
        string user_id FK
        uuid lesson_id FK
        boolean is_completed
        integer resume_timestamp "Seconds"
        timestamp updated_at
    }
```

## 2. Table Descriptions

- **users:** Stores basic user information synced from Clerk. The primary key `id` corresponds directly to the Clerk User ID.
- **courses:** The top-level learning entity containing metadata like title, description, and cover image.
- **modules:** Logical groupings of lessons within a course. Linked to courses via `course_id`.
- **lessons:** The actual learning content. Contains the YouTube video ID, text notes, and belongs to a specific module.
- **progress:** Tracks a specific user's state on a specific lesson. Stores whether the lesson is fully completed and the last watched second (`resume_timestamp`) for video resumption.
