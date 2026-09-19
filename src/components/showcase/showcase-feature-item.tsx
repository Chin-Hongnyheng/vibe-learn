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
      <div className="flex size-12 items-center justify-center rounded-full bg-primary-100/70 text-primary-600 dark:bg-primary-950/60 dark:text-primary-400">
        {icon}
      </div>
      <h3 className="mt-4 text-base font-bold tracking-tight text-neutral-900 sm:text-lg dark:text-white">
        {title}
      </h3>
      <p className="mt-1 text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">
        {description}
      </p>
    </div>
  )
}
