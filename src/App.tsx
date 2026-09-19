import { CourseCard } from "@/components/common/course-card"
import { MOCK_COURSES } from "@/lib/mock-data"
import { Footer } from "@/sections/footer"

export function App() {
  return (
    <main className="min-h-svh bg-background p-6">
      <section className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {MOCK_COURSES.map((course, i) => (
          <CourseCard key={course.id} course={course} progress={(i + 1) * 2} />
        ))}
      </section>
      <Footer />
    </main>
  )
}

export default App
