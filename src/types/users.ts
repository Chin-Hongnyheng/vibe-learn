import type { Course } from "@/types/courses"

// ─────────────────────────────────────────────────────────────────────────────
// User
// Primary key is the Clerk user ID (string). Synced from Clerk on first sign-in.
// ─────────────────────────────────────────────────────────────────────────────

export type User = {
  /** Clerk User ID — primary key, e.g. "user_2abc..." */
  id: string
  email: string
  firstName: string
  lastName: string
  /** Derived: `${firstName} ${lastName}` */
  fullName: string
  /** Clerk profile image or custom avatar URL */
  avatarUrl: string | null
  /** ISO 8601 timestamp */
  createdAt: string
  updatedAt: string
}

// ─────────────────────────────────────────────────────────────────────────────
// Lesson
// Smallest unit of content. Lives inside a Module, has one YouTube video.
// ─────────────────────────────────────────────────────────────────────────────

export type Lesson = {
  id: number
  moduleId: number
  title: string
  /** URL-friendly identifier, e.g. "intro-to-nextjs" */
  slug: string
  /** YouTube video ID only (not the full URL), e.g. "dQw4w9WgXcQ" */
  youtubeVideoId: string
  /** Markdown or plain-text lesson notes shown in the Notes tab */
  notes: string | null
  /** 1-based ordering within its module */
  position: number
}

// ─────────────────────────────────────────────────────────────────────────────
// Progress
// One record per (user × lesson). Written only through the Express backend.
// ─────────────────────────────────────────────────────────────────────────────

export type Progress = {
  /** Clerk User ID */
  userId: string
  lessonId: number
  courseId: number
  /** Whether the learner has marked this lesson complete */
  completed: boolean
  /**
   * How far into the video the learner last watched, in seconds.
   * Used to resume playback at the right position.
   */
  resumeTimestamp: number
  completedAt: string | null
  updatedAt: string
}

// ─────────────────────────────────────────────────────────────────────────────
// Enrollment
// Records which courses a user has enrolled in and when.
// ─────────────────────────────────────────────────────────────────────────────

export type Enrollment = {
  userId: string
  courseId: number
  enrolledAt: string
  lastAccessedAt: string | null
}

// ─────────────────────────────────────────────────────────────────────────────
// EnrolledCourse
// Convenience shape for the My Learning page.
// Combines an Enrollment, the full Course, and aggregated progress.
// ─────────────────────────────────────────────────────────────────────────────

export type EnrolledCourse = {
  enrollment: Enrollment
  course: Course
  /**
   * Completion percentage 0–100, derived from
   * (completed lessons / total lessons in the course) × 100.
   */
  progressPercent: number
  /** Title of the last lesson the learner accessed, or null if none yet */
  lastLessonTitle: string | null
  /** Lesson id the learner should resume from */
  resumeLessonId: number | null
}

// ─────────────────────────────────────────────────────────────────────────────
// Notification
// In-app notification for a user (bell icon in the nav).
// Presentational only — no backend of its own yet.
// ─────────────────────────────────────────────────────────────────────────────

export type Notification = {
  id: number
  userId: string
  title: string
  message: string
  read: boolean
  /** ISO 8601 timestamp */
  createdAt: string
}
