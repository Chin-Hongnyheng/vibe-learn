export type Course = {
  id: number;
  title: string;
  description: string;
  category: string;
  tag: string;
  imgUrl: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  duration: number;
  modules: string[];
  rating: number; 
  reviews: number;
  enrolled: number;
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


