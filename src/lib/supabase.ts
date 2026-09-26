import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || "";
const supabaseAnonKey =
  import.meta.env.VITE_SUPABASE_ANON_KEY ||
  import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY ||
  "";

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey);

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: false,
    autoRefreshToken: false,
  },
});

export interface DbCourse {
  id: string;
  slug: string;
  title: string;
  summary: string | null;
  cover_image_url: string | null;
  category: string | null;
  instructor_name: string | null;
  instructor_bio: string | null;
  instructor_avatar: string | null;
  level: string | null;
  price: number | null;
  popular: boolean | null;
  student_count: number | null;
  learning_outcomes: Array<{
    icon?: string;
    title: string;
    description: string;
  }> | null;
  created_at: string;
}

export interface DbModule {
  id: string;
  course_id: string;
  title: string;
  summary: string | null;
  position: number;
  created_at: string;
}

export interface DbLesson {
  id: string;
  module_id: string;
  course_id: string;
  title: string;
  slug: string;
  youtube_video_id: string;
  video_url: string | null;
  duration: number | null;
  free_preview: boolean | null;
  notes: unknown[] | null;
  notes_plain: string | null;
  key_points: string[] | null;
  pro_tip: string | null;
  resources: unknown[] | null;
  position: number;
  created_at: string;
}

export interface DbUser {
  id: string;
  email: string | null;
  full_name: string | null;
  created_at: string;
}

export interface DbProgress {
  id: string;
  user_id: string;
  lesson_id: string;
  course_id: string;
  is_completed: boolean;
  resume_timestamp: number;
  updated_at: string;
}
