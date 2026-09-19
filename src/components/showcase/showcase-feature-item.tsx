import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

export type ShowcaseFeatureItemProps = {
  icon: ReactNode
  title: string
  description: string
  className?: string
}

export function ShowcaseFeatureItem({
  icon,
  title,
  description,
  className,
}: ShowcaseFeatureItemProps) {
  return (
    <div className={cn("flex flex-col items-start", className)}>
      <div className="flex size-14 items-center justify-center rounded-full bg-primary-100/75 text-primary-600 dark:bg-primary-950/60 dark:text-primary-400">
        {icon}
      </div>
      <h3 className="mt-5 text-lg font-bold tracking-tight text-neutral-900 sm:text-xl dark:text-white">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-neutral-500 sm:text-[15px] dark:text-neutral-400">
        {description}
      </p>
    </div>
  )
}
