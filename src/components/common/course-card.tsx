import { useNavigate } from "react-router-dom"
import { ArrowRight, ChartNoAxesColumnIncreasing, Clock, File } from "lucide-react"
import { cn } from "@/lib/utils"
import type { Course } from "@/types/courses"

type CourseCardProps = {
  course: Course
  progress?: number
  onClick?: () => void
  className?: string
}

function formatDuration(minutes: number) {
  const h = Math.floor(minutes / 60)
  const m = minutes % 60
  if (!h) return `${m}m`
  return m ? `${h}h ${m}m` : `${h}h`
}

export function CourseCard({ course, progress = 0, onClick, className }: CourseCardProps) {
  const navigate = useNavigate()
  const clampedProgress = Math.min(100, Math.max(0, progress))
  const handleClick = onClick || (() => navigate(`/courses/${course.id}`))

  return (
    <article
      onClick={handleClick}
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-3xl border border-emerald-100 bg-linear-to-br from-emerald-50/60 via-white to-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md cursor-pointer dark:border-neutral-800 dark:from-neutral-900 dark:via-neutral-900 dark:to-neutral-900",
        className
      )}
    >
      <div className="flex items-start justify-between">
        <div className="size-20 overflow-hidden rounded-2xl bg-neutral-900">
          <img src={course.imgUrl} alt={course.title} className="size-full object-cover" />
        </div>
        <button
          type="button"
          aria-label={`Open ${course.title}`}
          onClick={(e) => {
            e.stopPropagation()
            handleClick()
          }}
          className="grid size-14 place-items-center rounded-full bg-emerald-50 text-emerald-600 transition group-hover:bg-emerald-100 dark:bg-emerald-950/60 dark:text-emerald-400 dark:group-hover:bg-emerald-900/60"
        >
          <ArrowRight className="size-6 transition group-hover:translate-x-0.5" />
        </button>
      </div>

      <span className="mt-6 w-fit rounded-full bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300">
        {course.tag}
      </span>

      <h3 className="mt-3 text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
        {course.title}
      </h3>
      <p className="mt-3 line-clamp-2 text-base leading-relaxed text-slate-500 dark:text-slate-400">
        {course.description}
      </p>

      <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-2 pt-8 text-sm text-slate-600 dark:text-slate-400">
        <span className="flex items-center gap-1.5">
          <ChartNoAxesColumnIncreasing className="size-4 text-emerald-600 dark:text-emerald-400" />
          {course.level}
        </span>
        <span className="flex items-center gap-1.5">
          <Clock className="size-4 text-emerald-600 dark:text-emerald-400" />
          {formatDuration(course.duration)}
        </span>
        <span className="flex items-center gap-1.5">
          <File className="size-4 text-emerald-600 dark:text-emerald-400" />
          {course.modules.length} modules
        </span>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-1 bg-emerald-50 dark:bg-neutral-800">
        <div
          className="h-full rounded-full bg-emerald-500 transition-[width]"
          style={{ width: `${clampedProgress}%` }}
        />
      </div>
    </article>
  )
}
