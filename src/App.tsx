import { CourseCard } from "@/components/common/course-card"
import { MOCK_COURSES } from "@/lib/mock-data"
import { HeroSection } from "@/sections/herosection"

export function App() {
  return (
    <main className="min-h-svh bg-background">
      <HeroSection />
      <section
        id="courses"
        aria-label="Courses"
        className="mx-auto grid max-w-6xl scroll-mt-6 gap-6 px-6 py-12 sm:grid-cols-2 lg:grid-cols-3"
      >
        {MOCK_COURSES.map((course, i) => (
          <CourseCard key={course.id} course={course} progress={(i + 1) * 2} />
        ))}
      </section>
    </main>
  )
}

export default App
