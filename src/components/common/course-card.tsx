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
  const clampedProgress = Math.min(100, Math.max(0, progress))

  return (
    <article
      onClick={onClick}
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-3xl border border-emerald-100 bg-linear-to-br from-emerald-50/60 via-white to-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md",
        onClick && "cursor-pointer",
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
            onClick?.()
          }}
          className="grid size-14 place-items-center rounded-full bg-emerald-50 text-emerald-600 transition group-hover:bg-emerald-100"
        >
          <ArrowRight className="size-6 transition group-hover:translate-x-0.5" />
        </button>
      </div>

      <span className="mt-6 w-fit rounded-full bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-700">
        {course.tag}
      </span>

      <h3 className="mt-3 text-2xl font-bold tracking-tight text-slate-900">{course.title}</h3>
      <p className="mt-3 line-clamp-2 text-base leading-relaxed text-slate-500">
        {course.description}
      </p>

      <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-2 pt-8 text-sm text-slate-600">
        <span className="flex items-center gap-1.5">
          <ChartNoAxesColumnIncreasing className="size-4" />
          {course.level}
        </span>
        <span className="flex items-center gap-1.5">
          <Clock className="size-4" />
          {formatDuration(course.duration)}
        </span>
        <span className="flex items-center gap-1.5">
          <File className="size-4" />
          {course.modules.length} modules
        </span>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-1 bg-emerald-50">
        <div
          className="h-full rounded-full bg-emerald-500 transition-[width]"
          style={{ width: `${clampedProgress}%` }}
        />
      </div>
    </article>
  )
}
