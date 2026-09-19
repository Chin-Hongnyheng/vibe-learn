import { useState } from "react"
import { Link, useParams } from "react-router-dom"
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
import type { Course, LearningOutcome } from "@/types/courses"

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
  const isNextJs =
    course.title.toLowerCase().includes("next.js") || course.tag.toLowerCase().includes("next")

  if (isNextJs) {
    return (
      <div className="relative aspect-square w-full max-w-[340px] shrink-0 overflow-hidden rounded-3xl border border-emerald-950/60 bg-[#07130e] p-6 shadow-xl flex flex-col items-center justify-center">
        {/* Radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.28)_0%,transparent_70%)]" />

        {/* Decorative faint code background */}
        <div className="pointer-events-none absolute inset-0 select-none overflow-hidden p-4 font-mono text-[9px] leading-tight text-emerald-500/15 opacity-60">
          <div className="flex justify-between">
            <div>
              <p>import &#123; Suspense &#125; from 'react'</p>
              <p>const cache = new Map()</p>
              <p>export async function fetchCourse()</p>
              <p>const router = useRouter()</p>
              <p>const [state, dispatch] = useReducer()</p>
            </div>
            <div className="text-right">
              <p>// Server Actions</p>
              <p>export async function mutate()</p>
              <p>revalidatePath('/courses')</p>
              <p>cookies().get('session')</p>
            </div>
          </div>
        </div>

        {/* Next.js N Logo Box */}
        <div className="relative z-10 flex size-36 items-center justify-center rounded-2xl border border-white/20 bg-black/85 shadow-2xl backdrop-blur-sm">
          <svg viewBox="0 0 180 180" className="size-24 text-white" fill="none">
            <mask
              id="next-mask"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="180"
              height="180"
              style={{ maskType: "alpha" }}
            >
              <circle cx="90" cy="90" r="90" fill="black" />
            </mask>
            <g mask="url(#next-mask)">
              <circle cx="90" cy="90" r="90" fill="black" stroke="white" strokeWidth="6" />
              <path
                d="M149.508 157.438L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.138 149.508 157.438Z"
                fill="url(#paint0_linear)"
              />
              <rect x="115" y="54" width="12" height="72" fill="url(#paint1_linear)" />
            </g>
            <defs>
              <linearGradient
                id="paint0_linear"
                x1="109"
                y1="116.5"
                x2="144.5"
                y2="160.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="white" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint1_linear"
                x1="121"
                y1="54"
                x2="120.799"
                y2="106.875"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="white" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* NEXT.JS Label */}
        <span className="relative z-10 mt-6 font-sans text-xl font-bold tracking-[0.25em] text-white">
          NEXT<span className="text-emerald-400">.JS</span>
        </span>
      </div>
    )
  }

  return (
    <div className="relative aspect-square w-full max-w-[340px] shrink-0 overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-900 shadow-xl dark:border-neutral-800">
      <img src={course.imgUrl} alt={course.title} className="size-full object-cover" />
    </div>
  )
}

export function CourseDetailPage() {
  const { id } = useParams<{ id: string }>()
  const [showAllModules, setShowAllModules] = useState(false)
  const [isBookmarked, setIsBookmarked] = useState(false)

  const courseId = Number(id)
  const course = MOCK_COURSES.find((c) => c.id === courseId) || MOCK_COURSES[0]

  const outcomes: LearningOutcome[] = course.learningOutcomes || [
    {
      icon: "layers",
      title: "App Router Foundations",
      description: "Master the App Router, layouts, loading states, and nested routing.",
    },
    {
      icon: "database",
      title: "Data Fetching & Caching",
      description: "Fetch, data efficiently and leverage caching for better performance.",
    },
    {
      icon: "gauge",
      title: "Performance Optimization",
      description: "Optimize rendering, assets, and bundle size for faster apps.",
    },
    {
      icon: "cloud",
      title: "Deployment & Scaling",
      description: "Deploy with confidence and scale your Next.js applications.",
    },
  ]

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
                to={`/courses/${course.id}/learn`}
                className="inline-flex items-center gap-2.5 rounded-xl bg-emerald-500 px-6 py-3.5 text-base font-semibold text-white shadow-sm transition hover:bg-emerald-600 active:bg-emerald-700"
              >
                <Play className="size-4 fill-current" />
                Continue Learning
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
            <div className="mt-4 space-y-1">
              {displayedModules.map((moduleItem, index) => {
                const title = typeof moduleItem === "string" ? moduleItem : moduleItem.title
                const description =
                  typeof moduleItem === "string"
                    ? "Comprehensive lesson and practice exercises."
                    : moduleItem.description
                const duration = typeof moduleItem === "string" ? "45m" : moduleItem.duration || "45m"

                return (
                  <div
                    key={index}
                    className="group flex items-center justify-between rounded-xl p-4 transition hover:bg-neutral-50 dark:hover:bg-neutral-800/50"
                  >
                    <div className="flex items-center gap-4 min-w-0">
                      <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-emerald-50 font-sans text-base font-bold text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300">
                        {index + 1}
                      </span>
                      <div className="min-w-0">
                        <h3 className="truncate font-sans text-base font-semibold text-neutral-900 group-hover:text-emerald-600 dark:text-white dark:group-hover:text-emerald-400">
                          {title}
                        </h3>
                        {description && (
                          <p className="truncate text-xs sm:text-sm text-neutral-500 dark:text-neutral-400">
                            {description}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="ml-4 flex shrink-0 items-center gap-4 text-sm text-neutral-500 dark:text-neutral-400">
                      <span className="font-medium">{duration}</span>
                      <ChevronDown className="size-5 text-neutral-400 transition-transform group-hover:text-neutral-600 dark:group-hover:text-neutral-300" />
                    </div>
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
      </div>

      {/* Floating / Sticky Progress Bar */}
      <div className="sticky bottom-6 z-30 mt-16 px-4 sm:px-6">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 rounded-2xl border border-neutral-200/80 bg-white/95 p-4 shadow-xl backdrop-blur-md sm:gap-6 sm:px-6 dark:border-neutral-800 dark:bg-neutral-900/95">
          {/* Left: Icon & Progress Text */}
          <div className="flex items-center gap-3.5 shrink-0">
            <div className="flex size-10 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 dark:bg-emerald-950/60 dark:text-emerald-400">
              <ChartNoAxesColumnIncreasing className="size-5" />
            </div>
            <div>
              <span className="block text-xs font-medium text-neutral-500 dark:text-neutral-400">
                Your Progress
              </span>
              <span className="block font-sans text-sm sm:text-base font-bold text-neutral-900 dark:text-white">
                35% complete
              </span>
            </div>
          </div>

          {/* Center: Progress Bar */}
          <div className="hidden sm:block flex-1 max-w-md">
            <div className="h-2.5 w-full overflow-hidden rounded-full bg-neutral-100 dark:bg-neutral-800">
              <div className="h-full rounded-full bg-emerald-500 transition-all duration-500 w-[35%]" />
            </div>
          </div>

          {/* Right: Continue Learning Button */}
          <Link
            to={`/courses/${course.id}/learn`}
            className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-emerald-500 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-600 active:bg-emerald-700"
          >
            Continue Learning
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CourseDetailPage
