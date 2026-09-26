import { supabase, isSupabaseConfigured } from "../lib/supabase";
import type { DbCourse, DbModule, DbLesson } from "../lib/supabase";
import { MOCK_COURSES } from "../lib/mock-data";
import type { Course, CourseModule, CourseLesson, LessonResource } from "../types/courses";

function formatSecondsToDuration(seconds: number): string {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}m ${secs.toString().padStart(2, "0")}s`;
}

function mapDbToCourse(
  dbCourse: DbCourse,
  dbModules: DbModule[] = [],
  dbLessons: DbLesson[] = [],
  fallbackCourse?: Course
): Course {
  const modulesWithLessons: CourseModule[] = dbModules
    .sort((a, b) => a.position - b.position)
    .map((mod) => {
      const lessons: CourseLesson[] = dbLessons
        .filter((l) => l.module_id === mod.id)
        .sort((a, b) => a.position - b.position)
        .map((l) => ({
          id: l.id,
          title: l.title,
          slug: l.slug,
          videoUrl: l.video_url || `https://www.youtube.com/watch?v=${l.youtube_video_id}`,
          youtubeVideoId: l.youtube_video_id,
          thumbnailUrl: `https://i.ytimg.com/vi/${l.youtube_video_id}/hqdefault.jpg`,
          duration: l.duration || 0,
          durationFormatted: formatSecondsToDuration(l.duration || 0),
          freePreview: !!l.free_preview,
          studentCount: dbCourse.student_count || 0,
          notes: l.notes || [],
          notesText: l.notes_plain || "",
          keyPoints: l.key_points || [],
          proTip: l.pro_tip || "",
          resources: (l.resources as LessonResource[]) || [],
        }));

      const totalModSecs = lessons.reduce((acc, cur) => acc + cur.duration, 0);

      return {
        id: mod.id,
        title: mod.title,
        summary: mod.summary || "",
        description: mod.summary || "",
        duration: formatSecondsToDuration(totalModSecs),
        lessons,
      };
    });

  const totalCourseSeconds = modulesWithLessons.reduce((acc, m) => {
    return acc + (m.lessons?.reduce((lAcc, l) => lAcc + l.duration, 0) || 0);
  }, 0);
  const durationMins = Math.round(totalCourseSeconds / 60);
  const hours = Math.floor(durationMins / 60);
  const mins = durationMins % 60;
  const durationFormatted = hours > 0 ? `${hours}h ${mins}m` : `${mins}m`;

  const levelVal = dbCourse.level
    ? (dbCourse.level.charAt(0).toUpperCase() + dbCourse.level.slice(1))
    : (fallbackCourse?.level || "Intermediate");

  return {
    id: fallbackCourse ? fallbackCourse.id : 1,
    slug: dbCourse.slug,
    title: dbCourse.title,
    description: dbCourse.summary || fallbackCourse?.description || "",
    category: dbCourse.category || fallbackCourse?.category || "Web Development",
    tag: dbCourse.popular ? "POPULAR" : fallbackCourse?.tag || "FEATURED",
    imgUrl: fallbackCourse?.imgUrl || dbCourse.cover_image_url || "",
    level: levelVal as Course["level"],
    duration: durationMins || fallbackCourse?.duration || 120,
    durationFormatted: durationFormatted || fallbackCourse?.durationFormatted || "2h",
    modules: modulesWithLessons.length > 0 ? modulesWithLessons : fallbackCourse?.modules || [],
    learningOutcomes: (dbCourse.learning_outcomes as Course["learningOutcomes"]) || fallbackCourse?.learningOutcomes || [],
    rating: fallbackCourse?.rating || 4.8,
    reviews: fallbackCourse?.reviews || 124,
    enrolled: dbCourse.student_count || fallbackCourse?.enrolled || 18000,
    studentsFormatted: `${(dbCourse.student_count || fallbackCourse?.enrolled || 18000).toLocaleString()}`,
    price: Number(dbCourse.price) || 0,
    isFree: Number(dbCourse.price) === 0,
    isFeatured: !!dbCourse.popular,
    language: "English",
    instructor: {
      name: dbCourse.instructor_name || fallbackCourse?.instructor.name || "Lead Instructor",
      avatar: dbCourse.instructor_avatar || fallbackCourse?.instructor.avatar || "",
      bio: dbCourse.instructor_bio || fallbackCourse?.instructor.bio || "",
    },
    createdAt: dbCourse.created_at || new Date().toISOString(),
  };
}

export const courseService = {
  /**
   * Fetch all courses from Supabase with fallback to local mock data
   */
  async fetchCourses(): Promise<Course[]> {
    if (!isSupabaseConfigured) {
      return MOCK_COURSES;
    }

    try {
      const { data: dbCourses, error } = await supabase
        .from("courses")
        .select("*")
        .order("created_at", { ascending: true });

      if (error || !dbCourses || dbCourses.length === 0) {
        return MOCK_COURSES;
      }

      // Merge with MOCK_COURSES to preserve rich assets and images
      return dbCourses.map((dbC, idx) => {
        const fallback = MOCK_COURSES.find((m) => m.slug === dbC.slug) || MOCK_COURSES[idx];
        return mapDbToCourse(dbC, [], [], fallback);
      });
    } catch (err) {
      console.warn("Supabase fetchCourses error, using fallback:", err);
      return MOCK_COURSES;
    }
  },

  /**
   * Fetch a single course by slug with full modules and lessons
   */
  async fetchCourseBySlug(slug: string): Promise<Course | null> {
    const fallback = MOCK_COURSES.find((c) => c.slug === slug || String(c.id) === slug) || null;

    if (!isSupabaseConfigured) {
      return fallback;
    }

    try {
      const { data: dbCourse, error } = await supabase
        .from("courses")
        .select("*")
        .eq("slug", slug)
        .maybeSingle();

      if (error || !dbCourse) {
        return fallback;
      }

      // Fetch modules and lessons
      const [{ data: dbModules }, { data: dbLessons }] = await Promise.all([
        supabase.from("modules").select("*").eq("course_id", dbCourse.id),
        supabase.from("lessons").select("*").eq("course_id", dbCourse.id),
      ]);

      return mapDbToCourse(dbCourse, dbModules || [], dbLessons || [], fallback || undefined);
    } catch (err) {
      console.warn("Supabase fetchCourseBySlug error, using fallback:", err);
      return fallback;
    }
  },

  /**
   * Fetch a single course by id or slug
   */
  async fetchCourseById(id: string | number): Promise<Course | null> {
    const fallback = MOCK_COURSES.find((c) => String(c.id) === String(id) || c.slug === String(id)) || null;
    if (fallback) {
      return this.fetchCourseBySlug(fallback.slug);
    }
    return this.fetchCourseBySlug(String(id));
  },

  /**
   * Fetch a lesson by slug from Supabase
   */
  async fetchLessonBySlug(lessonSlug: string): Promise<CourseLesson | null> {
    if (isSupabaseConfigured) {
      try {
        const { data: dbLesson, error } = await supabase
          .from("lessons")
          .select("*")
          .eq("slug", lessonSlug)
          .maybeSingle();

        if (!error && dbLesson) {
          return {
            id: dbLesson.id,
            title: dbLesson.title,
            slug: dbLesson.slug,
            videoUrl: dbLesson.video_url || `https://www.youtube.com/watch?v=${dbLesson.youtube_video_id}`,
            youtubeVideoId: dbLesson.youtube_video_id,
            thumbnailUrl: `https://i.ytimg.com/vi/${dbLesson.youtube_video_id}/hqdefault.jpg`,
            duration: dbLesson.duration || 0,
            durationFormatted: formatSecondsToDuration(dbLesson.duration || 0),
            freePreview: !!dbLesson.free_preview,
            notes: dbLesson.notes || [],
            notesText: dbLesson.notes_plain || "",
            keyPoints: dbLesson.key_points || [],
            proTip: dbLesson.pro_tip || "",
            resources: dbLesson.resources || [],
          };
        }
      } catch (err) {
        console.warn("Supabase fetchLessonBySlug error, searching fallback:", err);
      }
    }

    // Fallback search across MOCK_COURSES
    for (const course of MOCK_COURSES) {
      for (const mod of course.modules) {
        const found = mod.lessons?.find((l) => l.slug === lessonSlug || l.id === lessonSlug);
        if (found) return found;
      }
    }

    return null;
  },
};
