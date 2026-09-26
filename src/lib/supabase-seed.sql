-- ============================================================
-- Vibelearn Supabase Schema + Seed
-- Run this once in your Supabase project's SQL Editor.
-- ============================================================

-- ---- Tables ------------------------------------------------

create table if not exists instructors (
  id bigint primary key generated always as identity,
  name text not null,
  avatar text not null,
  bio text
);

create table if not exists courses (
  id bigint primary key generated always as identity,
  title text not null,
  description text not null,
  category text not null,
  tag text not null,
  img_url text not null,
  level text not null check (level in ('Beginner','Intermediate','Advanced')),
  duration_minutes integer not null,
  rating numeric(3,1) not null default 0,
  reviews integer not null default 0,
  enrolled integer not null default 0,
  price numeric(10,2) not null default 0,
  is_free boolean not null default false,
  is_featured boolean not null default false,
  language text not null default 'English',
  learning_outcomes jsonb,
  instructor_id bigint references instructors(id),
  created_at timestamptz not null default now()
);

create table if not exists modules (
  id bigint primary key generated always as identity,
  course_id bigint references courses(id) on delete cascade,
  title text not null,
  description text,
  duration text,
  position integer not null
);

-- ---- Row Level Security ------------------------------------

alter table courses enable row level security;
alter table instructors enable row level security;
alter table modules enable row level security;

drop policy if exists "public read courses" on courses;
drop policy if exists "public read instructors" on instructors;
drop policy if exists "public read modules" on modules;

create policy "public read courses" on courses for select using (true);
create policy "public read instructors" on instructors for select using (true);
create policy "public read modules" on modules for select using (true);

-- ---- Seed Instructors --------------------------------------

insert into instructors (name, avatar, bio) values
  ('Sarah Johnson',  'https://i.pravatar.cc/150?img=47', 'Senior Frontend Engineer with 10+ years of experience. Passionate about teaching modern web technologies.'),
  ('Dr. Alan Park',  'https://i.pravatar.cc/150?img=12', 'PhD in Computer Science. Former ML engineer at Google. Loves making complex topics simple.'),
  ('Mia Chen',       'https://i.pravatar.cc/150?img=33', 'Product designer at Airbnb. Loves crafting intuitive, beautiful digital experiences.'),
  ('Jake Thompson',  'https://i.pravatar.cc/150?img=7',  'iOS developer with 8 years of experience. Has shipped 20+ apps on the App Store.'),
  ('Rachel Green',   'https://i.pravatar.cc/150?img=56', 'CMO turned educator. Helped 50+ startups scale their online presence.'),
  ('Prof. Lisa Wang','https://i.pravatar.cc/150?img=44', 'AI researcher and professor at MIT. Passionate about democratising AI education.'),
  ('Marco Rossi',    'https://i.pravatar.cc/150?img=68', 'Award-winning travel photographer. Shot for National Geographic and Vogue.'),
  ('David Kim',      'https://i.pravatar.cc/150?img=15', 'Full-stack architect with 12 years of experience. Loves building and teaching scalable systems.'),
  ('Nina Patel',     'https://i.pravatar.cc/150?img=39', 'Certified Financial Planner with 15 years of experience helping individuals build wealth.'),
  ('Aisha Diallo',   'https://i.pravatar.cc/150?img=25', 'Creative director and brand designer with clients across 30+ countries.');

-- ---- Seed Courses ------------------------------------------
-- Uses a CTE to look up instructor ids by name for safety.

with inst as (
  select id, name from instructors
)
insert into courses
  (title, description, category, tag, img_url, level, duration_minutes,
   rating, reviews, enrolled, price, is_free, is_featured, language,
   learning_outcomes, instructor_id, created_at)
values
  (
    'Next.js for Production',
    'Build scalable, high-performance web applications with Next.js, best practices, and production-ready deployment strategies.',
    'Web Development', 'POPULAR',
    'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800&auto=format&fit=crop',
    'Intermediate', 1104, 4.9, 1280, 2100, 0, true, true, 'English',
    '[{"icon":"layers","title":"App Router Foundations","description":"Master the App Router, layouts, loading states, and nested routing."},{"icon":"database","title":"Data Fetching & Caching","description":"Fetch data efficiently and leverage caching for better performance."},{"icon":"gauge","title":"Performance Optimization","description":"Optimize rendering, assets, and bundle size for faster apps."},{"icon":"cloud","title":"Deployment & Scaling","description":"Deploy with confidence and scale your Next.js applications."}]'::jsonb,
    (select id from inst where name = 'Sarah Johnson'),
    '2024-01-15T08:00:00Z'
  ),
  (
    'Python for Data Science & Machine Learning',
    'Learn Python, Pandas, NumPy, Matplotlib, and Scikit-learn to analyze data and build ML models from the ground up.',
    'Data Science', 'Python',
    'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&auto=format&fit=crop',
    'Intermediate', 2160, 4.9, 5810, 34500, 49.99, false, true, 'English',
    null,
    (select id from inst where name = 'Dr. Alan Park'),
    '2024-02-20T10:00:00Z'
  ),
  (
    'UI/UX Design Fundamentals with Figma',
    'Learn the principles of great design and how to use Figma to create stunning prototypes and design systems.',
    'UI/UX', 'Figma',
    'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&auto=format&fit=crop',
    'Beginner', 900, 4.7, 2108, 12400, 29.99, false, false, 'English',
    null,
    (select id from inst where name = 'Mia Chen'),
    '2024-03-05T09:00:00Z'
  ),
  (
    'iOS App Development with Swift & SwiftUI',
    'Build fully functional iOS apps using Swift and SwiftUI. Publish your first app to the App Store by the end of this course.',
    'Mobile Development', 'Swift',
    'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&auto=format&fit=crop',
    'Intermediate', 1800, 4.6, 1432, 8750, 39.99, false, false, 'English',
    null,
    (select id from inst where name = 'Jake Thompson'),
    '2024-04-10T11:00:00Z'
  ),
  (
    'Digital Marketing Masterclass',
    'From SEO and social media to email campaigns and paid ads — learn every channel to grow any business online.',
    'Digital Marketing', 'Marketing',
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop',
    'Beginner', 720, 4.5, 3910, 22100, 0, true, true, 'English',
    null,
    (select id from inst where name = 'Rachel Green'),
    '2024-05-01T08:30:00Z'
  ),
  (
    'Introduction to Artificial Intelligence',
    'Understand the core concepts of AI — from neural networks and NLP to ethics and the future of intelligent systems.',
    'AI', 'AI',
    'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&auto=format&fit=crop',
    'Beginner', 600, 4.8, 4502, 28300, 19.99, false, true, 'English',
    null,
    (select id from inst where name = 'Prof. Lisa Wang'),
    '2024-06-12T07:00:00Z'
  ),
  (
    'Photography for Beginners: From Auto to Manual',
    'Take stunning photos with any camera. Learn composition, lighting, exposure, and post-processing in Lightroom.',
    'Photography', 'Photography',
    'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&auto=format&fit=crop',
    'Beginner', 480, 4.7, 1870, 10500, 0, true, false, 'English',
    null,
    (select id from inst where name = 'Marco Rossi'),
    '2024-07-08T14:00:00Z'
  ),
  (
    'Full-Stack Web Development with Node.js',
    'Build scalable full-stack apps with Node.js, Express, MongoDB, and React. Deploy to the cloud with confidence.',
    'Web Development', 'Node.js',
    'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&auto=format&fit=crop',
    'Advanced', 2400, 4.9, 6120, 41000, 59.99, false, true, 'English',
    null,
    (select id from inst where name = 'David Kim'),
    '2024-08-20T10:00:00Z'
  ),
  (
    'Personal Finance & Investing 101',
    'Learn to budget, save, invest, and grow your wealth. From stocks and ETFs to crypto and retirement planning.',
    'Finance', 'Finance',
    'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&auto=format&fit=crop',
    'Beginner', 540, 4.6, 2340, 15800, 24.99, false, false, 'English',
    null,
    (select id from inst where name = 'Nina Patel'),
    '2024-09-01T09:00:00Z'
  ),
  (
    'Graphic Design with Adobe Illustrator',
    'Master vector graphics, logo design, branding, and illustration from scratch using Adobe Illustrator.',
    'Graphic Design', 'Illustrator',
    'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&auto=format&fit=crop',
    'Intermediate', 1080, 4.5, 1590, 9200, 34.99, false, false, 'English',
    null,
    (select id from inst where name = 'Aisha Diallo'),
    '2024-09-15T13:00:00Z'
  );

-- ---- Seed Modules ------------------------------------------
-- Insert modules for course 1 (Next.js for Production)

with c as (select id from courses where title = 'Next.js for Production')
insert into modules (course_id, title, description, duration, position) values
  ((select id from c), 'Introduction to Next.js',           'Understand the core features of Next.js and why it''s the React framework.', '45m',    1),
  ((select id from c), 'Project Setup & Structure',          'Set up a new Next.js project and explore the folder structure.',              '1h 12m', 2),
  ((select id from c), 'Routing & Layouts',                  'Learn about file-based routing, layouts, and nested routes.',                 '1h 36m', 3),
  ((select id from c), 'Server Components',                  'Build components with server-side rendering and data fetching.',              '1h 42m', 4),
  ((select id from c), 'Data Fetching & Caching',            'Fetch data efficiently and leverage caching for better performance.',         '1h 28m', 5),
  ((select id from c), 'Authentication',                     'Implement authentication using NextAuth.js in your app.',                    '1h 18m', 6),
  ((select id from c), 'Optimization & SEO',                 'Optimize metadata, images, fonts, and scripts for web vitals.',              '1h 15m', 7),
  ((select id from c), 'State Management & Server Actions',  'Manage client and server state seamlessly without API boilerplate.',         '1h 20m', 8),
  ((select id from c), 'API Routes & Middleware',            'Build robust backend endpoints and edge middleware handlers.',               '1h 35m', 9),
  ((select id from c), 'Testing Next.js Apps',               'Unit, integration, and E2E testing with Jest and Playwright.',               '1h 10m', 10),
  ((select id from c), 'CI/CD & Deployment',                 'Deploy to Vercel, Dockerize, and configure environment variables.',          '1h 25m', 11),
  ((select id from c), 'Monitoring & Scaling',               'Track Core Web Vitals, logging, and production scaling patterns.',           '1h 38m', 12);

-- Course 2: Python for Data Science
with c as (select id from courses where title = 'Python for Data Science & Machine Learning')
insert into modules (course_id, title, position) values
  ((select id from c), 'Python Refresher',       1),
  ((select id from c), 'NumPy & Pandas',          2),
  ((select id from c), 'Data Visualization',     3),
  ((select id from c), 'Statistics for ML',      4),
  ((select id from c), 'Supervised Learning',    5),
  ((select id from c), 'Unsupervised Learning',  6),
  ((select id from c), 'Model Evaluation',       7),
  ((select id from c), 'Capstone Project',       8);

-- Course 3: UI/UX Design
with c as (select id from courses where title = 'UI/UX Design Fundamentals with Figma')
insert into modules (course_id, title, position) values
  ((select id from c), 'Design Thinking',     1),
  ((select id from c), 'Typography & Color',  2),
  ((select id from c), 'Layout & Grids',      3),
  ((select id from c), 'Figma Basics',        4),
  ((select id from c), 'Component Libraries', 5),
  ((select id from c), 'Prototyping',         6),
  ((select id from c), 'User Testing',        7);

-- Course 4: iOS Development
with c as (select id from courses where title = 'iOS App Development with Swift & SwiftUI')
insert into modules (course_id, title, position) values
  ((select id from c), 'Swift Basics',            1),
  ((select id from c), 'SwiftUI Views',           2),
  ((select id from c), 'Navigation & State',      3),
  ((select id from c), 'Networking',              4),
  ((select id from c), 'Core Data',               5),
  ((select id from c), 'Animations',              6),
  ((select id from c), 'App Store Submission',    7);

-- Course 5: Digital Marketing
with c as (select id from courses where title = 'Digital Marketing Masterclass')
insert into modules (course_id, title, position) values
  ((select id from c), 'Marketing Fundamentals',   1),
  ((select id from c), 'SEO & Content',            2),
  ((select id from c), 'Social Media Strategy',    3),
  ((select id from c), 'Email Marketing',          4),
  ((select id from c), 'Google Ads',               5),
  ((select id from c), 'Analytics & Reporting',    6);

-- Course 6: AI
with c as (select id from courses where title = 'Introduction to Artificial Intelligence')
insert into modules (course_id, title, position) values
  ((select id from c), 'What is AI?',               1),
  ((select id from c), 'Search Algorithms',         2),
  ((select id from c), 'Machine Learning Overview', 3),
  ((select id from c), 'Neural Networks',           4),
  ((select id from c), 'NLP Basics',                5),
  ((select id from c), 'Computer Vision',           6),
  ((select id from c), 'AI Ethics',                 7);

-- Course 7: Photography
with c as (select id from courses where title = 'Photography for Beginners: From Auto to Manual')
insert into modules (course_id, title, position) values
  ((select id from c), 'Understanding Your Camera', 1),
  ((select id from c), 'Exposure Triangle',         2),
  ((select id from c), 'Composition Rules',         3),
  ((select id from c), 'Lighting Techniques',       4),
  ((select id from c), 'Portrait Photography',      5),
  ((select id from c), 'Landscape Photography',     6),
  ((select id from c), 'Editing in Lightroom',      7);

-- Course 8: Node.js
with c as (select id from courses where title = 'Full-Stack Web Development with Node.js')
insert into modules (course_id, title, position) values
  ((select id from c), 'Node.js Core',             1),
  ((select id from c), 'Express & REST APIs',      2),
  ((select id from c), 'MongoDB & Mongoose',       3),
  ((select id from c), 'Authentication & JWT',     4),
  ((select id from c), 'React Frontend',           5),
  ((select id from c), 'File Uploads & Storage',   6),
  ((select id from c), 'Deployment & DevOps',      7);

-- Course 9: Personal Finance
with c as (select id from courses where title = 'Personal Finance & Investing 101')
insert into modules (course_id, title, position) values
  ((select id from c), 'Budgeting Basics',      1),
  ((select id from c), 'Emergency Funds',       2),
  ((select id from c), 'Stock Market 101',      3),
  ((select id from c), 'ETFs & Index Funds',    4),
  ((select id from c), 'Crypto Fundamentals',   5),
  ((select id from c), 'Retirement Planning',   6);

-- Course 10: Graphic Design
with c as (select id from courses where title = 'Graphic Design with Adobe Illustrator')
insert into modules (course_id, title, position) values
  ((select id from c), 'Illustrator Interface', 1),
  ((select id from c), 'Shapes & Paths',        2),
  ((select id from c), 'Typography Design',     3),
  ((select id from c), 'Logo Design',           4),
  ((select id from c), 'Color Theory',          5),
  ((select id from c), 'Brand Identity',        6),
  ((select id from c), 'Portfolio Project',     7);
