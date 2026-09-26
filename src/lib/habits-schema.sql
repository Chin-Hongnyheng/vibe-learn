-- ============================================================
-- VIBELEARN — Habits & Daily Logs Schema + Seed
-- Run this in your Supabase SQL Editor.
-- ============================================================

-- ============================================================
-- SECTION 1: TABLES
-- ============================================================

-- ---- habits ------------------------------------------------
create table if not exists habits (
  id           bigint primary key generated always as identity,
  user_id      text references users(id) on delete cascade,
  title        text not null,
  description  text,
  category     text not null default 'Learning',
  frequency    text not null default 'daily' check (frequency in ('daily', 'weekly')),
  target_count integer not null default 1,
  unit         text not null default 'times',
  is_active    boolean not null default true,
  created_at   timestamptz not null default now(),
  updated_at   timestamptz not null default now()
);

-- ---- daily_logs --------------------------------------------
create table if not exists daily_logs (
  id         bigint primary key generated always as identity,
  habit_id   bigint not null references habits(id) on delete cascade,
  log_date   date not null default current_date,
  completed  boolean not null default false,
  count      integer not null default 1,
  notes      text,
  created_at timestamptz not null default now(),
  constraint uq_habit_daily_log unique (habit_id, log_date)
);

-- ============================================================
-- SECTION 2: ROW LEVEL SECURITY (RLS)
-- ============================================================

alter table habits enable row level security;
alter table daily_logs enable row level security;

-- Public / anon policies (allow reading and logging for development & learning)
drop policy if exists "allow read habits" on habits;
drop policy if exists "allow insert habits" on habits;
drop policy if exists "allow update habits" on habits;
drop policy if exists "allow delete habits" on habits;

create policy "allow read habits" on habits for select using (true);
create policy "allow insert habits" on habits for insert with check (true);
create policy "allow update habits" on habits for update using (true);
create policy "allow delete habits" on habits for delete using (true);

drop policy if exists "allow read daily_logs" on daily_logs;
drop policy if exists "allow insert daily_logs" on daily_logs;
drop policy if exists "allow update daily_logs" on daily_logs;
drop policy if exists "allow delete daily_logs" on daily_logs;

create policy "allow read daily_logs" on daily_logs for select using (true);
create policy "allow insert daily_logs" on daily_logs for insert with check (true);
create policy "allow update daily_logs" on daily_logs for update using (true);
create policy "allow delete daily_logs" on daily_logs for delete using (true);

-- ============================================================
-- SECTION 3: SEED DATA
-- ============================================================

-- Insert sample learning habits (only if none exist with same title)
insert into habits (title, description, category, frequency, target_count, unit, is_active)
values
  (
    'Watch 1 Course Lesson',
    'Keep your momentum going by completing at least one video lesson every day.',
    'Learning',
    'daily',
    1,
    'lesson',
    true
  ),
  (
    'Code Practice & Projects',
    'Spend focused time building features or coding exercises.',
    'Coding',
    'daily',
    30,
    'minutes',
    true
  ),
  (
    'Review Lesson Notes',
    'Reflect on key takeaways and summarize lessons learned.',
    'Learning',
    'daily',
    1,
    'session',
    true
  ),
  (
    'Deep Focus Study',
    'Uninterrupted learning block with zero notifications or distractions.',
    'Focus',
    'daily',
    45,
    'minutes',
    true
  )
on conflict do nothing;

-- Seed daily logs for today and yesterday linked to the above habits
insert into daily_logs (habit_id, log_date, completed, count, notes)
select
  h.id,
  current_date,
  true,
  1,
  'Completed early in the morning'
from habits h
where h.title = 'Watch 1 Course Lesson'
on conflict (habit_id, log_date) do update
set completed = excluded.completed, count = excluded.count, notes = excluded.notes;

insert into daily_logs (habit_id, log_date, completed, count, notes)
select
  h.id,
  current_date,
  false,
  15,
  'Practiced for 15 minutes, 15 more to go'
from habits h
where h.title = 'Code Practice & Projects'
on conflict (habit_id, log_date) do update
set completed = excluded.completed, count = excluded.count, notes = excluded.notes;

insert into daily_logs (habit_id, log_date, completed, count, notes)
select
  h.id,
  current_date - 1,
  true,
  1,
  'Reviewed full Next.js App Router notes yesterday'
from habits h
where h.title = 'Review Lesson Notes'
on conflict (habit_id, log_date) do update
set completed = excluded.completed, count = excluded.count, notes = excluded.notes;

-- ============================================================
-- SECTION 4: VERIFICATION
-- ============================================================
-- Run these queries to check your setup:
--   select * from habits;
--   select * from daily_logs;
--   select h.title, l.log_date, l.completed, l.count, l.notes
--   from habits h
--   join daily_logs l on l.habit_id = h.id;
