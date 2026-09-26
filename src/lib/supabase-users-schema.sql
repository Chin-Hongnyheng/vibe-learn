-- ============================================================
-- Vibelearn — User-Domain Schema
-- Run this in your Supabase SQL Editor AFTER supabase-seed.sql
-- (depends on the courses and modules tables already existing)
-- ============================================================

-- ---- lessons -----------------------------------------------
-- Smallest unit of content. Each lesson has one YouTube video.
-- Public read (anon). No writes from the browser.

create table if not exists lessons (
  id               bigint primary key generated always as identity,
  module_id        bigint references modules(id) on delete cascade,
  title            text not null,
  slug             text not null unique,
  youtube_video_id text not null,
  notes            text,
  position         integer not null
);

alter table lessons enable row level security;

drop policy if exists "public read lessons" on lessons;
create policy "public read lessons" on lessons for select using (true);

-- ---- users -------------------------------------------------
-- Stores basic learner info synced from Clerk.
-- Written only by the backend webhook (never by the browser).
-- RLS: each user can read only their own row.

create table if not exists users (
  id         text primary key,         -- Clerk User ID e.g. "user_2abc..."
  email      text not null,
  first_name text not null,
  last_name  text not null,
  avatar_url text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table users enable row level security;

drop policy if exists "users read own row" on users;
create policy "users read own row" on users
  for select using (auth.uid()::text = id);

-- ---- progress ----------------------------------------------
-- One record per (user_id × lesson_id).
-- Written only through the Express backend — never directly from the browser.
-- RLS lets an authenticated user read their own rows as a safety net,
-- but in practice reads also go through the backend.

create table if not exists progress (
  user_id          text references users(id) on delete cascade,
  lesson_id        bigint references lessons(id) on delete cascade,
  course_id        bigint references courses(id) on delete cascade,
  completed        boolean not null default false,
  resume_timestamp integer not null default 0,  -- seconds into the video
  completed_at     timestamptz,
  updated_at       timestamptz not null default now(),
  primary key (user_id, lesson_id)
);

alter table progress enable row level security;

drop policy if exists "users read own progress" on progress;
create policy "users read own progress" on progress
  for select using (auth.uid()::text = user_id);

-- No INSERT / UPDATE / DELETE policies from the browser.
-- All writes go through the Express backend using the service_role key.

-- ---- enrollments -------------------------------------------
-- Records which courses a learner is enrolled in.
-- Written by the backend; read by authenticated users for My Learning.

create table if not exists enrollments (
  user_id          text references users(id) on delete cascade,
  course_id        bigint references courses(id) on delete cascade,
  enrolled_at      timestamptz not null default now(),
  last_accessed_at timestamptz,
  primary key (user_id, course_id)
);

alter table enrollments enable row level security;

drop policy if exists "users read own enrollments" on enrollments;
create policy "users read own enrollments" on enrollments
  for select using (auth.uid()::text = user_id);

-- ---- notifications -----------------------------------------
-- In-app notifications (bell icon). Written by the backend.
-- Presentational only for now — no action endpoints yet.

create table if not exists notifications (
  id         bigint primary key generated always as identity,
  user_id    text references users(id) on delete cascade,
  title      text not null,
  message    text not null,
  read       boolean not null default false,
  created_at timestamptz not null default now()
);

alter table notifications enable row level security;

drop policy if exists "users read own notifications" on notifications;
create policy "users read own notifications" on notifications
  for select using (auth.uid()::text = user_id);
