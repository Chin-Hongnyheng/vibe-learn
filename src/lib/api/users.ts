import { supabase } from "@/lib/supabase"
import type { Lesson, Progress, Enrollment, EnrolledCourse, Notification } from "@/types/users"

// --------------------------------------------------------------------------
// Raw DB row shapes (snake_case from Supabase)
// --------------------------------------------------------------------------

type RawLesson = {
  id: number
  module_id: number
  title: string
  slug: string
  youtube_video_id: string
  notes: string | null
  position: number
}

// --------------------------------------------------------------------------
// Mapper: raw DB row → Lesson type
// --------------------------------------------------------------------------

function mapLesson(raw: RawLesson): Lesson {
  return {
    id: raw.id,
    moduleId: raw.module_id,
    title: raw.title,
    slug: raw.slug,
    youtubeVideoId: raw.youtube_video_id,
    notes: raw.notes,
    position: raw.position,
  }
}

// --------------------------------------------------------------------------
// Public API — LESSONS (anon read, catalog content)
// --------------------------------------------------------------------------

/** Fetch all lessons for a given module, ordered by position. */
export async function getLessonsByModule(moduleId: number): Promise<Lesson[]> {
  const { data, error } = await supabase
    .from("lessons")
    .select("id, module_id, title, slug, youtube_video_id, notes, position")
    .eq("module_id", moduleId)
    .order("position", { ascending: true })

  if (error) throw new Error(`getLessonsByModule(${moduleId}): ${error.message}`)
  return (data as RawLesson[]).map(mapLesson)
}

/** Fetch a single lesson by its numeric id. Returns null if not found. */
export async function getLessonById(id: number): Promise<Lesson | null> {
  const { data, error } = await supabase
    .from("lessons")
    .select("id, module_id, title, slug, youtube_video_id, notes, position")
    .eq("id", id)
    .maybeSingle()

  if (error) throw new Error(`getLessonById(${id}): ${error.message}`)
  if (!data) return null
  return mapLesson(data as RawLesson)
}

/** Fetch a single lesson by its slug. Returns null if not found. */
export async function getLessonBySlug(slug: string): Promise<Lesson | null> {
  const { data, error } = await supabase
    .from("lessons")
    .select("id, module_id, title, slug, youtube_video_id, notes, position")
    .eq("slug", slug)
    .maybeSingle()

  if (error) throw new Error(`getLessonBySlug(${slug}): ${error.message}`)
  if (!data) return null
  return mapLesson(data as RawLesson)
}

// --------------------------------------------------------------------------
// Auth-gated API — PROGRESS / ENROLLMENTS / NOTIFICATIONS
//
// These endpoints require the learner to be authenticated. They are NOT
// called directly from the Supabase JS client in the browser because:
//   • Writes (upsert progress, enroll) must go through the Express backend
//     to enforce the server-side boundary (AGENTS.md §4, §8).
//   • Reads also go through the backend so the JWT verification is
//     centralised and the service_role key never touches the browser.
//
// Wire these up to the backend REST endpoints once the Express server exists:
//   GET  /api/progress?lessonId=:id       → Progress | null
//   GET  /api/progress/course/:courseId   → Progress[]
//   POST /api/progress                    → upserts (completed, resumeTimestamp)
//   GET  /api/enrollments                 → EnrolledCourse[]
//   POST /api/enrollments                 → enroll in a course
//   GET  /api/notifications               → Notification[]
//   PATCH /api/notifications/:id/read     → mark read
// --------------------------------------------------------------------------

/**
 * @future Wire to GET /api/progress/course/:courseId on the Express backend.
 * Returns all progress records for the authenticated user in a given course.
 */
export async function getMyProgressForCourse(
  courseId: number, // eslint-disable-line @typescript-eslint/no-unused-vars
  authToken: string, // eslint-disable-line @typescript-eslint/no-unused-vars
): Promise<Progress[]> {
  throw new Error(
    "getMyProgressForCourse: not yet implemented — wire to the Express backend endpoint."
  )
}

/**
 * @future Wire to GET /api/enrollments on the Express backend.
 * Returns the authenticated user's enrolled courses with progress summaries.
 */
export async function getMyEnrollments(
  authToken: string, // eslint-disable-line @typescript-eslint/no-unused-vars
): Promise<EnrolledCourse[]> {
  throw new Error(
    "getMyEnrollments: not yet implemented — wire to the Express backend endpoint."
  )
}

/**
 * @future Wire to GET /api/notifications on the Express backend.
 * Returns the authenticated user's notifications, newest first.
 */
export async function getMyNotifications(
  authToken: string, // eslint-disable-line @typescript-eslint/no-unused-vars
): Promise<Notification[]> {
  throw new Error(
    "getMyNotifications: not yet implemented — wire to the Express backend endpoint."
  )
}

/**
 * @future Wire to POST /api/enrollments on the Express backend.
 * Enrols the authenticated user in the given course.
 */
export async function enrollInCourse(
  courseId: number, // eslint-disable-line @typescript-eslint/no-unused-vars
  authToken: string, // eslint-disable-line @typescript-eslint/no-unused-vars
): Promise<Enrollment> {
  throw new Error(
    "enrollInCourse: not yet implemented — wire to the Express backend endpoint."
  )
}

/**
 * @future Wire to POST /api/progress on the Express backend.
 * Upserts the learner's progress for a lesson (completed flag + resume timestamp).
 */
export async function upsertProgress(
  lessonId: number, // eslint-disable-line @typescript-eslint/no-unused-vars
  courseId: number, // eslint-disable-line @typescript-eslint/no-unused-vars
  completed: boolean, // eslint-disable-line @typescript-eslint/no-unused-vars
  resumeTimestamp: number, // eslint-disable-line @typescript-eslint/no-unused-vars
  authToken: string, // eslint-disable-line @typescript-eslint/no-unused-vars
): Promise<Progress> {
  throw new Error(
    "upsertProgress: not yet implemented — wire to the Express backend endpoint."
  )
}
