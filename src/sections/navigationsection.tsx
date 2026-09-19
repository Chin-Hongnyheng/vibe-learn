import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Bell, Menu, Moon, Sun, X } from "lucide-react"
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react"
import { cn } from "@/lib/utils"
import { useTheme } from "@/components/theme-provider"
import logoImg from "@/assets/logo.png"

export function NavigationSection() {
  const location = useLocation()
  const { theme, setTheme } = useTheme()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const isCoursesActive =
    location.pathname.startsWith("/courses") || location.pathname.startsWith("/course")
  const isMyLearningActive = location.pathname.startsWith("/my-learning")

  return (
    <header className="sticky top-0 z-50 h-[72px] border-b border-neutral-200 bg-white/90 backdrop-blur-md dark:border-neutral-800 dark:bg-neutral-900/90">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Left: Brand Logo + Desktop Navigation Links */}
        <div className="flex h-full items-center gap-10">
          <Link
            to="/"
            className="group flex items-center gap-3 transition-opacity hover:opacity-90 shrink-0"
          >
            <img
              src={logoImg}
              alt="Vibe Learn Logo"
              className="h-9 w-auto object-contain transition-transform group-hover:scale-105"
            />
            <span className="font-sans text-2xl font-bold tracking-tight text-neutral-900 dark:text-white">
              Vibe <span className="text-primary-500">Learn</span>
            </span>
          </Link>

          {/* Left: Desktop Navigation Links */}
          <nav className="hidden h-full items-center gap-8 md:flex">
            <Link
              to="/courses"
              className={cn(
                "relative flex h-full items-center text-sm font-medium transition-colors hover:text-neutral-900 dark:hover:text-white",
                isCoursesActive
                  ? "font-semibold text-neutral-900 dark:text-white"
                  : "text-neutral-500 dark:text-neutral-400"
              )}
            >
              Courses
              {isCoursesActive && (
                <span className="absolute bottom-0 left-0 right-0 h-[2.5px] rounded-full bg-primary-500" />
              )}
            </Link>

            <Link
              to="/my-learning"
              className={cn(
                "relative flex h-full items-center text-sm font-medium transition-colors hover:text-neutral-900 dark:hover:text-white",
                isMyLearningActive
                  ? "font-semibold text-neutral-900 dark:text-white"
                  : "text-neutral-500 dark:text-neutral-400"
              )}
            >
              My Learning
              {isMyLearningActive && (
                <span className="absolute bottom-0 left-0 right-0 h-[2.5px] rounded-full bg-primary-500" />
              )}
            </Link>
          </nav>
        </div>

        {/* Right: Notifications & Theme Toggle & User Avatar & Mobile Menu Toggle */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Theme Toggle Button */}
          <button
            type="button"
            aria-label="Toggle color theme"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="flex h-10 w-10 items-center justify-center rounded-full text-neutral-700 transition-colors hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:hover:text-white"
          >
            {theme === "dark" ? <Sun className="h-5 w-5 text-amber-400" /> : <Moon className="h-5 w-5" />}
          </button>

          {/* Notification Bell */}
          <button
            type="button"
            aria-label="Notifications"
            className="relative flex h-10 w-10 items-center justify-center rounded-full text-neutral-700 transition-colors hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:hover:text-white"
          >
            <Bell className="h-5 w-5" />
            <span className="absolute right-2.5 top-2.5 h-2 w-2 rounded-full bg-primary-500 ring-2 ring-white dark:ring-neutral-900" />
          </button>

          {/* User Profile Avatar / Auth Buttons */}
          <div className="flex items-center">
            <SignedIn>
              <UserButton
                afterSignOutUrl="/"
                appearance={{
                  elements: {
                    avatarBox: "size-10 ring-2 ring-primary-500/20",
                  },
                }}
              />
            </SignedIn>
            <SignedOut>
              <SignInButton mode="modal">
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-xl bg-primary-500 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-primary-600 active:bg-primary-700"
                >
                  Sign In
                </button>
              </SignInButton>
            </SignedOut>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="flex h-10 w-10 items-center justify-center rounded-lg text-neutral-700 transition-colors hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-800 md:hidden"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="border-b border-neutral-200 bg-white px-4 pb-4 pt-2 shadow-lg dark:border-neutral-800 dark:bg-neutral-900 md:hidden">
          <nav className="flex flex-col space-y-2">
            <Link
              to="/courses"
              onClick={() => setMobileMenuOpen(false)}
              className={cn(
                "flex items-center rounded-lg px-4 py-2.5 text-sm font-medium transition-colors",
                isCoursesActive
                  ? "bg-primary-50 font-semibold text-primary-700 dark:bg-primary-950/60 dark:text-primary-300"
                  : "text-neutral-700 hover:bg-neutral-50 hover:text-neutral-900 dark:text-neutral-200 dark:hover:bg-neutral-800 dark:hover:text-white"
              )}
            >
              Courses
            </Link>
            <Link
              to="/my-learning"
              onClick={() => setMobileMenuOpen(false)}
              className={cn(
                "flex items-center rounded-lg px-4 py-2.5 text-sm font-medium transition-colors",
                isMyLearningActive
                  ? "bg-primary-50 font-semibold text-primary-700 dark:bg-primary-950/60 dark:text-primary-300"
                  : "text-neutral-700 hover:bg-neutral-50 hover:text-neutral-900 dark:text-neutral-200 dark:hover:bg-neutral-800 dark:hover:text-white"
              )}
            >
              My Learning
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
export default NavigationSection
