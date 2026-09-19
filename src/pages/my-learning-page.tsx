import { Link } from "react-router-dom"
import { Play, CheckCircle2 } from "lucide-react"
import { MOCK_COURSES } from "@/lib/mock-data"

export function MyLearningPage() {
  // Mock user enrolled courses with sample progress percentages
  const enrolledCourses = [
    { course: MOCK_COURSES[0], progress: 65, lastLesson: "React Router & Navigation" },
    { course: MOCK_COURSES[1], progress: 30, lastLesson: "NumPy Arrays & Vectorization" },
    { course: MOCK_COURSES[2], progress: 100, lastLesson: "Course Completed & Certified" },
  ]

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="border-b border-neutral-200 pb-8">
        <h1 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
          My Learning
        </h1>
        <p className="mt-3 text-base text-neutral-600">
          Pick up right where you left off. Continue your lessons and track your progress.
        </p>
      </div>

      {/* Progress Cards */}
      <div className="mt-8 space-y-6">
        {enrolledCourses.map(({ course, progress, lastLesson }) => (
          <div
            key={course.id}
            className="flex flex-col gap-6 rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:shadow-md md:flex-row md:items-center md:justify-between"
          >
            <div className="flex items-start gap-4">
              <img
                src={course.imgUrl}
                alt={course.title}
                className="h-20 w-20 shrink-0 rounded-xl object-cover"
              />
              <div>
                <span className="rounded-full bg-neutral-100 px-2.5 py-0.5 text-xs font-medium text-neutral-700">
                  {course.tag}
                </span>
                <h2 className="mt-2 text-lg font-bold text-neutral-900">
                  <Link to={`/courses/${course.id}`} className="hover:underline">
                    {course.title}
                  </Link>
                </h2>
                <p className="mt-1 text-sm text-neutral-500">
                  Current: <span className="font-medium text-neutral-700">{lastLesson}</span>
                </p>
              </div>
            </div>

            {/* Progress Bar & Actions */}
            <div className="flex flex-col gap-3 md:w-72">
              <div className="flex items-center justify-between text-xs font-semibold text-neutral-700">
                <span>Progress</span>
                <span>{progress}%</span>
              </div>
              <div className="h-2.5 w-full rounded-full bg-neutral-200">
                <div
                  className="h-full rounded-full bg-primary-500 transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <div className="mt-2 flex items-center justify-end">
                {progress === 100 ? (
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary-600">
                    <CheckCircle2 className="h-4 w-4" /> Completed
                  </span>
                ) : (
                  <Link
                    to={`/courses/${course.id}`}
                    className="inline-flex items-center gap-1.5 rounded-lg bg-primary-500 px-4 py-2 text-xs font-semibold text-white shadow-sm hover:bg-primary-600"
                  >
                    <Play className="h-3.5 w-3.5 fill-current" /> Continue
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
export default MyLearningPage
