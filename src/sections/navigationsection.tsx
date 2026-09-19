import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Bell, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import logoImg from "@/assets/logo.png"

export function NavigationSection() {
  const location = useLocation()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const isCoursesActive =
    location.pathname.startsWith("/courses") || location.pathname.startsWith("/course")
  const isMyLearningActive = location.pathname.startsWith("/my-learning")

  return (
    <header className="sticky top-0 z-50 h-[72px] border-b border-neutral-200 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Left: Brand Logo */}
        <Link
          to="/"
          className="group flex items-center gap-3 transition-opacity hover:opacity-90"
        >
          <img
            src={logoImg}
            alt="Vibe Learn Logo"
            className="h-9 w-auto object-contain transition-transform group-hover:scale-105"
          />
          <span className="font-sans text-2xl font-bold tracking-tight text-neutral-900">
            Vibe <span className="text-primary-500">Learn</span>
          </span>
        </Link>

        {/* Center: Desktop Navigation Links */}
        <nav className="hidden h-full items-center gap-8 md:flex">
          <Link
            to="/courses"
            className={cn(
              "relative flex h-full items-center text-sm font-medium transition-colors hover:text-neutral-900",
              isCoursesActive ? "font-semibold text-neutral-900" : "text-neutral-500"
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
              "relative flex h-full items-center text-sm font-medium transition-colors hover:text-neutral-900",
              isMyLearningActive ? "font-semibold text-neutral-900" : "text-neutral-500"
            )}
          >
            My Learning
            {isMyLearningActive && (
              <span className="absolute bottom-0 left-0 right-0 h-[2.5px] rounded-full bg-primary-500" />
            )}
          </Link>
        </nav>

        {/* Right: Notifications & User Avatar & Mobile Menu Toggle */}
        <div className="flex items-center gap-4">
          {/* Notification Bell */}
          <button
            type="button"
            aria-label="Notifications"
            className="relative flex h-10 w-10 items-center justify-center rounded-full text-neutral-700 transition-colors hover:bg-neutral-100 hover:text-neutral-900"
          >
            <Bell className="h-5 w-5" />
            <span className="absolute right-2.5 top-2.5 h-2 w-2 rounded-full bg-primary-500 ring-2 ring-white" />
          </button>

          {/* User Profile Avatar */}
          <div className="flex items-center">
            <button
              type="button"
              aria-label="User profile"
              className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-neutral-100 ring-2 ring-primary-500/20 transition-all hover:ring-primary-500/50"
            >
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
                alt="User Profile"
                className="h-full w-full object-cover"
                onError={(e) => {
                  // Fallback to stylized initials if image fails to load
                  const target = e.currentTarget
                  target.style.display = "none"
                  if (target.parentElement) {
                    target.parentElement.classList.add("bg-primary-100", "text-primary-700", "font-semibold", "text-sm", "grid", "place-items-center")
                    target.parentElement.innerText = "VL"
                  }
                }}
              />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="flex h-10 w-10 items-center justify-center rounded-lg text-neutral-700 transition-colors hover:bg-neutral-100 md:hidden"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="border-b border-neutral-200 bg-white px-4 pb-4 pt-2 shadow-lg md:hidden">
          <nav className="flex flex-col space-y-2">
            <Link
              to="/courses"
              onClick={() => setMobileMenuOpen(false)}
              className={cn(
                "flex items-center rounded-lg px-4 py-2.5 text-sm font-medium transition-colors",
                isCoursesActive
                  ? "bg-primary-50 font-semibold text-primary-700"
                  : "text-neutral-700 hover:bg-neutral-50 hover:text-neutral-900"
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
                  ? "bg-primary-50 font-semibold text-primary-700"
                  : "text-neutral-700 hover:bg-neutral-50 hover:text-neutral-900"
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
