import { cn } from "@/lib/utils"

type ShowcaseIntroProps = {
  eyebrow?: string
  title?: string
  description?: string
  className?: string
}

export function ShowcaseIntro({
  eyebrow = "WHY VIBE LEARN?",
  title = "Build the skills that matter.",
  description = "More than just courses — Vibe Learn gives you the tools, support, and structure to grow your career and achieve your goals.",
  className,
}: ShowcaseIntroProps) {
  return (
    <div className={cn("flex flex-col justify-center", className)}>
      <span className="text-xs font-bold tracking-widest text-primary-600 uppercase sm:text-sm dark:text-primary-400">
        {eyebrow}
      </span>
      <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl lg:text-[42px] lg:leading-[1.15] dark:text-white">
        {title}
      </h2>
      <p className="mt-5 max-w-md text-sm leading-relaxed text-neutral-500 sm:text-base lg:text-lg dark:text-neutral-400">
        {description}
      </p>
    </div>
  )
}
