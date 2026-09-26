import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import {
  ArrowLeft,
  ArrowRight,
  Bookmark,
  Check,
  ChevronDown,
  ChevronRight,
  Clock,
  Code,
  ExternalLink,
  FileText,
  FlaskConical,
  Home,
  Lightbulb,
  Maximize,
  MessageSquare,
  Pause,
  Play,
  Settings,
  Signal,
  Sparkles,
  Users,
  Volume2,
} from "lucide-react"
import { getCourseById } from "@/lib/api/courses"
import { cn } from "@/lib/utils"
import type { Course } from "@/types/courses"

export function LearningPage() {
  const { id } = useParams<{ id: string }>()
  const courseId = Number(id) || 1
  const [course, setCourse] = useState<Course | null>(null)
  const [courseLoading, setCourseLoading] = useState(true)

  useEffect(() => {
    getCourseById(courseId)
      .then(setCourse)
      .catch(() => setCourse(null))
      .finally(() => setCourseLoading(false))
  }, [courseId])

  const [activeTab, setActiveTab] = useState<"content" | "notes">("content")
  const [isPlaying, setIsPlaying] = useState(false)
  const [isBookmarked, setIsBookmarked] = useState(false)
  const [activeModuleIndex, setActiveModuleIndex] = useState(4) // Module 5 (0-indexed 4)
  const [activeSubLesson, setActiveSubLesson] = useState(0)

  // Module items with complete details matching design
  const modulesList = [
    { id: 1, title: "Introduction to Next.js", duration: "45m", completed: true },
    { id: 2, title: "Project Setup & Structure", duration: "1h 12m", completed: true },
    { id: 3, title: "Routing & Layouts", duration: "1h 36m", completed: true },
    { id: 4, title: "Server Components", duration: "1h 42m", completed: true },
    {
      id: 5,
      title: "Data Fetching & Caching",
      duration: "1h 28m",
      completed: false,
      nowPlaying: true,
      subLessons: [
        { title: "Fetching in Server Components", duration: "21m" },
        { title: "Caching Strategies", duration: "23m" },
        { title: "Revalidation & Cache Control", duration: "18m" },
        { title: "Hands-on: Implement Caching", duration: "26m" },
      ],
    },
    { id: 6, title: "Authentication", duration: "1h 18m", completed: false },
    { id: 7, title: "API Routes & Handlers", duration: "1h 26m", completed: false },
    { id: 8, title: "Middleware & Edge Functions", duration: "1h 10m", completed: false },
    { id: 9, title: "Performance Optimization", duration: "1h 34m", completed: false },
    { id: 10, title: "Deployment on Vercel", duration: "56m", completed: false },
    { id: 11, title: "Monitoring & Logging", duration: "1h 8m", completed: false },
    { id: 12, title: "Best Practices & Next Steps", duration: "52m", completed: false },
  ]

  if (courseLoading) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="h-10 w-64 animate-pulse rounded-lg bg-neutral-100" />
        <div className="mt-8 h-64 animate-pulse rounded-2xl bg-neutral-100" />
      </div>
    )
  }

  if (!course) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-16 text-center sm:px-6 lg:px-8">
        <p className="text-sm text-neutral-500">Course not found.</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#FAFAFC] pb-20 dark:bg-background">
      <div className="mx-auto flex max-w-[1440px] flex-col lg:flex-row">
        {/* ================= LEFT CURRICULUM SIDEBAR ================= */}
        <aside className="w-full border-r border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900 lg:w-[360px] lg:shrink-0 lg:min-h-screen">
          {/* Back to course button */}
          <Link
            to={`/courses/${course.id}`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 transition-colors hover:text-emerald-700 dark:text-emerald-400"
          >
            <ArrowLeft className="size-4" />
            Back to course
          </Link>

          {/* Course card info widget */}
          <div className="mt-5 flex items-center gap-3.5 rounded-2xl border border-neutral-100 bg-neutral-50/70 p-3.5 dark:border-neutral-800 dark:bg-neutral-800/40">
            {/* Dark logo tile */}
            <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-black font-sans text-xl font-bold text-white shadow-xs">
              N
            </div>
            <div className="min-w-0 flex-1">
              <h2 className="truncate font-sans text-sm font-bold text-neutral-900 dark:text-white">
                {course.title}
              </h2>
              <div className="mt-1.5 flex items-center justify-between text-xs font-semibold text-neutral-500 dark:text-neutral-400">
                <span>35% complete</span>
              </div>
              <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-neutral-200 dark:bg-neutral-700">
                <div className="h-full rounded-full bg-emerald-500 w-[35%]" />
              </div>
            </div>
          </div>

          {/* Module progress indicator header */}
          <div className="mt-6 flex items-center justify-between text-xs font-bold tracking-wider text-neutral-500 uppercase dark:text-neutral-400">
            <span>Module 5 of 12</span>
            <ChevronDown className="size-4" />
          </div>

          {/* Modules List */}
          <div className="mt-4 space-y-1.5">
            {modulesList.map((mod, idx) => {
              const isCurrent = idx === activeModuleIndex

              return (
                <div key={mod.id} className="rounded-xl transition">
                  {/* Module Header Row */}
                  <div
                    onClick={() => setActiveModuleIndex(idx)}
                    className={cn(
                      "flex cursor-pointer items-center justify-between rounded-xl p-3 text-left transition",
                      isCurrent
                        ? "border border-emerald-300 bg-emerald-50/60 dark:border-emerald-800 dark:bg-emerald-950/40"
                        : "hover:bg-neutral-50 dark:hover:bg-neutral-800/50"
                    )}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      {/* Number circle or checkmark */}
                      <span
                        className={cn(
                          "flex size-7 shrink-0 items-center justify-center rounded-full text-xs font-bold",
                          isCurrent
                            ? "bg-emerald-500 text-white shadow-xs"
                            : mod.completed
                              ? "bg-emerald-50 text-emerald-600 dark:bg-emerald-950/60 dark:text-emerald-400"
                              : "bg-neutral-100 text-neutral-500 dark:bg-neutral-800 dark:text-neutral-400"
                        )}
                      >
                        {mod.id}
                      </span>

                      <div className="min-w-0">
                        <p
                          className={cn(
                            "truncate text-xs font-semibold sm:text-sm",
                            isCurrent
                              ? "text-neutral-900 dark:text-white"
                              : "text-neutral-700 dark:text-neutral-300"
                          )}
                        >
                          {mod.title}
                        </p>
                        <div className="flex items-center gap-2 text-[11px] text-neutral-400">
                          <span>{mod.duration}</span>
                          {mod.nowPlaying && (
                            <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                              Now playing
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Status icon on right */}
                    <div className="ml-2 shrink-0">
                      {mod.completed ? (
                        <Check className="size-4 text-emerald-500 stroke-[2.5]" />
                      ) : isCurrent ? (
                        <div className="flex size-5 items-center justify-center rounded-full border border-emerald-500 text-emerald-600 dark:text-emerald-400">
                          <Play className="size-2.5 fill-current" />
                        </div>
                      ) : (
                        <ChevronDown className="size-4 text-neutral-400" />
                      )}
                    </div>
                  </div>

                  {/* Sub-lessons accordion for active module */}
                  {isCurrent && mod.subLessons && (
                    <div className="ml-5 my-2 space-y-2 border-l-2 border-emerald-200 pl-4 dark:border-emerald-800">
                      {mod.subLessons.map((sub, sIdx) => {
                        const isSubActive = sIdx === activeSubLesson
                        return (
                          <div
                            key={sIdx}
                            onClick={() => setActiveSubLesson(sIdx)}
                            className={cn(
                              "group flex cursor-pointer items-center justify-between text-xs transition",
                              isSubActive
                                ? "font-bold text-emerald-600 dark:text-emerald-400"
                                : "text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
                            )}
                          >
                            <div className="flex items-center gap-2">
                              <span
                                className={cn(
                                  "size-1.5 rounded-full",
                                  isSubActive
                                    ? "bg-emerald-500 ring-2 ring-emerald-200 dark:ring-emerald-900"
                                    : "border border-neutral-300 dark:border-neutral-600"
                                )}
                              />
                              <span>{sub.title}</span>
                            </div>
                            <span className="text-[11px] text-neutral-400">{sub.duration}</span>
                          </div>
                        )
                      })}
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          {/* Bottom Sidebar Feature Cards */}
          <div className="mt-8 space-y-3 pt-6 border-t border-neutral-100 dark:border-neutral-800">
            {/* Session Code Lab Card */}
            <div className="group flex cursor-pointer items-center justify-between rounded-xl border border-neutral-100 bg-neutral-50/80 p-3.5 transition hover:border-emerald-200 dark:border-neutral-800 dark:bg-neutral-800/40">
              <div className="flex items-center gap-3">
                <div className="flex size-9 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 dark:bg-emerald-950/60 dark:text-emerald-400">
                  <FlaskConical className="size-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-neutral-900 dark:text-white">
                    Session Code Lab
                  </h4>
                  <p className="text-[11px] text-neutral-500 dark:text-neutral-400">
                    Practice with real code and get instant feedback.
                  </p>
                </div>
              </div>
              <ChevronRight className="size-4 text-neutral-400 transition-transform group-hover:translate-x-0.5" />
            </div>

            {/* Need Help Card */}
            <div className="group flex cursor-pointer items-center justify-between rounded-xl border border-neutral-100 bg-neutral-50/80 p-3.5 transition hover:border-emerald-200 dark:border-neutral-800 dark:bg-neutral-800/40">
              <div className="flex items-center gap-3">
                <div className="flex size-9 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 dark:bg-emerald-950/60 dark:text-emerald-400">
                  <MessageSquare className="size-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-neutral-900 dark:text-white">
                    Need help?
                  </h4>
                  <p className="text-[11px] text-neutral-500 dark:text-neutral-400">
                    Join our community or ask your instructor.
                  </p>
                </div>
              </div>
              <ChevronRight className="size-4 text-neutral-400 transition-transform group-hover:translate-x-0.5" />
            </div>
          </div>
        </aside>

        {/* ================= RIGHT MAIN CONTENT AREA ================= */}
        <main className="flex-1 px-4 py-8 sm:px-8 lg:px-12">
          {/* Top Breadcrumb & Bookmark Bar */}
          <div className="flex items-center justify-between">
            <nav
              aria-label="Breadcrumb"
              className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-neutral-500 dark:text-neutral-400"
            >
              <Link
                to="/"
                className="inline-flex items-center text-neutral-500 hover:text-neutral-900 dark:hover:text-white"
              >
                <Home className="size-4" />
              </Link>
              <ChevronRight className="size-3.5 text-neutral-400" />
              <Link to="/courses" className="hover:text-neutral-900 dark:hover:text-white">
                All Courses
              </Link>
              <ChevronRight className="size-3.5 text-neutral-400" />
              <Link
                to={`/courses/${course.id}`}
                className="hover:text-neutral-900 dark:hover:text-white truncate max-w-[150px] sm:max-w-none"
              >
                {course.title}
              </Link>
              <ChevronRight className="size-3.5 text-neutral-400" />
              <span className="truncate font-medium text-neutral-900 dark:text-white">
                Data Fetching & Caching
              </span>
            </nav>

            <button
              type="button"
              onClick={() => setIsBookmarked(!isBookmarked)}
              aria-label="Bookmark lesson"
              className={cn(
                "flex size-10 items-center justify-center rounded-xl border transition shadow-xs",
                isBookmarked
                  ? "border-emerald-500 bg-emerald-50 text-emerald-600 dark:bg-emerald-950/50"
                  : "border-neutral-200 bg-white text-neutral-600 hover:border-emerald-500 hover:text-emerald-600 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300"
              )}
            >
              <Bookmark className={cn("size-4", isBookmarked && "fill-current")} />
            </button>
          </div>

          {/* Lesson Header */}
          <div className="mt-4">
            <span className="inline-flex items-center rounded-full bg-emerald-100/90 px-3 py-1 text-xs font-bold tracking-wider text-emerald-700 uppercase dark:bg-emerald-950/60 dark:text-emerald-300">
              LESSON 5.1
            </span>

            <h1 className="mt-3 font-sans text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl dark:text-white">
              Data Fetching & <span className="text-emerald-600 dark:text-emerald-400">Caching</span>
            </h1>

            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-neutral-600 sm:text-base dark:text-neutral-300">
              Learn how Next.js handles data fetching and caching in both Server and Client
              Components.
            </p>

            {/* Meta row */}
            <div className="mt-5 flex flex-wrap items-center gap-5 text-xs sm:text-sm text-neutral-600 dark:text-neutral-300">
              <div className="flex items-center gap-1.5">
                <Clock className="size-4 text-neutral-400" />
                <span>1h 28m</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Signal className="size-4 text-neutral-400" />
                <span>Intermediate</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Users className="size-4 text-neutral-400" />
                <span>3,426 students</span>
              </div>
            </div>
          </div>

          {/* ================= VIDEO PLAYER ================= */}
          <div className="mt-8 overflow-hidden rounded-2xl border border-neutral-200/80 bg-neutral-950 shadow-lg dark:border-neutral-800">
            {/* Video viewport */}
            <div className="relative aspect-video w-full flex items-center justify-center bg-[#07130e]">
              {/* Radial glow */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.22)_0%,transparent_70%)]" />

              {/* Glowing Next.js logo box */}
              <div className="relative z-10 flex flex-col items-center">
                <div className="flex size-32 items-center justify-center rounded-2xl border border-white/20 bg-black/85 shadow-2xl backdrop-blur-sm sm:size-40">
                  <span className="font-sans text-5xl font-bold text-white sm:text-6xl">N</span>
                </div>
                <span className="mt-4 font-sans text-xl font-bold tracking-[0.25em] text-white">
                  NEXT<span className="text-emerald-400">.JS</span>
                </span>
              </div>

              {/* Big Play Overlay (if paused) */}
              {!isPlaying && (
                <button
                  type="button"
                  onClick={() => setIsPlaying(true)}
                  aria-label="Play video"
                  className="absolute inset-0 z-20 flex items-center justify-center bg-black/20 transition hover:bg-black/30"
                >
                  <div className="flex size-16 items-center justify-center rounded-full bg-emerald-500/90 text-white shadow-xl transition hover:scale-110">
                    <Play className="ml-1 size-7 fill-current" />
                  </div>
                </button>
              )}
            </div>

            {/* Player Controls Bar */}
            <div className="flex items-center justify-between gap-4 bg-neutral-900/95 px-4 py-3 text-white backdrop-blur-md">
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="text-white hover:text-emerald-400 transition"
                  aria-label={isPlaying ? "Pause" : "Play"}
                >
                  {isPlaying ? (
                    <Pause className="size-5 fill-current" />
                  ) : (
                    <Play className="size-5 fill-current" />
                  )}
                </button>
                <span className="text-xs font-medium text-neutral-300">12:45 / 1:28:00</span>
              </div>

              {/* Progress Bar with Scrubber */}
              <div className="flex-1 max-w-2xl px-2">
                <div className="relative h-1.5 w-full rounded-full bg-neutral-700 cursor-pointer">
                  <div className="h-full rounded-full bg-emerald-500 w-[18%]" />
                  <div className="absolute top-1/2 -translate-y-1/2 left-[18%] size-3 rounded-full bg-white shadow-sm ring-2 ring-emerald-500" />
                </div>
              </div>

              {/* Right Controls */}
              <div className="flex items-center gap-3 text-neutral-300">
                <Volume2 className="size-4 hover:text-white cursor-pointer transition" />
                <span className="text-xs font-semibold hover:text-white cursor-pointer transition">
                  1x
                </span>
                <span className="text-xs font-bold px-1 py-0.5 rounded border border-neutral-600 hover:text-white cursor-pointer transition">
                  CC
                </span>
                <Settings className="size-4 hover:text-white cursor-pointer transition" />
                <Maximize className="size-4 hover:text-white cursor-pointer transition" />
              </div>
            </div>
          </div>

          {/* ================= TABS ================= */}
          <div className="mt-10 flex border-b border-neutral-200 dark:border-neutral-800">
            <button
              type="button"
              onClick={() => setActiveTab("content")}
              className={cn(
                "relative pb-3 text-sm font-semibold transition",
                activeTab === "content"
                  ? "text-neutral-900 dark:text-white"
                  : "text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
              )}
            >
              Lesson Content
              {activeTab === "content" && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full bg-emerald-500" />
              )}
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("notes")}
              className={cn(
                "relative ml-8 pb-3 text-sm font-semibold transition",
                activeTab === "notes"
                  ? "text-neutral-900 dark:text-white"
                  : "text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
              )}
            >
              Notes
              {activeTab === "notes" && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full bg-emerald-500" />
              )}
            </button>
          </div>

          {/* ================= TAB CONTENT: LESSON CONTENT ================= */}
          {activeTab === "content" ? (
            <div className="mt-8 space-y-8">
              {/* Overview */}
              <div>
                <h3 className="font-sans text-xl font-bold text-neutral-900 dark:text-white">
                  Overview
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600 sm:text-base dark:text-neutral-300">
                  In this lesson, you'll learn how Next.js handles data fetching and caching in both
                  Server and Client Components. We'll explore different caching strategies and
                  revalidation techniques to build fast and scalable applications.
                </p>
              </div>

              {/* Session Code Lab Banner */}
              <div className="flex flex-col gap-4 rounded-2xl border border-emerald-100 bg-emerald-50/40 p-6 sm:flex-row sm:items-center sm:justify-between dark:border-emerald-950/60 dark:bg-emerald-950/20">
                <div className="flex items-start gap-4">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700 dark:bg-emerald-900/60 dark:text-emerald-300">
                    <FlaskConical className="size-6" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2.5">
                      <h4 className="font-sans text-base font-bold text-neutral-900 dark:text-white">
                        Session Code Lab
                      </h4>
                      <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-semibold text-emerald-800 dark:bg-emerald-900/70 dark:text-emerald-300">
                        Interactive
                      </span>
                    </div>
                    <p className="mt-1 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 max-w-xl">
                      Open the code lab below to practice what you've learned. Write your code, see
                      instant feedback, and build real features!
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-600"
                >
                  Open Lab
                  <ArrowRight className="size-4" />
                </button>
              </div>

              {/* In this lesson you will */}
              <div>
                <h3 className="font-sans text-base font-bold text-neutral-900 dark:text-white">
                  In this lesson you will:
                </h3>
                <ul className="mt-4 space-y-3">
                  {[
                    "Understand the different data fetching methods in Next.js",
                    "Learn how caching works in Server Components",
                    "Implement revalidation and cache control",
                    "Optimize performance with advanced caching strategies",
                  ].map((point, pIdx) => (
                    <li key={pIdx} className="flex items-center gap-3 text-sm text-neutral-700 dark:text-neutral-300">
                      <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white">
                        <Check className="size-3 stroke-[3]" />
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pro Tip Card */}
              <div className="flex items-start gap-4 rounded-2xl border border-emerald-100/80 bg-emerald-50/30 p-5 dark:border-emerald-950/40 dark:bg-emerald-950/15">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-900/60 dark:text-emerald-300">
                  <Lightbulb className="size-5" />
                </div>
                <div>
                  <h4 className="font-sans text-sm font-bold text-neutral-900 dark:text-white">
                    Pro Tip
                  </h4>
                  <p className="mt-1 text-xs sm:text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                    Use caching and revalidation wisely to ensure your app stays fast and data
                    remains fresh without unnecessary requests.
                  </p>
                </div>
              </div>

              {/* Resources */}
              <div>
                <h3 className="font-sans text-lg font-bold text-neutral-900 dark:text-white">
                  Resources
                </h3>
                <div className="mt-4 grid gap-4 sm:grid-cols-3">
                  {/* Resource 1 */}
                  <a
                    href="https://nextjs.org/docs"
                    target="_blank"
                    rel="noreferrer"
                    className="group flex flex-col justify-between rounded-2xl border border-neutral-200/80 bg-white p-4 transition hover:border-emerald-300 dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-emerald-800"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex size-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 dark:bg-emerald-950/60 dark:text-emerald-400">
                        <FileText className="size-5" />
                      </div>
                      <ExternalLink className="size-4 text-neutral-400 transition group-hover:text-emerald-500" />
                    </div>
                    <div className="mt-4">
                      <h5 className="font-sans text-sm font-bold text-neutral-900 group-hover:text-emerald-600 dark:text-white dark:group-hover:text-emerald-400">
                        Next.js Data Fetching Documentation
                      </h5>
                      <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400">
                        Official Next.js docs on data fetching methods.
                      </p>
                    </div>
                  </a>

                  {/* Resource 2 */}
                  <a
                    href="https://nextjs.org/docs"
                    target="_blank"
                    rel="noreferrer"
                    className="group flex flex-col justify-between rounded-2xl border border-neutral-200/80 bg-white p-4 transition hover:border-emerald-300 dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-emerald-800"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex size-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 dark:bg-emerald-950/60 dark:text-emerald-400">
                        <Sparkles className="size-5" />
                      </div>
                      <ExternalLink className="size-4 text-neutral-400 transition group-hover:text-emerald-500" />
                    </div>
                    <div className="mt-4">
                      <h5 className="font-sans text-sm font-bold text-neutral-900 group-hover:text-emerald-600 dark:text-white dark:group-hover:text-emerald-400">
                        Caching and Revalidation Guide
                      </h5>
                      <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400">
                        Deep dive into Next.js caching strategies.
                      </p>
                    </div>
                  </a>

                  {/* Resource 3 */}
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noreferrer"
                    className="group flex flex-col justify-between rounded-2xl border border-neutral-200/80 bg-white p-4 transition hover:border-emerald-300 dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-emerald-800"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex size-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 dark:bg-emerald-950/60 dark:text-emerald-400">
                        <svg className="size-5 fill-current" viewBox="0 0 24 24">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                          />
                        </svg>
                      </div>
                      <ExternalLink className="size-4 text-neutral-400 transition group-hover:text-emerald-500" />
                    </div>
                    <div className="mt-4">
                      <h5 className="font-sans text-sm font-bold text-neutral-900 group-hover:text-emerald-600 dark:text-white dark:group-hover:text-emerald-400">
                        Example Repository
                      </h5>
                      <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400">
                        Explore the source code for this lesson.
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          ) : (
            /* ================= TAB CONTENT: NOTES ================= */
            <div className="mt-8 rounded-2xl border border-neutral-200/80 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900">
              <h3 className="font-sans text-lg font-bold text-neutral-900 dark:text-white">
                Personal Notes
              </h3>
              <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">
                Jot down key learnings, code snippets, or thoughts as you progress through this
                lesson.
              </p>
              <textarea
                placeholder="Type your notes here... (auto-saved locally)"
                rows={6}
                className="mt-4 w-full rounded-xl border border-neutral-200 bg-neutral-50 p-4 text-sm text-neutral-900 outline-none focus:border-emerald-500 dark:border-neutral-700 dark:bg-neutral-800 dark:text-white"
              />
            </div>
          )}

          {/* ================= BOTTOM LESSON NAVIGATION ================= */}
          <div className="mt-12 flex flex-col gap-4 border-t border-neutral-200 pt-8 sm:flex-row sm:items-center sm:justify-between dark:border-neutral-800">
            {/* Previous Lesson */}
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-xl border border-neutral-200 bg-white px-5 py-3 text-sm font-semibold text-neutral-700 shadow-xs transition hover:border-emerald-500 hover:text-emerald-600 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300"
            >
              <ArrowLeft className="size-4" />
              Previous Lesson
            </button>

            {/* Center Code Lab Pill */}
            <div className="hidden sm:flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50/70 px-4 py-2 text-xs font-semibold text-emerald-700 dark:border-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300">
              <Code className="size-4" />
              <span>Session Code Lab</span>
              <span className="text-neutral-400">&bull;</span>
              <span className="text-neutral-500 dark:text-neutral-400">Interactive practice</span>
            </div>

            {/* Next Lesson */}
            <div className="flex items-center gap-4 self-end sm:self-auto">
              <div className="hidden text-right text-xs sm:block">
                <span className="block text-neutral-400">Authentication</span>
                <span className="block font-semibold text-neutral-600 dark:text-neutral-300">
                  1h 18m
                </span>
              </div>
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-600"
              >
                Next Lesson
                <ArrowRight className="size-4" />
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default LearningPage
