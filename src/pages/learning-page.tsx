import { useState, useEffect } from "react"
import { Link, useParams, useSearchParams } from "react-router-dom"
import {
  ArrowLeft,
  ArrowRight,
  Bookmark,
  Check,
  ChevronDown,
  ChevronRight,
  Clock,
  ExternalLink,
  FlaskConical,
  Home,
  Layers,
  MessageSquare,
  Signal,
  Sparkles,
  Users,
} from "lucide-react"
import { MOCK_COURSES } from "@/lib/mock-data"
import { cn } from "@/lib/utils"
import type { Course, CourseLesson, CourseModule } from "@/types/courses"

export function LearningPage() {
  const { id } = useParams<{ id: string }>()
  const [searchParams, setSearchParams] = useSearchParams()

  const savedCourseId =
    typeof window !== "undefined" ? localStorage.getItem("lastVisitedCourseId") : null
  const effectiveId = id || savedCourseId || "1"
  const courseId = Number(effectiveId)
  const course: Course =
    MOCK_COURSES.find((c) => c.id === courseId || c.slug === effectiveId) || MOCK_COURSES[0]

  // Flatten lessons to easily find current and next/previous
  const allLessonsWithModule = course.modules.flatMap((m, mIdx) =>
    (m.lessons || []).map((l, lIdx) => ({
      lesson: l,
      module: m,
      moduleIndex: mIdx,
      lessonIndex: lIdx,
    }))
  )

  const [selectedLessonId, setSelectedLessonId] = useState<string | null>(null)
  const [prevCourseId, setPrevCourseId] = useState(course.id)
  if (course.id !== prevCourseId) {
    setPrevCourseId(course.id)
    setSelectedLessonId(null)
  }

  // Save visited course to local storage
  useEffect(() => {
    if (course?.id) {
      localStorage.setItem("lastVisitedCourseId", String(course.id))
    }
  }, [course?.id])

  const lessonQuery = searchParams.get("lesson")
  const activeIdOrSlug = selectedLessonId ?? lessonQuery

  const targetIndex = allLessonsWithModule.findIndex(
    (item) => item.lesson.slug === activeIdOrSlug || item.lesson.id === activeIdOrSlug
  )
  const currentIndex = targetIndex !== -1 ? targetIndex : 0

  const [activeTab, setActiveTab] = useState<"content" | "notes">("content")
  const [isBookmarked, setIsBookmarked] = useState(false)
  const [completedLessonIds, setCompletedLessonIds] = useState<Set<string>>(new Set())
  const [expandedModules, setExpandedModules] = useState<Record<number, boolean>>({})
  const [notesState, setNotesState] = useState<Record<string, string>>({})
  const [mobileCurriculumOpen, setMobileCurriculumOpen] = useState(false)

  const currentItem = allLessonsWithModule[currentIndex] || allLessonsWithModule[0]
  const activeLesson: CourseLesson = currentItem?.lesson
  const activeModule: CourseModule = currentItem?.module

  const storageKey = activeLesson ? `notes_${course.id}_${activeLesson.id}` : ""
  const userNotes =
    notesState[storageKey] ??
    (typeof window !== "undefined" && storageKey ? localStorage.getItem(storageKey) || "" : "")

  const saveNotes = (val: string) => {
    setNotesState((prev) => ({ ...prev, [storageKey]: val }))
    if (storageKey) {
      localStorage.setItem(storageKey, val)
    }
  }

  const selectLesson = (idx: number) => {
    const target = allLessonsWithModule[idx]
    if (target) {
      setSelectedLessonId(target.lesson.id)
      setSearchParams({ lesson: target.lesson.slug || target.lesson.id })
      setMobileCurriculumOpen(false)
    }
  }

  const toggleModule = (mIdx: number) => {
    setExpandedModules((prev) => ({
      ...prev,
      [mIdx]: !(prev[mIdx] ?? (currentItem?.moduleIndex === mIdx)),
    }))
  }

  const toggleLessonComplete = (lessonId: string) => {
    setCompletedLessonIds((prev) => {
      const next = new Set(prev)
      if (next.has(lessonId)) {
        next.delete(lessonId)
      } else {
        next.add(lessonId)
      }
      return next
    })
  }

  const percentComplete = allLessonsWithModule.length
    ? Math.round((completedLessonIds.size / allLessonsWithModule.length) * 100)
    : 0

  return (
    <div className="min-h-screen bg-[#FAFAFC] pb-20 dark:bg-background">
      <div className="mx-auto flex max-w-[1440px] flex-col lg:flex-row">
        {/* ================= MOBILE CURRICULUM ACCORDION (Visible on < lg) ================= */}
        <div className="lg:hidden border-b border-neutral-200 bg-white p-4 dark:border-neutral-800 dark:bg-neutral-900">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2.5 min-w-0">
              <Link
                to={`/courses/${course.id}`}
                className="flex size-9 shrink-0 items-center justify-center rounded-xl border border-neutral-200 text-neutral-600 transition hover:border-emerald-500 hover:text-emerald-600 dark:border-neutral-700 dark:text-neutral-300"
              >
                <ArrowLeft className="size-4" />
              </Link>
              <div className="min-w-0">
                <h2 className="truncate font-sans text-xs font-bold text-neutral-900 dark:text-white">
                  {course.title}
                </h2>
                <span className="text-[11px] text-neutral-500 dark:text-neutral-400">
                  {percentComplete}% completed &bull; {allLessonsWithModule.length} lessons
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setMobileCurriculumOpen(!mobileCurriculumOpen)}
              className="inline-flex shrink-0 items-center gap-1.5 rounded-xl bg-emerald-50 px-3 py-2 text-xs font-semibold text-emerald-700 transition hover:bg-emerald-100 dark:bg-emerald-950/60 dark:text-emerald-300"
            >
              <Layers className="size-3.5" />
              {mobileCurriculumOpen ? "Hide" : "Curriculum"}
              <ChevronDown
                className={cn("size-3.5 transition-transform", mobileCurriculumOpen && "rotate-180")}
              />
            </button>
          </div>

          {/* Collapsible Curriculum for Mobile */}
          {mobileCurriculumOpen && (
            <div className="mt-4 border-t border-neutral-100 pt-3 dark:border-neutral-800 space-y-2">
              {course.modules.map((mod, mIdx) => {
                const isModuleActive = currentItem?.moduleIndex === mIdx
                const isExpanded = expandedModules[mIdx] ?? isModuleActive
                const modLessons = mod.lessons || []

                return (
                  <div key={mod.id ?? mIdx} className="rounded-xl border border-neutral-100 p-2 dark:border-neutral-800">
                    <div
                      onClick={() => toggleModule(mIdx)}
                      className="flex cursor-pointer items-center justify-between py-1"
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-[10px] font-bold text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
                          {mIdx + 1}
                        </span>
                        <p className="truncate text-xs font-bold text-neutral-900 dark:text-white">
                          {mod.title}
                        </p>
                      </div>
                      <ChevronDown
                        className={cn("size-3.5 text-neutral-400 transition-transform", isExpanded && "rotate-180")}
                      />
                    </div>

                    {isExpanded && modLessons.length > 0 && (
                      <div className="mt-2 space-y-1 border-l-2 border-emerald-200 pl-3 ml-2 dark:border-emerald-800">
                        {modLessons.map((sub) => {
                          const subIndex = allLessonsWithModule.findIndex(
                            (item) => item.lesson.id === sub.id
                          )
                          const isCurrent = subIndex === currentIndex
                          const isDone = completedLessonIds.has(sub.id)

                          return (
                            <div
                              key={sub.id}
                              onClick={() => selectLesson(subIndex)}
                              className={cn(
                                "flex cursor-pointer items-center justify-between rounded-md p-1.5 text-xs transition",
                                isCurrent
                                  ? "font-bold text-emerald-700 bg-emerald-50 dark:bg-emerald-950/60 dark:text-emerald-300"
                                  : "text-neutral-600 dark:text-neutral-300"
                              )}
                            >
                              <div className="flex items-center gap-2 min-w-0">
                                {isDone ? (
                                  <Check className="size-3 text-emerald-600 stroke-[3]" />
                                ) : (
                                  <span
                                    className={cn(
                                      "size-1.5 rounded-full shrink-0",
                                      isCurrent
                                        ? "bg-emerald-500 ring-2 ring-emerald-200"
                                        : "border border-neutral-300"
                                    )}
                                  />
                                )}
                                <span className="truncate">{sub.title}</span>
                              </div>
                              <span className="text-[11px] text-neutral-400 shrink-0 ml-2">
                                {sub.durationFormatted}
                              </span>
                            </div>
                          )
                        })}
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          )}
        </div>

        {/* ================= DESKTOP CURRICULUM SIDEBAR (Visible on lg+) ================= */}
        <aside className="hidden lg:block w-[360px] shrink-0 border-r border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900 min-h-screen">
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
            <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-black font-sans text-xl font-bold text-white shadow-xs overflow-hidden">
              {course.imgUrl ? (
                <img src={course.imgUrl} alt={course.title} className="size-full object-cover" />
              ) : (
                course.title.charAt(0)
              )}
            </div>
            <div className="min-w-0 flex-1">
              <h2 className="truncate font-sans text-sm font-bold text-neutral-900 dark:text-white">
                {course.title}
              </h2>
              <div className="mt-1.5 flex items-center justify-between text-xs font-semibold text-neutral-500 dark:text-neutral-400">
                <span>{percentComplete}% complete</span>
              </div>
              <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-neutral-200 dark:bg-neutral-700">
                <div
                  className="h-full rounded-full bg-emerald-500 transition-all duration-300"
                  style={{ width: `${Math.max(5, percentComplete)}%` }}
                />
              </div>
            </div>
          </div>

          {/* Modules & Lessons Curriculum List */}
          <div className="mt-6 space-y-1.5 divide-y divide-neutral-100 dark:divide-neutral-800">
            {course.modules.map((mod, mIdx) => {
              const isModuleActive = currentItem?.moduleIndex === mIdx
              const isExpanded = expandedModules[mIdx] ?? isModuleActive
              const modLessons = mod.lessons || []

              return (
                <div key={mod.id ?? mIdx} className="pt-2">
                  <div
                    onClick={() => toggleModule(mIdx)}
                    className={cn(
                      "flex cursor-pointer items-center justify-between rounded-xl p-2.5 transition",
                      isModuleActive
                        ? "bg-emerald-50/70 text-emerald-950 dark:bg-emerald-950/40 dark:text-emerald-200"
                        : "hover:bg-neutral-50 dark:hover:bg-neutral-800/60 text-neutral-700 dark:text-neutral-300"
                    )}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 font-sans text-xs font-bold text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
                        {mIdx + 1}
                      </span>
                      <div className="min-w-0">
                        <p className="truncate text-xs font-bold">{mod.title}</p>
                        <div className="flex items-center gap-2 text-[11px] text-neutral-400">
                          <span>
                            {modLessons.length} lessons &bull; {mod.duration}
                          </span>
                          {isModuleActive && (
                            <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                              Now playing
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="ml-2 shrink-0">
                      <ChevronDown
                        className={cn(
                          "size-4 text-neutral-400 transition-transform",
                          isExpanded && "rotate-180"
                        )}
                      />
                    </div>
                  </div>

                  {/* Sub-lessons accordion */}
                  {isExpanded && modLessons.length > 0 && (
                    <div className="ml-5 my-2 space-y-1.5 border-l-2 border-emerald-200 pl-3.5 dark:border-emerald-800">
                      {modLessons.map((sub) => {
                        const subIndex = allLessonsWithModule.findIndex(
                          (item) => item.lesson.id === sub.id
                        )
                        const isCurrent = subIndex === currentIndex
                        const isDone = completedLessonIds.has(sub.id)

                        return (
                          <div
                            key={sub.id}
                            onClick={() => selectLesson(subIndex)}
                            className={cn(
                              "group flex cursor-pointer items-center justify-between rounded-md p-1.5 text-xs transition",
                              isCurrent
                                ? "font-bold text-emerald-700 bg-emerald-50/80 dark:bg-emerald-950/60 dark:text-emerald-300"
                                : "text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50 dark:text-neutral-400 dark:hover:text-white dark:hover:bg-neutral-800/40"
                            )}
                          >
                            <div className="flex items-center gap-2 min-w-0">
                              {isDone ? (
                                <Check className="size-3 text-emerald-600 stroke-[3]" />
                              ) : (
                                <span
                                  className={cn(
                                    "size-1.5 rounded-full shrink-0",
                                    isCurrent
                                      ? "bg-emerald-500 ring-2 ring-emerald-200 dark:ring-emerald-900"
                                      : "border border-neutral-300 dark:border-neutral-600"
                                  )}
                                />
                              )}
                              <span className="truncate">{sub.title}</span>
                            </div>
                            <span className="text-[11px] text-neutral-400 shrink-0 ml-2">
                              {sub.durationFormatted}
                            </span>
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
        <main className="flex-1 px-4 py-6 sm:py-8 sm:px-8 lg:px-12 min-w-0">
          {/* Top Breadcrumb & Bookmark Bar */}
          <div className="flex items-center justify-between gap-2">
            <nav
              aria-label="Breadcrumb"
              className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-neutral-500 dark:text-neutral-400"
            >
              <Link
                to="/"
                className="inline-flex items-center text-neutral-500 hover:text-neutral-900 dark:hover:text-white"
              >
                <Home className="size-3.5 sm:size-4" />
              </Link>
              <ChevronRight className="size-3 text-neutral-400" />
              <Link to="/courses" className="hover:text-neutral-900 dark:hover:text-white">
                All Courses
              </Link>
              <ChevronRight className="size-3 text-neutral-400" />
              <Link
                to={`/courses/${course.id}`}
                className="hover:text-neutral-900 dark:hover:text-white truncate max-w-[120px] sm:max-w-none"
              >
                {course.title}
              </Link>
              <ChevronRight className="size-3 text-neutral-400" />
              <span className="truncate font-medium text-neutral-900 dark:text-white max-w-[120px] sm:max-w-none">
                {activeModule?.title || "Module"}
              </span>
            </nav>

            <button
              type="button"
              onClick={() => setIsBookmarked(!isBookmarked)}
              aria-label="Bookmark lesson"
              className={cn(
                "flex size-9 sm:size-10 shrink-0 items-center justify-center rounded-xl border transition shadow-xs",
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
              LESSON {currentItem.moduleIndex + 1}.{currentItem.lessonIndex + 1}
            </span>

            <h1 className="mt-3 font-sans text-2xl font-bold tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl dark:text-white">
              {activeLesson.title}
            </h1>

            {activeLesson.notesText && (
              <p className="mt-3 max-w-3xl text-xs sm:text-sm leading-relaxed text-neutral-600 sm:text-base dark:text-neutral-300 line-clamp-2">
                {activeLesson.notesText.split("\n\n")[0]}
              </p>
            )}

            {/* Meta row */}
            <div className="mt-4 sm:mt-5 flex flex-wrap items-center gap-3 sm:gap-5 text-xs sm:text-sm text-neutral-600 dark:text-neutral-300">
              <div className="flex items-center gap-1.5">
                <Clock className="size-4 text-neutral-400" />
                <span>{activeLesson.durationFormatted}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Signal className="size-4 text-neutral-400" />
                <span>{course.level}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Users className="size-4 text-neutral-400" />
                <span>
                  {activeLesson.studentCount
                    ? `${activeLesson.studentCount.toLocaleString()} students`
                    : course.studentsFormatted}
                </span>
              </div>
              {activeLesson.freePreview && (
                <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-semibold text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
                  Free Preview
                </span>
              )}
            </div>
          </div>

          {/* ================= YOUTUBE VIDEO PLAYER (Keyed to force instant reload) ================= */}
          <div className="mt-6 sm:mt-8 overflow-hidden rounded-2xl border border-neutral-200/80 bg-black shadow-lg dark:border-neutral-800 aspect-video w-full">
            {activeLesson.youtubeVideoId ? (
              <iframe
                key={`${course.id}-${activeLesson.id}-${activeLesson.youtubeVideoId}`}
                src={`https://www.youtube-nocookie.com/embed/${activeLesson.youtubeVideoId}?autoplay=1&rel=0&modestbranding=1`}
                title={activeLesson.title}
                className="size-full aspect-video border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            ) : (
              <div className="flex size-full items-center justify-center bg-neutral-950 text-neutral-400">
                <span>Video unavailable</span>
              </div>
            )}
          </div>

          {/* Lesson Actions (Mark Complete / Navigation) */}
          <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-neutral-200 pb-6 dark:border-neutral-800">
            <button
              type="button"
              onClick={() => toggleLessonComplete(activeLesson.id)}
              className={cn(
                "inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 sm:py-2 text-sm font-semibold transition shadow-xs w-full sm:w-auto",
                completedLessonIds.has(activeLesson.id)
                  ? "bg-emerald-600 text-white hover:bg-emerald-700"
                  : "border border-neutral-200 bg-white text-neutral-700 hover:border-emerald-500 hover:text-emerald-600 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-200"
              )}
            >
              <Check className="size-4 stroke-[2.5]" />
              {completedLessonIds.has(activeLesson.id) ? "Completed" : "Mark as Complete"}
            </button>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              {currentIndex > 0 && (
                <button
                  type="button"
                  onClick={() => selectLesson(currentIndex - 1)}
                  className="inline-flex flex-1 sm:flex-none items-center justify-center gap-2 rounded-xl border border-neutral-200 bg-white px-4 py-3 sm:py-2 text-sm font-semibold text-neutral-700 transition hover:bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-200"
                >
                  <ArrowLeft className="size-4" />
                  Previous
                </button>
              )}

              {currentIndex < allLessonsWithModule.length - 1 && (
                <button
                  type="button"
                  onClick={() => selectLesson(currentIndex + 1)}
                  className="inline-flex flex-1 sm:flex-none items-center justify-center gap-2 rounded-xl bg-emerald-500 px-4 py-3 sm:py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-600"
                >
                  Next Lesson
                  <ArrowRight className="size-4" />
                </button>
              )}
            </div>
          </div>

          {/* ================= TABS ================= */}
          <div className="mt-8 flex border-b border-neutral-200 dark:border-neutral-800">
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
              {/* Overview / Notes text */}
              {activeLesson.notesText && (
                <div>
                  <h3 className="font-sans text-lg sm:text-xl font-bold text-neutral-900 dark:text-white">
                    Overview
                  </h3>
                  <div className="mt-3 space-y-3 text-xs sm:text-sm leading-relaxed text-neutral-600 sm:text-base dark:text-neutral-300 whitespace-pre-line">
                    {activeLesson.notesText}
                  </div>
                </div>
              )}

              {/* Key Points */}
              {activeLesson.keyPoints && activeLesson.keyPoints.length > 0 && (
                <div>
                  <h3 className="font-sans text-lg sm:text-xl font-bold text-neutral-900 dark:text-white">
                    What this lesson covers
                  </h3>
                  <div className="mt-4 space-y-3">
                    {activeLesson.keyPoints.map((point, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-3">
                        <div className="flex size-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 mt-0.5 dark:bg-emerald-950 dark:text-emerald-400">
                          <Check className="size-3 stroke-[3]" />
                        </div>
                        <span className="text-xs sm:text-sm md:text-base text-neutral-700 dark:text-neutral-300">
                          {point}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Pro Tip Callout Box */}
              {activeLesson.proTip && (
                <div className="rounded-2xl border border-emerald-200/80 bg-emerald-50/50 p-4 sm:p-6 dark:border-emerald-900/60 dark:bg-emerald-950/20">
                  <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-300">
                    <Sparkles className="size-5" />
                    <h4 className="font-sans text-base font-bold">Pro Tip</h4>
                  </div>
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-emerald-900 sm:text-base dark:text-emerald-200">
                    {activeLesson.proTip}
                  </p>
                </div>
              )}

              {/* Resources */}
              {activeLesson.resources && activeLesson.resources.length > 0 && (
                <div>
                  <h3 className="font-sans text-lg sm:text-xl font-bold text-neutral-900 dark:text-white">
                    Resources & Documentation
                  </h3>
                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    {activeLesson.resources.map((res, rIdx) => (
                      <a
                        key={rIdx}
                        href={res.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-start justify-between rounded-xl border border-neutral-200/80 bg-white p-4 transition hover:border-emerald-500 shadow-xs dark:border-neutral-800 dark:bg-neutral-900"
                      >
                        <div>
                          <h4 className="text-xs sm:text-sm font-semibold text-neutral-900 group-hover:text-emerald-600 dark:text-white dark:group-hover:text-emerald-400">
                            {res.title}
                          </h4>
                          {res.description && (
                            <p className="mt-1 text-[11px] sm:text-xs text-neutral-500 dark:text-neutral-400">
                              {res.description}
                            </p>
                          )}
                        </div>
                        <ExternalLink className="size-4 text-neutral-400 group-hover:text-emerald-600 shrink-0 ml-2" />
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ) : (
            /* ================= TAB CONTENT: NOTES ================= */
            <div className="mt-8 space-y-4">
              <div>
                <h3 className="font-sans text-lg sm:text-xl font-bold text-neutral-900 dark:text-white">
                  My Lesson Notes
                </h3>
                <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400">
                  Notes are stored locally in your browser so you can refer back to them anytime.
                </p>
              </div>

              <textarea
                value={userNotes}
                onChange={(e) => saveNotes(e.target.value)}
                placeholder="Type your notes here... (e.g. key takeaways, code snippets, questions)"
                className="w-full min-h-[300px] rounded-2xl border border-neutral-200 bg-white p-4 font-mono text-xs sm:text-sm leading-relaxed text-neutral-900 shadow-xs transition focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 dark:border-neutral-800 dark:bg-neutral-900 dark:text-white"
              />

              <div className="flex items-center justify-between text-xs text-neutral-400">
                <span>{userNotes.length} characters</span>
                <span>Auto-saved to local storage</span>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}

export default LearningPage
