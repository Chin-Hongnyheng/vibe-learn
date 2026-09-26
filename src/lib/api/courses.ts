import { supabase } from "@/lib/supabase"
import type { Course, CourseModule, LearningOutcome } from "@/types/courses"

// --------------------------------------------------------------------------
// Raw DB row shapes (snake_case from Supabase)
// --------------------------------------------------------------------------

type RawInstructor = {
  id: number
  name: string
  avatar: string
  bio: string | null
}

type RawModule = {
  id: number
  course_id: number
  title: string
  description: string | null
  duration: string | null
  position: number
}

type RawCourse = {
  id: number
  title: string
  description: string
  category: string
  tag: string
  img_url: string
  level: "Beginner" | "Intermediate" | "Advanced"
  duration_minutes: number
  rating: number
  reviews: number
  enrolled: number
  price: number
  is_free: boolean
  is_featured: boolean
  language: string
  learning_outcomes: LearningOutcome[] | null
  created_at: string
  instructors: RawInstructor | null
  modules: RawModule[]
}

// --------------------------------------------------------------------------
// Mapper: raw DB row → Course type
// --------------------------------------------------------------------------

function mapCourse(raw: RawCourse): Course {
  const totalMinutes = raw.duration_minutes
  const h = Math.floor(totalMinutes / 60)
  const m = totalMinutes % 60
  const durationFormatted = h && m ? `${h}h ${m}m` : h ? `${h}h` : `${m}m`

  const sortedModules = [...raw.modules].sort((a, b) => a.position - b.position)
  const modules: (string | CourseModule)[] = sortedModules.map((mod) => ({
    id: mod.id,
    title: mod.title,
    description: mod.description ?? undefined,
    duration: mod.duration ?? undefined,
  }))

  return {
    id: raw.id,
    title: raw.title,
    description: raw.description,
    category: raw.category,
    tag: raw.tag,
    imgUrl: raw.img_url,
    level: raw.level,
    duration: raw.duration_minutes,
    durationFormatted,
    studentsFormatted:
      raw.enrolled >= 1000
        ? `${(raw.enrolled / 1000).toFixed(1)}k students`
        : `${raw.enrolled} students`,
    rating: raw.rating,
    reviews: raw.reviews,
    enrolled: raw.enrolled,
    price: raw.price,
    isFree: raw.is_free,
    isFeatured: raw.is_featured,
    language: raw.language,
    learningOutcomes: raw.learning_outcomes ?? undefined,
    modules,
    instructor: {
      name: raw.instructors?.name ?? "Unknown",
      avatar: raw.instructors?.avatar ?? "",
      bio: raw.instructors?.bio ?? undefined,
    },
    createdAt: raw.created_at,
  }
}

// --------------------------------------------------------------------------
// Supabase select fragment (reused across queries)
// --------------------------------------------------------------------------

const COURSE_SELECT = `
  id, title, description, category, tag, img_url, level, duration_minutes,
  rating, reviews, enrolled, price, is_free, is_featured, language,
  learning_outcomes, created_at,
  instructors ( id, name, avatar, bio ),
  modules ( id, course_id, title, description, duration, position )
` as const

// --------------------------------------------------------------------------
// Public API
// --------------------------------------------------------------------------

/** Fetch all courses, ordered by creation date. */
export async function getCourses(): Promise<Course[]> {
  const { data, error } = await supabase
    .from("courses")
    .select(COURSE_SELECT)
    .order("created_at", { ascending: true })

  if (error) throw new Error(`getCourses: ${error.message}`)
  return (data as unknown as RawCourse[]).map(mapCourse)
}

/** Fetch a single course by its numeric id. Returns null if not found. */
export async function getCourseById(id: number): Promise<Course | null> {
  const { data, error } = await supabase
    .from("courses")
    .select(COURSE_SELECT)
    .eq("id", id)
    .maybeSingle()

  if (error) throw new Error(`getCourseById(${id}): ${error.message}`)
  if (!data) return null
  return mapCourse(data as unknown as RawCourse)
}

/** Fetch only featured courses (is_featured = true). */
export async function getFeaturedCourses(limit = 3): Promise<Course[]> {
  const { data, error } = await supabase
    .from("courses")
    .select(COURSE_SELECT)
    .eq("is_featured", true)
    .order("created_at", { ascending: true })
    .limit(limit)

  if (error) throw new Error(`getFeaturedCourses: ${error.message}`)
  return (data as unknown as RawCourse[]).map(mapCourse)
}
