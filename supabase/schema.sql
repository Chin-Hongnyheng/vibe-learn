-- ==============================================================================
-- Vibelearn: Initial PostgreSQL Schema for Supabase
-- Description: Creates courses, modules, lessons, users, and progress tables
--              along with indexes, constraints, and Row Level Security (RLS) policies.
-- ==============================================================================

-- 1. Enable UUID Extension if needed
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- 2. Courses Table
CREATE TABLE IF NOT EXISTS public.courses (
    id TEXT PRIMARY KEY,
    slug TEXT UNIQUE NOT NULL,
    title TEXT NOT NULL,
    summary TEXT,
    cover_image_url TEXT,
    category TEXT,
    instructor_name TEXT,
    instructor_bio TEXT,
    instructor_avatar TEXT,
    level TEXT DEFAULT 'intermediate',
    price NUMERIC DEFAULT 0,
    popular BOOLEAN DEFAULT false,
    student_count INTEGER DEFAULT 0,
    learning_outcomes JSONB DEFAULT '[]'::jsonb,
    created_at TIMESTAMPTZ DEFAULT now()
);

-- 3. Modules Table
CREATE TABLE IF NOT EXISTS public.modules (
    id TEXT PRIMARY KEY,
    course_id TEXT NOT NULL REFERENCES public.courses(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    summary TEXT,
    position INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT now()
);

-- 4. Lessons Table
CREATE TABLE IF NOT EXISTS public.lessons (
    id TEXT PRIMARY KEY,
    module_id TEXT NOT NULL REFERENCES public.modules(id) ON DELETE CASCADE,
    course_id TEXT NOT NULL REFERENCES public.courses(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    youtube_video_id TEXT NOT NULL,
    video_url TEXT,
    duration INTEGER DEFAULT 0,
    free_preview BOOLEAN DEFAULT false,
    notes JSONB DEFAULT '[]'::jsonb,
    notes_plain TEXT,
    key_points JSONB DEFAULT '[]'::jsonb,
    pro_tip TEXT,
    resources JSONB DEFAULT '[]'::jsonb,
    position INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT now()
);

-- 5. Users Table
CREATE TABLE IF NOT EXISTS public.users (
    id TEXT PRIMARY KEY, -- Clerk User ID (e.g. user_2...)
    email TEXT,
    full_name TEXT,
    created_at TIMESTAMPTZ DEFAULT now()
);

-- 6. Progress Table
CREATE TABLE IF NOT EXISTS public.progress (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id TEXT NOT NULL,
    lesson_id TEXT NOT NULL REFERENCES public.lessons(id) ON DELETE CASCADE,
    course_id TEXT NOT NULL REFERENCES public.courses(id) ON DELETE CASCADE,
    is_completed BOOLEAN NOT NULL DEFAULT false,
    resume_timestamp INTEGER NOT NULL DEFAULT 0,
    updated_at TIMESTAMPTZ DEFAULT now(),
    CONSTRAINT progress_user_lesson_unique UNIQUE (user_id, lesson_id)
);

-- ==============================================================================
-- Indexes for Performance
-- ==============================================================================
CREATE INDEX IF NOT EXISTS idx_courses_slug ON public.courses(slug);
CREATE INDEX IF NOT EXISTS idx_modules_course_position ON public.modules(course_id, position);
CREATE INDEX IF NOT EXISTS idx_lessons_module_position ON public.lessons(module_id, position);
CREATE INDEX IF NOT EXISTS idx_lessons_course_id ON public.lessons(course_id);
CREATE INDEX IF NOT EXISTS idx_lessons_slug ON public.lessons(slug);
CREATE INDEX IF NOT EXISTS idx_progress_user_course ON public.progress(user_id, course_id);
CREATE INDEX IF NOT EXISTS idx_progress_user_lesson ON public.progress(user_id, lesson_id);

-- ==============================================================================
-- Row Level Security (RLS) Configuration
-- ==============================================================================
ALTER TABLE public.courses ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.modules ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.lessons ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.progress ENABLE ROW LEVEL SECURITY;

-- 1. Courses Policies
DROP POLICY IF EXISTS "Public Read Access courses" ON public.courses;
CREATE POLICY "Public Read Access courses" ON public.courses FOR SELECT USING (true);

DROP POLICY IF EXISTS "Allow Anon Write courses" ON public.courses;
CREATE POLICY "Allow Anon Write courses" ON public.courses FOR ALL USING (true) WITH CHECK (true);

-- 2. Modules Policies
DROP POLICY IF EXISTS "Public Read Access modules" ON public.modules;
CREATE POLICY "Public Read Access modules" ON public.modules FOR SELECT USING (true);

DROP POLICY IF EXISTS "Allow Anon Write modules" ON public.modules;
CREATE POLICY "Allow Anon Write modules" ON public.modules FOR ALL USING (true) WITH CHECK (true);

-- 3. Lessons Policies
DROP POLICY IF EXISTS "Public Read Access lessons" ON public.lessons;
CREATE POLICY "Public Read Access lessons" ON public.lessons FOR SELECT USING (true);

DROP POLICY IF EXISTS "Allow Anon Write lessons" ON public.lessons;
CREATE POLICY "Allow Anon Write lessons" ON public.lessons FOR ALL USING (true) WITH CHECK (true);

-- 4. Users Policies
DROP POLICY IF EXISTS "Public Read Access users" ON public.users;
CREATE POLICY "Public Read Access users" ON public.users FOR SELECT USING (true);

DROP POLICY IF EXISTS "Allow Anon Write users" ON public.users;
CREATE POLICY "Allow Anon Write users" ON public.users FOR ALL USING (true) WITH CHECK (true);

-- 5. Progress Policies
DROP POLICY IF EXISTS "Allow Read progress" ON public.progress;
CREATE POLICY "Allow Read progress" ON public.progress FOR SELECT USING (true);

DROP POLICY IF EXISTS "Allow Write progress" ON public.progress;
CREATE POLICY "Allow Write progress" ON public.progress FOR ALL USING (true) WITH CHECK (true);
