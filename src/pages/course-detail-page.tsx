import { Link, useParams, useNavigate } from "react-router-dom"
import {
  ArrowLeft,
  BookOpen,
  Clock,
  GraduationCap,
  PlayCircle,
  Star,
} from "lucide-react"
import { MOCK_COURSES } from "@/lib/mock-data"

export function CourseDetailPage() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()

  const courseId = Number(id)
  const course = MOCK_COURSES.find((c) => c.id === courseId) || MOCK_COURSES[0]

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-neutral-500">
        <Link to="/" className="hover:text-neutral-900">
          Home
        </Link>
        <span>&gt;</span>
        <Link to="/courses" className="hover:text-neutral-900">
          Courses
        </Link>
        <span>&gt;</span>
        <span className="truncate font-medium text-neutral-900">{course.title}</span>
      </nav>

      <button
        type="button"
        onClick={() => navigate("/courses")}
        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary-600 hover:text-primary-700"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to courses
      </button>

      {/* Course Hero Card */}
      <div className="mt-6 overflow-hidden rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm lg:p-10">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <span className="inline-block rounded-full bg-primary-100 px-3.5 py-1 text-xs font-semibold text-primary-800">
              {course.tag} • {course.level}
            </span>

            <h1 className="mt-4 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
              {course.title}
            </h1>

            <p className="mt-4 text-base leading-relaxed text-neutral-600">
              {course.description}
            </p>

            {/* Meta Row */}
            <div className="mt-6 flex flex-wrap items-center gap-6 text-sm text-neutral-600">
              <div className="flex items-center gap-1.5 text-amber-500">
                <Star className="h-4 w-4 fill-current" />
                <span className="font-semibold text-neutral-900">{course.rating}</span>
                <span className="text-neutral-500">({course.reviews} reviews)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <GraduationCap className="h-4 w-4 text-neutral-400" />
                <span>{course.enrolled.toLocaleString()} learners</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="h-4 w-4 text-neutral-400" />
                <span>{Math.round(course.duration / 60)} hours total</span>
              </div>
            </div>

            {/* Instructor */}
            <div className="mt-8 flex items-center gap-3 border-t border-neutral-100 pt-6">
              <img
                src={course.instructor.avatar}
                alt={course.instructor.name}
                className="h-12 w-12 rounded-full object-cover border border-neutral-200"
              />
              <div>
                <p className="text-sm font-semibold text-neutral-900">
                  {course.instructor.name}
                </p>
                <p className="text-xs text-neutral-500">{course.instructor.bio}</p>
              </div>
            </div>
          </div>

          {/* Action Box */}
          <div className="flex flex-col justify-between rounded-2xl border border-neutral-200 bg-neutral-50/50 p-6 lg:col-span-1">
            <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-neutral-900">
              <img
                src={course.imgUrl}
                alt={course.title}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                <PlayCircle className="h-12 w-12 text-white/90" />
              </div>
            </div>

            <div className="mt-6">
              <Link
                to="/my-learning"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary-500 py-3 text-center text-sm font-semibold text-white shadow-sm transition hover:bg-primary-600"
              >
                Enroll / Continue Learning
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Curriculum */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold tracking-tight text-neutral-900">
          Course Curriculum ({course.modules.length} Modules)
        </h2>

        <div className="mt-6 divide-y divide-neutral-200 rounded-2xl border border-neutral-200 bg-white">
          {course.modules.map((moduleName, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 transition hover:bg-neutral-50"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary-50 text-xs font-semibold text-primary-700">
                  {index + 1}
                </span>
                <span className="text-sm font-medium text-neutral-900">{moduleName}</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-neutral-400">
                <BookOpen className="h-4 w-4" />
                <span>Lesson</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
export default CourseDetailPage
