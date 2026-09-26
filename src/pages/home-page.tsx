import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { HeroSection } from "@/sections/herosection"
import { CourseSection } from "@/sections/coursesection"
import { ShowcaseSection } from "@/sections/showcasesection"
import { getFeaturedCourses } from "@/lib/api/courses"
import type { Course } from "@/types/courses"

export function HomePage() {
  const navigate = useNavigate()
  const [featuredCourses, setFeaturedCourses] = useState<Course[]>([])

  useEffect(() => {
    getFeaturedCourses(3)
      .then(setFeaturedCourses)
      .catch(() => setFeaturedCourses([]))
  }, [])

  return (
    <div>
      <HeroSection />
      <CourseSection
        courses={featuredCourses}
        onCourseClick={(course) => navigate(`/courses/${course.id}`)}
      />
      <ShowcaseSection />
    </div>
  )
}

export default HomePage
