import { useNavigate } from "react-router-dom"
import { CourseCard } from "@/components/common/course-card"
import { MOCK_COURSES } from "@/lib/mock-data"

export function CoursesPage() {
  const navigate = useNavigate()

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

      {/* Courses Grid */}
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {MOCK_COURSES.map((course, i) => (
          <CourseCard
            key={course.id}
            course={course}
            progress={(i + 1) * 15}
            onClick={() => navigate(`/courses/${course.id}`)}
          />
        ))}
      </div>
    </div>
  )
}
export default CoursesPage
