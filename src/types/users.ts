import type { Course, CourseLesson } from "./courses";

// ------------------------------------------------------------------
// Instructor
// ------------------------------------------------------------------

/** Full instructor profile — mirrors the inline `instructor` shape
 *  embedded on `Course` but extends it with identity fields and courses taught. */
export type InstructorProfile = {
  id: string; // Clerk user id or instructor id
  name: string; // matches Course.instructor.name
  avatar: string; // matches Course.instructor.avatar
  bio?: string; // matches Course.instructor.bio
  expertise?: string[]; // matches Course.instructor.expertise
  courses?: Course[]; // courses taught by this instructor
  courseIds?: Course["id"][]; // IDs of courses this instructor owns
};

// ------------------------------------------------------------------
// Progress
// ------------------------------------------------------------------

/** Tracks learner progress on a specific lesson in a course. */
export type LessonProgress = {
  lessonId: CourseLesson["id"];
  courseId: Course["id"];
  completed: boolean;
  /** Last watched position in seconds (YouTube resume point). */
  resumeTimestamp: number;
  updatedAt: string;
};

// ------------------------------------------------------------------
// Enrollment
// ------------------------------------------------------------------

/** Records that a learner is enrolled in a course. */
export type Enrollment = {
  courseId: Course["id"];
  enrolledAt: string;
  /** Optional hydrated course data */
  course?: Course;
};

// ------------------------------------------------------------------
// User
// ------------------------------------------------------------------

/** Learner / authenticated user stored in the database.
 *  Primary key (`id`) corresponds directly to the Clerk User ID. */
export type User = {
  id: string; // Clerk user id
  email: string;
  firstName?: string;
  lastName?: string;
  avatarUrl?: string;
  role?: "learner" | "instructor" | "admin";
  createdAt: string;
  enrollments?: Enrollment[];
  enrolledCourses?: Course[];
  progress?: LessonProgress[];
};

/** Lightweight version used in headers and lists. */
export type UserSummary = Pick<User, "id" | "firstName" | "lastName" | "avatarUrl" | "email">;

// ------------------------------------------------------------------
// Auth / Session
// ------------------------------------------------------------------

/** Shape returned for the currently authenticated session / learner profile. */
export type AuthenticatedUser = UserSummary & {
  enrolledCourseIds: Course["id"][];
};
