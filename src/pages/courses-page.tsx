import { useState, useEffect, useMemo } from "react"
import { useNavigate } from "react-router-dom"
import { useUser } from "@clerk/clerk-react"
import { CourseCard } from "@/components/common/course-card"
import { courseService } from "@/services/course-service"
import { progressService, type UserProgressState } from "@/services/progress-service"
import type { Course } from "@/types/courses"

export function CoursesPage() {
  const navigate = useNavigate()
  const { user } = useUser()

  const [courses, setCourses] = useState<Course[]>([])
  const [progressList, setProgressList] = useState<UserProgressState[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function load() {
      setLoading(true)
      try {
        const [allCourses, userProgress] = await Promise.all([
          courseService.fetchCourses(),
          user?.id ? progressService.fetchUserProgress(user.id) : Promise.resolve([]),
        ])
        setCourses(allCourses)
        setProgressList(userProgress)
      } catch (err) {
        console.warn("Failed to load courses:", err)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [user?.id])

  // Map progress percent per course
  const courseProgressMap = useMemo(() => {
    const map = new Map<string | number, number>()
    for (const course of courses) {
      const allLessons = course.modules.flatMap((m) => m.lessons || [])
      if (!allLessons.length) {
        map.set(course.id, 0)
        continue
      }

      const completedCount = progressList.filter(
        (p) =>
          (p.courseId === course.slug ||
            p.courseId === String(course.id) ||
            p.courseId === `course.${course.slug}`) &&
          p.isCompleted
      ).length

      const percent = Math.round((completedCount / allLessons.length) * 100)
      map.set(course.id, percent)
    }
    return map
  }, [courses, progressList])

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      {/* Page Header */}
      <div className="border-b border-neutral-200 pb-8 dark:border-neutral-800">
        <h1 className="font-display text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl dark:text-white">
          All Courses
        </h1>
        <p className="mt-3 max-w-2xl text-base text-neutral-600 dark:text-neutral-400">
          Discover a wide range of practical courses designed to teach you modern development,
          data science, and design skills.
        </p>
      </div>

      {/* Courses Grid */}
      {loading ? (
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <div
              key={n}
              className="h-80 animate-pulse rounded-2xl border border-neutral-200 bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-900"
            />
          ))}
        </div>
      ) : (
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              progress={courseProgressMap.get(course.id) || 0}
              onClick={() => navigate(`/courses/${course.id}`)}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default CoursesPage
