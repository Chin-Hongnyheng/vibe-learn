export type LessonResource = {
  type: string;
  title: string;
  description?: string;
  url: string;
};

export type CourseLesson = {
  id: string;
  title: string;
  slug: string;
  videoUrl: string;
  youtubeVideoId: string;
  thumbnailUrl?: string;
  duration: number; // in seconds
  durationFormatted: string;
  freePreview: boolean;
  studentCount?: number;
  notes?: unknown[];
  notesText?: string;
  keyPoints?: string[];
  proTip?: string;
  resources?: LessonResource[];
};

export type CourseModule = {
  id?: number | string;
  title: string;
  summary?: string;
  description?: string;
  duration?: string;
  lessons?: CourseLesson[];
};

export type LearningOutcome = {
  icon: string;
  title: string;
  description: string;
};

export type Course = {
  id: number;
  slug: string;
  title: string;
  description: string;
  category: string;
  tag: string;
  imgUrl: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  duration: number; // in minutes
  durationFormatted?: string;
  modules: CourseModule[];
  learningOutcomes?: LearningOutcome[];
  rating: number;
  reviews: number;
  enrolled: number;
  studentsFormatted?: string;
  price: number;
  isFree: boolean;
  isFeatured: boolean;
  language: string;
  instructor: {
    name: string;
    avatar: string;
    bio?: string;
    expertise?: string[];
  };
  createdAt: string;
};

export const CATEGORIES = [
  "Web Development",
  "AI Engineering",
  "Backend & Infrastructure",
  "Data",
  "Languages",
  "Security",
  "Mobile Development",
  "UI/UX",
  "Graphic Design",
  "Digital Marketing",
  "Finance",
  "Photography",
] as const;
