import { Link } from "react-router-dom"
import { ArrowRight, Sparkle } from "lucide-react"

import heroLearning from "@/assets/hero-learning.png"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function HeroSection() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="overflow-hidden bg-linear-to-br from-primary-50/70 via-background to-primary-100/50 dark:from-primary/5 dark:to-primary/10"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-8 px-6 py-10 sm:px-10 lg:grid-cols-11 lg:gap-0 lg:px-12 lg:py-12">
        <div className="relative z-10 lg:col-span-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-2 font-sans text-xs font-bold tracking-widest text-primary-700 dark:text-primary-300">
            <Sparkle aria-hidden="true" className="size-4 fill-current" />
            INTELLIGENT LEARNING
          </span>

          <h1
            id="hero-heading"
            className="mt-4 font-sans text-4xl leading-tight font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl"
          >
            Learn in a{" "}
            <span className="text-primary-600 dark:text-primary-400">
              smarter,
            </span>{" "}
            <span className="text-primary-600 dark:text-primary-400">faster</span>{" "}
            way.
          </h1>

          <p className="mt-5 max-w-md font-sans text-base leading-relaxed text-muted-foreground sm:text-lg lg:text-xl">
            Vibe Learn helps you build real skills with structured courses,
            hands-on practice and personalized learning paths.
          </p>

          <Link
            to="/courses"
            className={cn(
              buttonVariants(),
              "mt-7 min-h-14 gap-4 rounded-md bg-primary-600 px-7 py-3 font-sans text-base font-semibold text-primary-foreground shadow-sm hover:bg-primary-700 active:bg-primary-800 sm:text-lg"
            )}
          >
            Explore Courses
            <ArrowRight aria-hidden="true" className="size-5" />
          </Link>
        </div>

        <img
          src={heroLearning}
          alt=""
          width={1402}
          height={1122}
          fetchPriority="high"
          className="mx-auto h-auto w-full max-w-lg object-contain lg:col-span-5"
        />
      </div>
    </section>
  )
}
