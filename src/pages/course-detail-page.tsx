import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import { useUser } from "@clerk/clerk-react"
import { courseService } from "@/services/course-service"
import { progressService, type UserProgressState } from "@/services/progress-service"
import {
  ArrowRight,
  Bookmark,
  ChartNoAxesColumnIncreasing,
  ChevronDown,
  ChevronRight,
  Clock,
  Cloud,
  Database,
  FileText,
  Flame,
  Gauge,
  Home,
  Layers,
  Lightbulb,
  Play,
  Users,
} from "lucide-react"
import { MOCK_COURSES } from "@/lib/mock-data"
import { cn } from "@/lib/utils"
import type { Course, CourseModule, LearningOutcome } from "@/types/courses"

function formatDuration(minutes: number) {
  const h = Math.floor(minutes / 60)
  const m = minutes % 60
  if (!h) return `${m}m`
  return m ? `${h}h ${m}m` : `${h}h`
}

function getOutcomeIcon(iconName: string) {
  switch (iconName) {
    case "layers":
      return Layers
    case "database":
      return Database
    case "gauge":
      return Gauge
    case "cloud":
      return Cloud
    default:
      return Layers
  }
}

function CourseHeroCover({ course }: { course: Course }) {
  return (
    <div className="relative aspect-square w-full max-w-[280px] sm:max-w-[340px] shrink-0 overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-900 shadow-xl dark:border-neutral-800">
      <img src={course.imgUrl} alt={course.title} className="size-full object-cover" />
    </div>
  )
}

export function CourseDetailPage() {
  const { id } = useParams<{ id: string }>()
  const { user } = useUser()
  const [showAllModules, setShowAllModules] = useState(false)
  const [isBookmarked, setIsBookmarked] = useState(false)
  const [expandedModules, setExpandedModules] = useState<Record<string | number, boolean>>({
    0: true,
  })

  const courseId = Number(id)
  const initialFallback =
    MOCK_COURSES.find((c) => c.id === courseId || c.slug === id) || MOCK_COURSES[0]
  const [course, setCourse] = useState<Course>(initialFallback)
  const [userProgress, setUserProgress] = useState<UserProgressState[]>([])

  useEffect(() => {
    if (!id) return
    courseService.fetchCourseById(id).then((c) => {
      if (c) setCourse(c)
    })
  }, [id])

  useEffect(() => {
    if (!user?.id || !course?.slug) return
    progressService.fetchUserProgress(user.id, course.slug).then((p) => {
      setUserProgress(p)
    })
  }, [user?.id, course?.slug])

  const allLessons = course.modules.flatMap((m) => m.lessons || [])
  const completedSet = new Set(userProgress.filter((p) => p.isCompleted).map((p) => p.lessonId))
  const resumeLesson =
    allLessons.find((l) => !completedSet.has(l.id) && !completedSet.has(l.slug)) || allLessons[0]
  const resumeUrl = resumeLesson
    ? `/courses/${course.id}/learn?lesson=${resumeLesson.slug}`
    : `/courses/${course.id}/learn`
  const hasStarted = completedSet.size > 0

  const outcomes: LearningOutcome[] = course.learningOutcomes || []

  const toggleModule = (moduleKey: string | number) => {
    setExpandedModules((prev) => ({
      ...prev,
      [moduleKey]: !prev[moduleKey],
    }))
  }

  const displayedModules = showAllModules ? course.modules : course.modules.slice(0, 6)

  return (
    <div className="relative min-h-screen bg-[#FAFAFC] pb-32 dark:bg-background">
      {/* Soft mint ambient glow in top-right */}
      <div
        className="pointer-events-none absolute -top-24 right-0 -z-10 h-[560px] w-[560px] rounded-full bg-emerald-100/40 blur-3xl dark:bg-emerald-950/20"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Breadcrumb Trail */}
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400"
        >
          <Link
            to="/"
            className="inline-flex items-center text-neutral-500 transition-colors hover:text-neutral-900 dark:hover:text-white"
          >
            <Home className="size-4" />
          </Link>
          <ChevronRight className="size-3.5 text-neutral-400" />
          <Link
            to="/courses"
            className="transition-colors hover:text-neutral-900 dark:hover:text-white"
          >
            All Courses
          </Link>
          <ChevronRight className="size-3.5 text-neutral-400" />
          <span className="truncate font-medium text-neutral-900 dark:text-white">
            {course.title}
          </span>
        </nav>

        {/* Course Hero Section */}
        <section className="mt-8 flex flex-col items-center gap-10 lg:flex-row lg:items-start lg:gap-12">
          {/* Left: Course Cover */}
          <CourseHeroCover course={course} />

          {/* Right: Course Information */}
          <div className="flex-1">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100/90 px-3.5 py-1 text-xs font-bold tracking-wider text-emerald-700 uppercase dark:bg-emerald-950/60 dark:text-emerald-300">
              <Flame className="size-3.5 fill-current" />
              {course.tag || "POPULAR"}
            </span>

            <h1 className="mt-3 font-sans text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl lg:text-[52px] lg:leading-[1.15] dark:text-white">
              {course.title.includes(" for ") ? (
                <>
                  {course.title.split(" for ")[0]} for{" "}
                  <span className="text-emerald-600 dark:text-emerald-400">
                    {course.title.split(" for ")[1]}
                  </span>
                </>
              ) : (
                course.title
              )}
            </h1>

            <p className="mt-4 max-w-2xl text-base leading-relaxed text-neutral-600 sm:text-lg dark:text-neutral-300">
              {course.description}
            </p>

            {/* Meta Row */}
            <div className="mt-6 flex flex-wrap items-center gap-y-2 text-sm text-neutral-600 dark:text-neutral-300">
              <div className="flex items-center gap-2">
                <ChartNoAxesColumnIncreasing className="size-4 text-emerald-600 dark:text-emerald-400" />
                <span className="font-medium">{course.level}</span>
              </div>
              <span className="mx-4 hidden text-neutral-300 sm:inline dark:text-neutral-700">|</span>
              <div className="flex items-center gap-2">
                <Clock className="size-4 text-emerald-600 dark:text-emerald-400" />
                <span className="font-medium">
                  {course.durationFormatted || formatDuration(course.duration)}
                </span>
              </div>
              <span className="mx-4 hidden text-neutral-300 sm:inline dark:text-neutral-700">|</span>
              <div className="flex items-center gap-2">
                <FileText className="size-4 text-emerald-600 dark:text-emerald-400" />
                <span className="font-medium">{course.modules.length} modules</span>
              </div>
              <span className="mx-4 hidden text-neutral-300 sm:inline dark:text-neutral-700">|</span>
              <div className="flex items-center gap-2">
                <Users className="size-4 text-emerald-600 dark:text-emerald-400" />
                <span className="font-medium">
                  {course.studentsFormatted || `${course.enrolled.toLocaleString()} students`}
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                to={resumeUrl}
                className="inline-flex items-center gap-2.5 rounded-xl bg-emerald-500 px-6 py-3.5 text-base font-semibold text-white shadow-sm transition hover:bg-emerald-600 active:bg-emerald-700"
              >
                <Play className="size-4 fill-current" />
                {hasStarted ? "Resume Learning" : "Start Learning"}
                <ArrowRight className="size-4" />
              </Link>

              <button
                type="button"
                onClick={() => setIsBookmarked(!isBookmarked)}
                className={cn(
                  "inline-flex items-center gap-2 rounded-xl border px-6 py-3.5 text-base font-semibold transition shadow-xs",
                  isBookmarked
                    ? "border-emerald-500 bg-emerald-50/50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300"
                    : "border-neutral-200 bg-white text-neutral-700 hover:border-emerald-500 hover:text-emerald-600 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-200"
                )}
              >
                <Bookmark className={cn("size-4", isBookmarked && "fill-current")} />
                {isBookmarked ? "Bookmarked" : "Bookmark"}
              </button>
            </div>
          </div>
        </section>

        {/* Section: What you'll learn */}
        {outcomes.length > 0 && (
          <section className="mt-16 sm:mt-20">
            <div className="flex items-end justify-between">
              <div className="flex items-center gap-3">
                <Lightbulb className="size-7 text-emerald-500" />
                <h2 className="font-sans text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl dark:text-white">
                  What you'll learn
                </h2>
              </div>
              <div className="hidden sm:block -rotate-6 font-['Caveat',cursive] text-2xl font-bold text-emerald-500 leading-tight text-right">
                <span className="block">Build</span>
                <span className="block">for real world</span>
                <svg viewBox="0 0 120 12" fill="none" className="ml-auto -mt-1 w-28 text-emerald-500">
                  <path
                    d="M4 8 C 30 2, 70 2, 116 8"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {outcomes.map((outcome, idx) => {
                const IconComponent = getOutcomeIcon(outcome.icon)
                return (
                  <div
                    key={idx}
                    className="flex items-start gap-4 rounded-2xl border border-neutral-200/80 bg-white p-6 shadow-xs transition hover:border-emerald-200 dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-emerald-900"
                  >
                    <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 dark:bg-emerald-950/50 dark:text-emerald-400">
                      <IconComponent className="size-6" />
                    </div>
                    <div>
                      <h3 className="font-sans text-base font-bold text-neutral-900 dark:text-white">
                        {outcome.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                        {outcome.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </section>
        )}

        {/* Section: Course Content */}
        <section className="mt-16 sm:mt-20">
          <div className="rounded-2xl border border-neutral-200/80 bg-white p-6 sm:p-8 shadow-xs dark:border-neutral-800 dark:bg-neutral-900">
            {/* Header inside the container card */}
            <div className="flex items-center justify-between border-b border-neutral-100 pb-6 dark:border-neutral-800">
              <div className="flex items-center gap-3">
                <Layers className="size-6 text-emerald-600 dark:text-emerald-400" />
                <h2 className="font-sans text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl dark:text-white">
                  Course Content
                </h2>
              </div>
              <span className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
                {course.modules.length} modules &bull;{" "}
                {course.durationFormatted || formatDuration(course.duration)}
              </span>
            </div>

            {/* Modules List */}
            <div className="mt-4 divide-y divide-neutral-100 dark:divide-neutral-800">
              {displayedModules.map((moduleItem: CourseModule, index: number) => {
                const moduleKey = moduleItem.id ?? index
                const isExpanded = Boolean(expandedModules[moduleKey])
                const lessonsCount = moduleItem.lessons?.length || 0

                return (
                  <div key={moduleKey} className="py-2">
                    <button
                      type="button"
                      onClick={() => toggleModule(moduleKey)}
                      className="group flex w-full items-center justify-between rounded-xl p-3 text-left transition hover:bg-neutral-50 dark:hover:bg-neutral-800/50"
                    >
                      <div className="flex items-center gap-4 min-w-0">
                        <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-emerald-50 font-sans text-base font-bold text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300">
                          {index + 1}
                        </span>
                        <div className="min-w-0">
                          <h3 className="truncate font-sans text-base font-semibold text-neutral-900 group-hover:text-emerald-600 dark:text-white dark:group-hover:text-emerald-400">
                            {moduleItem.title}
                          </h3>
                          {moduleItem.description && (
                            <p className="truncate text-xs sm:text-sm text-neutral-500 dark:text-neutral-400">
                              {moduleItem.description}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="ml-4 flex shrink-0 items-center gap-3 text-sm text-neutral-500 dark:text-neutral-400">
                        <span className="text-xs font-medium">
                          {lessonsCount} {lessonsCount === 1 ? "lesson" : "lessons"}
                          {moduleItem.duration ? ` • ${moduleItem.duration}` : ""}
                        </span>
                        <ChevronDown
                          className={cn(
                            "size-5 text-neutral-400 transition-transform group-hover:text-neutral-600 dark:group-hover:text-neutral-300",
                            isExpanded && "rotate-180"
                          )}
                        />
                      </div>
                    </button>

                    {/* Expanded lessons list */}
                    {isExpanded && moduleItem.lessons && moduleItem.lessons.length > 0 && (
                      <div className="ml-6 sm:ml-14 my-2 space-y-2 border-l-2 border-emerald-100 pl-4 sm:pl-6 dark:border-emerald-900/60">
                        {moduleItem.lessons.map((lesson, lIdx) => (
                          <Link
                            key={lesson.id || lIdx}
                            to={`/courses/${course.id}/learn?lesson=${lesson.slug || lesson.id}`}
                            className="group flex items-center justify-between rounded-lg p-2 transition hover:bg-emerald-50/50 dark:hover:bg-neutral-800/60"
                          >
                            <div className="flex items-center gap-3 min-w-0">
                              <div className="flex size-7 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300">
                                <Play className="size-3 fill-current ml-0.5" />
                              </div>
                              <span className="truncate text-sm font-medium text-neutral-700 group-hover:text-emerald-600 dark:text-neutral-300 dark:group-hover:text-emerald-400">
                                {lesson.title}
                              </span>
                            </div>

                            <div className="ml-4 flex shrink-0 items-center gap-2.5">
                              {lesson.freePreview && (
                                <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
                                  Free Preview
                                </span>
                              )}
                              <span className="text-xs text-neutral-400">
                                {lesson.durationFormatted}
                              </span>
                            </div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )
              })}
            </div>

            {course.modules.length > 6 && (
              <div className="mt-6 flex justify-center border-t border-neutral-100 pt-6 dark:border-neutral-800">
                <button
                  type="button"
                  onClick={() => setShowAllModules(!showAllModules)}
                  className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-6 py-2.5 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-100 dark:bg-emerald-950/60 dark:text-emerald-300 dark:hover:bg-emerald-900/50"
                >
                  <span>{showAllModules ? "Show less" : `Show all ${course.modules.length} modules`}</span>
                  <ChevronDown
                    className={cn("size-4 transition-transform", showAllModules && "rotate-180")}
                  />
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Section: Instructor */}
        {course.instructor && (
          <section className="mt-16 sm:mt-20">
            <div className="rounded-2xl border border-neutral-200/80 bg-white p-6 sm:p-8 shadow-xs dark:border-neutral-800 dark:bg-neutral-900">
              <h2 className="font-sans text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl dark:text-white">
                Instructor
              </h2>
              <div className="mt-6 flex flex-col sm:flex-row items-start gap-6">
                <img
                  src={course.instructor.avatar}
                  alt={course.instructor.name}
                  className="size-20 rounded-2xl object-cover border border-neutral-200 dark:border-neutral-700"
                />
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-neutral-900 dark:text-white">
                    {course.instructor.name}
                  </h3>
                  {course.instructor.expertise && course.instructor.expertise.length > 0 && (
                    <div className="mt-2 flex flex-wrap gap-2">
                      {course.instructor.expertise.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                  {course.instructor.bio && (
                    <p className="mt-3 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                      {course.instructor.bio}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </section>
        )}
      </div>

      {/* Floating / Sticky Progress Bar */}
      <div className="sticky bottom-4 sm:bottom-6 z-30 mt-12 sm:mt-16 px-3 sm:px-6">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 sm:gap-6 rounded-2xl border border-neutral-200/80 bg-white/95 p-3 sm:p-4 shadow-xl backdrop-blur-md dark:border-neutral-800 dark:bg-neutral-900/95">
          {/* Left: Icon & Progress Text */}
          <div className="flex items-center gap-2.5 sm:gap-3.5 shrink-0">
            <div className="flex size-9 sm:size-10 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 dark:bg-emerald-950/60 dark:text-emerald-400">
              <ChartNoAxesColumnIncreasing className="size-4 sm:size-5" />
            </div>
            <div>
              <span className="block text-[11px] sm:text-xs font-medium text-neutral-500 dark:text-neutral-400">
                Your Progress
              </span>
              <span className="block font-sans text-xs sm:text-base font-bold text-neutral-900 dark:text-white">
                {allLessons.length > 0 ? Math.round((completedSet.size / allLessons.length) * 100) : 0}% complete
              </span>
            </div>
          </div>

          {/* Center: Progress Bar */}
          <div className="hidden md:block flex-1 max-w-md">
            <div className="h-2.5 w-full overflow-hidden rounded-full bg-neutral-100 dark:bg-neutral-800">
              <div
                className="h-full rounded-full bg-emerald-500 transition-all duration-500"
                style={{
                  width: `${allLessons.length > 0 ? Math.round((completedSet.size / allLessons.length) * 100) : 0}%`,
                }}
              />
            </div>
          </div>

          {/* Right: Continue Learning Button */}
          <Link
            to={resumeUrl}
            className="inline-flex shrink-0 items-center gap-1.5 sm:gap-2 rounded-xl bg-emerald-500 px-4 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-600 active:bg-emerald-700"
          >
            {hasStarted ? "Continue Learning" : "Start Learning"}
            <ArrowRight className="size-3.5 sm:size-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CourseDetailPage
