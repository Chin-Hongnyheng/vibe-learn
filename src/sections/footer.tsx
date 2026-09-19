export function Footer() {
  return (
    <footer className="relative w-full overflow-hidden bg-background pt-16 pb-10 md:pt-24 md:pb-14">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 md:h-24" aria-hidden="true">
        <svg
          className="absolute inset-x-0 bottom-0 h-full w-full"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            d="M0,160 C240,220 480,100 720,140 C960,180 1200,90 1440,150 L1440,320 L0,320 Z"
            className="fill-primary-100/40 dark:fill-primary-900/15"
          />
          <path
            d="M0,220 C240,140 480,260 720,200 C960,120 1200,240 1440,180 L1440,320 L0,320 Z"
            className="fill-primary-100/70 dark:fill-primary-900/20"
          />
        </svg>
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-3 px-6 text-center">
        <div className="flex items-center gap-3">
          <svg
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
            className="shrink-0"
          >
            <path
              d="M4 3 L12 15"
              stroke="currentColor"
              strokeWidth="6"
              strokeLinecap="round"
              className="text-primary-600"
            />
            <path
              d="M20 3 L12 15"
              stroke="currentColor"
              strokeWidth="6"
              strokeLinecap="round"
              className="text-primary-400"
            />
          </svg>
          <span className="font-sans text-2xl font-bold tracking-tight md:text-3xl">
            <span className="text-foreground">Vibe </span>
            <span className="text-primary-500">Learn</span>
          </span>
        </div>
        <p className="text-sm text-muted-foreground">Better Skills. A Brighter Future.</p>
      </div>
    </footer>
  )
}
