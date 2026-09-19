import { Link, useNavigate } from "react-router-dom"
import { ArrowRight, Sparkles } from "lucide-react"
import { CourseCard } from "@/components/common/course-card"
import { MOCK_COURSES } from "@/lib/mock-data"

export function HomePage() {
  const navigate = useNavigate()
  const popularCourses = MOCK_COURSES.slice(0, 3)

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-3xl bg-linear-to-b from-primary-50/50 via-white to-neutral-50 px-6 py-16 text-center sm:px-12 sm:py-24">
        <div className="mx-auto max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary-200 bg-primary-100/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary-800">
            <Sparkles className="h-3.5 w-3.5 text-primary-600" />
            <span>Intelligent Learning</span>
          </div>

          <h1 className="mt-6 text-4xl font-bold tracking-tight text-neutral-900 sm:text-6xl">
            Learn in a <span className="text-primary-500">smarter,</span>
            <br />
            <span className="text-primary-600">faster</span> way.
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-neutral-600 sm:text-xl">
            Vibe Learn helps you build real skills with structured courses, hands-on practice,
            and personalized learning paths.
          </p>

          <div className="mt-8 flex items-center justify-center gap-4">
            <Link
              to="/courses"
              className="inline-flex h-12 items-center gap-2 rounded-xl bg-primary-500 px-6 text-base font-semibold text-white shadow-md transition-all hover:bg-primary-600 hover:shadow-lg"
            >
              Explore Courses
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Popular Learning Paths */}
      <section className="mt-16">
        <div className="flex items-end justify-between">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-primary-600">
              Our Courses
            </span>
            <h2 className="mt-1 text-3xl font-bold tracking-tight text-neutral-900">
              Popular Learning Paths
            </h2>
            <p className="mt-2 text-sm text-neutral-500">
              Choose from our curated courses and start your journey towards new skills.
            </p>
          </div>
          <Link
            to="/courses"
            className="hidden text-sm font-semibold text-primary-600 hover:text-primary-700 sm:inline-flex sm:items-center sm:gap-1"
          >
            View all courses <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {popularCourses.map((course, i) => (
            <CourseCard
              key={course.id}
              course={course}
              progress={(i + 1) * 20}
              onClick={() => navigate(`/courses/${course.id}`)}
            />
          ))}
        </div>
      </section>
    </div>
  )
}
export default HomePage
