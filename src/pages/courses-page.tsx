import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { CourseCard } from "@/components/common/course-card"
import { getCourses } from "@/lib/api/courses"
import type { Course } from "@/types/courses"

export function CoursesPage() {
  const navigate = useNavigate()
  const [courses, setCourses] = useState<Course[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    getCourses()
      .then(setCourses)
      .catch((err: Error) => setError(err.message))
      .finally(() => setLoading(false))
  }, [])

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      {/* Page Header */}
      <div className="border-b border-neutral-200 pb-8">
        <h1 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
          All Courses
        </h1>
        <p className="mt-3 max-w-2xl text-base text-neutral-600">
          Discover a wide range of practical courses designed to teach you modern development,
          data science, and design skills.
        </p>
      </div>

      {/* Loading skeleton */}
      {loading && (
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="h-72 animate-pulse rounded-2xl bg-neutral-100" />
          ))}
        </div>
      )}

      {/* Error state */}
      {!loading && error && (
        <div className="mt-10 rounded-xl border border-red-200 bg-red-50 p-6 text-center text-sm text-red-700">
          Failed to load courses: {error}
        </div>
      )}

      {/* Courses Grid */}
      {!loading && !error && (
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course, i) => (
            <CourseCard
              key={course.id}
              course={course}
              progress={(i + 1) * 15}
              onClick={() => navigate(`/courses/${course.id}`)}
            />
          ))}
        </div>
      )}
    </div>
  )
}
export default CoursesPage
