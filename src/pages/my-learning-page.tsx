import { useState, useEffect, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";
import {
  BookOpen,
  CheckCircle2,
  Clock,
  Compass,
  GraduationCap,
  Play,
  Sparkles,
} from "lucide-react";
import { courseService } from "@/services/course-service";
import { progressService, type UserProgressState } from "@/services/progress-service";
import type { Course } from "@/types/courses";
import { cn } from "@/lib/utils";

interface EnrolledCourseProgress {
  course: Course;
  totalLessons: number;
  completedLessons: number;
  percent: number;
  lastLessonId?: string;
  lastLessonSlug?: string;
  lastLessonTitle?: string;
  lastResumeTimestamp?: number;
}

export function MyLearningPage() {
  const { user } = useUser();
  const navigate = useNavigate();

  const [courses, setCourses] = useState<Course[]>([]);
  const [progressList, setProgressList] = useState<UserProgressState[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<"all" | "in-progress" | "completed">("all");

  useEffect(() => {
    async function loadData() {
      setLoading(true);
      try {
        const [allCourses, userProgress] = await Promise.all([
          courseService.fetchCourses(),
          user?.id ? progressService.fetchUserProgress(user.id) : Promise.resolve([]),
        ]);
        setCourses(allCourses);
        setProgressList(userProgress);
      } catch (err) {
        console.warn("Failed to load My Learning data:", err);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, [user?.id]);

  // Map progress to each course
  const enrolledCourses: EnrolledCourseProgress[] = useMemo(() => {
    if (!courses.length) return [];

    // Group progress by courseId
    const progressByCourse = new Map<string, UserProgressState[]>();
    for (const p of progressList) {
      const list = progressByCourse.get(p.courseId) || [];
      list.push(p);
      progressByCourse.set(p.courseId, list);
    }

    // Also check last visited course in local storage
    const lastVisitedCourseId = localStorage.getItem("lastVisitedCourseId");

    const result: EnrolledCourseProgress[] = [];

    for (const c of courses) {
      const cProgress =
        progressByCourse.get(c.slug) ||
        progressByCourse.get(String(c.id)) ||
        progressByCourse.get(`course.${c.slug}`) ||
        [];

      const allLessons = c.modules.flatMap((m) => m.lessons || []);
      const totalLessons = allLessons.length;
      const completedSet = new Set(
        cProgress.filter((p) => p.isCompleted).map((p) => p.lessonId)
      );
      const completedCount = completedSet.size;

      // Only count as enrolled if user completed >=1 lesson or has saved timestamp or visited
      const hasProgress = cProgress.length > 0 || String(c.id) === lastVisitedCourseId || c.slug === lastVisitedCourseId;

      if (!hasProgress && !cProgress.length) {
        continue;
      }

      const percent = totalLessons > 0 ? Math.round((completedCount / totalLessons) * 100) : 0;

      // Find resume lesson: first incomplete lesson or the last updated one
      let resumeLesson = allLessons.find((l) => !completedSet.has(l.id) && !completedSet.has(l.slug));
      if (!resumeLesson && allLessons.length > 0) {
        resumeLesson = allLessons[0];
      }

      const lastProgressItem = cProgress.find((p) => p.lessonId === resumeLesson?.id || p.lessonId === resumeLesson?.slug);

      result.push({
        course: c,
        totalLessons,
        completedLessons: completedCount,
        percent,
        lastLessonId: resumeLesson?.id,
        lastLessonSlug: resumeLesson?.slug,
        lastLessonTitle: resumeLesson?.title,
        lastResumeTimestamp: lastProgressItem?.resumeTimestamp || 0,
      });
    }

    // If no course has explicit progress yet, show the first course as a sample starter
    if (result.length === 0 && courses.length > 0) {
      const defaultCourse = courses[0];
      const allLessons = defaultCourse.modules.flatMap((m) => m.lessons || []);
      result.push({
        course: defaultCourse,
        totalLessons: allLessons.length,
        completedLessons: 0,
        percent: 0,
        lastLessonId: allLessons[0]?.id,
        lastLessonSlug: allLessons[0]?.slug,
        lastLessonTitle: allLessons[0]?.title,
        lastResumeTimestamp: 0,
      });
    }

    return result;
  }, [courses, progressList]);

  // Statistics
  const totalCompletedLessons = useMemo(() => {
    return progressList.filter((p) => p.isCompleted).length;
  }, [progressList]);

  const totalCoursesInProgress = useMemo(() => {
    return enrolledCourses.filter((e) => e.percent < 100).length;
  }, [enrolledCourses]);

  const totalCoursesCompleted = useMemo(() => {
    return enrolledCourses.filter((e) => e.percent === 100).length;
  }, [enrolledCourses]);

  const filteredCourses = useMemo(() => {
    if (activeTab === "in-progress") {
      return enrolledCourses.filter((e) => e.percent < 100);
    }
    if (activeTab === "completed") {
      return enrolledCourses.filter((e) => e.percent === 100);
    }
    return enrolledCourses;
  }, [enrolledCourses, activeTab]);

  return (
    <div className="min-h-screen bg-neutral-50/50 pb-20 dark:bg-neutral-950">
      {/* Hero Welcome Banner */}
      <section className="relative overflow-hidden border-b border-neutral-200/80 bg-white py-12 dark:border-neutral-800 dark:bg-neutral-900">
        <div className="absolute inset-0 bg-radial from-primary-500/5 via-transparent to-transparent pointer-events-none" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-4">
              {user?.imageUrl ? (
                <img
                  src={user.imageUrl}
                  alt={user.fullName || "User profile"}
                  className="h-16 w-16 rounded-full border-2 border-primary-500/20 object-cover shadow-sm"
                />
              ) : (
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-500/10 text-primary-600 dark:text-primary-400">
                  <GraduationCap className="h-8 w-8" />
                </div>
              )}
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="font-display text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl dark:text-white">
                    Welcome back, {user?.firstName || user?.fullName || "Learner"}!
                  </h1>
                  <Sparkles className="h-5 w-5 text-amber-500 fill-amber-500/20" />
                </div>
                <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                  Pick up where you left off and keep expanding your skills.
                </p>
              </div>
            </div>

            <Link
              to="/courses"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition-all hover:bg-neutral-800 active:scale-95 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-100"
            >
              <Compass className="h-4 w-4" />
              Explore All Courses
            </Link>
          </div>

          {/* Quick Stats Grid */}
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="flex items-center gap-4 rounded-xl border border-neutral-200/80 bg-neutral-50/60 p-4 dark:border-neutral-800 dark:bg-neutral-900/60">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-500/10 text-primary-600 dark:text-primary-400">
                <BookOpen className="h-6 w-6" />
              </div>
              <div>
                <p className="text-2xl font-bold text-neutral-900 dark:text-white">
                  {totalCoursesInProgress}
                </p>
                <p className="text-xs font-medium text-neutral-500 dark:text-neutral-400">
                  Courses In Progress
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-xl border border-neutral-200/80 bg-neutral-50/60 p-4 dark:border-neutral-800 dark:bg-neutral-900/60">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                <CheckCircle2 className="h-6 w-6" />
              </div>
              <div>
                <p className="text-2xl font-bold text-neutral-900 dark:text-white">
                  {totalCompletedLessons}
                </p>
                <p className="text-xs font-medium text-neutral-500 dark:text-neutral-400">
                  Lessons Completed
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-xl border border-neutral-200/80 bg-neutral-50/60 p-4 dark:border-neutral-800 dark:bg-neutral-900/60">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                <Clock className="h-6 w-6" />
              </div>
              <div>
                <p className="text-2xl font-bold text-neutral-900 dark:text-white">
                  {totalCoursesCompleted}
                </p>
                <p className="text-xs font-medium text-neutral-500 dark:text-neutral-400">
                  Courses Mastered
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="mx-auto max-w-7xl px-4 pt-10 sm:px-6 lg:px-8">
        {/* Filter Navigation Tabs */}
        <div className="flex items-center justify-between border-b border-neutral-200 dark:border-neutral-800">
          <div className="flex gap-8">
            <button
              onClick={() => setActiveTab("all")}
              className={cn(
                "relative pb-4 text-sm font-medium transition-colors",
                activeTab === "all"
                  ? "font-semibold text-neutral-900 dark:text-white"
                  : "text-neutral-500 hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-200"
              )}
            >
              All Courses ({enrolledCourses.length})
              {activeTab === "all" && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full bg-primary-500" />
              )}
            </button>

            <button
              onClick={() => setActiveTab("in-progress")}
              className={cn(
                "relative pb-4 text-sm font-medium transition-colors",
                activeTab === "in-progress"
                  ? "font-semibold text-neutral-900 dark:text-white"
                  : "text-neutral-500 hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-200"
              )}
            >
              In Progress ({totalCoursesInProgress})
              {activeTab === "in-progress" && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full bg-primary-500" />
              )}
            </button>

            <button
              onClick={() => setActiveTab("completed")}
              className={cn(
                "relative pb-4 text-sm font-medium transition-colors",
                activeTab === "completed"
                  ? "font-semibold text-neutral-900 dark:text-white"
                  : "text-neutral-500 hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-200"
              )}
            >
              Completed ({totalCoursesCompleted})
              {activeTab === "completed" && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full bg-primary-500" />
              )}
            </button>
          </div>
        </div>

        {/* Loading Skeleton */}
        {loading ? (
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((n) => (
              <div
                key={n}
                className="h-80 animate-pulse rounded-2xl border border-neutral-200 bg-white p-5 dark:border-neutral-800 dark:bg-neutral-900"
              />
            ))}
          </div>
        ) : filteredCourses.length === 0 ? (
          /* Empty State */
          <div className="mt-16 flex flex-col items-center justify-center rounded-2xl border border-dashed border-neutral-300 bg-white p-12 text-center dark:border-neutral-800 dark:bg-neutral-900/50">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-neutral-100 dark:bg-neutral-800">
              <BookOpen className="h-8 w-8 text-neutral-400" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-neutral-900 dark:text-white">
              No courses found in this tab
            </h3>
            <p className="mt-2 max-w-sm text-sm text-neutral-500 dark:text-neutral-400">
              {activeTab === "completed"
                ? "You haven't completed any course yet. Keep watching and mark lessons as complete!"
                : "Explore our rich curriculum and start learning today."}
            </p>
            <Link
              to="/courses"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-primary-500 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-primary-600 active:scale-95"
            >
              <Compass className="h-4 w-4" />
              Browse Courses
            </Link>
          </div>
        ) : (
          /* Enrolled Courses Grid */
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredCourses.map(({ course, totalLessons, completedLessons, percent, lastLessonSlug, lastLessonTitle }) => {
              const resumeUrl = lastLessonSlug
                ? `/courses/${course.id}/learn?lesson=${lastLessonSlug}`
                : `/courses/${course.id}/learn`;

              return (
                <div
                  key={course.id}
                  className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-neutral-200/80 bg-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900"
                >
                  <div>
                    {/* Course Thumbnail */}
                    <div className="relative aspect-video w-full overflow-hidden bg-neutral-100 dark:bg-neutral-800">
                      <img
                        src={course.imgUrl}
                        alt={course.title}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <span className="absolute top-3 left-3 rounded-full bg-neutral-900/80 px-2.5 py-1 text-xs font-medium text-white backdrop-blur-md">
                        {course.category}
                      </span>
                    </div>

                    {/* Course Body */}
                    <div className="p-5">
                      <h3 className="line-clamp-1 font-display text-lg font-bold text-neutral-900 transition-colors group-hover:text-primary-600 dark:text-white dark:group-hover:text-primary-400">
                        {course.title}
                      </h3>
                      <p className="mt-1 line-clamp-2 text-xs text-neutral-500 dark:text-neutral-400">
                        {course.description}
                      </p>

                      {/* Progress Bar & Stats */}
                      <div className="mt-5">
                        <div className="flex items-center justify-between text-xs font-semibold">
                          <span className="text-neutral-700 dark:text-neutral-300">
                            {completedLessons} of {totalLessons} lessons
                          </span>
                          <span className="text-primary-600 dark:text-primary-400">{percent}%</span>
                        </div>
                        <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-neutral-100 dark:bg-neutral-800">
                          <div
                            className="h-full rounded-full bg-primary-500 transition-all duration-500"
                            style={{ width: `${percent}%` }}
                          />
                        </div>
                      </div>

                      {/* Up Next Lesson Hint */}
                      {lastLessonTitle && percent < 100 && (
                        <div className="mt-4 rounded-lg bg-neutral-50 p-2.5 text-xs dark:bg-neutral-800/60">
                          <span className="font-semibold text-neutral-700 dark:text-neutral-300">
                            Next up:
                          </span>{" "}
                          <span className="line-clamp-1 text-neutral-500 dark:text-neutral-400">
                            {lastLessonTitle}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Actions Footer */}
                  <div className="flex items-center justify-between border-t border-neutral-100 p-4 dark:border-neutral-800/80">
                    <button
                      onClick={() => navigate(`/courses/${course.id}`)}
                      className="text-xs font-medium text-neutral-500 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
                    >
                      View Syllabus
                    </button>

                    <Link
                      to={resumeUrl}
                      className="inline-flex items-center gap-1.5 rounded-lg bg-primary-500 px-4 py-2 text-xs font-semibold text-white shadow-sm transition-all hover:bg-primary-600 active:scale-95"
                    >
                      <Play className="h-3.5 w-3.5 fill-current" />
                      {percent === 100 ? "Review Course" : "Resume Lesson"}
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </main>
    </div>
  );
}

export default MyLearningPage;
