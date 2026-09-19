import { useNavigate } from "react-router-dom"
import { HeroSection } from "@/sections/herosection"
import { CourseSection } from "@/sections/coursesection"
import { ShowcaseSection } from "@/sections/showcasesection"

export function HomePage() {
  const navigate = useNavigate()

  return (
    <div>
      <HeroSection />
      <CourseSection onCourseClick={(course) => navigate(`/courses/${course.id}`)} />
      <ShowcaseSection />
    </div>
  )
}

export default HomePage
