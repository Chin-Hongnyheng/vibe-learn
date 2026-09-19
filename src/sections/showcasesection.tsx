import { Brain, Route, Zap, Users } from "lucide-react"
import { cn } from "@/lib/utils"
import { ShowcaseIntro } from "@/components/showcase/showcase-intro"
import { ShowcaseFeatureItem } from "@/components/showcase/showcase-feature-item"

type ShowcaseSectionProps = {
  className?: string
}

export function ShowcaseSection({ className }: ShowcaseSectionProps) {
  return (
    <section className={cn("w-full py-8 md:py-12", className)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-primary-100/90 bg-primary-50/50 p-8 sm:p-10 lg:p-12 dark:border-neutral-800 dark:bg-neutral-900/60">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-0">
            {/* Left Column: Intro */}
            <div className="flex flex-col justify-center border-b border-primary-200/60 pb-8 sm:pb-10 lg:col-span-4 lg:border-r lg:border-b-0 lg:pb-0 lg:pr-8 xl:pr-12 dark:border-neutral-800">
              <ShowcaseIntro />
            </div>

            {/* Features Columns (Responsive: 1-col on mobile, 2-col on tablet, 2 separate columns on desktop) */}
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-10 lg:contents">
              {/* Middle Column */}
              <div className="flex flex-col justify-between gap-8 sm:gap-10 lg:col-span-4 lg:border-r lg:border-primary-200/60 lg:px-8 xl:px-12 dark:border-neutral-800">
                <ShowcaseFeatureItem
                  icon={<Brain className="size-6" />}
                  title="Expert-Led Content"
                  description="Learn from industry professionals with real-world experience."
                />
                <ShowcaseFeatureItem
                  icon={<Route className="size-6" />}
                  title="Structured Learning Paths"
                  description="Follow clear paths from beginner to advanced."
                />
              </div>

              {/* Right Column */}
              <div className="flex flex-col justify-between gap-8 sm:gap-10 lg:col-span-4 lg:pl-8 xl:pl-12">
                <ShowcaseFeatureItem
                  icon={<Zap className="size-6" />}
                  title="Hands-On Practice"
                  description="Build real projects and apply what you learn immediately."
                />
                <ShowcaseFeatureItem
                  icon={<Users className="size-6" />}
                  title="Lifetime Access"
                  description="Learn at your own pace, anytime, anywhere."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ShowcaseSection
