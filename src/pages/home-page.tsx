import { useNavigate } from "react-router-dom"
import { HeroSection } from "@/sections/herosection"
import { CourseSection } from "@/sections/coursesection"

export function HomePage() {
  const navigate = useNavigate()

  return (
    <div>
      <HeroSection />
      <CourseSection onCourseClick={(course) => navigate(`/courses/${course.id}`)} />
    </div>
  )
}

export default HomePage
