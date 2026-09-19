export type CourseModule = {
  id?: number | string;
  title: string;
  description?: string;
  duration?: string;
  lessons?: Array<{
    id?: string;
    title: string;
    duration?: string;
  }>;
};

export type LearningOutcome = {
  icon: string;
  title: string;
  description: string;
};

export type Course = {
  id: number;
  title: string;
  description: string;
  category: string;
  tag: string;
  imgUrl: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  duration: number;
  durationFormatted?: string;
  modules: (string | CourseModule)[];
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
  };
  createdAt: string; 
};


export const CATEGORIES = [
  "Web Development",
  "Mobile Development",
  "Data Science",
  "Machine Learning",
  "AI",
  "UI/UX",
  "Graphic Design",
  "Digital Marketing",
  "Business",
  "Finance",
  "Photography",
  "Video Editing",
  "Music",
  "Health & Fitness",
  "Other",
] as const;


