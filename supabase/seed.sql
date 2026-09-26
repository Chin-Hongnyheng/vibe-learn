-- ==============================================================================
-- Vibelearn: Seed Data for Supabase
-- Contains: 10 Courses, 40 Modules, 120 Lessons
-- ==============================================================================

BEGIN;

-- 1. Courses
INSERT INTO public.courses (
    id, slug, title, summary, cover_image_url, category,
    instructor_name, instructor_bio, instructor_avatar,
    level, price, popular, student_count, learning_outcomes
  ) VALUES (
    'course.nextjs-app-router-in-depth', 'nextjs-app-router-in-depth', 'Next.js App Router in Depth', 'Learn the App Router the way it actually works: routing and layouts, the server/client boundary, caching, and server actions.',
    'https://picsum.photos/seed/vertex-nextjs-app-router-in-depth/1600/900', 'Web Development', 'Mira Kovac',
    '[{"_type":"block","_key":"mira-kovac-bio-0","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"mira-kovac-bio-0-span","text":"Mira has spent the last decade building large React applications and then making them fast again. She works on rendering architecture, and cares more about what ships to the browser than about what looks clever in the editor.","marks":[]}]},{"_type":"block","_key":"mira-kovac-bio-1","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"mira-kovac-bio-1-span","text":"She teaches the way she debugs: measure first, form a hypothesis, change one thing. Her courses lean heavily on the profiler and the network tab.","marks":[]}]}]'::jsonb, '', 'intermediate',
    89, true, 18240, '[{"_type":"learningOutcome","_key":"nextjs-app-router-in-depth-outcome-0","icon":"layers","title":"Model routes with layouts","description":"Compose nested layouts, templates, and route groups so shared UI never re-renders needlessly."},{"_type":"learningOutcome","_key":"nextjs-app-router-in-depth-outcome-1","icon":"workflow","title":"Draw the server/client line","description":"Decide what runs on the server and what ships to the browser, and pass data across the boundary safely."},{"_type":"learningOutcome","_key":"nextjs-app-router-in-depth-outcome-2","icon":"gauge","title":"Control caching","description":"Understand what is cached, for how long, and how to revalidate it on demand instead of guessing."},{"_type":"learningOutcome","_key":"nextjs-app-router-in-depth-outcome-3","icon":"rocket","title":"Mutate with server actions","description":"Handle forms, validation, and optimistic updates without hand-writing an API layer."}]'::jsonb
  ) ON CONFLICT (id) DO UPDATE SET
    slug = EXCLUDED.slug,
    title = EXCLUDED.title,
    summary = EXCLUDED.summary,
    cover_image_url = EXCLUDED.cover_image_url,
    category = EXCLUDED.category,
    instructor_name = EXCLUDED.instructor_name,
    instructor_bio = EXCLUDED.instructor_bio,
    instructor_avatar = EXCLUDED.instructor_avatar,
    level = EXCLUDED.level,
    price = EXCLUDED.price,
    popular = EXCLUDED.popular,
    student_count = EXCLUDED.student_count,
    learning_outcomes = EXCLUDED.learning_outcomes;

INSERT INTO public.courses (
    id, slug, title, summary, cover_image_url, category,
    instructor_name, instructor_bio, instructor_avatar,
    level, price, popular, student_count, learning_outcomes
  ) VALUES (
    'course.react-performance-engineering', 'react-performance-engineering', 'React Performance Engineering', 'Measure before you optimise. Profiling, render behaviour, concurrent features, and shipping less JavaScript.',
    'https://picsum.photos/seed/vertex-react-performance-engineering/1600/900', 'Web Development', 'Mira Kovac',
    '[{"_type":"block","_key":"mira-kovac-bio-0","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"mira-kovac-bio-0-span","text":"Mira has spent the last decade building large React applications and then making them fast again. She works on rendering architecture, and cares more about what ships to the browser than about what looks clever in the editor.","marks":[]}]},{"_type":"block","_key":"mira-kovac-bio-1","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"mira-kovac-bio-1-span","text":"She teaches the way she debugs: measure first, form a hypothesis, change one thing. Her courses lean heavily on the profiler and the network tab.","marks":[]}]}]'::jsonb, '', 'advanced',
    119, false, 7420, '[{"_type":"learningOutcome","_key":"react-performance-engineering-outcome-0","icon":"gauge","title":"Measure honestly","description":"Use the profiler and field metrics to find the real bottleneck instead of the one you assumed."},{"_type":"learningOutcome","_key":"react-performance-engineering-outcome-1","icon":"workflow","title":"Control re-renders","description":"Understand why a component re-rendered and fix the cause rather than papering over it with memo."},{"_type":"learningOutcome","_key":"react-performance-engineering-outcome-2","icon":"sparkles","title":"Use concurrent features","description":"Keep the interface responsive during expensive updates with transitions and deferred values."},{"_type":"learningOutcome","_key":"react-performance-engineering-outcome-3","icon":"rocket","title":"Ship less JavaScript","description":"Split, lazy load, and prefetch so the bundle stops being the first thing that hurts."}]'::jsonb
  ) ON CONFLICT (id) DO UPDATE SET
    slug = EXCLUDED.slug,
    title = EXCLUDED.title,
    summary = EXCLUDED.summary,
    cover_image_url = EXCLUDED.cover_image_url,
    category = EXCLUDED.category,
    instructor_name = EXCLUDED.instructor_name,
    instructor_bio = EXCLUDED.instructor_bio,
    instructor_avatar = EXCLUDED.instructor_avatar,
    level = EXCLUDED.level,
    price = EXCLUDED.price,
    popular = EXCLUDED.popular,
    student_count = EXCLUDED.student_count,
    learning_outcomes = EXCLUDED.learning_outcomes;

INSERT INTO public.courses (
    id, slug, title, summary, cover_image_url, category,
    instructor_name, instructor_bio, instructor_avatar,
    level, price, popular, student_count, learning_outcomes
  ) VALUES (
    'course.typescript-for-application-developers', 'typescript-for-application-developers', 'TypeScript for Application Developers', 'Go past annotations. Structural typing, narrowing, generics, and the type-level tools that make invalid states impossible.',
    'https://picsum.photos/seed/vertex-typescript-for-application-developers/1600/900', 'Languages', 'Daniel Okafor',
    '[{"_type":"block","_key":"daniel-okafor-bio-0","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"daniel-okafor-bio-0-span","text":"Daniel works on the layer where application code meets the database. He has spent years untangling type systems and query plans, usually in the same afternoon.","marks":[]}]},{"_type":"block","_key":"daniel-okafor-bio-1","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"daniel-okafor-bio-1-span","text":"He believes most runtime bugs are modelling mistakes that were visible earlier, and he teaches both TypeScript and Postgres from that angle.","marks":[]}]}]'::jsonb, '', 'intermediate',
    79, true, 22110, '[{"_type":"learningOutcome","_key":"typescript-for-application-developers-outcome-0","icon":"shield","title":"Make invalid states unrepresentable","description":"Model your domain so the compiler rejects the combinations that should never happen."},{"_type":"learningOutcome","_key":"typescript-for-application-developers-outcome-1","icon":"puzzle","title":"Write real generics","description":"Build reusable functions and components that keep type information instead of erasing it."},{"_type":"learningOutcome","_key":"typescript-for-application-developers-outcome-2","icon":"code","title":"Use the type-level toolkit","description":"Apply conditional, mapped, and template literal types where they earn their complexity."},{"_type":"learningOutcome","_key":"typescript-for-application-developers-outcome-3","icon":"workflow","title":"Type the boundaries","description":"Validate and type the data crossing into your app, so external data stops being an any."}]'::jsonb
  ) ON CONFLICT (id) DO UPDATE SET
    slug = EXCLUDED.slug,
    title = EXCLUDED.title,
    summary = EXCLUDED.summary,
    cover_image_url = EXCLUDED.cover_image_url,
    category = EXCLUDED.category,
    instructor_name = EXCLUDED.instructor_name,
    instructor_bio = EXCLUDED.instructor_bio,
    instructor_avatar = EXCLUDED.instructor_avatar,
    level = EXCLUDED.level,
    price = EXCLUDED.price,
    popular = EXCLUDED.popular,
    student_count = EXCLUDED.student_count,
    learning_outcomes = EXCLUDED.learning_outcomes;

INSERT INTO public.courses (
    id, slug, title, summary, cover_image_url, category,
    instructor_name, instructor_bio, instructor_avatar,
    level, price, popular, student_count, learning_outcomes
  ) VALUES (
    'course.building-ai-apps-with-llms', 'building-ai-apps-with-llms', 'Building AI Apps with LLMs', 'From first API call to a feature you can ship: prompting, structured output, tool calling, streaming, and cost control.',
    'https://picsum.photos/seed/vertex-building-ai-apps-with-llms/1600/900', 'AI Engineering', 'Priya Raman',
    '[{"_type":"block","_key":"priya-raman-bio-0","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"priya-raman-bio-0-span","text":"Priya builds products on top of language models and, more importantly, the evaluation harnesses that tell you whether they actually work. She has shipped retrieval systems over messy, real-world corpora.","marks":[]}]},{"_type":"block","_key":"priya-raman-bio-1","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"priya-raman-bio-1-span","text":"Her position is that almost every bad AI feature is a retrieval or evaluation problem wearing a prompt-engineering costume.","marks":[]}]}]'::jsonb, '', 'intermediate',
    99, true, 26380, '[{"_type":"learningOutcome","_key":"building-ai-apps-with-llms-outcome-0","icon":"sparkles","title":"Understand the model","description":"Reason about tokens, context windows, and sampling instead of treating the model as a black box."},{"_type":"learningOutcome","_key":"building-ai-apps-with-llms-outcome-1","icon":"code","title":"Get structured output","description":"Make a model return data your program can rely on, and validate it before you use it."},{"_type":"learningOutcome","_key":"building-ai-apps-with-llms-outcome-2","icon":"workflow","title":"Wire up tool calling","description":"Let the model call your functions, and keep the loop bounded and observable."},{"_type":"learningOutcome","_key":"building-ai-apps-with-llms-outcome-3","icon":"gauge","title":"Ship it affordably","description":"Stream responses, cache what repeats, and keep latency and spend under control."}]'::jsonb
  ) ON CONFLICT (id) DO UPDATE SET
    slug = EXCLUDED.slug,
    title = EXCLUDED.title,
    summary = EXCLUDED.summary,
    cover_image_url = EXCLUDED.cover_image_url,
    category = EXCLUDED.category,
    instructor_name = EXCLUDED.instructor_name,
    instructor_bio = EXCLUDED.instructor_bio,
    instructor_avatar = EXCLUDED.instructor_avatar,
    level = EXCLUDED.level,
    price = EXCLUDED.price,
    popular = EXCLUDED.popular,
    student_count = EXCLUDED.student_count,
    learning_outcomes = EXCLUDED.learning_outcomes;

INSERT INTO public.courses (
    id, slug, title, summary, cover_image_url, category,
    instructor_name, instructor_bio, instructor_avatar,
    level, price, popular, student_count, learning_outcomes
  ) VALUES (
    'course.retrieval-augmented-generation-from-scratch', 'retrieval-augmented-generation-from-scratch', 'Retrieval-Augmented Generation from Scratch', 'Build a RAG system that actually retrieves the right thing: embeddings, chunking, hybrid search, reranking, and grounded answers.',
    'https://picsum.photos/seed/vertex-retrieval-augmented-generation-from-scratch/1600/900', 'AI Engineering', 'Priya Raman',
    '[{"_type":"block","_key":"priya-raman-bio-0","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"priya-raman-bio-0-span","text":"Priya builds products on top of language models and, more importantly, the evaluation harnesses that tell you whether they actually work. She has shipped retrieval systems over messy, real-world corpora.","marks":[]}]},{"_type":"block","_key":"priya-raman-bio-1","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"priya-raman-bio-1-span","text":"Her position is that almost every bad AI feature is a retrieval or evaluation problem wearing a prompt-engineering costume.","marks":[]}]}]'::jsonb, '', 'advanced',
    129, false, 9130, '[{"_type":"learningOutcome","_key":"retrieval-augmented-generation-from-scratch-outcome-0","icon":"puzzle","title":"Understand embeddings","description":"Know what a vector encodes, what it does not, and which similarity measure to use."},{"_type":"learningOutcome","_key":"retrieval-augmented-generation-from-scratch-outcome-1","icon":"layers","title":"Chunk content well","description":"Split documents so retrieved passages are self-contained and carry useful metadata."},{"_type":"learningOutcome","_key":"retrieval-augmented-generation-from-scratch-outcome-2","icon":"gauge","title":"Improve retrieval quality","description":"Combine keyword and vector search, then rerank, and measure whether it helped."},{"_type":"learningOutcome","_key":"retrieval-augmented-generation-from-scratch-outcome-3","icon":"shield","title":"Ground every answer","description":"Cite sources, and make the system say it does not know instead of inventing one."}]'::jsonb
  ) ON CONFLICT (id) DO UPDATE SET
    slug = EXCLUDED.slug,
    title = EXCLUDED.title,
    summary = EXCLUDED.summary,
    cover_image_url = EXCLUDED.cover_image_url,
    category = EXCLUDED.category,
    instructor_name = EXCLUDED.instructor_name,
    instructor_bio = EXCLUDED.instructor_bio,
    instructor_avatar = EXCLUDED.instructor_avatar,
    level = EXCLUDED.level,
    price = EXCLUDED.price,
    popular = EXCLUDED.popular,
    student_count = EXCLUDED.student_count,
    learning_outcomes = EXCLUDED.learning_outcomes;

INSERT INTO public.courses (
    id, slug, title, summary, cover_image_url, category,
    instructor_name, instructor_bio, instructor_avatar,
    level, price, popular, student_count, learning_outcomes
  ) VALUES (
    'course.python-for-data-work', 'python-for-data-work', 'Python for Data Work', 'A practical on-ramp to data work in Python: the language basics you need, pandas, plotting, and reproducible workflows.',
    'https://picsum.photos/seed/vertex-python-for-data-work/1600/900', 'Data', 'Tomas Berg',
    '[{"_type":"block","_key":"tomas-berg-bio-0","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"tomas-berg-bio-0-span","text":"Tomas moves between data work and backend architecture, which is less of a jump than it sounds: both are mostly about what you do when the volume grows by two orders of magnitude.","marks":[]}]},{"_type":"block","_key":"tomas-berg-bio-1","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"tomas-berg-bio-1-span","text":"He teaches with worked examples and back-of-the-envelope numbers, because a design you cannot estimate is a design you cannot defend.","marks":[]}]}]'::jsonb, '', 'beginner',
    0, true, 31450, '[{"_type":"learningOutcome","_key":"python-for-data-work-outcome-0","icon":"code","title":"Write practical Python","description":"Use the data types, comprehensions, and file handling that data work leans on daily."},{"_type":"learningOutcome","_key":"python-for-data-work-outcome-1","icon":"layers","title":"Work with dataframes","description":"Load, clean, filter, and aggregate tabular data with pandas without fighting the API."},{"_type":"learningOutcome","_key":"python-for-data-work-outcome-2","icon":"sparkles","title":"Visualise findings","description":"Produce charts that communicate a result rather than merely displaying numbers."},{"_type":"learningOutcome","_key":"python-for-data-work-outcome-3","icon":"workflow","title":"Make it reproducible","description":"Manage environments and turn a notebook into something that runs the same way twice."}]'::jsonb
  ) ON CONFLICT (id) DO UPDATE SET
    slug = EXCLUDED.slug,
    title = EXCLUDED.title,
    summary = EXCLUDED.summary,
    cover_image_url = EXCLUDED.cover_image_url,
    category = EXCLUDED.category,
    instructor_name = EXCLUDED.instructor_name,
    instructor_bio = EXCLUDED.instructor_bio,
    instructor_avatar = EXCLUDED.instructor_avatar,
    level = EXCLUDED.level,
    price = EXCLUDED.price,
    popular = EXCLUDED.popular,
    student_count = EXCLUDED.student_count,
    learning_outcomes = EXCLUDED.learning_outcomes;

INSERT INTO public.courses (
    id, slug, title, summary, cover_image_url, category,
    instructor_name, instructor_bio, instructor_avatar,
    level, price, popular, student_count, learning_outcomes
  ) VALUES (
    'course.system-design-foundations', 'system-design-foundations', 'System Design Foundations', 'The building blocks of scalable systems — load balancing, caching, queues, partitioning, and the reliability work around them.',
    'https://picsum.photos/seed/vertex-system-design-foundations/1600/900', 'Backend & Infrastructure', 'Tomas Berg',
    '[{"_type":"block","_key":"tomas-berg-bio-0","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"tomas-berg-bio-0-span","text":"Tomas moves between data work and backend architecture, which is less of a jump than it sounds: both are mostly about what you do when the volume grows by two orders of magnitude.","marks":[]}]},{"_type":"block","_key":"tomas-berg-bio-1","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"tomas-berg-bio-1-span","text":"He teaches with worked examples and back-of-the-envelope numbers, because a design you cannot estimate is a design you cannot defend.","marks":[]}]}]'::jsonb, '', 'intermediate',
    109, false, 14760, '[{"_type":"learningOutcome","_key":"system-design-foundations-outcome-0","icon":"layers","title":"Assemble the building blocks","description":"Know what load balancers, caches, and queues each solve, and what they cost you."},{"_type":"learningOutcome","_key":"system-design-foundations-outcome-1","icon":"workflow","title":"Scale the data layer","description":"Partition and replicate data, and reason clearly about the consistency you gave up."},{"_type":"learningOutcome","_key":"system-design-foundations-outcome-2","icon":"shield","title":"Design resilient APIs","description":"Handle retries, idempotency, and rate limiting so failures do not compound."},{"_type":"learningOutcome","_key":"system-design-foundations-outcome-3","icon":"gauge","title":"Estimate capacity","description":"Do the arithmetic that turns a hand-wavy design into a defensible one."}]'::jsonb
  ) ON CONFLICT (id) DO UPDATE SET
    slug = EXCLUDED.slug,
    title = EXCLUDED.title,
    summary = EXCLUDED.summary,
    cover_image_url = EXCLUDED.cover_image_url,
    category = EXCLUDED.category,
    instructor_name = EXCLUDED.instructor_name,
    instructor_bio = EXCLUDED.instructor_bio,
    instructor_avatar = EXCLUDED.instructor_avatar,
    level = EXCLUDED.level,
    price = EXCLUDED.price,
    popular = EXCLUDED.popular,
    student_count = EXCLUDED.student_count,
    learning_outcomes = EXCLUDED.learning_outcomes;

INSERT INTO public.courses (
    id, slug, title, summary, cover_image_url, category,
    instructor_name, instructor_bio, instructor_avatar,
    level, price, popular, student_count, learning_outcomes
  ) VALUES (
    'course.postgresql-for-developers', 'postgresql-for-developers', 'PostgreSQL for Developers', 'SQL you will actually write, schemas that hold up, indexes that get used, and the operational basics behind them.',
    'https://picsum.photos/seed/vertex-postgresql-for-developers/1600/900', 'Data', 'Daniel Okafor',
    '[{"_type":"block","_key":"daniel-okafor-bio-0","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"daniel-okafor-bio-0-span","text":"Daniel works on the layer where application code meets the database. He has spent years untangling type systems and query plans, usually in the same afternoon.","marks":[]}]},{"_type":"block","_key":"daniel-okafor-bio-1","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"daniel-okafor-bio-1-span","text":"He believes most runtime bugs are modelling mistakes that were visible earlier, and he teaches both TypeScript and Postgres from that angle.","marks":[]}]}]'::jsonb, '', 'intermediate',
    89, false, 11890, '[{"_type":"learningOutcome","_key":"postgresql-for-developers-outcome-0","icon":"code","title":"Write serious SQL","description":"Joins, aggregates, CTEs, and window functions, without reaching for the ORM every time."},{"_type":"learningOutcome","_key":"postgresql-for-developers-outcome-1","icon":"layers","title":"Design a schema that lasts","description":"Normalise sensibly, use constraints as guarantees, and pick the right data types."},{"_type":"learningOutcome","_key":"postgresql-for-developers-outcome-2","icon":"gauge","title":"Make queries fast","description":"Read a query plan and add the index that plan is asking for."},{"_type":"learningOutcome","_key":"postgresql-for-developers-outcome-3","icon":"shield","title":"Operate it safely","description":"Transactions, migrations, backups, and pooling — the parts that matter at 3am."}]'::jsonb
  ) ON CONFLICT (id) DO UPDATE SET
    slug = EXCLUDED.slug,
    title = EXCLUDED.title,
    summary = EXCLUDED.summary,
    cover_image_url = EXCLUDED.cover_image_url,
    category = EXCLUDED.category,
    instructor_name = EXCLUDED.instructor_name,
    instructor_bio = EXCLUDED.instructor_bio,
    instructor_avatar = EXCLUDED.instructor_avatar,
    level = EXCLUDED.level,
    price = EXCLUDED.price,
    popular = EXCLUDED.popular,
    student_count = EXCLUDED.student_count,
    learning_outcomes = EXCLUDED.learning_outcomes;

INSERT INTO public.courses (
    id, slug, title, summary, cover_image_url, category,
    instructor_name, instructor_bio, instructor_avatar,
    level, price, popular, student_count, learning_outcomes
  ) VALUES (
    'course.devops-with-docker-and-kubernetes', 'devops-with-docker-and-kubernetes', 'DevOps with Docker and Kubernetes', 'Containerise an application, run it on Kubernetes, ship it through a pipeline, and operate it once it is live.',
    'https://picsum.photos/seed/vertex-devops-with-docker-and-kubernetes/1600/900', 'Backend & Infrastructure', 'Alina Costa',
    '[{"_type":"block","_key":"alina-costa-bio-0","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"alina-costa-bio-0-span","text":"Alina runs the path from a developer laptop to production and everything that can go wrong along it — build pipelines, orchestration, secrets, and the attack surface all of it creates.","marks":[]}]},{"_type":"block","_key":"alina-costa-bio-1","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"alina-costa-bio-1-span","text":"She teaches operations and security together, on the grounds that a system nobody can deploy safely is not actually secure.","marks":[]}]}]'::jsonb, '', 'advanced',
    139, false, 8640, '[{"_type":"learningOutcome","_key":"devops-with-docker-and-kubernetes-outcome-0","icon":"layers","title":"Build lean images","description":"Write Dockerfiles that cache well and produce small, reproducible images."},{"_type":"learningOutcome","_key":"devops-with-docker-and-kubernetes-outcome-1","icon":"workflow","title":"Run workloads on Kubernetes","description":"Deployments, services, ingress, and configuration, without cargo-culting YAML."},{"_type":"learningOutcome","_key":"devops-with-docker-and-kubernetes-outcome-2","icon":"rocket","title":"Automate delivery","description":"Build a pipeline that tests, builds, and rolls out — and rolls back when it should."},{"_type":"learningOutcome","_key":"devops-with-docker-and-kubernetes-outcome-3","icon":"gauge","title":"Operate what you deployed","description":"Monitor, scale, and debug a running cluster with limits that make sense."}]'::jsonb
  ) ON CONFLICT (id) DO UPDATE SET
    slug = EXCLUDED.slug,
    title = EXCLUDED.title,
    summary = EXCLUDED.summary,
    cover_image_url = EXCLUDED.cover_image_url,
    category = EXCLUDED.category,
    instructor_name = EXCLUDED.instructor_name,
    instructor_bio = EXCLUDED.instructor_bio,
    instructor_avatar = EXCLUDED.instructor_avatar,
    level = EXCLUDED.level,
    price = EXCLUDED.price,
    popular = EXCLUDED.popular,
    student_count = EXCLUDED.student_count,
    learning_outcomes = EXCLUDED.learning_outcomes;

INSERT INTO public.courses (
    id, slug, title, summary, cover_image_url, category,
    instructor_name, instructor_bio, instructor_avatar,
    level, price, popular, student_count, learning_outcomes
  ) VALUES (
    'course.practical-web-security', 'practical-web-security', 'Practical Web Security', 'The vulnerabilities that actually show up in web applications, how they are exploited, and how to close them for good.',
    'https://picsum.photos/seed/vertex-practical-web-security/1600/900', 'Security', 'Alina Costa',
    '[{"_type":"block","_key":"alina-costa-bio-0","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"alina-costa-bio-0-span","text":"Alina runs the path from a developer laptop to production and everything that can go wrong along it — build pipelines, orchestration, secrets, and the attack surface all of it creates.","marks":[]}]},{"_type":"block","_key":"alina-costa-bio-1","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"alina-costa-bio-1-span","text":"She teaches operations and security together, on the grounds that a system nobody can deploy safely is not actually secure.","marks":[]}]}]'::jsonb, '', 'intermediate',
    99, false, 13270, '[{"_type":"learningOutcome","_key":"practical-web-security-outcome-0","icon":"shield","title":"Think in threat models","description":"Reason about who your attacker is and what they can reach before writing defences."},{"_type":"learningOutcome","_key":"practical-web-security-outcome-1","icon":"code","title":"Close the common holes","description":"Understand and prevent injection, cross-site scripting, and request forgery."},{"_type":"learningOutcome","_key":"practical-web-security-outcome-2","icon":"workflow","title":"Get authentication right","description":"Sessions, password storage, and multi-factor done the way that survives review."},{"_type":"learningOutcome","_key":"practical-web-security-outcome-3","icon":"gauge","title":"Harden the deployment","description":"Headers, transport, secrets, and dependencies — the perimeter around your code."}]'::jsonb
  ) ON CONFLICT (id) DO UPDATE SET
    slug = EXCLUDED.slug,
    title = EXCLUDED.title,
    summary = EXCLUDED.summary,
    cover_image_url = EXCLUDED.cover_image_url,
    category = EXCLUDED.category,
    instructor_name = EXCLUDED.instructor_name,
    instructor_bio = EXCLUDED.instructor_bio,
    instructor_avatar = EXCLUDED.instructor_avatar,
    level = EXCLUDED.level,
    price = EXCLUDED.price,
    popular = EXCLUDED.popular,
    student_count = EXCLUDED.student_count,
    learning_outcomes = EXCLUDED.learning_outcomes;


-- 2. Modules
INSERT INTO public.modules (
      id, course_id, title, summary, position
    ) VALUES (
      'nextjs-app-router-in-depth-module-1', 'course.nextjs-app-router-in-depth', 'Routing and Layouts', 'How the App Router turns folders into URLs, and how layouts let you share UI without re-rendering it.', 1
    ) ON CONFLICT (id) DO UPDATE SET
      course_id = EXCLUDED.course_id,
      title = EXCLUDED.title,
      summary = EXCLUDED.summary,
      position = EXCLUDED.position;

INSERT INTO public.modules (
      id, course_id, title, summary, position
    ) VALUES (
      'nextjs-app-router-in-depth-module-2', 'course.nextjs-app-router-in-depth', 'Server and Client Components', 'The boundary that defines the App Router: what runs on the server, what ships to the browser, and how data crosses between them.', 2
    ) ON CONFLICT (id) DO UPDATE SET
      course_id = EXCLUDED.course_id,
      title = EXCLUDED.title,
      summary = EXCLUDED.summary,
      position = EXCLUDED.position;

INSERT INTO public.modules (
      id, course_id, title, summary, position
    ) VALUES (
      'nextjs-app-router-in-depth-module-3', 'course.nextjs-app-router-in-depth', 'Data Fetching and Caching', 'Fetching data where it belongs, understanding what gets cached, and streaming the slow parts so the page appears immediately.', 3
    ) ON CONFLICT (id) DO UPDATE SET
      course_id = EXCLUDED.course_id,
      title = EXCLUDED.title,
      summary = EXCLUDED.summary,
      position = EXCLUDED.position;

INSERT INTO public.modules (
      id, course_id, title, summary, position
    ) VALUES (
      'nextjs-app-router-in-depth-module-4', 'course.nextjs-app-router-in-depth', 'Server Actions and Mutations', 'Writing data from the client without hand-building an API: actions, form validation, and optimistic UI.', 4
    ) ON CONFLICT (id) DO UPDATE SET
      course_id = EXCLUDED.course_id,
      title = EXCLUDED.title,
      summary = EXCLUDED.summary,
      position = EXCLUDED.position;

INSERT INTO public.modules (
      id, course_id, title, summary, position
    ) VALUES (
      'react-performance-engineering-module-1', 'course.react-performance-engineering', 'Measuring Performance', 'Getting numbers before you change anything: profiling tools, field metrics, and finding wasted work.', 1
    ) ON CONFLICT (id) DO UPDATE SET
      course_id = EXCLUDED.course_id,
      title = EXCLUDED.title,
      summary = EXCLUDED.summary,
      position = EXCLUDED.position;

INSERT INTO public.modules (
      id, course_id, title, summary, position
    ) VALUES (
      'react-performance-engineering-module-2', 'course.react-performance-engineering', 'Rendering Optimization', 'The tools for cutting render work — memoisation and stable identity — and when reaching for them is the wrong move.', 2
    ) ON CONFLICT (id) DO UPDATE SET
      course_id = EXCLUDED.course_id,
      title = EXCLUDED.title,
      summary = EXCLUDED.summary,
      position = EXCLUDED.position;

INSERT INTO public.modules (
      id, course_id, title, summary, position
    ) VALUES (
      'react-performance-engineering-module-3', 'course.react-performance-engineering', 'Concurrent React', 'Keeping the interface responsive while expensive work happens: transitions, deferred values, and Suspense.', 3
    ) ON CONFLICT (id) DO UPDATE SET
      course_id = EXCLUDED.course_id,
      title = EXCLUDED.title,
      summary = EXCLUDED.summary,
      position = EXCLUDED.position;

INSERT INTO public.modules (
      id, course_id, title, summary, position
    ) VALUES (
      'react-performance-engineering-module-4', 'course.react-performance-engineering', 'Bundle and Load Performance', 'The work that happens before React even runs: splitting code, loading it at the right moment, and handling heavy assets.', 4
    ) ON CONFLICT (id) DO UPDATE SET
      course_id = EXCLUDED.course_id,
      title = EXCLUDED.title,
      summary = EXCLUDED.summary,
      position = EXCLUDED.position;

INSERT INTO public.modules (
      id, course_id, title, summary, position
    ) VALUES (
      'typescript-for-application-developers-module-1', 'course.typescript-for-application-developers', 'How the Type System Thinks', 'The mental model underneath everything else: structural compatibility, unions, and narrowing.', 1
    ) ON CONFLICT (id) DO UPDATE SET
      course_id = EXCLUDED.course_id,
      title = EXCLUDED.title,
      summary = EXCLUDED.summary,
      position = EXCLUDED.position;

INSERT INTO public.modules (
      id, course_id, title, summary, position
    ) VALUES (
      'typescript-for-application-developers-module-2', 'course.typescript-for-application-developers', 'Generics', 'Writing code that keeps type information flowing through it instead of collapsing to any.', 2
    ) ON CONFLICT (id) DO UPDATE SET
      course_id = EXCLUDED.course_id,
      title = EXCLUDED.title,
      summary = EXCLUDED.summary,
      position = EXCLUDED.position;

INSERT INTO public.modules (
      id, course_id, title, summary, position
    ) VALUES (
      'typescript-for-application-developers-module-3', 'course.typescript-for-application-developers', 'Advanced Types', 'The type-level features that let a type be computed from another type, and the judgement to use them sparingly.', 3
    ) ON CONFLICT (id) DO UPDATE SET
      course_id = EXCLUDED.course_id,
      title = EXCLUDED.title,
      summary = EXCLUDED.summary,
      position = EXCLUDED.position;

INSERT INTO public.modules (
      id, course_id, title, summary, position
    ) VALUES (
      'typescript-for-application-developers-module-4', 'course.typescript-for-application-developers', 'TypeScript in Practice', 'Configuration, external data, and the places typed code meets the untyped world.', 4
    ) ON CONFLICT (id) DO UPDATE SET
      course_id = EXCLUDED.course_id,
      title = EXCLUDED.title,
      summary = EXCLUDED.summary,
      position = EXCLUDED.position;

INSERT INTO public.modules (
      id, course_id, title, summary, position
    ) VALUES (
      'building-ai-apps-with-llms-module-1', 'course.building-ai-apps-with-llms', 'LLM Fundamentals', 'What the model is doing, what it costs, and which knobs actually change the output.', 1
    ) ON CONFLICT (id) DO UPDATE SET
      course_id = EXCLUDED.course_id,
      title = EXCLUDED.title,
      summary = EXCLUDED.summary,
      position = EXCLUDED.position;

INSERT INTO public.modules (
      id, course_id, title, summary, position
    ) VALUES (
      'building-ai-apps-with-llms-module-2', 'course.building-ai-apps-with-llms', 'Prompting That Holds Up', 'Writing prompts that behave the same way on the thousandth call as they did on the first.', 2
    ) ON CONFLICT (id) DO UPDATE SET
      course_id = EXCLUDED.course_id,
      title = EXCLUDED.title,
      summary = EXCLUDED.summary,
      position = EXCLUDED.position;

INSERT INTO public.modules (
      id, course_id, title, summary, position
    ) VALUES (
      'building-ai-apps-with-llms-module-3', 'course.building-ai-apps-with-llms', 'Tool Calling and Agents', 'Letting the model act: exposing functions, running the loop, and keeping the whole thing bounded.', 3
    ) ON CONFLICT (id) DO UPDATE SET
      course_id = EXCLUDED.course_id,
      title = EXCLUDED.title,
      summary = EXCLUDED.summary,
      position = EXCLUDED.position;

INSERT INTO public.modules (
      id, course_id, title, summary, position
    ) VALUES (
      'building-ai-apps-with-llms-module-4', 'course.building-ai-apps-with-llms', 'Shipping to Production', 'The engineering around the model: streaming, cost, caching, and behaving well under load.', 4
    ) ON CONFLICT (id) DO UPDATE SET
      course_id = EXCLUDED.course_id,
      title = EXCLUDED.title,
      summary = EXCLUDED.summary,
      position = EXCLUDED.position;

INSERT INTO public.modules (
      id, course_id, title, summary, position
    ) VALUES (
      'retrieval-augmented-generation-from-scratch-module-1', 'course.retrieval-augmented-generation-from-scratch', 'Embeddings and Vector Search', 'The retrieval primitive: turning text into vectors and finding the near ones quickly.', 1
    ) ON CONFLICT (id) DO UPDATE SET
      course_id = EXCLUDED.course_id,
      title = EXCLUDED.title,
      summary = EXCLUDED.summary,
      position = EXCLUDED.position;

INSERT INTO public.modules (
      id, course_id, title, summary, position
    ) VALUES (
      'retrieval-augmented-generation-from-scratch-module-2', 'course.retrieval-augmented-generation-from-scratch', 'Ingestion and Indexing', 'Getting your content into the index in a shape that retrieves well and stays current.', 2
    ) ON CONFLICT (id) DO UPDATE SET
      course_id = EXCLUDED.course_id,
      title = EXCLUDED.title,
      summary = EXCLUDED.summary,
      position = EXCLUDED.position;

INSERT INTO public.modules (
      id, course_id, title, summary, position
    ) VALUES (
      'retrieval-augmented-generation-from-scratch-module-3', 'course.retrieval-augmented-generation-from-scratch', 'Retrieval Quality', 'Where most RAG systems are won or lost: combining retrieval methods, reranking, and measuring the result.', 3
    ) ON CONFLICT (id) DO UPDATE SET
      course_id = EXCLUDED.course_id,
      title = EXCLUDED.title,
      summary = EXCLUDED.summary,
      position = EXCLUDED.position;

INSERT INTO public.modules (
      id, course_id, title, summary, position
    ) VALUES (
      'retrieval-augmented-generation-from-scratch-module-4', 'course.retrieval-augmented-generation-from-scratch', 'Grounded Generation', 'Turning retrieved passages into an answer that is traceable, honest, and measurable.', 4
    ) ON CONFLICT (id) DO UPDATE SET
      course_id = EXCLUDED.course_id,
      title = EXCLUDED.title,
      summary = EXCLUDED.summary,
      position = EXCLUDED.position;

INSERT INTO public.modules (
      id, course_id, title, summary, position
    ) VALUES (
      'python-for-data-work-module-1', 'course.python-for-data-work', 'Python Foundations for Data', 'The subset of Python that data work actually uses, taught in the order you will need it.', 1
    ) ON CONFLICT (id) DO UPDATE SET
      course_id = EXCLUDED.course_id,
      title = EXCLUDED.title,
      summary = EXCLUDED.summary,
      position = EXCLUDED.position;

INSERT INTO public.modules (
      id, course_id, title, summary, position
    ) VALUES (
      'python-for-data-work-module-2', 'course.python-for-data-work', 'pandas Essentials', 'The dataframe workflow: loading, cleaning, reshaping, and summarising tabular data.', 2
    ) ON CONFLICT (id) DO UPDATE SET
      course_id = EXCLUDED.course_id,
      title = EXCLUDED.title,
      summary = EXCLUDED.summary,
      position = EXCLUDED.position;

INSERT INTO public.modules (
      id, course_id, title, summary, position
    ) VALUES (
      'python-for-data-work-module-3', 'course.python-for-data-work', 'Visualising Data', 'Turning a result into a chart someone can read, and knowing which chart to reach for.', 3
    ) ON CONFLICT (id) DO UPDATE SET
      course_id = EXCLUDED.course_id,
      title = EXCLUDED.title,
      summary = EXCLUDED.summary,
      position = EXCLUDED.position;

INSERT INTO public.modules (
      id, course_id, title, summary, position
    ) VALUES (
      'python-for-data-work-module-4', 'course.python-for-data-work', 'Reproducible Workflows', 'Making the analysis run again next month, on someone else’s machine, with the same result.', 4
    ) ON CONFLICT (id) DO UPDATE SET
      course_id = EXCLUDED.course_id,
      title = EXCLUDED.title,
      summary = EXCLUDED.summary,
      position = EXCLUDED.position;

INSERT INTO public.modules (
      id, course_id, title, summary, position
    ) VALUES (
      'system-design-foundations-module-1', 'course.system-design-foundations', 'Core Building Blocks', 'The three components that appear in nearly every architecture diagram, and what each one is actually for.', 1
    ) ON CONFLICT (id) DO UPDATE SET
      course_id = EXCLUDED.course_id,
      title = EXCLUDED.title,
      summary = EXCLUDED.summary,
      position = EXCLUDED.position;

INSERT INTO public.modules (
      id, course_id, title, summary, position
    ) VALUES (
      'system-design-foundations-module-2', 'course.system-design-foundations', 'Data at Scale', 'What happens to your database when one machine is no longer enough.', 2
    ) ON CONFLICT (id) DO UPDATE SET
      course_id = EXCLUDED.course_id,
      title = EXCLUDED.title,
      summary = EXCLUDED.summary,
      position = EXCLUDED.position;

INSERT INTO public.modules (
      id, course_id, title, summary, position
    ) VALUES (
      'system-design-foundations-module-3', 'course.system-design-foundations', 'API Design at Scale', 'The contract other systems depend on, and how it behaves when they misbehave.', 3
    ) ON CONFLICT (id) DO UPDATE SET
      course_id = EXCLUDED.course_id,
      title = EXCLUDED.title,
      summary = EXCLUDED.summary,
      position = EXCLUDED.position;

INSERT INTO public.modules (
      id, course_id, title, summary, position
    ) VALUES (
      'system-design-foundations-module-4', 'course.system-design-foundations', 'Reliability and Operations', 'Knowing what your system is doing, and what it does when a dependency stops answering.', 4
    ) ON CONFLICT (id) DO UPDATE SET
      course_id = EXCLUDED.course_id,
      title = EXCLUDED.title,
      summary = EXCLUDED.summary,
      position = EXCLUDED.position;

INSERT INTO public.modules (
      id, course_id, title, summary, position
    ) VALUES (
      'postgresql-for-developers-module-1', 'course.postgresql-for-developers', 'SQL Essentials', 'The query constructs that cover the overwhelming majority of real application SQL.', 1
    ) ON CONFLICT (id) DO UPDATE SET
      course_id = EXCLUDED.course_id,
      title = EXCLUDED.title,
      summary = EXCLUDED.summary,
      position = EXCLUDED.position;

INSERT INTO public.modules (
      id, course_id, title, summary, position
    ) VALUES (
      'postgresql-for-developers-module-2', 'course.postgresql-for-developers', 'Schema Design', 'Modelling data so the database enforces your rules instead of hoping the application does.', 2
    ) ON CONFLICT (id) DO UPDATE SET
      course_id = EXCLUDED.course_id,
      title = EXCLUDED.title,
      summary = EXCLUDED.summary,
      position = EXCLUDED.position;

INSERT INTO public.modules (
      id, course_id, title, summary, position
    ) VALUES (
      'postgresql-for-developers-module-3', 'course.postgresql-for-developers', 'Query Performance', 'Finding the slow query, understanding why it is slow, and fixing the actual cause.', 3
    ) ON CONFLICT (id) DO UPDATE SET
      course_id = EXCLUDED.course_id,
      title = EXCLUDED.title,
      summary = EXCLUDED.summary,
      position = EXCLUDED.position;

INSERT INTO public.modules (
      id, course_id, title, summary, position
    ) VALUES (
      'postgresql-for-developers-module-4', 'course.postgresql-for-developers', 'Operating Postgres', 'Transactions, schema change, and the operational habits that keep production boring.', 4
    ) ON CONFLICT (id) DO UPDATE SET
      course_id = EXCLUDED.course_id,
      title = EXCLUDED.title,
      summary = EXCLUDED.summary,
      position = EXCLUDED.position;

INSERT INTO public.modules (
      id, course_id, title, summary, position
    ) VALUES (
      'devops-with-docker-and-kubernetes-module-1', 'course.devops-with-docker-and-kubernetes', 'Containers and Images', 'What a container actually is, and how to build images that are small, fast, and reproducible.', 1
    ) ON CONFLICT (id) DO UPDATE SET
      course_id = EXCLUDED.course_id,
      title = EXCLUDED.title,
      summary = EXCLUDED.summary,
      position = EXCLUDED.position;

INSERT INTO public.modules (
      id, course_id, title, summary, position
    ) VALUES (
      'devops-with-docker-and-kubernetes-module-2', 'course.devops-with-docker-and-kubernetes', 'Kubernetes Core Objects', 'The handful of objects you need before any of the rest of Kubernetes makes sense.', 2
    ) ON CONFLICT (id) DO UPDATE SET
      course_id = EXCLUDED.course_id,
      title = EXCLUDED.title,
      summary = EXCLUDED.summary,
      position = EXCLUDED.position;

INSERT INTO public.modules (
      id, course_id, title, summary, position
    ) VALUES (
      'devops-with-docker-and-kubernetes-module-3', 'course.devops-with-docker-and-kubernetes', 'Continuous Delivery', 'The automated path from a merged commit to running code, including the way back.', 3
    ) ON CONFLICT (id) DO UPDATE SET
      course_id = EXCLUDED.course_id,
      title = EXCLUDED.title,
      summary = EXCLUDED.summary,
      position = EXCLUDED.position;

INSERT INTO public.modules (
      id, course_id, title, summary, position
    ) VALUES (
      'devops-with-docker-and-kubernetes-module-4', 'course.devops-with-docker-and-kubernetes', 'Operating a Cluster', 'Life after the first deploy: visibility, scaling, and debugging what is actually running.', 4
    ) ON CONFLICT (id) DO UPDATE SET
      course_id = EXCLUDED.course_id,
      title = EXCLUDED.title,
      summary = EXCLUDED.summary,
      position = EXCLUDED.position;

INSERT INTO public.modules (
      id, course_id, title, summary, position
    ) VALUES (
      'practical-web-security-module-1', 'course.practical-web-security', 'Thinking About Threats', 'Before any specific vulnerability: who is attacking, what they want, and what secure defaults look like.', 1
    ) ON CONFLICT (id) DO UPDATE SET
      course_id = EXCLUDED.course_id,
      title = EXCLUDED.title,
      summary = EXCLUDED.summary,
      position = EXCLUDED.position;

INSERT INTO public.modules (
      id, course_id, title, summary, position
    ) VALUES (
      'practical-web-security-module-2', 'course.practical-web-security', 'Common Web Vulnerabilities', 'The three classic classes, how each is exploited, and the defence that genuinely works.', 2
    ) ON CONFLICT (id) DO UPDATE SET
      course_id = EXCLUDED.course_id,
      title = EXCLUDED.title,
      summary = EXCLUDED.summary,
      position = EXCLUDED.position;

INSERT INTO public.modules (
      id, course_id, title, summary, position
    ) VALUES (
      'practical-web-security-module-3', 'course.practical-web-security', 'Authentication Done Right', 'Identity handled properly: session strategy, credential storage, and additional factors.', 3
    ) ON CONFLICT (id) DO UPDATE SET
      course_id = EXCLUDED.course_id,
      title = EXCLUDED.title,
      summary = EXCLUDED.summary,
      position = EXCLUDED.position;

INSERT INTO public.modules (
      id, course_id, title, summary, position
    ) VALUES (
      'practical-web-security-module-4', 'course.practical-web-security', 'Hardening and Supply Chain', 'The layer around your application: transport, headers, secrets, and the code you did not write.', 4
    ) ON CONFLICT (id) DO UPDATE SET
      course_id = EXCLUDED.course_id,
      title = EXCLUDED.title,
      summary = EXCLUDED.summary,
      position = EXCLUDED.position;


-- 3. Lessons
INSERT INTO public.lessons (
        id, module_id, course_id, title, slug, youtube_video_id,
        video_url, duration, free_preview, notes, notes_plain,
        key_points, pro_tip, resources, position
      ) VALUES (
        'lesson.nextjs-app-router-in-depth-file-system-routing', 'nextjs-app-router-in-depth-module-1', 'course.nextjs-app-router-in-depth',
        'File-system routing and the app directory', 'nextjs-app-router-in-depth-file-system-routing', '9602Yzvd7ik',
        'https://www.youtube.com/watch?v=9602Yzvd7ik', 350, true, '[{"_type":"block","_key":"nextjs-app-router-in-depth-file-system-routing-intro","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"nextjs-app-router-in-depth-file-system-routing-intro-span","text":"The App Router maps folders to URL segments and reserved filenames to behaviour. Once you can read a folder tree as a set of routes, most of the framework stops being magic.","marks":[]}]},{"_type":"block","_key":"nextjs-app-router-in-depth-file-system-routing-h2","style":"h2","markDefs":[],"children":[{"_type":"span","_key":"nextjs-app-router-in-depth-file-system-routing-h2-span","text":"What this lesson covers","marks":[]}]},{"_type":"block","_key":"nextjs-app-router-in-depth-file-system-routing-point-0","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"nextjs-app-router-in-depth-file-system-routing-point-0-span","text":"Map folders and page files to URL segments","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"nextjs-app-router-in-depth-file-system-routing-point-1","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"nextjs-app-router-in-depth-file-system-routing-point-1-span","text":"Use route groups to organise without affecting the URL","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"nextjs-app-router-in-depth-file-system-routing-point-2","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"nextjs-app-router-in-depth-file-system-routing-point-2-span","text":"Recognise the reserved files: page, layout, loading, error, not-found","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"nextjs-app-router-in-depth-file-system-routing-outro","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"nextjs-app-router-in-depth-file-system-routing-outro-span","text":"This lesson sits in Routing and Layouts, part of Next.js App Router in Depth. It assumes what came before it and leads directly into the next lesson in the module.","marks":[]}]}]'::jsonb,
        'The App Router maps folders to URL segments and reserved filenames to behaviour. Once you can read a folder tree as a set of routes, most of the framework stops being magic.

What this lesson covers

Map folders and page files to URL segments

Use route groups to organise without affecting the URL

Recognise the reserved files: page, layout, loading, error, not-found

This lesson sits in Routing and Layouts, part of Next.js App Router in Depth. It assumes what came before it and leads directly into the next lesson in the module.', '["Map folders and page files to URL segments","Use route groups to organise without affecting the URL","Recognise the reserved files: page, layout, loading, error, not-found"]'::jsonb, 'A folder in parentheses is a route group: it organises your files without adding a segment to the URL.',
        '[{"_type":"resource","_key":"nextjs-app-router-in-depth-file-system-routing-docs","type":"link","title":"Next.js documentation","description":"The official reference for the tools used in this lesson.","url":"https://nextjs.org/docs"}]'::jsonb, 1
      ) ON CONFLICT (id) DO UPDATE SET
        module_id = EXCLUDED.module_id,
        course_id = EXCLUDED.course_id,
        title = EXCLUDED.title,
        slug = EXCLUDED.slug,
        youtube_video_id = EXCLUDED.youtube_video_id,
        video_url = EXCLUDED.video_url,
        duration = EXCLUDED.duration,
        free_preview = EXCLUDED.free_preview,
        notes = EXCLUDED.notes,
        notes_plain = EXCLUDED.notes_plain,
        key_points = EXCLUDED.key_points,
        pro_tip = EXCLUDED.pro_tip,
        resources = EXCLUDED.resources,
        position = EXCLUDED.position;

INSERT INTO public.lessons (
        id, module_id, course_id, title, slug, youtube_video_id,
        video_url, duration, free_preview, notes, notes_plain,
        key_points, pro_tip, resources, position
      ) VALUES (
        'lesson.nextjs-app-router-in-depth-layouts-and-templates', 'nextjs-app-router-in-depth-module-1', 'course.nextjs-app-router-in-depth',
        'Layouts, templates, and shared UI', 'nextjs-app-router-in-depth-layouts-and-templates', 'k48WMdl2eUc',
        'https://www.youtube.com/watch?v=k48WMdl2eUc', 380, false, '[{"_type":"block","_key":"nextjs-app-router-in-depth-layouts-and-templates-intro","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"nextjs-app-router-in-depth-layouts-and-templates-intro-span","text":"Layouts persist across navigations and keep their state; templates remount on every navigation. Choosing the wrong one is why your sidebar scroll position keeps resetting.","marks":[]}]},{"_type":"block","_key":"nextjs-app-router-in-depth-layouts-and-templates-h2","style":"h2","markDefs":[],"children":[{"_type":"span","_key":"nextjs-app-router-in-depth-layouts-and-templates-h2-span","text":"What this lesson covers","marks":[]}]},{"_type":"block","_key":"nextjs-app-router-in-depth-layouts-and-templates-point-0","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"nextjs-app-router-in-depth-layouts-and-templates-po-b1c5446e","text":"Nest layouts to share chrome across a section","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"nextjs-app-router-in-depth-layouts-and-templates-point-1","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"nextjs-app-router-in-depth-layouts-and-templates-po-e088f716","text":"Know when state persistence makes a template the wrong choice","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"nextjs-app-router-in-depth-layouts-and-templates-point-2","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"nextjs-app-router-in-depth-layouts-and-templates-po-8b685af1","text":"Colocate loading and error UI with the layout it belongs to","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"nextjs-app-router-in-depth-layouts-and-templates-outro","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"nextjs-app-router-in-depth-layouts-and-templates-outro-span","text":"This lesson sits in Routing and Layouts, part of Next.js App Router in Depth. It assumes what came before it and leads directly into the next lesson in the module.","marks":[]}]}]'::jsonb,
        'Layouts persist across navigations and keep their state; templates remount on every navigation. Choosing the wrong one is why your sidebar scroll position keeps resetting.

What this lesson covers

Nest layouts to share chrome across a section

Know when state persistence makes a template the wrong choice

Colocate loading and error UI with the layout it belongs to

This lesson sits in Routing and Layouts, part of Next.js App Router in Depth. It assumes what came before it and leads directly into the next lesson in the module.', '["Nest layouts to share chrome across a section","Know when state persistence makes a template the wrong choice","Colocate loading and error UI with the layout it belongs to"]'::jsonb, '',
        '[{"_type":"resource","_key":"nextjs-app-router-in-depth-layouts-and-templates-docs","type":"link","title":"Next.js documentation","description":"The official reference for the tools used in this lesson.","url":"https://nextjs.org/docs"}]'::jsonb, 2
      ) ON CONFLICT (id) DO UPDATE SET
        module_id = EXCLUDED.module_id,
        course_id = EXCLUDED.course_id,
        title = EXCLUDED.title,
        slug = EXCLUDED.slug,
        youtube_video_id = EXCLUDED.youtube_video_id,
        video_url = EXCLUDED.video_url,
        duration = EXCLUDED.duration,
        free_preview = EXCLUDED.free_preview,
        notes = EXCLUDED.notes,
        notes_plain = EXCLUDED.notes_plain,
        key_points = EXCLUDED.key_points,
        pro_tip = EXCLUDED.pro_tip,
        resources = EXCLUDED.resources,
        position = EXCLUDED.position;

INSERT INTO public.lessons (
        id, module_id, course_id, title, slug, youtube_video_id,
        video_url, duration, free_preview, notes, notes_plain,
        key_points, pro_tip, resources, position
      ) VALUES (
        'lesson.nextjs-app-router-in-depth-dynamic-routes-and-params', 'nextjs-app-router-in-depth-module-1', 'course.nextjs-app-router-in-depth',
        'Dynamic routes and route params', 'nextjs-app-router-in-depth-dynamic-routes-and-params', 'j3QJ1Rhxxbw',
        'https://www.youtube.com/watch?v=j3QJ1Rhxxbw', 496, false, '[{"_type":"block","_key":"nextjs-app-router-in-depth-dynamic-routes-and-params-intro","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"nextjs-app-router-in-depth-dynamic-routes-and-param-3c3e5dce","text":"Dynamic segments capture values out of the URL and hand them to your page. Pre-generating the known ones turns a database read into a static file.","marks":[]}]},{"_type":"block","_key":"nextjs-app-router-in-depth-dynamic-routes-and-params-h2","style":"h2","markDefs":[],"children":[{"_type":"span","_key":"nextjs-app-router-in-depth-dynamic-routes-and-params-h2-span","text":"What this lesson covers","marks":[]}]},{"_type":"block","_key":"nextjs-app-router-in-depth-dynamic-routes-and-params-point-0","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"nextjs-app-router-in-depth-dynamic-routes-and-param-9549c5d9","text":"Capture single, catch-all, and optional catch-all segments","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"nextjs-app-router-in-depth-dynamic-routes-and-params-point-1","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"nextjs-app-router-in-depth-dynamic-routes-and-param-f0591afb","text":"Read params and search params inside a page","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"nextjs-app-router-in-depth-dynamic-routes-and-params-point-2","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"nextjs-app-router-in-depth-dynamic-routes-and-param-21a5ca6a","text":"Pre-render known routes with generateStaticParams","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"nextjs-app-router-in-depth-dynamic-routes-and-params-outro","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"nextjs-app-router-in-depth-dynamic-routes-and-param-ae3c4d1b","text":"This lesson sits in Routing and Layouts, part of Next.js App Router in Depth. It assumes what came before it and leads directly into the next lesson in the module.","marks":[]}]}]'::jsonb,
        'Dynamic segments capture values out of the URL and hand them to your page. Pre-generating the known ones turns a database read into a static file.

What this lesson covers

Capture single, catch-all, and optional catch-all segments

Read params and search params inside a page

Pre-render known routes with generateStaticParams

This lesson sits in Routing and Layouts, part of Next.js App Router in Depth. It assumes what came before it and leads directly into the next lesson in the module.', '["Capture single, catch-all, and optional catch-all segments","Read params and search params inside a page","Pre-render known routes with generateStaticParams"]'::jsonb, 'Pre-generate the routes you already know about; leave the long tail to render on demand.',
        '[{"_type":"resource","_key":"nextjs-app-router-in-depth-dynamic-routes-and-params-docs","type":"link","title":"Next.js documentation","description":"The official reference for the tools used in this lesson.","url":"https://nextjs.org/docs"}]'::jsonb, 3
      ) ON CONFLICT (id) DO UPDATE SET
        module_id = EXCLUDED.module_id,
        course_id = EXCLUDED.course_id,
        title = EXCLUDED.title,
        slug = EXCLUDED.slug,
        youtube_video_id = EXCLUDED.youtube_video_id,
        video_url = EXCLUDED.video_url,
        duration = EXCLUDED.duration,
        free_preview = EXCLUDED.free_preview,
        notes = EXCLUDED.notes,
        notes_plain = EXCLUDED.notes_plain,
        key_points = EXCLUDED.key_points,
        pro_tip = EXCLUDED.pro_tip,
        resources = EXCLUDED.resources,
        position = EXCLUDED.position;

INSERT INTO public.lessons (
        id, module_id, course_id, title, slug, youtube_video_id,
        video_url, duration, free_preview, notes, notes_plain,
        key_points, pro_tip, resources, position
      ) VALUES (
        'lesson.nextjs-app-router-in-depth-server-components', 'nextjs-app-router-in-depth-module-2', 'course.nextjs-app-router-in-depth',
        'What server components actually do', 'nextjs-app-router-in-depth-server-components', 'rGPpQdbDbwo',
        'https://www.youtube.com/watch?v=rGPpQdbDbwo', 948, false, '[{"_type":"block","_key":"nextjs-app-router-in-depth-server-components-intro","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"nextjs-app-router-in-depth-server-components-intro-span","text":"Server components run on the server and send rendered output rather than code. That is why they can read a database directly and why they add nothing to your bundle.","marks":[]}]},{"_type":"block","_key":"nextjs-app-router-in-depth-server-components-h2","style":"h2","markDefs":[],"children":[{"_type":"span","_key":"nextjs-app-router-in-depth-server-components-h2-span","text":"What this lesson covers","marks":[]}]},{"_type":"block","_key":"nextjs-app-router-in-depth-server-components-point-0","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"nextjs-app-router-in-depth-server-components-point-0-span","text":"Render on the server and ship no component code to the client","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"nextjs-app-router-in-depth-server-components-point-1","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"nextjs-app-router-in-depth-server-components-point-1-span","text":"Read data and secrets directly, without an API round trip","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"nextjs-app-router-in-depth-server-components-point-2","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"nextjs-app-router-in-depth-server-components-point-2-span","text":"Understand why server components cannot hold state or effects","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"nextjs-app-router-in-depth-server-components-outro","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"nextjs-app-router-in-depth-server-components-outro-span","text":"This lesson sits in Server and Client Components, part of Next.js App Router in Depth. It assumes what came before it and leads directly into the next lesson in the module.","marks":[]}]}]'::jsonb,
        'Server components run on the server and send rendered output rather than code. That is why they can read a database directly and why they add nothing to your bundle.

What this lesson covers

Render on the server and ship no component code to the client

Read data and secrets directly, without an API round trip

Understand why server components cannot hold state or effects

This lesson sits in Server and Client Components, part of Next.js App Router in Depth. It assumes what came before it and leads directly into the next lesson in the module.', '["Render on the server and ship no component code to the client","Read data and secrets directly, without an API round trip","Understand why server components cannot hold state or effects"]'::jsonb, '',
        '[{"_type":"resource","_key":"nextjs-app-router-in-depth-server-components-docs","type":"link","title":"Next.js documentation","description":"The official reference for the tools used in this lesson.","url":"https://nextjs.org/docs"},{"_type":"resource","_key":"nextjs-app-router-in-depth-server-components-extra","type":"link","title":"React docs: Server Components","description":"The upstream React explanation the Next.js implementation follows.","url":"https://react.dev/reference/rsc/server-components"}]'::jsonb, 1
      ) ON CONFLICT (id) DO UPDATE SET
        module_id = EXCLUDED.module_id,
        course_id = EXCLUDED.course_id,
        title = EXCLUDED.title,
        slug = EXCLUDED.slug,
        youtube_video_id = EXCLUDED.youtube_video_id,
        video_url = EXCLUDED.video_url,
        duration = EXCLUDED.duration,
        free_preview = EXCLUDED.free_preview,
        notes = EXCLUDED.notes,
        notes_plain = EXCLUDED.notes_plain,
        key_points = EXCLUDED.key_points,
        pro_tip = EXCLUDED.pro_tip,
        resources = EXCLUDED.resources,
        position = EXCLUDED.position;

INSERT INTO public.lessons (
        id, module_id, course_id, title, slug, youtube_video_id,
        video_url, duration, free_preview, notes, notes_plain,
        key_points, pro_tip, resources, position
      ) VALUES (
        'lesson.nextjs-app-router-in-depth-use-client-boundary', 'nextjs-app-router-in-depth-module-2', 'course.nextjs-app-router-in-depth',
        'The "use client" boundary', 'nextjs-app-router-in-depth-use-client-boundary', 'Qdkg_mrniLk',
        'https://www.youtube.com/watch?v=Qdkg_mrniLk', 634, false, '[{"_type":"block","_key":"nextjs-app-router-in-depth-use-client-boundary-intro","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"nextjs-app-router-in-depth-use-client-boundary-intro-span","text":"The directive does not mark one component as interactive — it marks the entry point to a client subtree. Everything imported below it goes to the browser too.","marks":[]}]},{"_type":"block","_key":"nextjs-app-router-in-depth-use-client-boundary-h2","style":"h2","markDefs":[],"children":[{"_type":"span","_key":"nextjs-app-router-in-depth-use-client-boundary-h2-span","text":"What this lesson covers","marks":[]}]},{"_type":"block","_key":"nextjs-app-router-in-depth-use-client-boundary-point-0","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"nextjs-app-router-in-depth-use-client-boundary-point-0-span","text":"Place the directive at the boundary, not on every file","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"nextjs-app-router-in-depth-use-client-boundary-point-1","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"nextjs-app-router-in-depth-use-client-boundary-point-1-span","text":"Push interactivity to the leaves to keep the bundle small","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"nextjs-app-router-in-depth-use-client-boundary-point-2","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"nextjs-app-router-in-depth-use-client-boundary-point-2-span","text":"Spot the accidental import that drags the server tree client-side","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"nextjs-app-router-in-depth-use-client-boundary-outro","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"nextjs-app-router-in-depth-use-client-boundary-outro-span","text":"This lesson sits in Server and Client Components, part of Next.js App Router in Depth. It assumes what came before it and leads directly into the next lesson in the module.","marks":[]}]}]'::jsonb,
        'The directive does not mark one component as interactive — it marks the entry point to a client subtree. Everything imported below it goes to the browser too.

What this lesson covers

Place the directive at the boundary, not on every file

Push interactivity to the leaves to keep the bundle small

Spot the accidental import that drags the server tree client-side

This lesson sits in Server and Client Components, part of Next.js App Router in Depth. It assumes what came before it and leads directly into the next lesson in the module.', '["Place the directive at the boundary, not on every file","Push interactivity to the leaves to keep the bundle small","Spot the accidental import that drags the server tree client-side"]'::jsonb, 'If a whole page turned into a client component, look for one interactive import near the top of the tree.',
        '[{"_type":"resource","_key":"nextjs-app-router-in-depth-use-client-boundary-docs","type":"link","title":"Next.js documentation","description":"The official reference for the tools used in this lesson.","url":"https://nextjs.org/docs"}]'::jsonb, 2
      ) ON CONFLICT (id) DO UPDATE SET
        module_id = EXCLUDED.module_id,
        course_id = EXCLUDED.course_id,
        title = EXCLUDED.title,
        slug = EXCLUDED.slug,
        youtube_video_id = EXCLUDED.youtube_video_id,
        video_url = EXCLUDED.video_url,
        duration = EXCLUDED.duration,
        free_preview = EXCLUDED.free_preview,
        notes = EXCLUDED.notes,
        notes_plain = EXCLUDED.notes_plain,
        key_points = EXCLUDED.key_points,
        pro_tip = EXCLUDED.pro_tip,
        resources = EXCLUDED.resources,
        position = EXCLUDED.position;

INSERT INTO public.lessons (
        id, module_id, course_id, title, slug, youtube_video_id,
        video_url, duration, free_preview, notes, notes_plain,
        key_points, pro_tip, resources, position
      ) VALUES (
        'lesson.nextjs-app-router-in-depth-passing-data-across-the-boundary', 'nextjs-app-router-in-depth-module-2', 'course.nextjs-app-router-in-depth',
        'Passing data across the boundary', 'nextjs-app-router-in-depth-passing-data-across-the-boundary', 'dMCSiA5gzkU',
        'https://www.youtube.com/watch?v=dMCSiA5gzkU', 379, false, '[{"_type":"block","_key":"nextjs-app-router-in-depth-passing-data-across-the-c6cf2371","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"nextjs-app-router-in-depth-passing-data-across-the-b84359f3","text":"Props crossing into a client component get serialised, which is why functions and class instances fail. Composition through children keeps server-rendered content out of the bundle.","marks":[]}]},{"_type":"block","_key":"nextjs-app-router-in-depth-passing-data-across-the-7f2329a4","style":"h2","markDefs":[],"children":[{"_type":"span","_key":"nextjs-app-router-in-depth-passing-data-across-the-2831b655","text":"What this lesson covers","marks":[]}]},{"_type":"block","_key":"nextjs-app-router-in-depth-passing-data-across-the-c43e8d6f","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"nextjs-app-router-in-depth-passing-data-across-the-63d7f1af","text":"Pass only serialisable props into client components","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"nextjs-app-router-in-depth-passing-data-across-the-91277afa","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"nextjs-app-router-in-depth-passing-data-across-the-e0b641dc","text":"Use children to slot server content inside a client shell","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"nextjs-app-router-in-depth-passing-data-across-the-4835d7df","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"nextjs-app-router-in-depth-passing-data-across-the-bd12f240","text":"Avoid leaking server-only data through props","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"nextjs-app-router-in-depth-passing-data-across-the-e28e3d0b","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"nextjs-app-router-in-depth-passing-data-across-the-f8d240d4","text":"This lesson sits in Server and Client Components, part of Next.js App Router in Depth. It assumes what came before it and leads directly into the next lesson in the module.","marks":[]}]}]'::jsonb,
        'Props crossing into a client component get serialised, which is why functions and class instances fail. Composition through children keeps server-rendered content out of the bundle.

What this lesson covers

Pass only serialisable props into client components

Use children to slot server content inside a client shell

Avoid leaking server-only data through props

This lesson sits in Server and Client Components, part of Next.js App Router in Depth. It assumes what came before it and leads directly into the next lesson in the module.', '["Pass only serialisable props into client components","Use children to slot server content inside a client shell","Avoid leaking server-only data through props"]'::jsonb, '',
        '[{"_type":"resource","_key":"nextjs-app-router-in-depth-passing-data-across-the-6ba03325","type":"link","title":"Next.js documentation","description":"The official reference for the tools used in this lesson.","url":"https://nextjs.org/docs"}]'::jsonb, 3
      ) ON CONFLICT (id) DO UPDATE SET
        module_id = EXCLUDED.module_id,
        course_id = EXCLUDED.course_id,
        title = EXCLUDED.title,
        slug = EXCLUDED.slug,
        youtube_video_id = EXCLUDED.youtube_video_id,
        video_url = EXCLUDED.video_url,
        duration = EXCLUDED.duration,
        free_preview = EXCLUDED.free_preview,
        notes = EXCLUDED.notes,
        notes_plain = EXCLUDED.notes_plain,
        key_points = EXCLUDED.key_points,
        pro_tip = EXCLUDED.pro_tip,
        resources = EXCLUDED.resources,
        position = EXCLUDED.position;

INSERT INTO public.lessons (
        id, module_id, course_id, title, slug, youtube_video_id,
        video_url, duration, free_preview, notes, notes_plain,
        key_points, pro_tip, resources, position
      ) VALUES (
        'lesson.nextjs-app-router-in-depth-fetching-in-server-components', 'nextjs-app-router-in-depth-module-3', 'course.nextjs-app-router-in-depth',
        'Fetching data in server components', 'nextjs-app-router-in-depth-fetching-in-server-components', 'WKfPctdIDek',
        'https://www.youtube.com/watch?v=WKfPctdIDek', 261, false, '[{"_type":"block","_key":"nextjs-app-router-in-depth-fetching-in-server-compo-31aa6f0a","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"nextjs-app-router-in-depth-fetching-in-server-compo-e19ba8e8","text":"A server component can simply await its data. No client-side loading state, no waterfall of effects, and no exposed credentials.","marks":[]}]},{"_type":"block","_key":"nextjs-app-router-in-depth-fetching-in-server-components-h2","style":"h2","markDefs":[],"children":[{"_type":"span","_key":"nextjs-app-router-in-depth-fetching-in-server-compo-45c2fbbe","text":"What this lesson covers","marks":[]}]},{"_type":"block","_key":"nextjs-app-router-in-depth-fetching-in-server-compo-e1c643f5","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"nextjs-app-router-in-depth-fetching-in-server-compo-1fa44b3f","text":"Await data directly inside an async server component","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"nextjs-app-router-in-depth-fetching-in-server-compo-4511c5b5","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"nextjs-app-router-in-depth-fetching-in-server-compo-8fb5fe30","text":"Fetch in parallel instead of sequential waterfalls","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"nextjs-app-router-in-depth-fetching-in-server-compo-03dac614","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"nextjs-app-router-in-depth-fetching-in-server-compo-f2c4e3be","text":"Keep tokens and database access on the server","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"nextjs-app-router-in-depth-fetching-in-server-compo-7fd2baa2","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"nextjs-app-router-in-depth-fetching-in-server-compo-fad921bd","text":"This lesson sits in Data Fetching and Caching, part of Next.js App Router in Depth. It assumes what came before it and leads directly into the next lesson in the module.","marks":[]}]}]'::jsonb,
        'A server component can simply await its data. No client-side loading state, no waterfall of effects, and no exposed credentials.

What this lesson covers

Await data directly inside an async server component

Fetch in parallel instead of sequential waterfalls

Keep tokens and database access on the server

This lesson sits in Data Fetching and Caching, part of Next.js App Router in Depth. It assumes what came before it and leads directly into the next lesson in the module.', '["Await data directly inside an async server component","Fetch in parallel instead of sequential waterfalls","Keep tokens and database access on the server"]'::jsonb, '',
        '[{"_type":"resource","_key":"nextjs-app-router-in-depth-fetching-in-server-compo-b2cb90c5","type":"link","title":"Next.js documentation","description":"The official reference for the tools used in this lesson.","url":"https://nextjs.org/docs"}]'::jsonb, 1
      ) ON CONFLICT (id) DO UPDATE SET
        module_id = EXCLUDED.module_id,
        course_id = EXCLUDED.course_id,
        title = EXCLUDED.title,
        slug = EXCLUDED.slug,
        youtube_video_id = EXCLUDED.youtube_video_id,
        video_url = EXCLUDED.video_url,
        duration = EXCLUDED.duration,
        free_preview = EXCLUDED.free_preview,
        notes = EXCLUDED.notes,
        notes_plain = EXCLUDED.notes_plain,
        key_points = EXCLUDED.key_points,
        pro_tip = EXCLUDED.pro_tip,
        resources = EXCLUDED.resources,
        position = EXCLUDED.position;

INSERT INTO public.lessons (
        id, module_id, course_id, title, slug, youtube_video_id,
        video_url, duration, free_preview, notes, notes_plain,
        key_points, pro_tip, resources, position
      ) VALUES (
        'lesson.nextjs-app-router-in-depth-caching-and-revalidation', 'nextjs-app-router-in-depth-module-3', 'course.nextjs-app-router-in-depth',
        'Caching and revalidation', 'nextjs-app-router-in-depth-caching-and-revalidation', 'VBlSe8tvg4U',
        'https://www.youtube.com/watch?v=VBlSe8tvg4U', 1522, false, '[{"_type":"block","_key":"nextjs-app-router-in-depth-caching-and-revalidation-intro","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"nextjs-app-router-in-depth-caching-and-revalidation-e091ae2d","text":"Caching is the part people get burned by. Know what layer holds your data, how long it holds it, and which lever invalidates it.","marks":[]}]},{"_type":"block","_key":"nextjs-app-router-in-depth-caching-and-revalidation-h2","style":"h2","markDefs":[],"children":[{"_type":"span","_key":"nextjs-app-router-in-depth-caching-and-revalidation-h2-span","text":"What this lesson covers","marks":[]}]},{"_type":"block","_key":"nextjs-app-router-in-depth-caching-and-revalidation-point-0","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"nextjs-app-router-in-depth-caching-and-revalidation-08ba07ba","text":"Distinguish request-level caching from the full route cache","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"nextjs-app-router-in-depth-caching-and-revalidation-point-1","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"nextjs-app-router-in-depth-caching-and-revalidation-d42019a7","text":"Revalidate on a timer or on demand by tag","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"nextjs-app-router-in-depth-caching-and-revalidation-point-2","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"nextjs-app-router-in-depth-caching-and-revalidation-a07574f5","text":"Opt out deliberately when data must always be fresh","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"nextjs-app-router-in-depth-caching-and-revalidation-outro","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"nextjs-app-router-in-depth-caching-and-revalidation-2146cf1a","text":"This lesson sits in Data Fetching and Caching, part of Next.js App Router in Depth. It assumes what came before it and leads directly into the next lesson in the module.","marks":[]}]}]'::jsonb,
        'Caching is the part people get burned by. Know what layer holds your data, how long it holds it, and which lever invalidates it.

What this lesson covers

Distinguish request-level caching from the full route cache

Revalidate on a timer or on demand by tag

Opt out deliberately when data must always be fresh

This lesson sits in Data Fetching and Caching, part of Next.js App Router in Depth. It assumes what came before it and leads directly into the next lesson in the module.', '["Distinguish request-level caching from the full route cache","Revalidate on a timer or on demand by tag","Opt out deliberately when data must always be fresh"]'::jsonb, 'Tag your reads by content type; then one webhook can invalidate exactly the pages that changed.',
        '[{"_type":"resource","_key":"nextjs-app-router-in-depth-caching-and-revalidation-docs","type":"link","title":"Next.js documentation","description":"The official reference for the tools used in this lesson.","url":"https://nextjs.org/docs"}]'::jsonb, 2
      ) ON CONFLICT (id) DO UPDATE SET
        module_id = EXCLUDED.module_id,
        course_id = EXCLUDED.course_id,
        title = EXCLUDED.title,
        slug = EXCLUDED.slug,
        youtube_video_id = EXCLUDED.youtube_video_id,
        video_url = EXCLUDED.video_url,
        duration = EXCLUDED.duration,
        free_preview = EXCLUDED.free_preview,
        notes = EXCLUDED.notes,
        notes_plain = EXCLUDED.notes_plain,
        key_points = EXCLUDED.key_points,
        pro_tip = EXCLUDED.pro_tip,
        resources = EXCLUDED.resources,
        position = EXCLUDED.position;

INSERT INTO public.lessons (
        id, module_id, course_id, title, slug, youtube_video_id,
        video_url, duration, free_preview, notes, notes_plain,
        key_points, pro_tip, resources, position
      ) VALUES (
        'lesson.nextjs-app-router-in-depth-streaming-and-suspense', 'nextjs-app-router-in-depth-module-3', 'course.nextjs-app-router-in-depth',
        'Streaming with Suspense', 'nextjs-app-router-in-depth-streaming-and-suspense', '2o5m1ovfl3c',
        'https://www.youtube.com/watch?v=2o5m1ovfl3c', 187, false, '[{"_type":"block","_key":"nextjs-app-router-in-depth-streaming-and-suspense-intro","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"nextjs-app-router-in-depth-streaming-and-suspense-intro-span","text":"Streaming lets the fast parts of a page render while the slow parts are still loading, so time to first paint stops being hostage to your slowest query.","marks":[]}]},{"_type":"block","_key":"nextjs-app-router-in-depth-streaming-and-suspense-h2","style":"h2","markDefs":[],"children":[{"_type":"span","_key":"nextjs-app-router-in-depth-streaming-and-suspense-h2-span","text":"What this lesson covers","marks":[]}]},{"_type":"block","_key":"nextjs-app-router-in-depth-streaming-and-suspense-point-0","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"nextjs-app-router-in-depth-streaming-and-suspense-p-c00dfb73","text":"Wrap slow subtrees in Suspense with a real fallback","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"nextjs-app-router-in-depth-streaming-and-suspense-point-1","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"nextjs-app-router-in-depth-streaming-and-suspense-p-c641e506","text":"Use loading files for route-level streaming","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"nextjs-app-router-in-depth-streaming-and-suspense-point-2","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"nextjs-app-router-in-depth-streaming-and-suspense-p-1c86e34a","text":"Avoid blocking the shell on a single slow request","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"nextjs-app-router-in-depth-streaming-and-suspense-outro","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"nextjs-app-router-in-depth-streaming-and-suspense-outro-span","text":"This lesson sits in Data Fetching and Caching, part of Next.js App Router in Depth. It assumes what came before it and leads directly into the next lesson in the module.","marks":[]}]}]'::jsonb,
        'Streaming lets the fast parts of a page render while the slow parts are still loading, so time to first paint stops being hostage to your slowest query.

What this lesson covers

Wrap slow subtrees in Suspense with a real fallback

Use loading files for route-level streaming

Avoid blocking the shell on a single slow request

This lesson sits in Data Fetching and Caching, part of Next.js App Router in Depth. It assumes what came before it and leads directly into the next lesson in the module.', '["Wrap slow subtrees in Suspense with a real fallback","Use loading files for route-level streaming","Avoid blocking the shell on a single slow request"]'::jsonb, '',
        '[{"_type":"resource","_key":"nextjs-app-router-in-depth-streaming-and-suspense-docs","type":"link","title":"Next.js documentation","description":"The official reference for the tools used in this lesson.","url":"https://nextjs.org/docs"}]'::jsonb, 3
      ) ON CONFLICT (id) DO UPDATE SET
        module_id = EXCLUDED.module_id,
        course_id = EXCLUDED.course_id,
        title = EXCLUDED.title,
        slug = EXCLUDED.slug,
        youtube_video_id = EXCLUDED.youtube_video_id,
        video_url = EXCLUDED.video_url,
        duration = EXCLUDED.duration,
        free_preview = EXCLUDED.free_preview,
        notes = EXCLUDED.notes,
        notes_plain = EXCLUDED.notes_plain,
        key_points = EXCLUDED.key_points,
        pro_tip = EXCLUDED.pro_tip,
        resources = EXCLUDED.resources,
        position = EXCLUDED.position;

INSERT INTO public.lessons (
        id, module_id, course_id, title, slug, youtube_video_id,
        video_url, duration, free_preview, notes, notes_plain,
        key_points, pro_tip, resources, position
      ) VALUES (
        'lesson.nextjs-app-router-in-depth-server-actions-basics', 'nextjs-app-router-in-depth-module-4', 'course.nextjs-app-router-in-depth',
        'Writing your first server action', 'nextjs-app-router-in-depth-server-actions-basics', 'O94ESaJtHtM',
        'https://www.youtube.com/watch?v=O94ESaJtHtM', 471, false, '[{"_type":"block","_key":"nextjs-app-router-in-depth-server-actions-basics-intro","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"nextjs-app-router-in-depth-server-actions-basics-intro-span","text":"A server action is a function that only ever runs on the server but can be called from the client. It replaces the route handler you would otherwise write by hand.","marks":[]}]},{"_type":"block","_key":"nextjs-app-router-in-depth-server-actions-basics-h2","style":"h2","markDefs":[],"children":[{"_type":"span","_key":"nextjs-app-router-in-depth-server-actions-basics-h2-span","text":"What this lesson covers","marks":[]}]},{"_type":"block","_key":"nextjs-app-router-in-depth-server-actions-basics-point-0","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"nextjs-app-router-in-depth-server-actions-basics-po-9b9c9579","text":"Define an action and call it from a form or an event","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"nextjs-app-router-in-depth-server-actions-basics-point-1","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"nextjs-app-router-in-depth-server-actions-basics-po-6923550c","text":"Revalidate the affected data after a write","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"nextjs-app-router-in-depth-server-actions-basics-point-2","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"nextjs-app-router-in-depth-server-actions-basics-po-72fe43f9","text":"Keep write credentials on the server side of the call","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"nextjs-app-router-in-depth-server-actions-basics-outro","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"nextjs-app-router-in-depth-server-actions-basics-outro-span","text":"This lesson sits in Server Actions and Mutations, part of Next.js App Router in Depth. It assumes what came before it and leads directly into the next lesson in the module.","marks":[]}]}]'::jsonb,
        'A server action is a function that only ever runs on the server but can be called from the client. It replaces the route handler you would otherwise write by hand.

What this lesson covers

Define an action and call it from a form or an event

Revalidate the affected data after a write

Keep write credentials on the server side of the call

This lesson sits in Server Actions and Mutations, part of Next.js App Router in Depth. It assumes what came before it and leads directly into the next lesson in the module.', '["Define an action and call it from a form or an event","Revalidate the affected data after a write","Keep write credentials on the server side of the call"]'::jsonb, '',
        '[{"_type":"resource","_key":"nextjs-app-router-in-depth-server-actions-basics-docs","type":"link","title":"Next.js documentation","description":"The official reference for the tools used in this lesson.","url":"https://nextjs.org/docs"}]'::jsonb, 1
      ) ON CONFLICT (id) DO UPDATE SET
        module_id = EXCLUDED.module_id,
        course_id = EXCLUDED.course_id,
        title = EXCLUDED.title,
        slug = EXCLUDED.slug,
        youtube_video_id = EXCLUDED.youtube_video_id,
        video_url = EXCLUDED.video_url,
        duration = EXCLUDED.duration,
        free_preview = EXCLUDED.free_preview,
        notes = EXCLUDED.notes,
        notes_plain = EXCLUDED.notes_plain,
        key_points = EXCLUDED.key_points,
        pro_tip = EXCLUDED.pro_tip,
        resources = EXCLUDED.resources,
        position = EXCLUDED.position;

INSERT INTO public.lessons (
        id, module_id, course_id, title, slug, youtube_video_id,
        video_url, duration, free_preview, notes, notes_plain,
        key_points, pro_tip, resources, position
      ) VALUES (
        'lesson.nextjs-app-router-in-depth-forms-and-validation', 'nextjs-app-router-in-depth-module-4', 'course.nextjs-app-router-in-depth',
        'Forms, validation, and error states', 'nextjs-app-router-in-depth-forms-and-validation', 'tLhcyBfljYo',
        'https://www.youtube.com/watch?v=tLhcyBfljYo', 1016, false, '[{"_type":"block","_key":"nextjs-app-router-in-depth-forms-and-validation-intro","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"nextjs-app-router-in-depth-forms-and-validation-intro-span","text":"Client-side validation is a convenience; the server check is the real one. Parse the payload on arrival and return errors the form can render.","marks":[]}]},{"_type":"block","_key":"nextjs-app-router-in-depth-forms-and-validation-h2","style":"h2","markDefs":[],"children":[{"_type":"span","_key":"nextjs-app-router-in-depth-forms-and-validation-h2-span","text":"What this lesson covers","marks":[]}]},{"_type":"block","_key":"nextjs-app-router-in-depth-forms-and-validation-point-0","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"nextjs-app-router-in-depth-forms-and-validation-point-0-span","text":"Validate submitted data on the server before writing","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"nextjs-app-router-in-depth-forms-and-validation-point-1","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"nextjs-app-router-in-depth-forms-and-validation-point-1-span","text":"Return structured field errors back to the form","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"nextjs-app-router-in-depth-forms-and-validation-point-2","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"nextjs-app-router-in-depth-forms-and-validation-point-2-span","text":"Keep the form usable when JavaScript has not loaded","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"nextjs-app-router-in-depth-forms-and-validation-outro","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"nextjs-app-router-in-depth-forms-and-validation-outro-span","text":"This lesson sits in Server Actions and Mutations, part of Next.js App Router in Depth. It assumes what came before it and leads directly into the next lesson in the module.","marks":[]}]}]'::jsonb,
        'Client-side validation is a convenience; the server check is the real one. Parse the payload on arrival and return errors the form can render.

What this lesson covers

Validate submitted data on the server before writing

Return structured field errors back to the form

Keep the form usable when JavaScript has not loaded

This lesson sits in Server Actions and Mutations, part of Next.js App Router in Depth. It assumes what came before it and leads directly into the next lesson in the module.', '["Validate submitted data on the server before writing","Return structured field errors back to the form","Keep the form usable when JavaScript has not loaded"]'::jsonb, 'Never trust the shape of an incoming payload. Parse it, then use the parsed value.',
        '[{"_type":"resource","_key":"nextjs-app-router-in-depth-forms-and-validation-docs","type":"link","title":"Next.js documentation","description":"The official reference for the tools used in this lesson.","url":"https://nextjs.org/docs"}]'::jsonb, 2
      ) ON CONFLICT (id) DO UPDATE SET
        module_id = EXCLUDED.module_id,
        course_id = EXCLUDED.course_id,
        title = EXCLUDED.title,
        slug = EXCLUDED.slug,
        youtube_video_id = EXCLUDED.youtube_video_id,
        video_url = EXCLUDED.video_url,
        duration = EXCLUDED.duration,
        free_preview = EXCLUDED.free_preview,
        notes = EXCLUDED.notes,
        notes_plain = EXCLUDED.notes_plain,
        key_points = EXCLUDED.key_points,
        pro_tip = EXCLUDED.pro_tip,
        resources = EXCLUDED.resources,
        position = EXCLUDED.position;

INSERT INTO public.lessons (
        id, module_id, course_id, title, slug, youtube_video_id,
        video_url, duration, free_preview, notes, notes_plain,
        key_points, pro_tip, resources, position
      ) VALUES (
        'lesson.nextjs-app-router-in-depth-optimistic-updates', 'nextjs-app-router-in-depth-module-4', 'course.nextjs-app-router-in-depth',
        'Optimistic updates', 'nextjs-app-router-in-depth-optimistic-updates', 'M3mGY0pgFk0',
        'https://www.youtube.com/watch?v=M3mGY0pgFk0', 525, false, '[{"_type":"block","_key":"nextjs-app-router-in-depth-optimistic-updates-intro","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"nextjs-app-router-in-depth-optimistic-updates-intro-span","text":"Optimistic UI shows the expected result immediately and reconciles when the server answers. The interesting part is what happens when the server disagrees.","marks":[]}]},{"_type":"block","_key":"nextjs-app-router-in-depth-optimistic-updates-h2","style":"h2","markDefs":[],"children":[{"_type":"span","_key":"nextjs-app-router-in-depth-optimistic-updates-h2-span","text":"What this lesson covers","marks":[]}]},{"_type":"block","_key":"nextjs-app-router-in-depth-optimistic-updates-point-0","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"nextjs-app-router-in-depth-optimistic-updates-point-0-span","text":"Render the expected state before the server confirms","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"nextjs-app-router-in-depth-optimistic-updates-point-1","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"nextjs-app-router-in-depth-optimistic-updates-point-1-span","text":"Roll back cleanly when the action fails","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"nextjs-app-router-in-depth-optimistic-updates-point-2","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"nextjs-app-router-in-depth-optimistic-updates-point-2-span","text":"Keep optimistic state scoped to the component that owns it","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"nextjs-app-router-in-depth-optimistic-updates-outro","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"nextjs-app-router-in-depth-optimistic-updates-outro-span","text":"This lesson sits in Server Actions and Mutations, part of Next.js App Router in Depth. It assumes what came before it and leads directly into the next lesson in the module.","marks":[]}]}]'::jsonb,
        'Optimistic UI shows the expected result immediately and reconciles when the server answers. The interesting part is what happens when the server disagrees.

What this lesson covers

Render the expected state before the server confirms

Roll back cleanly when the action fails

Keep optimistic state scoped to the component that owns it

This lesson sits in Server Actions and Mutations, part of Next.js App Router in Depth. It assumes what came before it and leads directly into the next lesson in the module.', '["Render the expected state before the server confirms","Roll back cleanly when the action fails","Keep optimistic state scoped to the component that owns it"]'::jsonb, '',
        '[{"_type":"resource","_key":"nextjs-app-router-in-depth-optimistic-updates-docs","type":"link","title":"Next.js documentation","description":"The official reference for the tools used in this lesson.","url":"https://nextjs.org/docs"}]'::jsonb, 3
      ) ON CONFLICT (id) DO UPDATE SET
        module_id = EXCLUDED.module_id,
        course_id = EXCLUDED.course_id,
        title = EXCLUDED.title,
        slug = EXCLUDED.slug,
        youtube_video_id = EXCLUDED.youtube_video_id,
        video_url = EXCLUDED.video_url,
        duration = EXCLUDED.duration,
        free_preview = EXCLUDED.free_preview,
        notes = EXCLUDED.notes,
        notes_plain = EXCLUDED.notes_plain,
        key_points = EXCLUDED.key_points,
        pro_tip = EXCLUDED.pro_tip,
        resources = EXCLUDED.resources,
        position = EXCLUDED.position;

INSERT INTO public.lessons (
        id, module_id, course_id, title, slug, youtube_video_id,
        video_url, duration, free_preview, notes, notes_plain,
        key_points, pro_tip, resources, position
      ) VALUES (
        'lesson.react-performance-engineering-react-devtools-profiler', 'react-performance-engineering-module-1', 'course.react-performance-engineering',
        'Profiling with React DevTools', 'react-performance-engineering-react-devtools-profiler', 'Qwb-Za6cBws',
        'https://www.youtube.com/watch?v=Qwb-Za6cBws', 778, true, '[{"_type":"block","_key":"react-performance-engineering-react-devtools-profiler-intro","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"react-performance-engineering-react-devtools-profil-c1fa2c7a","text":"The profiler records what rendered, how long it took, and why it happened. Reading a flame graph correctly is most of the diagnostic work.","marks":[]}]},{"_type":"block","_key":"react-performance-engineering-react-devtools-profiler-h2","style":"h2","markDefs":[],"children":[{"_type":"span","_key":"react-performance-engineering-react-devtools-profil-8384dcbb","text":"What this lesson covers","marks":[]}]},{"_type":"block","_key":"react-performance-engineering-react-devtools-profil-c09a99f5","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"react-performance-engineering-react-devtools-profil-1f59bac6","text":"Record a realistic interaction, not an idle page","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"react-performance-engineering-react-devtools-profil-48f3cb5e","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"react-performance-engineering-react-devtools-profil-e0dfef1e","text":"Read the flame graph and the ranked chart","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"react-performance-engineering-react-devtools-profil-df950bb2","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"react-performance-engineering-react-devtools-profil-2f147faf","text":"Turn on \"why did this render\" to get the cause","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"react-performance-engineering-react-devtools-profiler-outro","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"react-performance-engineering-react-devtools-profil-d0019d7f","text":"This lesson sits in Measuring Performance, part of React Performance Engineering. It assumes what came before it and leads directly into the next lesson in the module.","marks":[]}]}]'::jsonb,
        'The profiler records what rendered, how long it took, and why it happened. Reading a flame graph correctly is most of the diagnostic work.

What this lesson covers

Record a realistic interaction, not an idle page

Read the flame graph and the ranked chart

Turn on "why did this render" to get the cause

This lesson sits in Measuring Performance, part of React Performance Engineering. It assumes what came before it and leads directly into the next lesson in the module.', '["Record a realistic interaction, not an idle page","Read the flame graph and the ranked chart","Turn on \"why did this render\" to get the cause"]'::jsonb, '',
        '[{"_type":"resource","_key":"react-performance-engineering-react-devtools-profiler-docs","type":"link","title":"React documentation","description":"The official reference for the tools used in this lesson.","url":"https://react.dev/learn"}]'::jsonb, 1
      ) ON CONFLICT (id) DO UPDATE SET
        module_id = EXCLUDED.module_id,
        course_id = EXCLUDED.course_id,
        title = EXCLUDED.title,
        slug = EXCLUDED.slug,
        youtube_video_id = EXCLUDED.youtube_video_id,
        video_url = EXCLUDED.video_url,
        duration = EXCLUDED.duration,
        free_preview = EXCLUDED.free_preview,
        notes = EXCLUDED.notes,
        notes_plain = EXCLUDED.notes_plain,
        key_points = EXCLUDED.key_points,
        pro_tip = EXCLUDED.pro_tip,
        resources = EXCLUDED.resources,
        position = EXCLUDED.position;

INSERT INTO public.lessons (
        id, module_id, course_id, title, slug, youtube_video_id,
        video_url, duration, free_preview, notes, notes_plain,
        key_points, pro_tip, resources, position
      ) VALUES (
        'lesson.react-performance-engineering-core-web-vitals', 'react-performance-engineering-module-1', 'course.react-performance-engineering',
        'Core Web Vitals in a React app', 'react-performance-engineering-core-web-vitals', 'cGiSr0MilsI',
        'https://www.youtube.com/watch?v=cGiSr0MilsI', 886, false, '[{"_type":"block","_key":"react-performance-engineering-core-web-vitals-intro","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"react-performance-engineering-core-web-vitals-intro-span","text":"Lab numbers on your laptop are not what users experience. Vitals give you a field measure of loading, responsiveness, and visual stability.","marks":[]}]},{"_type":"block","_key":"react-performance-engineering-core-web-vitals-h2","style":"h2","markDefs":[],"children":[{"_type":"span","_key":"react-performance-engineering-core-web-vitals-h2-span","text":"What this lesson covers","marks":[]}]},{"_type":"block","_key":"react-performance-engineering-core-web-vitals-point-0","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"react-performance-engineering-core-web-vitals-point-0-span","text":"Interpret LCP, INP, and CLS in practical terms","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"react-performance-engineering-core-web-vitals-point-1","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"react-performance-engineering-core-web-vitals-point-1-span","text":"Separate lab data from field data","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"react-performance-engineering-core-web-vitals-point-2","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"react-performance-engineering-core-web-vitals-point-2-span","text":"Attribute a poor score to a specific element or interaction","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"react-performance-engineering-core-web-vitals-outro","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"react-performance-engineering-core-web-vitals-outro-span","text":"This lesson sits in Measuring Performance, part of React Performance Engineering. It assumes what came before it and leads directly into the next lesson in the module.","marks":[]}]}]'::jsonb,
        'Lab numbers on your laptop are not what users experience. Vitals give you a field measure of loading, responsiveness, and visual stability.

What this lesson covers

Interpret LCP, INP, and CLS in practical terms

Separate lab data from field data

Attribute a poor score to a specific element or interaction

This lesson sits in Measuring Performance, part of React Performance Engineering. It assumes what came before it and leads directly into the next lesson in the module.', '["Interpret LCP, INP, and CLS in practical terms","Separate lab data from field data","Attribute a poor score to a specific element or interaction"]'::jsonb, 'A good score on your machine means very little. Look at the field data from real devices.',
        '[{"_type":"resource","_key":"react-performance-engineering-core-web-vitals-docs","type":"link","title":"React documentation","description":"The official reference for the tools used in this lesson.","url":"https://react.dev/learn"}]'::jsonb, 2
      ) ON CONFLICT (id) DO UPDATE SET
        module_id = EXCLUDED.module_id,
        course_id = EXCLUDED.course_id,
        title = EXCLUDED.title,
        slug = EXCLUDED.slug,
        youtube_video_id = EXCLUDED.youtube_video_id,
        video_url = EXCLUDED.video_url,
        duration = EXCLUDED.duration,
        free_preview = EXCLUDED.free_preview,
        notes = EXCLUDED.notes,
        notes_plain = EXCLUDED.notes_plain,
        key_points = EXCLUDED.key_points,
        pro_tip = EXCLUDED.pro_tip,
        resources = EXCLUDED.resources,
        position = EXCLUDED.position;

INSERT INTO public.lessons (
        id, module_id, course_id, title, slug, youtube_video_id,
        video_url, duration, free_preview, notes, notes_plain,
        key_points, pro_tip, resources, position
      ) VALUES (
        'lesson.react-performance-engineering-finding-wasted-renders', 'react-performance-engineering-module-1', 'course.react-performance-engineering',
        'Finding wasted renders', 'react-performance-engineering-finding-wasted-renders', 'L5kCvTuddGE',
        'https://www.youtube.com/watch?v=L5kCvTuddGE', 558, false, '[{"_type":"block","_key":"react-performance-engineering-finding-wasted-renders-intro","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"react-performance-engineering-finding-wasted-render-3e0577f4","text":"Most React slowness is a subtree re-rendering for no reason. Track it back to the prop or context value that changes identity on every render.","marks":[]}]},{"_type":"block","_key":"react-performance-engineering-finding-wasted-renders-h2","style":"h2","markDefs":[],"children":[{"_type":"span","_key":"react-performance-engineering-finding-wasted-renders-h2-span","text":"What this lesson covers","marks":[]}]},{"_type":"block","_key":"react-performance-engineering-finding-wasted-renders-point-0","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"react-performance-engineering-finding-wasted-render-fadde653","text":"Trace a re-render back to the prop that changed","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"react-performance-engineering-finding-wasted-renders-point-1","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"react-performance-engineering-finding-wasted-render-f39938ad","text":"Spot object and function props recreated each render","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"react-performance-engineering-finding-wasted-renders-point-2","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"react-performance-engineering-finding-wasted-render-114bee2f","text":"Recognise context as a re-render broadcast","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"react-performance-engineering-finding-wasted-renders-outro","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"react-performance-engineering-finding-wasted-render-01a07711","text":"This lesson sits in Measuring Performance, part of React Performance Engineering. It assumes what came before it and leads directly into the next lesson in the module.","marks":[]}]}]'::jsonb,
        'Most React slowness is a subtree re-rendering for no reason. Track it back to the prop or context value that changes identity on every render.

What this lesson covers

Trace a re-render back to the prop that changed

Spot object and function props recreated each render

Recognise context as a re-render broadcast

This lesson sits in Measuring Performance, part of React Performance Engineering. It assumes what came before it and leads directly into the next lesson in the module.', '["Trace a re-render back to the prop that changed","Spot object and function props recreated each render","Recognise context as a re-render broadcast"]'::jsonb, '',
        '[{"_type":"resource","_key":"react-performance-engineering-finding-wasted-renders-docs","type":"link","title":"React documentation","description":"The official reference for the tools used in this lesson.","url":"https://react.dev/learn"}]'::jsonb, 3
      ) ON CONFLICT (id) DO UPDATE SET
        module_id = EXCLUDED.module_id,
        course_id = EXCLUDED.course_id,
        title = EXCLUDED.title,
        slug = EXCLUDED.slug,
        youtube_video_id = EXCLUDED.youtube_video_id,
        video_url = EXCLUDED.video_url,
        duration = EXCLUDED.duration,
        free_preview = EXCLUDED.free_preview,
        notes = EXCLUDED.notes,
        notes_plain = EXCLUDED.notes_plain,
        key_points = EXCLUDED.key_points,
        pro_tip = EXCLUDED.pro_tip,
        resources = EXCLUDED.resources,
        position = EXCLUDED.position;

INSERT INTO public.lessons (
        id, module_id, course_id, title, slug, youtube_video_id,
        video_url, duration, free_preview, notes, notes_plain,
        key_points, pro_tip, resources, position
      ) VALUES (
        'lesson.react-performance-engineering-react-memo', 'react-performance-engineering-module-2', 'course.react-performance-engineering',
        'When memo actually helps', 'react-performance-engineering-react-memo', 'Yh2eH4fXgbU',
        'https://www.youtube.com/watch?v=Yh2eH4fXgbU', 617, false, '[{"_type":"block","_key":"react-performance-engineering-react-memo-intro","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"react-performance-engineering-react-memo-intro-span","text":"memo skips a re-render when props are shallow-equal. It costs a comparison on every render, so applying it everywhere makes things slower, not faster.","marks":[]}]},{"_type":"block","_key":"react-performance-engineering-react-memo-h2","style":"h2","markDefs":[],"children":[{"_type":"span","_key":"react-performance-engineering-react-memo-h2-span","text":"What this lesson covers","marks":[]}]},{"_type":"block","_key":"react-performance-engineering-react-memo-point-0","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"react-performance-engineering-react-memo-point-0-span","text":"Apply memo to expensive subtrees with stable props","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"react-performance-engineering-react-memo-point-1","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"react-performance-engineering-react-memo-point-1-span","text":"Understand shallow comparison and why objects defeat it","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"react-performance-engineering-react-memo-point-2","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"react-performance-engineering-react-memo-point-2-span","text":"Recognise when restructuring beats memoising","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"react-performance-engineering-react-memo-outro","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"react-performance-engineering-react-memo-outro-span","text":"This lesson sits in Rendering Optimization, part of React Performance Engineering. It assumes what came before it and leads directly into the next lesson in the module.","marks":[]}]}]'::jsonb,
        'memo skips a re-render when props are shallow-equal. It costs a comparison on every render, so applying it everywhere makes things slower, not faster.

What this lesson covers

Apply memo to expensive subtrees with stable props

Understand shallow comparison and why objects defeat it

Recognise when restructuring beats memoising

This lesson sits in Rendering Optimization, part of React Performance Engineering. It assumes what came before it and leads directly into the next lesson in the module.', '["Apply memo to expensive subtrees with stable props","Understand shallow comparison and why objects defeat it","Recognise when restructuring beats memoising"]'::jsonb, '',
        '[{"_type":"resource","_key":"react-performance-engineering-react-memo-docs","type":"link","title":"React documentation","description":"The official reference for the tools used in this lesson.","url":"https://react.dev/learn"}]'::jsonb, 1
      ) ON CONFLICT (id) DO UPDATE SET
        module_id = EXCLUDED.module_id,
        course_id = EXCLUDED.course_id,
        title = EXCLUDED.title,
        slug = EXCLUDED.slug,
        youtube_video_id = EXCLUDED.youtube_video_id,
        video_url = EXCLUDED.video_url,
        duration = EXCLUDED.duration,
        free_preview = EXCLUDED.free_preview,
        notes = EXCLUDED.notes,
        notes_plain = EXCLUDED.notes_plain,
        key_points = EXCLUDED.key_points,
        pro_tip = EXCLUDED.pro_tip,
        resources = EXCLUDED.resources,
        position = EXCLUDED.position;

INSERT INTO public.lessons (
        id, module_id, course_id, title, slug, youtube_video_id,
        video_url, duration, free_preview, notes, notes_plain,
        key_points, pro_tip, resources, position
      ) VALUES (
        'lesson.react-performance-engineering-usememo-and-usecallback', 'react-performance-engineering-module-2', 'course.react-performance-engineering',
        'useMemo and useCallback in practice', 'react-performance-engineering-usememo-and-usecallback', 'vpE9I_eqHdM',
        'https://www.youtube.com/watch?v=vpE9I_eqHdM', 821, false, '[{"_type":"block","_key":"react-performance-engineering-usememo-and-usecallback-intro","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"react-performance-engineering-usememo-and-usecallba-25dffef2","text":"These hooks preserve identity between renders. Their value is in what depends on that identity, not in the caching itself.","marks":[]}]},{"_type":"block","_key":"react-performance-engineering-usememo-and-usecallback-h2","style":"h2","markDefs":[],"children":[{"_type":"span","_key":"react-performance-engineering-usememo-and-usecallba-5eddbc1e","text":"What this lesson covers","marks":[]}]},{"_type":"block","_key":"react-performance-engineering-usememo-and-usecallba-78953387","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"react-performance-engineering-usememo-and-usecallba-bf894e61","text":"Memoise values that feed memoised children or effects","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"react-performance-engineering-usememo-and-usecallba-1f98a6e4","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"react-performance-engineering-usememo-and-usecallba-bd32a903","text":"Get the dependency array right, every time","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"react-performance-engineering-usememo-and-usecallba-28c7310f","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"react-performance-engineering-usememo-and-usecallba-91b307ab","text":"Skip memoisation when the computation is trivial","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"react-performance-engineering-usememo-and-usecallback-outro","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"react-performance-engineering-usememo-and-usecallba-9ed0e48c","text":"This lesson sits in Rendering Optimization, part of React Performance Engineering. It assumes what came before it and leads directly into the next lesson in the module.","marks":[]}]}]'::jsonb,
        'These hooks preserve identity between renders. Their value is in what depends on that identity, not in the caching itself.

What this lesson covers

Memoise values that feed memoised children or effects

Get the dependency array right, every time

Skip memoisation when the computation is trivial

This lesson sits in Rendering Optimization, part of React Performance Engineering. It assumes what came before it and leads directly into the next lesson in the module.', '["Memoise values that feed memoised children or effects","Get the dependency array right, every time","Skip memoisation when the computation is trivial"]'::jsonb, 'If nothing downstream depends on the identity of a value, memoising it buys you nothing.',
        '[{"_type":"resource","_key":"react-performance-engineering-usememo-and-usecallback-docs","type":"link","title":"React documentation","description":"The official reference for the tools used in this lesson.","url":"https://react.dev/learn"}]'::jsonb, 2
      ) ON CONFLICT (id) DO UPDATE SET
        module_id = EXCLUDED.module_id,
        course_id = EXCLUDED.course_id,
        title = EXCLUDED.title,
        slug = EXCLUDED.slug,
        youtube_video_id = EXCLUDED.youtube_video_id,
        video_url = EXCLUDED.video_url,
        duration = EXCLUDED.duration,
        free_preview = EXCLUDED.free_preview,
        notes = EXCLUDED.notes,
        notes_plain = EXCLUDED.notes_plain,
        key_points = EXCLUDED.key_points,
        pro_tip = EXCLUDED.pro_tip,
        resources = EXCLUDED.resources,
        position = EXCLUDED.position;

INSERT INTO public.lessons (
        id, module_id, course_id, title, slug, youtube_video_id,
        video_url, duration, free_preview, notes, notes_plain,
        key_points, pro_tip, resources, position
      ) VALUES (
        'lesson.react-performance-engineering-keys-and-reconciliation', 'react-performance-engineering-module-2', 'course.react-performance-engineering',
        'Keys and list reconciliation', 'react-performance-engineering-keys-and-reconciliation', 'fGxKOmCuH5w',
        'https://www.youtube.com/watch?v=fGxKOmCuH5w', 591, false, '[{"_type":"block","_key":"react-performance-engineering-keys-and-reconciliation-intro","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"react-performance-engineering-keys-and-reconciliati-503df8f5","text":"Keys tell React which item is which. Using an array index means insertions silently reassign state to the wrong row.","marks":[]}]},{"_type":"block","_key":"react-performance-engineering-keys-and-reconciliation-h2","style":"h2","markDefs":[],"children":[{"_type":"span","_key":"react-performance-engineering-keys-and-reconciliati-1c326d41","text":"What this lesson covers","marks":[]}]},{"_type":"block","_key":"react-performance-engineering-keys-and-reconciliati-31955576","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"react-performance-engineering-keys-and-reconciliati-7bd74d9b","text":"Use stable identity for keys, never the array index","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"react-performance-engineering-keys-and-reconciliati-2d4a7837","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"react-performance-engineering-keys-and-reconciliati-7da5c0f8","text":"Understand how reconciliation matches elements between renders","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"react-performance-engineering-keys-and-reconciliati-5ad524ed","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"react-performance-engineering-keys-and-reconciliati-2a8b4deb","text":"Diagnose lost input state in a reordered list","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"react-performance-engineering-keys-and-reconciliation-outro","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"react-performance-engineering-keys-and-reconciliati-2657de77","text":"This lesson sits in Rendering Optimization, part of React Performance Engineering. It assumes what came before it and leads directly into the next lesson in the module.","marks":[]}]}]'::jsonb,
        'Keys tell React which item is which. Using an array index means insertions silently reassign state to the wrong row.

What this lesson covers

Use stable identity for keys, never the array index

Understand how reconciliation matches elements between renders

Diagnose lost input state in a reordered list

This lesson sits in Rendering Optimization, part of React Performance Engineering. It assumes what came before it and leads directly into the next lesson in the module.', '["Use stable identity for keys, never the array index","Understand how reconciliation matches elements between renders","Diagnose lost input state in a reordered list"]'::jsonb, '',
        '[{"_type":"resource","_key":"react-performance-engineering-keys-and-reconciliation-docs","type":"link","title":"React documentation","description":"The official reference for the tools used in this lesson.","url":"https://react.dev/learn"}]'::jsonb, 3
      ) ON CONFLICT (id) DO UPDATE SET
        module_id = EXCLUDED.module_id,
        course_id = EXCLUDED.course_id,
        title = EXCLUDED.title,
        slug = EXCLUDED.slug,
        youtube_video_id = EXCLUDED.youtube_video_id,
        video_url = EXCLUDED.video_url,
        duration = EXCLUDED.duration,
        free_preview = EXCLUDED.free_preview,
        notes = EXCLUDED.notes,
        notes_plain = EXCLUDED.notes_plain,
        key_points = EXCLUDED.key_points,
        pro_tip = EXCLUDED.pro_tip,
        resources = EXCLUDED.resources,
        position = EXCLUDED.position;

INSERT INTO public.lessons (
        id, module_id, course_id, title, slug, youtube_video_id,
        video_url, duration, free_preview, notes, notes_plain,
        key_points, pro_tip, resources, position
      ) VALUES (
        'lesson.react-performance-engineering-usetransition', 'react-performance-engineering-module-3', 'course.react-performance-engineering',
        'Marking updates with useTransition', 'react-performance-engineering-usetransition', '1xjSQJWejZM',
        'https://www.youtube.com/watch?v=1xjSQJWejZM', 641, false, '[{"_type":"block","_key":"react-performance-engineering-usetransition-intro","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"react-performance-engineering-usetransition-intro-span","text":"A transition marks an update as interruptible, so typing stays smooth while an expensive list re-filters behind it.","marks":[]}]},{"_type":"block","_key":"react-performance-engineering-usetransition-h2","style":"h2","markDefs":[],"children":[{"_type":"span","_key":"react-performance-engineering-usetransition-h2-span","text":"What this lesson covers","marks":[]}]},{"_type":"block","_key":"react-performance-engineering-usetransition-point-0","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"react-performance-engineering-usetransition-point-0-span","text":"Separate an urgent update from a non-urgent one","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"react-performance-engineering-usetransition-point-1","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"react-performance-engineering-usetransition-point-1-span","text":"Show pending state without blocking input","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"react-performance-engineering-usetransition-point-2","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"react-performance-engineering-usetransition-point-2-span","text":"Recognise the interactions worth marking","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"react-performance-engineering-usetransition-outro","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"react-performance-engineering-usetransition-outro-span","text":"This lesson sits in Concurrent React, part of React Performance Engineering. It assumes what came before it and leads directly into the next lesson in the module.","marks":[]}]}]'::jsonb,
        'A transition marks an update as interruptible, so typing stays smooth while an expensive list re-filters behind it.

What this lesson covers

Separate an urgent update from a non-urgent one

Show pending state without blocking input

Recognise the interactions worth marking

This lesson sits in Concurrent React, part of React Performance Engineering. It assumes what came before it and leads directly into the next lesson in the module.', '["Separate an urgent update from a non-urgent one","Show pending state without blocking input","Recognise the interactions worth marking"]'::jsonb, '',
        '[{"_type":"resource","_key":"react-performance-engineering-usetransition-docs","type":"link","title":"React documentation","description":"The official reference for the tools used in this lesson.","url":"https://react.dev/learn"}]'::jsonb, 1
      ) ON CONFLICT (id) DO UPDATE SET
        module_id = EXCLUDED.module_id,
        course_id = EXCLUDED.course_id,
        title = EXCLUDED.title,
        slug = EXCLUDED.slug,
        youtube_video_id = EXCLUDED.youtube_video_id,
        video_url = EXCLUDED.video_url,
        duration = EXCLUDED.duration,
        free_preview = EXCLUDED.free_preview,
        notes = EXCLUDED.notes,
        notes_plain = EXCLUDED.notes_plain,
        key_points = EXCLUDED.key_points,
        pro_tip = EXCLUDED.pro_tip,
        resources = EXCLUDED.resources,
        position = EXCLUDED.position;

INSERT INTO public.lessons (
        id, module_id, course_id, title, slug, youtube_video_id,
        video_url, duration, free_preview, notes, notes_plain,
        key_points, pro_tip, resources, position
      ) VALUES (
        'lesson.react-performance-engineering-usedeferredvalue', 'react-performance-engineering-module-3', 'course.react-performance-engineering',
        'Deferring expensive values', 'react-performance-engineering-usedeferredvalue', 'jCGMedd6IWA',
        'https://www.youtube.com/watch?v=jCGMedd6IWA', 472, false, '[{"_type":"block","_key":"react-performance-engineering-usedeferredvalue-intro","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"react-performance-engineering-usedeferredvalue-intro-span","text":"A deferred value lags behind the real one on purpose, letting the urgent render finish first with the previous result.","marks":[]}]},{"_type":"block","_key":"react-performance-engineering-usedeferredvalue-h2","style":"h2","markDefs":[],"children":[{"_type":"span","_key":"react-performance-engineering-usedeferredvalue-h2-span","text":"What this lesson covers","marks":[]}]},{"_type":"block","_key":"react-performance-engineering-usedeferredvalue-point-0","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"react-performance-engineering-usedeferredvalue-point-0-span","text":"Defer a value that drives expensive rendering","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"react-performance-engineering-usedeferredvalue-point-1","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"react-performance-engineering-usedeferredvalue-point-1-span","text":"Choose between deferring a value and wrapping an update","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"react-performance-engineering-usedeferredvalue-point-2","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"react-performance-engineering-usedeferredvalue-point-2-span","text":"Communicate staleness to the user while it catches up","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"react-performance-engineering-usedeferredvalue-outro","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"react-performance-engineering-usedeferredvalue-outro-span","text":"This lesson sits in Concurrent React, part of React Performance Engineering. It assumes what came before it and leads directly into the next lesson in the module.","marks":[]}]}]'::jsonb,
        'A deferred value lags behind the real one on purpose, letting the urgent render finish first with the previous result.

What this lesson covers

Defer a value that drives expensive rendering

Choose between deferring a value and wrapping an update

Communicate staleness to the user while it catches up

This lesson sits in Concurrent React, part of React Performance Engineering. It assumes what came before it and leads directly into the next lesson in the module.', '["Defer a value that drives expensive rendering","Choose between deferring a value and wrapping an update","Communicate staleness to the user while it catches up"]'::jsonb, '',
        '[{"_type":"resource","_key":"react-performance-engineering-usedeferredvalue-docs","type":"link","title":"React documentation","description":"The official reference for the tools used in this lesson.","url":"https://react.dev/learn"}]'::jsonb, 2
      ) ON CONFLICT (id) DO UPDATE SET
        module_id = EXCLUDED.module_id,
        course_id = EXCLUDED.course_id,
        title = EXCLUDED.title,
        slug = EXCLUDED.slug,
        youtube_video_id = EXCLUDED.youtube_video_id,
        video_url = EXCLUDED.video_url,
        duration = EXCLUDED.duration,
        free_preview = EXCLUDED.free_preview,
        notes = EXCLUDED.notes,
        notes_plain = EXCLUDED.notes_plain,
        key_points = EXCLUDED.key_points,
        pro_tip = EXCLUDED.pro_tip,
        resources = EXCLUDED.resources,
        position = EXCLUDED.position;

INSERT INTO public.lessons (
        id, module_id, course_id, title, slug, youtube_video_id,
        video_url, duration, free_preview, notes, notes_plain,
        key_points, pro_tip, resources, position
      ) VALUES (
        'lesson.react-performance-engineering-suspense-for-data', 'react-performance-engineering-module-3', 'course.react-performance-engineering',
        'Suspense for data loading', 'react-performance-engineering-suspense-for-data', 'MBlZ8Wzkbi4',
        'https://www.youtube.com/watch?v=MBlZ8Wzkbi4', 1001, false, '[{"_type":"block","_key":"react-performance-engineering-suspense-for-data-intro","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"react-performance-engineering-suspense-for-data-intro-span","text":"Suspense moves loading state out of the component and into its boundary, so you stop threading isLoading through the tree.","marks":[]}]},{"_type":"block","_key":"react-performance-engineering-suspense-for-data-h2","style":"h2","markDefs":[],"children":[{"_type":"span","_key":"react-performance-engineering-suspense-for-data-h2-span","text":"What this lesson covers","marks":[]}]},{"_type":"block","_key":"react-performance-engineering-suspense-for-data-point-0","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"react-performance-engineering-suspense-for-data-point-0-span","text":"Place boundaries where a meaningful fallback exists","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"react-performance-engineering-suspense-for-data-point-1","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"react-performance-engineering-suspense-for-data-point-1-span","text":"Avoid a single boundary that blocks the whole page","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"react-performance-engineering-suspense-for-data-point-2","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"react-performance-engineering-suspense-for-data-point-2-span","text":"Combine Suspense with error boundaries for failures","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"react-performance-engineering-suspense-for-data-outro","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"react-performance-engineering-suspense-for-data-outro-span","text":"This lesson sits in Concurrent React, part of React Performance Engineering. It assumes what came before it and leads directly into the next lesson in the module.","marks":[]}]}]'::jsonb,
        'Suspense moves loading state out of the component and into its boundary, so you stop threading isLoading through the tree.

What this lesson covers

Place boundaries where a meaningful fallback exists

Avoid a single boundary that blocks the whole page

Combine Suspense with error boundaries for failures

This lesson sits in Concurrent React, part of React Performance Engineering. It assumes what came before it and leads directly into the next lesson in the module.', '["Place boundaries where a meaningful fallback exists","Avoid a single boundary that blocks the whole page","Combine Suspense with error boundaries for failures"]'::jsonb, 'Put the boundary where a skeleton would make sense to a user, not wherever the fetch happens to live.',
        '[{"_type":"resource","_key":"react-performance-engineering-suspense-for-data-docs","type":"link","title":"React documentation","description":"The official reference for the tools used in this lesson.","url":"https://react.dev/learn"}]'::jsonb, 3
      ) ON CONFLICT (id) DO UPDATE SET
        module_id = EXCLUDED.module_id,
        course_id = EXCLUDED.course_id,
        title = EXCLUDED.title,
        slug = EXCLUDED.slug,
        youtube_video_id = EXCLUDED.youtube_video_id,
        video_url = EXCLUDED.video_url,
        duration = EXCLUDED.duration,
        free_preview = EXCLUDED.free_preview,
        notes = EXCLUDED.notes,
        notes_plain = EXCLUDED.notes_plain,
        key_points = EXCLUDED.key_points,
        pro_tip = EXCLUDED.pro_tip,
        resources = EXCLUDED.resources,
        position = EXCLUDED.position;

INSERT INTO public.lessons (
        id, module_id, course_id, title, slug, youtube_video_id,
        video_url, duration, free_preview, notes, notes_plain,
        key_points, pro_tip, resources, position
      ) VALUES (
        'lesson.react-performance-engineering-code-splitting', 'react-performance-engineering-module-4', 'course.react-performance-engineering',
        'Code splitting that pays off', 'react-performance-engineering-code-splitting', 'MUSoj2JcD4A',
        'https://www.youtube.com/watch?v=MUSoj2JcD4A', 330, false, '[{"_type":"block","_key":"react-performance-engineering-code-splitting-intro","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"react-performance-engineering-code-splitting-intro-span","text":"Splitting only helps if the split-off code was genuinely not needed for the first screen. Analyse the bundle before you cut it.","marks":[]}]},{"_type":"block","_key":"react-performance-engineering-code-splitting-h2","style":"h2","markDefs":[],"children":[{"_type":"span","_key":"react-performance-engineering-code-splitting-h2-span","text":"What this lesson covers","marks":[]}]},{"_type":"block","_key":"react-performance-engineering-code-splitting-point-0","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"react-performance-engineering-code-splitting-point-0-span","text":"Read a bundle analysis and find the heavy dependency","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"react-performance-engineering-code-splitting-point-1","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"react-performance-engineering-code-splitting-point-1-span","text":"Split along route and interaction boundaries","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"react-performance-engineering-code-splitting-point-2","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"react-performance-engineering-code-splitting-point-2-span","text":"Avoid splitting code that is needed immediately anyway","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"react-performance-engineering-code-splitting-outro","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"react-performance-engineering-code-splitting-outro-span","text":"This lesson sits in Bundle and Load Performance, part of React Performance Engineering. It assumes what came before it and leads directly into the next lesson in the module.","marks":[]}]}]'::jsonb,
        'Splitting only helps if the split-off code was genuinely not needed for the first screen. Analyse the bundle before you cut it.

What this lesson covers

Read a bundle analysis and find the heavy dependency

Split along route and interaction boundaries

Avoid splitting code that is needed immediately anyway

This lesson sits in Bundle and Load Performance, part of React Performance Engineering. It assumes what came before it and leads directly into the next lesson in the module.', '["Read a bundle analysis and find the heavy dependency","Split along route and interaction boundaries","Avoid splitting code that is needed immediately anyway"]'::jsonb, '',
        '[{"_type":"resource","_key":"react-performance-engineering-code-splitting-docs","type":"link","title":"React documentation","description":"The official reference for the tools used in this lesson.","url":"https://react.dev/learn"}]'::jsonb, 1
      ) ON CONFLICT (id) DO UPDATE SET
        module_id = EXCLUDED.module_id,
        course_id = EXCLUDED.course_id,
        title = EXCLUDED.title,
        slug = EXCLUDED.slug,
        youtube_video_id = EXCLUDED.youtube_video_id,
        video_url = EXCLUDED.video_url,
        duration = EXCLUDED.duration,
        free_preview = EXCLUDED.free_preview,
        notes = EXCLUDED.notes,
        notes_plain = EXCLUDED.notes_plain,
        key_points = EXCLUDED.key_points,
        pro_tip = EXCLUDED.pro_tip,
        resources = EXCLUDED.resources,
        position = EXCLUDED.position;

INSERT INTO public.lessons (
        id, module_id, course_id, title, slug, youtube_video_id,
        video_url, duration, free_preview, notes, notes_plain,
        key_points, pro_tip, resources, position
      ) VALUES (
        'lesson.react-performance-engineering-lazy-loading-and-prefetch', 'react-performance-engineering-module-4', 'course.react-performance-engineering',
        'Lazy loading and prefetching', 'react-performance-engineering-lazy-loading-and-prefetch', 'fZ4zKgVXOP4',
        'https://www.youtube.com/watch?v=fZ4zKgVXOP4', 1370, false, '[{"_type":"block","_key":"react-performance-engineering-lazy-loading-and-pref-b6fa14ca","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"react-performance-engineering-lazy-loading-and-pref-6ac49dc0","text":"Lazy loading defers the download; prefetching starts it early on a hint like hover. Together they hide the network cost from the user.","marks":[]}]},{"_type":"block","_key":"react-performance-engineering-lazy-loading-and-prefetch-h2","style":"h2","markDefs":[],"children":[{"_type":"span","_key":"react-performance-engineering-lazy-loading-and-pref-2cb6ec42","text":"What this lesson covers","marks":[]}]},{"_type":"block","_key":"react-performance-engineering-lazy-loading-and-pref-331d914f","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"react-performance-engineering-lazy-loading-and-pref-41e6d8fd","text":"Load a component only when it is about to be needed","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"react-performance-engineering-lazy-loading-and-pref-bca43815","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"react-performance-engineering-lazy-loading-and-pref-4624c518","text":"Prefetch on intent signals such as hover or viewport","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"react-performance-engineering-lazy-loading-and-pref-df48361c","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"react-performance-engineering-lazy-loading-and-pref-42511e4e","text":"Keep a fallback that does not shift the layout","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"react-performance-engineering-lazy-loading-and-pref-996d5679","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"react-performance-engineering-lazy-loading-and-pref-9874a150","text":"This lesson sits in Bundle and Load Performance, part of React Performance Engineering. It assumes what came before it and leads directly into the next lesson in the module.","marks":[]}]}]'::jsonb,
        'Lazy loading defers the download; prefetching starts it early on a hint like hover. Together they hide the network cost from the user.

What this lesson covers

Load a component only when it is about to be needed

Prefetch on intent signals such as hover or viewport

Keep a fallback that does not shift the layout

This lesson sits in Bundle and Load Performance, part of React Performance Engineering. It assumes what came before it and leads directly into the next lesson in the module.', '["Load a component only when it is about to be needed","Prefetch on intent signals such as hover or viewport","Keep a fallback that does not shift the layout"]'::jsonb, '',
        '[{"_type":"resource","_key":"react-performance-engineering-lazy-loading-and-prefetch-docs","type":"link","title":"React documentation","description":"The official reference for the tools used in this lesson.","url":"https://react.dev/learn"}]'::jsonb, 2
      ) ON CONFLICT (id) DO UPDATE SET
        module_id = EXCLUDED.module_id,
        course_id = EXCLUDED.course_id,
        title = EXCLUDED.title,
        slug = EXCLUDED.slug,
        youtube_video_id = EXCLUDED.youtube_video_id,
        video_url = EXCLUDED.video_url,
        duration = EXCLUDED.duration,
        free_preview = EXCLUDED.free_preview,
        notes = EXCLUDED.notes,
        notes_plain = EXCLUDED.notes_plain,
        key_points = EXCLUDED.key_points,
        pro_tip = EXCLUDED.pro_tip,
        resources = EXCLUDED.resources,
        position = EXCLUDED.position;

INSERT INTO public.lessons (
        id, module_id, course_id, title, slug, youtube_video_id,
        video_url, duration, free_preview, notes, notes_plain,
        key_points, pro_tip, resources, position
      ) VALUES (
        'lesson.react-performance-engineering-images-and-fonts', 'react-performance-engineering-module-4', 'course.react-performance-engineering',
        'Images and fonts', 'react-performance-engineering-images-and-fonts', '0fONene3OIA',
        'https://www.youtube.com/watch?v=0fONene3OIA', 403, false, '[{"_type":"block","_key":"react-performance-engineering-images-and-fonts-intro","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"react-performance-engineering-images-and-fonts-intro-span","text":"Images and fonts usually dominate loading performance and layout shift. Sizing, formats, and font display strategy fix most of it.","marks":[]}]},{"_type":"block","_key":"react-performance-engineering-images-and-fonts-h2","style":"h2","markDefs":[],"children":[{"_type":"span","_key":"react-performance-engineering-images-and-fonts-h2-span","text":"What this lesson covers","marks":[]}]},{"_type":"block","_key":"react-performance-engineering-images-and-fonts-point-0","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"react-performance-engineering-images-and-fonts-point-0-span","text":"Serve correctly sized, modern image formats","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"react-performance-engineering-images-and-fonts-point-1","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"react-performance-engineering-images-and-fonts-point-1-span","text":"Reserve space so images do not shift the layout","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"react-performance-engineering-images-and-fonts-point-2","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"react-performance-engineering-images-and-fonts-point-2-span","text":"Choose a font loading strategy that avoids invisible text","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"react-performance-engineering-images-and-fonts-outro","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"react-performance-engineering-images-and-fonts-outro-span","text":"This lesson sits in Bundle and Load Performance, part of React Performance Engineering. It assumes what came before it and leads directly into the next lesson in the module.","marks":[]}]}]'::jsonb,
        'Images and fonts usually dominate loading performance and layout shift. Sizing, formats, and font display strategy fix most of it.

What this lesson covers

Serve correctly sized, modern image formats

Reserve space so images do not shift the layout

Choose a font loading strategy that avoids invisible text

This lesson sits in Bundle and Load Performance, part of React Performance Engineering. It assumes what came before it and leads directly into the next lesson in the module.', '["Serve correctly sized, modern image formats","Reserve space so images do not shift the layout","Choose a font loading strategy that avoids invisible text"]'::jsonb, '',
        '[{"_type":"resource","_key":"react-performance-engineering-images-and-fonts-docs","type":"link","title":"React documentation","description":"The official reference for the tools used in this lesson.","url":"https://react.dev/learn"}]'::jsonb, 3
      ) ON CONFLICT (id) DO UPDATE SET
        module_id = EXCLUDED.module_id,
        course_id = EXCLUDED.course_id,
        title = EXCLUDED.title,
        slug = EXCLUDED.slug,
        youtube_video_id = EXCLUDED.youtube_video_id,
        video_url = EXCLUDED.video_url,
        duration = EXCLUDED.duration,
        free_preview = EXCLUDED.free_preview,
        notes = EXCLUDED.notes,
        notes_plain = EXCLUDED.notes_plain,
        key_points = EXCLUDED.key_points,
        pro_tip = EXCLUDED.pro_tip,
        resources = EXCLUDED.resources,
        position = EXCLUDED.position;

INSERT INTO public.lessons (
        id, module_id, course_id, title, slug, youtube_video_id,
        video_url, duration, free_preview, notes, notes_plain,
        key_points, pro_tip, resources, position
      ) VALUES (
        'lesson.typescript-for-application-developers-structural-typing', 'typescript-for-application-developers-module-1', 'course.typescript-for-application-developers',
        'Structural typing and assignability', 'typescript-for-application-developers-structural-typing', 'zfQgsGXTpOg',
        'https://www.youtube.com/watch?v=zfQgsGXTpOg', 709, true, '[{"_type":"block","_key":"typescript-for-application-developers-structural-ty-4c87b967","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"typescript-for-application-developers-structural-ty-67892289","text":"TypeScript compares shapes, not names. Two unrelated types are interchangeable if their members line up, which explains most surprising assignability errors.","marks":[]}]},{"_type":"block","_key":"typescript-for-application-developers-structural-typing-h2","style":"h2","markDefs":[],"children":[{"_type":"span","_key":"typescript-for-application-developers-structural-ty-5f1e7a04","text":"What this lesson covers","marks":[]}]},{"_type":"block","_key":"typescript-for-application-developers-structural-ty-f4a37fb3","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"typescript-for-application-developers-structural-ty-c59e3e92","text":"Compare types by structure rather than declaration","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"typescript-for-application-developers-structural-ty-9797b84b","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"typescript-for-application-developers-structural-ty-5195dcb7","text":"Read an assignability error from the mismatched member up","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"typescript-for-application-developers-structural-ty-00f18e68","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"typescript-for-application-developers-structural-ty-f0f2afcf","text":"Use branded types when structural compatibility is too loose","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"typescript-for-application-developers-structural-ty-b06d1e2f","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"typescript-for-application-developers-structural-ty-18bfa097","text":"This lesson sits in How the Type System Thinks, part of TypeScript for Application Developers. It assumes what came before it and leads directly into the next lesson in the module.","marks":[]}]}]'::jsonb,
        'TypeScript compares shapes, not names. Two unrelated types are interchangeable if their members line up, which explains most surprising assignability errors.

What this lesson covers

Compare types by structure rather than declaration

Read an assignability error from the mismatched member up

Use branded types when structural compatibility is too loose

This lesson sits in How the Type System Thinks, part of TypeScript for Application Developers. It assumes what came before it and leads directly into the next lesson in the module.', '["Compare types by structure rather than declaration","Read an assignability error from the mismatched member up","Use branded types when structural compatibility is too loose"]'::jsonb, '',
        '[{"_type":"resource","_key":"typescript-for-application-developers-structural-typing-docs","type":"link","title":"TypeScript handbook","description":"The official reference for the tools used in this lesson.","url":"https://www.typescriptlang.org/docs/handbook/intro.html"}]'::jsonb, 1
      ) ON CONFLICT (id) DO UPDATE SET
        module_id = EXCLUDED.module_id,
        course_id = EXCLUDED.course_id,
        title = EXCLUDED.title,
        slug = EXCLUDED.slug,
        youtube_video_id = EXCLUDED.youtube_video_id,
        video_url = EXCLUDED.video_url,
        duration = EXCLUDED.duration,
        free_preview = EXCLUDED.free_preview,
        notes = EXCLUDED.notes,
        notes_plain = EXCLUDED.notes_plain,
        key_points = EXCLUDED.key_points,
        pro_tip = EXCLUDED.pro_tip,
        resources = EXCLUDED.resources,
        position = EXCLUDED.position;

INSERT INTO public.lessons (
        id, module_id, course_id, title, slug, youtube_video_id,
        video_url, duration, free_preview, notes, notes_plain,
        key_points, pro_tip, resources, position
      ) VALUES (
        'lesson.typescript-for-application-developers-unions-and-narrowing', 'typescript-for-application-developers-module-1', 'course.typescript-for-application-developers',
        'Unions and narrowing', 'typescript-for-application-developers-unions-and-narrowing', 'CG3_Y9T03J4',
        'https://www.youtube.com/watch?v=CG3_Y9T03J4', 620, false, '[{"_type":"block","_key":"typescript-for-application-developers-unions-and-na-b4e491e0","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"typescript-for-application-developers-unions-and-na-15a4856e","text":"A discriminated union plus a check on the discriminant is the workhorse pattern of typed application code. Narrowing is how the compiler follows your control flow.","marks":[]}]},{"_type":"block","_key":"typescript-for-application-developers-unions-and-na-28451412","style":"h2","markDefs":[],"children":[{"_type":"span","_key":"typescript-for-application-developers-unions-and-na-2469b044","text":"What this lesson covers","marks":[]}]},{"_type":"block","_key":"typescript-for-application-developers-unions-and-na-655e5d2e","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"typescript-for-application-developers-unions-and-na-bd0b267e","text":"Model alternatives as a discriminated union","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"typescript-for-application-developers-unions-and-na-37dd04c2","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"typescript-for-application-developers-unions-and-na-9f974979","text":"Narrow with typeof, in, and discriminant checks","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"typescript-for-application-developers-unions-and-na-4f160ef7","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"typescript-for-application-developers-unions-and-na-85c36d77","text":"Make a switch exhaustive with a never assertion","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"typescript-for-application-developers-unions-and-na-8e64b51f","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"typescript-for-application-developers-unions-and-na-e327b90d","text":"This lesson sits in How the Type System Thinks, part of TypeScript for Application Developers. It assumes what came before it and leads directly into the next lesson in the module.","marks":[]}]}]'::jsonb,
        'A discriminated union plus a check on the discriminant is the workhorse pattern of typed application code. Narrowing is how the compiler follows your control flow.

What this lesson covers

Model alternatives as a discriminated union

Narrow with typeof, in, and discriminant checks

Make a switch exhaustive with a never assertion

This lesson sits in How the Type System Thinks, part of TypeScript for Application Developers. It assumes what came before it and leads directly into the next lesson in the module.', '["Model alternatives as a discriminated union","Narrow with typeof, in, and discriminant checks","Make a switch exhaustive with a never assertion"]'::jsonb, 'An exhaustive switch that assigns the leftover case to never turns a future missing branch into a compile error.',
        '[{"_type":"resource","_key":"typescript-for-application-developers-unions-and-na-31509588","type":"link","title":"TypeScript handbook","description":"The official reference for the tools used in this lesson.","url":"https://www.typescriptlang.org/docs/handbook/intro.html"}]'::jsonb, 2
      ) ON CONFLICT (id) DO UPDATE SET
        module_id = EXCLUDED.module_id,
        course_id = EXCLUDED.course_id,
        title = EXCLUDED.title,
        slug = EXCLUDED.slug,
        youtube_video_id = EXCLUDED.youtube_video_id,
        video_url = EXCLUDED.video_url,
        duration = EXCLUDED.duration,
        free_preview = EXCLUDED.free_preview,
        notes = EXCLUDED.notes,
        notes_plain = EXCLUDED.notes_plain,
        key_points = EXCLUDED.key_points,
        pro_tip = EXCLUDED.pro_tip,
        resources = EXCLUDED.resources,
        position = EXCLUDED.position;

INSERT INTO public.lessons (
        id, module_id, course_id, title, slug, youtube_video_id,
        video_url, duration, free_preview, notes, notes_plain,
        key_points, pro_tip, resources, position
      ) VALUES (
        'lesson.typescript-for-application-developers-literal-types-and-const', 'typescript-for-application-developers-module-1', 'course.typescript-for-application-developers',
        'Literal types and const assertions', 'typescript-for-application-developers-literal-types-and-const', '6M9aZzm-kEc',
        'https://www.youtube.com/watch?v=6M9aZzm-kEc', 338, false, '[{"_type":"block","_key":"typescript-for-application-developers-literal-types-6092681c","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"typescript-for-application-developers-literal-types-9d7a83a1","text":"Widening is why your string turned into string. A const assertion keeps the literal, which is what makes union-of-literals modelling work.","marks":[]}]},{"_type":"block","_key":"typescript-for-application-developers-literal-types-c5052543","style":"h2","markDefs":[],"children":[{"_type":"span","_key":"typescript-for-application-developers-literal-types-b6ed732d","text":"What this lesson covers","marks":[]}]},{"_type":"block","_key":"typescript-for-application-developers-literal-types-599ad3a2","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"typescript-for-application-developers-literal-types-1740259e","text":"Understand literal widening and when it happens","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"typescript-for-application-developers-literal-types-9659e857","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"typescript-for-application-developers-literal-types-071fcd41","text":"Freeze a literal shape with as const","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"typescript-for-application-developers-literal-types-b5e4f29f","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"typescript-for-application-developers-literal-types-6943d2c3","text":"Derive a union of allowed values from a constant array","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"typescript-for-application-developers-literal-types-08d96afd","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"typescript-for-application-developers-literal-types-1f9dc6ae","text":"This lesson sits in How the Type System Thinks, part of TypeScript for Application Developers. It assumes what came before it and leads directly into the next lesson in the module.","marks":[]}]}]'::jsonb,
        'Widening is why your string turned into string. A const assertion keeps the literal, which is what makes union-of-literals modelling work.

What this lesson covers

Understand literal widening and when it happens

Freeze a literal shape with as const

Derive a union of allowed values from a constant array

This lesson sits in How the Type System Thinks, part of TypeScript for Application Developers. It assumes what came before it and leads directly into the next lesson in the module.', '["Understand literal widening and when it happens","Freeze a literal shape with as const","Derive a union of allowed values from a constant array"]'::jsonb, '',
        '[{"_type":"resource","_key":"typescript-for-application-developers-literal-types-7d455706","type":"link","title":"TypeScript handbook","description":"The official reference for the tools used in this lesson.","url":"https://www.typescriptlang.org/docs/handbook/intro.html"}]'::jsonb, 3
      ) ON CONFLICT (id) DO UPDATE SET
        module_id = EXCLUDED.module_id,
        course_id = EXCLUDED.course_id,
        title = EXCLUDED.title,
        slug = EXCLUDED.slug,
        youtube_video_id = EXCLUDED.youtube_video_id,
        video_url = EXCLUDED.video_url,
        duration = EXCLUDED.duration,
        free_preview = EXCLUDED.free_preview,
        notes = EXCLUDED.notes,
        notes_plain = EXCLUDED.notes_plain,
        key_points = EXCLUDED.key_points,
        pro_tip = EXCLUDED.pro_tip,
        resources = EXCLUDED.resources,
        position = EXCLUDED.position;

INSERT INTO public.lessons (
        id, module_id, course_id, title, slug, youtube_video_id,
        video_url, duration, free_preview, notes, notes_plain,
        key_points, pro_tip, resources, position
      ) VALUES (
        'lesson.typescript-for-application-developers-generic-functions', 'typescript-for-application-developers-module-2', 'course.typescript-for-application-developers',
        'Generic functions and inference', 'typescript-for-application-developers-generic-functions', 'EcCTIExsqmI',
        'https://www.youtube.com/watch?v=EcCTIExsqmI', 772, false, '[{"_type":"block","_key":"typescript-for-application-developers-generic-funct-60413492","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"typescript-for-application-developers-generic-funct-980d7139","text":"A type parameter links an input type to an output type. Most of the skill is letting inference do the work rather than annotating call sites.","marks":[]}]},{"_type":"block","_key":"typescript-for-application-developers-generic-functions-h2","style":"h2","markDefs":[],"children":[{"_type":"span","_key":"typescript-for-application-developers-generic-funct-45a1464b","text":"What this lesson covers","marks":[]}]},{"_type":"block","_key":"typescript-for-application-developers-generic-funct-de15970a","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"typescript-for-application-developers-generic-funct-3373f04a","text":"Relate argument and return types with a type parameter","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"typescript-for-application-developers-generic-funct-4974cd6f","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"typescript-for-application-developers-generic-funct-abe09324","text":"Let inference fill in type arguments at the call site","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"typescript-for-application-developers-generic-funct-306adafa","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"typescript-for-application-developers-generic-funct-07973bbc","text":"Recognise when a generic adds nothing over a union","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"typescript-for-application-developers-generic-funct-da449853","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"typescript-for-application-developers-generic-funct-d6371bb1","text":"This lesson sits in Generics, part of TypeScript for Application Developers. It assumes what came before it and leads directly into the next lesson in the module.","marks":[]}]}]'::jsonb,
        'A type parameter links an input type to an output type. Most of the skill is letting inference do the work rather than annotating call sites.

What this lesson covers

Relate argument and return types with a type parameter

Let inference fill in type arguments at the call site

Recognise when a generic adds nothing over a union

This lesson sits in Generics, part of TypeScript for Application Developers. It assumes what came before it and leads directly into the next lesson in the module.', '["Relate argument and return types with a type parameter","Let inference fill in type arguments at the call site","Recognise when a generic adds nothing over a union"]'::jsonb, '',
        '[{"_type":"resource","_key":"typescript-for-application-developers-generic-functions-docs","type":"link","title":"TypeScript handbook","description":"The official reference for the tools used in this lesson.","url":"https://www.typescriptlang.org/docs/handbook/intro.html"}]'::jsonb, 1
      ) ON CONFLICT (id) DO UPDATE SET
        module_id = EXCLUDED.module_id,
        course_id = EXCLUDED.course_id,
        title = EXCLUDED.title,
        slug = EXCLUDED.slug,
        youtube_video_id = EXCLUDED.youtube_video_id,
        video_url = EXCLUDED.video_url,
        duration = EXCLUDED.duration,
        free_preview = EXCLUDED.free_preview,
        notes = EXCLUDED.notes,
        notes_plain = EXCLUDED.notes_plain,
        key_points = EXCLUDED.key_points,
        pro_tip = EXCLUDED.pro_tip,
        resources = EXCLUDED.resources,
        position = EXCLUDED.position;

INSERT INTO public.lessons (
        id, module_id, course_id, title, slug, youtube_video_id,
        video_url, duration, free_preview, notes, notes_plain,
        key_points, pro_tip, resources, position
      ) VALUES (
        'lesson.typescript-for-application-developers-generic-constraints', 'typescript-for-application-developers-module-2', 'course.typescript-for-application-developers',
        'Constraints and default type parameters', 'typescript-for-application-developers-generic-constraints', 'zfLpzpH1t6Q',
        'https://www.youtube.com/watch?v=zfLpzpH1t6Q', 253, false, '[{"_type":"block","_key":"typescript-for-application-developers-generic-const-35696d03","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"typescript-for-application-developers-generic-const-3ca9e3c9","text":"Constraints say what a type parameter must at least be. Combined with keyof, they give you property access that stays typed.","marks":[]}]},{"_type":"block","_key":"typescript-for-application-developers-generic-constraints-h2","style":"h2","markDefs":[],"children":[{"_type":"span","_key":"typescript-for-application-developers-generic-const-39d9d960","text":"What this lesson covers","marks":[]}]},{"_type":"block","_key":"typescript-for-application-developers-generic-const-a1739100","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"typescript-for-application-developers-generic-const-cb2bad40","text":"Constrain a parameter with extends","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"typescript-for-application-developers-generic-const-6e33676e","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"typescript-for-application-developers-generic-const-f2556e0d","text":"Use keyof to type property access generically","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"typescript-for-application-developers-generic-const-acc603d3","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"typescript-for-application-developers-generic-const-f8564a63","text":"Give a type parameter a sensible default","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"typescript-for-application-developers-generic-const-ffed2ad9","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"typescript-for-application-developers-generic-const-2fdbb15f","text":"This lesson sits in Generics, part of TypeScript for Application Developers. It assumes what came before it and leads directly into the next lesson in the module.","marks":[]}]}]'::jsonb,
        'Constraints say what a type parameter must at least be. Combined with keyof, they give you property access that stays typed.

What this lesson covers

Constrain a parameter with extends

Use keyof to type property access generically

Give a type parameter a sensible default

This lesson sits in Generics, part of TypeScript for Application Developers. It assumes what came before it and leads directly into the next lesson in the module.', '["Constrain a parameter with extends","Use keyof to type property access generically","Give a type parameter a sensible default"]'::jsonb, '',
        '[{"_type":"resource","_key":"typescript-for-application-developers-generic-const-9d68bcfc","type":"link","title":"TypeScript handbook","description":"The official reference for the tools used in this lesson.","url":"https://www.typescriptlang.org/docs/handbook/intro.html"}]'::jsonb, 2
      ) ON CONFLICT (id) DO UPDATE SET
        module_id = EXCLUDED.module_id,
        course_id = EXCLUDED.course_id,
        title = EXCLUDED.title,
        slug = EXCLUDED.slug,
        youtube_video_id = EXCLUDED.youtube_video_id,
        video_url = EXCLUDED.video_url,
        duration = EXCLUDED.duration,
        free_preview = EXCLUDED.free_preview,
        notes = EXCLUDED.notes,
        notes_plain = EXCLUDED.notes_plain,
        key_points = EXCLUDED.key_points,
        pro_tip = EXCLUDED.pro_tip,
        resources = EXCLUDED.resources,
        position = EXCLUDED.position;

INSERT INTO public.lessons (
        id, module_id, course_id, title, slug, youtube_video_id,
        video_url, duration, free_preview, notes, notes_plain,
        key_points, pro_tip, resources, position
      ) VALUES (
        'lesson.typescript-for-application-developers-generic-react-components', 'typescript-for-application-developers-module-2', 'course.typescript-for-application-developers',
        'Generic components in React', 'typescript-for-application-developers-generic-react-components', '5s6dIkrv6Y4',
        'https://www.youtube.com/watch?v=5s6dIkrv6Y4', 407, false, '[{"_type":"block","_key":"typescript-for-application-developers-generic-react-9599ba49","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"typescript-for-application-developers-generic-react-1302977b","text":"A typed list component should tell you what its render callback receives. Generic props are how a reusable component stays specific at each use.","marks":[]}]},{"_type":"block","_key":"typescript-for-application-developers-generic-react-fe64e8e2","style":"h2","markDefs":[],"children":[{"_type":"span","_key":"typescript-for-application-developers-generic-react-8fe3e8af","text":"What this lesson covers","marks":[]}]},{"_type":"block","_key":"typescript-for-application-developers-generic-react-3f6e1e8c","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"typescript-for-application-developers-generic-react-76b24ba5","text":"Type a component over the shape of its items","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"typescript-for-application-developers-generic-react-ea45f8aa","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"typescript-for-application-developers-generic-react-dde218ff","text":"Keep render props and callbacks correctly typed","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"typescript-for-application-developers-generic-react-c6808b63","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"typescript-for-application-developers-generic-react-7c149198","text":"Forward refs without losing the generic parameter","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"typescript-for-application-developers-generic-react-5ec89ea3","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"typescript-for-application-developers-generic-react-bb4f8ffa","text":"This lesson sits in Generics, part of TypeScript for Application Developers. It assumes what came before it and leads directly into the next lesson in the module.","marks":[]}]}]'::jsonb,
        'A typed list component should tell you what its render callback receives. Generic props are how a reusable component stays specific at each use.

What this lesson covers

Type a component over the shape of its items

Keep render props and callbacks correctly typed

Forward refs without losing the generic parameter

This lesson sits in Generics, part of TypeScript for Application Developers. It assumes what came before it and leads directly into the next lesson in the module.', '["Type a component over the shape of its items","Keep render props and callbacks correctly typed","Forward refs without losing the generic parameter"]'::jsonb, 'If a reusable component takes items and hands them back to a callback, it wants a type parameter.',
        '[{"_type":"resource","_key":"typescript-for-application-developers-generic-react-d29a6f84","type":"link","title":"TypeScript handbook","description":"The official reference for the tools used in this lesson.","url":"https://www.typescriptlang.org/docs/handbook/intro.html"}]'::jsonb, 3
      ) ON CONFLICT (id) DO UPDATE SET
        module_id = EXCLUDED.module_id,
        course_id = EXCLUDED.course_id,
        title = EXCLUDED.title,
        slug = EXCLUDED.slug,
        youtube_video_id = EXCLUDED.youtube_video_id,
        video_url = EXCLUDED.video_url,
        duration = EXCLUDED.duration,
        free_preview = EXCLUDED.free_preview,
        notes = EXCLUDED.notes,
        notes_plain = EXCLUDED.notes_plain,
        key_points = EXCLUDED.key_points,
        pro_tip = EXCLUDED.pro_tip,
        resources = EXCLUDED.resources,
        position = EXCLUDED.position;

INSERT INTO public.lessons (
        id, module_id, course_id, title, slug, youtube_video_id,
        video_url, duration, free_preview, notes, notes_plain,
        key_points, pro_tip, resources, position
      ) VALUES (
        'lesson.typescript-for-application-developers-conditional-types', 'typescript-for-application-developers-module-3', 'course.typescript-for-application-developers',
        'Conditional types and infer', 'typescript-for-application-developers-conditional-types', 'KcDzkOJpCaI',
        'https://www.youtube.com/watch?v=KcDzkOJpCaI', 863, false, '[{"_type":"block","_key":"typescript-for-application-developers-conditional-t-5c4878d2","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"typescript-for-application-developers-conditional-t-53bf205f","text":"A conditional type branches on assignability, and infer pulls a type out of the branch it matched. This is how utility types are built.","marks":[]}]},{"_type":"block","_key":"typescript-for-application-developers-conditional-types-h2","style":"h2","markDefs":[],"children":[{"_type":"span","_key":"typescript-for-application-developers-conditional-t-5f31ae87","text":"What this lesson covers","marks":[]}]},{"_type":"block","_key":"typescript-for-application-developers-conditional-t-26798640","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"typescript-for-application-developers-conditional-t-d6197d60","text":"Branch a type on an extends check","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"typescript-for-application-developers-conditional-t-e3e20481","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"typescript-for-application-developers-conditional-t-bc65dcd2","text":"Extract inner types with infer","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"typescript-for-application-developers-conditional-t-8acfea97","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"typescript-for-application-developers-conditional-t-9b8075af","text":"Understand distribution over union members","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"typescript-for-application-developers-conditional-t-4f79a243","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"typescript-for-application-developers-conditional-t-d9e7233f","text":"This lesson sits in Advanced Types, part of TypeScript for Application Developers. It assumes what came before it and leads directly into the next lesson in the module.","marks":[]}]}]'::jsonb,
        'A conditional type branches on assignability, and infer pulls a type out of the branch it matched. This is how utility types are built.

What this lesson covers

Branch a type on an extends check

Extract inner types with infer

Understand distribution over union members

This lesson sits in Advanced Types, part of TypeScript for Application Developers. It assumes what came before it and leads directly into the next lesson in the module.', '["Branch a type on an extends check","Extract inner types with infer","Understand distribution over union members"]'::jsonb, '',
        '[{"_type":"resource","_key":"typescript-for-application-developers-conditional-types-docs","type":"link","title":"TypeScript handbook","description":"The official reference for the tools used in this lesson.","url":"https://www.typescriptlang.org/docs/handbook/intro.html"}]'::jsonb, 1
      ) ON CONFLICT (id) DO UPDATE SET
        module_id = EXCLUDED.module_id,
        course_id = EXCLUDED.course_id,
        title = EXCLUDED.title,
        slug = EXCLUDED.slug,
        youtube_video_id = EXCLUDED.youtube_video_id,
        video_url = EXCLUDED.video_url,
        duration = EXCLUDED.duration,
        free_preview = EXCLUDED.free_preview,
        notes = EXCLUDED.notes,
        notes_plain = EXCLUDED.notes_plain,
        key_points = EXCLUDED.key_points,
        pro_tip = EXCLUDED.pro_tip,
        resources = EXCLUDED.resources,
        position = EXCLUDED.position;

INSERT INTO public.lessons (
        id, module_id, course_id, title, slug, youtube_video_id,
        video_url, duration, free_preview, notes, notes_plain,
        key_points, pro_tip, resources, position
      ) VALUES (
        'lesson.typescript-for-application-developers-mapped-types', 'typescript-for-application-developers-module-3', 'course.typescript-for-application-developers',
        'Mapped types and key remapping', 'typescript-for-application-developers-mapped-types', 'iCEJY9XpfG8',
        'https://www.youtube.com/watch?v=iCEJY9XpfG8', 409, false, '[{"_type":"block","_key":"typescript-for-application-developers-mapped-types-intro","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"typescript-for-application-developers-mapped-types-54fae0b8","text":"Mapped types transform every property of a type at once, which is where Partial, Readonly, and their friends come from.","marks":[]}]},{"_type":"block","_key":"typescript-for-application-developers-mapped-types-h2","style":"h2","markDefs":[],"children":[{"_type":"span","_key":"typescript-for-application-developers-mapped-types-h2-span","text":"What this lesson covers","marks":[]}]},{"_type":"block","_key":"typescript-for-application-developers-mapped-types-point-0","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"typescript-for-application-developers-mapped-types-f0d65266","text":"Transform every property of an existing type","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"typescript-for-application-developers-mapped-types-point-1","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"typescript-for-application-developers-mapped-types-99349d0e","text":"Add or strip optional and readonly modifiers","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"typescript-for-application-developers-mapped-types-point-2","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"typescript-for-application-developers-mapped-types-3796de5d","text":"Remap keys with an as clause","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"typescript-for-application-developers-mapped-types-outro","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"typescript-for-application-developers-mapped-types-00bccb07","text":"This lesson sits in Advanced Types, part of TypeScript for Application Developers. It assumes what came before it and leads directly into the next lesson in the module.","marks":[]}]}]'::jsonb,
        'Mapped types transform every property of a type at once, which is where Partial, Readonly, and their friends come from.

What this lesson covers

Transform every property of an existing type

Add or strip optional and readonly modifiers

Remap keys with an as clause

This lesson sits in Advanced Types, part of TypeScript for Application Developers. It assumes what came before it and leads directly into the next lesson in the module.', '["Transform every property of an existing type","Add or strip optional and readonly modifiers","Remap keys with an as clause"]'::jsonb, '',
        '[{"_type":"resource","_key":"typescript-for-application-developers-mapped-types-docs","type":"link","title":"TypeScript handbook","description":"The official reference for the tools used in this lesson.","url":"https://www.typescriptlang.org/docs/handbook/intro.html"}]'::jsonb, 2
      ) ON CONFLICT (id) DO UPDATE SET
        module_id = EXCLUDED.module_id,
        course_id = EXCLUDED.course_id,
        title = EXCLUDED.title,
        slug = EXCLUDED.slug,
        youtube_video_id = EXCLUDED.youtube_video_id,
        video_url = EXCLUDED.video_url,
        duration = EXCLUDED.duration,
        free_preview = EXCLUDED.free_preview,
        notes = EXCLUDED.notes,
        notes_plain = EXCLUDED.notes_plain,
        key_points = EXCLUDED.key_points,
        pro_tip = EXCLUDED.pro_tip,
        resources = EXCLUDED.resources,
        position = EXCLUDED.position;

INSERT INTO public.lessons (
        id, module_id, course_id, title, slug, youtube_video_id,
        video_url, duration, free_preview, notes, notes_plain,
        key_points, pro_tip, resources, position
      ) VALUES (
        'lesson.typescript-for-application-developers-template-literal-types', 'typescript-for-application-developers-module-3', 'course.typescript-for-application-developers',
        'Template literal types', 'typescript-for-application-developers-template-literal-types', 'nskIP1iyrAo',
        'https://www.youtube.com/watch?v=nskIP1iyrAo', 1151, false, '[{"_type":"block","_key":"typescript-for-application-developers-template-lite-2db0d4ba","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"typescript-for-application-developers-template-lite-f543e310","text":"String types can be composed and pattern-matched, which lets you type things like event names and route paths precisely.","marks":[]}]},{"_type":"block","_key":"typescript-for-application-developers-template-lite-1bd76fec","style":"h2","markDefs":[],"children":[{"_type":"span","_key":"typescript-for-application-developers-template-lite-90f63d07","text":"What this lesson covers","marks":[]}]},{"_type":"block","_key":"typescript-for-application-developers-template-lite-dc449e9d","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"typescript-for-application-developers-template-lite-23b3a8ff","text":"Compose string types from other types","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"typescript-for-application-developers-template-lite-123324e0","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"typescript-for-application-developers-template-lite-dcb52870","text":"Constrain string shapes such as event or route names","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"typescript-for-application-developers-template-lite-63e8618e","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"typescript-for-application-developers-template-lite-9e1dc197","text":"Combine template literals with key remapping","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"typescript-for-application-developers-template-lite-a1cd750c","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"typescript-for-application-developers-template-lite-868af810","text":"This lesson sits in Advanced Types, part of TypeScript for Application Developers. It assumes what came before it and leads directly into the next lesson in the module.","marks":[]}]}]'::jsonb,
        'String types can be composed and pattern-matched, which lets you type things like event names and route paths precisely.

What this lesson covers

Compose string types from other types

Constrain string shapes such as event or route names

Combine template literals with key remapping

This lesson sits in Advanced Types, part of TypeScript for Application Developers. It assumes what came before it and leads directly into the next lesson in the module.', '["Compose string types from other types","Constrain string shapes such as event or route names","Combine template literals with key remapping"]'::jsonb, 'Template literal types are excellent for typed event names, and a trap when used to parse arbitrary strings.',
        '[{"_type":"resource","_key":"typescript-for-application-developers-template-lite-ba720e22","type":"link","title":"TypeScript handbook","description":"The official reference for the tools used in this lesson.","url":"https://www.typescriptlang.org/docs/handbook/intro.html"}]'::jsonb, 3
      ) ON CONFLICT (id) DO UPDATE SET
        module_id = EXCLUDED.module_id,
        course_id = EXCLUDED.course_id,
        title = EXCLUDED.title,
        slug = EXCLUDED.slug,
        youtube_video_id = EXCLUDED.youtube_video_id,
        video_url = EXCLUDED.video_url,
        duration = EXCLUDED.duration,
        free_preview = EXCLUDED.free_preview,
        notes = EXCLUDED.notes,
        notes_plain = EXCLUDED.notes_plain,
        key_points = EXCLUDED.key_points,
        pro_tip = EXCLUDED.pro_tip,
        resources = EXCLUDED.resources,
        position = EXCLUDED.position;

INSERT INTO public.lessons (
        id, module_id, course_id, title, slug, youtube_video_id,
        video_url, duration, free_preview, notes, notes_plain,
        key_points, pro_tip, resources, position
      ) VALUES (
        'lesson.typescript-for-application-developers-tsconfig-strictness', 'typescript-for-application-developers-module-4', 'course.typescript-for-application-developers',
        'tsconfig and strictness settings', 'typescript-for-application-developers-tsconfig-strictness', '0XrviXgk_rY',
        'https://www.youtube.com/watch?v=0XrviXgk_rY', 593, false, '[{"_type":"block","_key":"typescript-for-application-developers-tsconfig-stri-90a14098","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"typescript-for-application-developers-tsconfig-stri-73bfa7ec","text":"Strict mode is a set of independent flags. Knowing what each one catches lets you adopt them incrementally on an existing codebase.","marks":[]}]},{"_type":"block","_key":"typescript-for-application-developers-tsconfig-strictness-h2","style":"h2","markDefs":[],"children":[{"_type":"span","_key":"typescript-for-application-developers-tsconfig-stri-b00c4781","text":"What this lesson covers","marks":[]}]},{"_type":"block","_key":"typescript-for-application-developers-tsconfig-stri-2388f524","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"typescript-for-application-developers-tsconfig-stri-e0571d6b","text":"Understand what each strict flag actually checks","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"typescript-for-application-developers-tsconfig-stri-a51273a1","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"typescript-for-application-developers-tsconfig-stri-25455987","text":"Turn on strictness incrementally in a legacy project","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"typescript-for-application-developers-tsconfig-stri-c290444a","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"typescript-for-application-developers-tsconfig-stri-8c556b50","text":"Configure module resolution to match your runtime","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"typescript-for-application-developers-tsconfig-stri-a3ca2736","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"typescript-for-application-developers-tsconfig-stri-937a12eb","text":"This lesson sits in TypeScript in Practice, part of TypeScript for Application Developers. It assumes what came before it and leads directly into the next lesson in the module.","marks":[]}]}]'::jsonb,
        'Strict mode is a set of independent flags. Knowing what each one catches lets you adopt them incrementally on an existing codebase.

What this lesson covers

Understand what each strict flag actually checks

Turn on strictness incrementally in a legacy project

Configure module resolution to match your runtime

This lesson sits in TypeScript in Practice, part of TypeScript for Application Developers. It assumes what came before it and leads directly into the next lesson in the module.', '["Understand what each strict flag actually checks","Turn on strictness incrementally in a legacy project","Configure module resolution to match your runtime"]'::jsonb, '',
        '[{"_type":"resource","_key":"typescript-for-application-developers-tsconfig-stri-a82ad87b","type":"link","title":"TypeScript handbook","description":"The official reference for the tools used in this lesson.","url":"https://www.typescriptlang.org/docs/handbook/intro.html"}]'::jsonb, 1
      ) ON CONFLICT (id) DO UPDATE SET
        module_id = EXCLUDED.module_id,
        course_id = EXCLUDED.course_id,
        title = EXCLUDED.title,
        slug = EXCLUDED.slug,
        youtube_video_id = EXCLUDED.youtube_video_id,
        video_url = EXCLUDED.video_url,
        duration = EXCLUDED.duration,
        free_preview = EXCLUDED.free_preview,
        notes = EXCLUDED.notes,
        notes_plain = EXCLUDED.notes_plain,
        key_points = EXCLUDED.key_points,
        pro_tip = EXCLUDED.pro_tip,
        resources = EXCLUDED.resources,
        position = EXCLUDED.position;

INSERT INTO public.lessons (
        id, module_id, course_id, title, slug, youtube_video_id,
        video_url, duration, free_preview, notes, notes_plain,
        key_points, pro_tip, resources, position
      ) VALUES (
        'lesson.typescript-for-application-developers-typing-apis-with-zod', 'typescript-for-application-developers-module-4', 'course.typescript-for-application-developers',
        'Typing external data at the boundary', 'typescript-for-application-developers-typing-apis-with-zod', '9UVPk0Ulm6U',
        'https://www.youtube.com/watch?v=9UVPk0Ulm6U', 434, false, '[{"_type":"block","_key":"typescript-for-application-developers-typing-apis-w-b1e1ed4b","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"typescript-for-application-developers-typing-apis-w-2a0a1dfc","text":"Data from the network is unknown until you prove otherwise. A runtime schema validates it once and gives you a static type for free.","marks":[]}]},{"_type":"block","_key":"typescript-for-application-developers-typing-apis-w-6d084450","style":"h2","markDefs":[],"children":[{"_type":"span","_key":"typescript-for-application-developers-typing-apis-w-2c121797","text":"What this lesson covers","marks":[]}]},{"_type":"block","_key":"typescript-for-application-developers-typing-apis-w-e1e5665e","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"typescript-for-application-developers-typing-apis-w-be2594d8","text":"Parse unknown input instead of casting it","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"typescript-for-application-developers-typing-apis-w-0e241bb6","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"typescript-for-application-developers-typing-apis-w-48d97290","text":"Derive a static type from a runtime schema","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"typescript-for-application-developers-typing-apis-w-68c2fa35","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"typescript-for-application-developers-typing-apis-w-b6bcc6b4","text":"Fail loudly at the boundary rather than deep inside","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"typescript-for-application-developers-typing-apis-w-90818682","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"typescript-for-application-developers-typing-apis-w-c0da9792","text":"This lesson sits in TypeScript in Practice, part of TypeScript for Application Developers. It assumes what came before it and leads directly into the next lesson in the module.","marks":[]}]}]'::jsonb,
        'Data from the network is unknown until you prove otherwise. A runtime schema validates it once and gives you a static type for free.

What this lesson covers

Parse unknown input instead of casting it

Derive a static type from a runtime schema

Fail loudly at the boundary rather than deep inside

This lesson sits in TypeScript in Practice, part of TypeScript for Application Developers. It assumes what came before it and leads directly into the next lesson in the module.', '["Parse unknown input instead of casting it","Derive a static type from a runtime schema","Fail loudly at the boundary rather than deep inside"]'::jsonb, '',
        '[{"_type":"resource","_key":"typescript-for-application-developers-typing-apis-w-15aa9ae8","type":"link","title":"TypeScript handbook","description":"The official reference for the tools used in this lesson.","url":"https://www.typescriptlang.org/docs/handbook/intro.html"},{"_type":"resource","_key":"typescript-for-application-developers-typing-apis-w-3bb94d55","type":"link","title":"Zod documentation","description":"Schema definition, parsing, and type inference.","url":"https://zod.dev"}]'::jsonb, 2
      ) ON CONFLICT (id) DO UPDATE SET
        module_id = EXCLUDED.module_id,
        course_id = EXCLUDED.course_id,
        title = EXCLUDED.title,
        slug = EXCLUDED.slug,
        youtube_video_id = EXCLUDED.youtube_video_id,
        video_url = EXCLUDED.video_url,
        duration = EXCLUDED.duration,
        free_preview = EXCLUDED.free_preview,
        notes = EXCLUDED.notes,
        notes_plain = EXCLUDED.notes_plain,
        key_points = EXCLUDED.key_points,
        pro_tip = EXCLUDED.pro_tip,
        resources = EXCLUDED.resources,
        position = EXCLUDED.position;

INSERT INTO public.lessons (
        id, module_id, course_id, title, slug, youtube_video_id,
        video_url, duration, free_preview, notes, notes_plain,
        key_points, pro_tip, resources, position
      ) VALUES (
        'lesson.typescript-for-application-developers-declaration-files', 'typescript-for-application-developers-module-4', 'course.typescript-for-application-developers',
        'Declaration files and untyped packages', 'typescript-for-application-developers-declaration-files', 's_CZeWuEZ_s',
        'https://www.youtube.com/watch?v=s_CZeWuEZ_s', 349, false, '[{"_type":"block","_key":"typescript-for-application-developers-declaration-f-0c0d4a72","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"typescript-for-application-developers-declaration-f-eed763a2","text":"Sooner or later a dependency ships no types. Writing a small declaration file is faster and safer than sprinkling any across your codebase.","marks":[]}]},{"_type":"block","_key":"typescript-for-application-developers-declaration-files-h2","style":"h2","markDefs":[],"children":[{"_type":"span","_key":"typescript-for-application-developers-declaration-f-29660cb8","text":"What this lesson covers","marks":[]}]},{"_type":"block","_key":"typescript-for-application-developers-declaration-f-69241842","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"typescript-for-application-developers-declaration-f-700a769b","text":"Write a minimal declaration for an untyped module","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"typescript-for-application-developers-declaration-f-9edfa387","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"typescript-for-application-developers-declaration-f-37e1a40b","text":"Augment the types of an existing package","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"typescript-for-application-developers-declaration-f-dcffe053","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"typescript-for-application-developers-declaration-f-d60f1af0","text":"Declare global types without polluting every file","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"typescript-for-application-developers-declaration-f-b8ffc865","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"typescript-for-application-developers-declaration-f-9a88b132","text":"This lesson sits in TypeScript in Practice, part of TypeScript for Application Developers. It assumes what came before it and leads directly into the next lesson in the module.","marks":[]}]}]'::jsonb,
        'Sooner or later a dependency ships no types. Writing a small declaration file is faster and safer than sprinkling any across your codebase.

What this lesson covers

Write a minimal declaration for an untyped module

Augment the types of an existing package

Declare global types without polluting every file

This lesson sits in TypeScript in Practice, part of TypeScript for Application Developers. It assumes what came before it and leads directly into the next lesson in the module.', '["Write a minimal declaration for an untyped module","Augment the types of an existing package","Declare global types without polluting every file"]'::jsonb, '',
        '[{"_type":"resource","_key":"typescript-for-application-developers-declaration-files-docs","type":"link","title":"TypeScript handbook","description":"The official reference for the tools used in this lesson.","url":"https://www.typescriptlang.org/docs/handbook/intro.html"}]'::jsonb, 3
      ) ON CONFLICT (id) DO UPDATE SET
        module_id = EXCLUDED.module_id,
        course_id = EXCLUDED.course_id,
        title = EXCLUDED.title,
        slug = EXCLUDED.slug,
        youtube_video_id = EXCLUDED.youtube_video_id,
        video_url = EXCLUDED.video_url,
        duration = EXCLUDED.duration,
        free_preview = EXCLUDED.free_preview,
        notes = EXCLUDED.notes,
        notes_plain = EXCLUDED.notes_plain,
        key_points = EXCLUDED.key_points,
        pro_tip = EXCLUDED.pro_tip,
        resources = EXCLUDED.resources,
        position = EXCLUDED.position;

INSERT INTO public.lessons (
        id, module_id, course_id, title, slug, youtube_video_id,
        video_url, duration, free_preview, notes, notes_plain,
        key_points, pro_tip, resources, position
      ) VALUES (
        'lesson.building-ai-apps-with-llms-tokens-and-context-windows', 'building-ai-apps-with-llms-module-1', 'course.building-ai-apps-with-llms',
        'Tokens and context windows', 'building-ai-apps-with-llms-tokens-and-context-windows', '-QVoIxEpFkM',
        'https://www.youtube.com/watch?v=-QVoIxEpFkM', 691, true, '[{"_type":"block","_key":"building-ai-apps-with-llms-tokens-and-context-windows-intro","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"building-ai-apps-with-llms-tokens-and-context-windo-42156a3f","text":"Models read tokens, not characters, and they can only see a fixed window of them. Both your bill and your failures come back to this.","marks":[]}]},{"_type":"block","_key":"building-ai-apps-with-llms-tokens-and-context-windows-h2","style":"h2","markDefs":[],"children":[{"_type":"span","_key":"building-ai-apps-with-llms-tokens-and-context-windo-9f68faa4","text":"What this lesson covers","marks":[]}]},{"_type":"block","_key":"building-ai-apps-with-llms-tokens-and-context-windo-e9d0ef47","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"building-ai-apps-with-llms-tokens-and-context-windo-0c170515","text":"Understand tokenisation and why cost is per token","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"building-ai-apps-with-llms-tokens-and-context-windo-e4257093","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"building-ai-apps-with-llms-tokens-and-context-windo-534928b2","text":"Budget a prompt against the context window","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"building-ai-apps-with-llms-tokens-and-context-windo-ed09632d","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"building-ai-apps-with-llms-tokens-and-context-windo-5b68ac4a","text":"Recognise the failure modes of an overflowing context","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"building-ai-apps-with-llms-tokens-and-context-windows-outro","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"building-ai-apps-with-llms-tokens-and-context-windo-218d9f1e","text":"This lesson sits in LLM Fundamentals, part of Building AI Apps with LLMs. It assumes what came before it and leads directly into the next lesson in the module.","marks":[]}]}]'::jsonb,
        'Models read tokens, not characters, and they can only see a fixed window of them. Both your bill and your failures come back to this.

What this lesson covers

Understand tokenisation and why cost is per token

Budget a prompt against the context window

Recognise the failure modes of an overflowing context

This lesson sits in LLM Fundamentals, part of Building AI Apps with LLMs. It assumes what came before it and leads directly into the next lesson in the module.', '["Understand tokenisation and why cost is per token","Budget a prompt against the context window","Recognise the failure modes of an overflowing context"]'::jsonb, 'Count tokens before you ship a prompt template. Long system prompts are billed on every single call.',
        '[{"_type":"resource","_key":"building-ai-apps-with-llms-tokens-and-context-windows-docs","type":"link","title":"Claude API documentation","description":"The official reference for the tools used in this lesson.","url":"https://docs.anthropic.com/en/api/overview"}]'::jsonb, 1
      ) ON CONFLICT (id) DO UPDATE SET
        module_id = EXCLUDED.module_id,
        course_id = EXCLUDED.course_id,
        title = EXCLUDED.title,
        slug = EXCLUDED.slug,
        youtube_video_id = EXCLUDED.youtube_video_id,
        video_url = EXCLUDED.video_url,
        duration = EXCLUDED.duration,
        free_preview = EXCLUDED.free_preview,
        notes = EXCLUDED.notes,
        notes_plain = EXCLUDED.notes_plain,
        key_points = EXCLUDED.key_points,
        pro_tip = EXCLUDED.pro_tip,
        resources = EXCLUDED.resources,
        position = EXCLUDED.position;

INSERT INTO public.lessons (
        id, module_id, course_id, title, slug, youtube_video_id,
        video_url, duration, free_preview, notes, notes_plain,
        key_points, pro_tip, resources, position
      ) VALUES (
        'lesson.building-ai-apps-with-llms-temperature-and-sampling', 'building-ai-apps-with-llms-module-1', 'course.building-ai-apps-with-llms',
        'Temperature and sampling', 'building-ai-apps-with-llms-temperature-and-sampling', '-BBulGM6xF0',
        'https://www.youtube.com/watch?v=-BBulGM6xF0', 491, false, '[{"_type":"block","_key":"building-ai-apps-with-llms-temperature-and-sampling-intro","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"building-ai-apps-with-llms-temperature-and-sampling-4ede3223","text":"Sampling parameters decide how the next token is picked. Low temperature for extraction and classification, higher for anything that should feel varied.","marks":[]}]},{"_type":"block","_key":"building-ai-apps-with-llms-temperature-and-sampling-h2","style":"h2","markDefs":[],"children":[{"_type":"span","_key":"building-ai-apps-with-llms-temperature-and-sampling-h2-span","text":"What this lesson covers","marks":[]}]},{"_type":"block","_key":"building-ai-apps-with-llms-temperature-and-sampling-point-0","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"building-ai-apps-with-llms-temperature-and-sampling-0af3cb5f","text":"Trade determinism against variety with temperature","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"building-ai-apps-with-llms-temperature-and-sampling-point-1","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"building-ai-apps-with-llms-temperature-and-sampling-d3a2f628","text":"Know what top-p changes and when to touch it","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"building-ai-apps-with-llms-temperature-and-sampling-point-2","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"building-ai-apps-with-llms-temperature-and-sampling-4dc02696","text":"Pick settings per task rather than globally","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"building-ai-apps-with-llms-temperature-and-sampling-outro","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"building-ai-apps-with-llms-temperature-and-sampling-8c40aacc","text":"This lesson sits in LLM Fundamentals, part of Building AI Apps with LLMs. It assumes what came before it and leads directly into the next lesson in the module.","marks":[]}]}]'::jsonb,
        'Sampling parameters decide how the next token is picked. Low temperature for extraction and classification, higher for anything that should feel varied.

What this lesson covers

Trade determinism against variety with temperature

Know what top-p changes and when to touch it

Pick settings per task rather than globally

This lesson sits in LLM Fundamentals, part of Building AI Apps with LLMs. It assumes what came before it and leads directly into the next lesson in the module.', '["Trade determinism against variety with temperature","Know what top-p changes and when to touch it","Pick settings per task rather than globally"]'::jsonb, '',
        '[{"_type":"resource","_key":"building-ai-apps-with-llms-temperature-and-sampling-docs","type":"link","title":"Claude API documentation","description":"The official reference for the tools used in this lesson.","url":"https://docs.anthropic.com/en/api/overview"}]'::jsonb, 2
      ) ON CONFLICT (id) DO UPDATE SET
        module_id = EXCLUDED.module_id,
        course_id = EXCLUDED.course_id,
        title = EXCLUDED.title,
        slug = EXCLUDED.slug,
        youtube_video_id = EXCLUDED.youtube_video_id,
        video_url = EXCLUDED.video_url,
        duration = EXCLUDED.duration,
        free_preview = EXCLUDED.free_preview,
        notes = EXCLUDED.notes,
        notes_plain = EXCLUDED.notes_plain,
        key_points = EXCLUDED.key_points,
        pro_tip = EXCLUDED.pro_tip,
        resources = EXCLUDED.resources,
        position = EXCLUDED.position;

INSERT INTO public.lessons (
        id, module_id, course_id, title, slug, youtube_video_id,
        video_url, duration, free_preview, notes, notes_plain,
        key_points, pro_tip, resources, position
      ) VALUES (
        'lesson.building-ai-apps-with-llms-choosing-a-model', 'building-ai-apps-with-llms-module-1', 'course.building-ai-apps-with-llms',
        'Choosing a model for the job', 'building-ai-apps-with-llms-choosing-a-model', 'pYax2rupKEY',
        'https://www.youtube.com/watch?v=pYax2rupKEY', 417, false, '[{"_type":"block","_key":"building-ai-apps-with-llms-choosing-a-model-intro","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"building-ai-apps-with-llms-choosing-a-model-intro-span","text":"The largest model is rarely the right default. Match capability, latency, and price to what the specific step of your product needs.","marks":[]}]},{"_type":"block","_key":"building-ai-apps-with-llms-choosing-a-model-h2","style":"h2","markDefs":[],"children":[{"_type":"span","_key":"building-ai-apps-with-llms-choosing-a-model-h2-span","text":"What this lesson covers","marks":[]}]},{"_type":"block","_key":"building-ai-apps-with-llms-choosing-a-model-point-0","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"building-ai-apps-with-llms-choosing-a-model-point-0-span","text":"Weigh capability against latency and cost","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"building-ai-apps-with-llms-choosing-a-model-point-1","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"building-ai-apps-with-llms-choosing-a-model-point-1-span","text":"Route easy steps to a smaller, faster model","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"building-ai-apps-with-llms-choosing-a-model-point-2","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"building-ai-apps-with-llms-choosing-a-model-point-2-span","text":"Build an evaluation before committing to a choice","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"building-ai-apps-with-llms-choosing-a-model-outro","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"building-ai-apps-with-llms-choosing-a-model-outro-span","text":"This lesson sits in LLM Fundamentals, part of Building AI Apps with LLMs. It assumes what came before it and leads directly into the next lesson in the module.","marks":[]}]}]'::jsonb,
        'The largest model is rarely the right default. Match capability, latency, and price to what the specific step of your product needs.

What this lesson covers

Weigh capability against latency and cost

Route easy steps to a smaller, faster model

Build an evaluation before committing to a choice

This lesson sits in LLM Fundamentals, part of Building AI Apps with LLMs. It assumes what came before it and leads directly into the next lesson in the module.', '["Weigh capability against latency and cost","Route easy steps to a smaller, faster model","Build an evaluation before committing to a choice"]'::jsonb, '',
        '[{"_type":"resource","_key":"building-ai-apps-with-llms-choosing-a-model-docs","type":"link","title":"Claude API documentation","description":"The official reference for the tools used in this lesson.","url":"https://docs.anthropic.com/en/api/overview"}]'::jsonb, 3
      ) ON CONFLICT (id) DO UPDATE SET
        module_id = EXCLUDED.module_id,
        course_id = EXCLUDED.course_id,
        title = EXCLUDED.title,
        slug = EXCLUDED.slug,
        youtube_video_id = EXCLUDED.youtube_video_id,
        video_url = EXCLUDED.video_url,
        duration = EXCLUDED.duration,
        free_preview = EXCLUDED.free_preview,
        notes = EXCLUDED.notes,
        notes_plain = EXCLUDED.notes_plain,
        key_points = EXCLUDED.key_points,
        pro_tip = EXCLUDED.pro_tip,
        resources = EXCLUDED.resources,
        position = EXCLUDED.position;

INSERT INTO public.lessons (
        id, module_id, course_id, title, slug, youtube_video_id,
        video_url, duration, free_preview, notes, notes_plain,
        key_points, pro_tip, resources, position
      ) VALUES (
        'lesson.building-ai-apps-with-llms-system-prompts', 'building-ai-apps-with-llms-module-2', 'course.building-ai-apps-with-llms',
        'Designing the system prompt', 'building-ai-apps-with-llms-system-prompts', 'MO3U1X8-NNQ',
        'https://www.youtube.com/watch?v=MO3U1X8-NNQ', 1261, false, '[{"_type":"block","_key":"building-ai-apps-with-llms-system-prompts-intro","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"building-ai-apps-with-llms-system-prompts-intro-span","text":"The system prompt sets role, constraints, and refusals. It is followed more reliably than instructions buried in user content, so the load-bearing rules belong here.","marks":[]}]},{"_type":"block","_key":"building-ai-apps-with-llms-system-prompts-h2","style":"h2","markDefs":[],"children":[{"_type":"span","_key":"building-ai-apps-with-llms-system-prompts-h2-span","text":"What this lesson covers","marks":[]}]},{"_type":"block","_key":"building-ai-apps-with-llms-system-prompts-point-0","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"building-ai-apps-with-llms-system-prompts-point-0-span","text":"Separate durable rules from per-request input","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"building-ai-apps-with-llms-system-prompts-point-1","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"building-ai-apps-with-llms-system-prompts-point-1-span","text":"State constraints and refusals explicitly","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"building-ai-apps-with-llms-system-prompts-point-2","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"building-ai-apps-with-llms-system-prompts-point-2-span","text":"Keep it short enough to stay affordable per call","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"building-ai-apps-with-llms-system-prompts-outro","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"building-ai-apps-with-llms-system-prompts-outro-span","text":"This lesson sits in Prompting That Holds Up, part of Building AI Apps with LLMs. It assumes what came before it and leads directly into the next lesson in the module.","marks":[]}]}]'::jsonb,
        'The system prompt sets role, constraints, and refusals. It is followed more reliably than instructions buried in user content, so the load-bearing rules belong here.

What this lesson covers

Separate durable rules from per-request input

State constraints and refusals explicitly

Keep it short enough to stay affordable per call

This lesson sits in Prompting That Holds Up, part of Building AI Apps with LLMs. It assumes what came before it and leads directly into the next lesson in the module.', '["Separate durable rules from per-request input","State constraints and refusals explicitly","Keep it short enough to stay affordable per call"]'::jsonb, '',
        '[{"_type":"resource","_key":"building-ai-apps-with-llms-system-prompts-docs","type":"link","title":"Claude API documentation","description":"The official reference for the tools used in this lesson.","url":"https://docs.anthropic.com/en/api/overview"}]'::jsonb, 1
      ) ON CONFLICT (id) DO UPDATE SET
        module_id = EXCLUDED.module_id,
        course_id = EXCLUDED.course_id,
        title = EXCLUDED.title,
        slug = EXCLUDED.slug,
        youtube_video_id = EXCLUDED.youtube_video_id,
        video_url = EXCLUDED.video_url,
        duration = EXCLUDED.duration,
        free_preview = EXCLUDED.free_preview,
        notes = EXCLUDED.notes,
        notes_plain = EXCLUDED.notes_plain,
        key_points = EXCLUDED.key_points,
        pro_tip = EXCLUDED.pro_tip,
        resources = EXCLUDED.resources,
        position = EXCLUDED.position;

INSERT INTO public.lessons (
        id, module_id, course_id, title, slug, youtube_video_id,
        video_url, duration, free_preview, notes, notes_plain,
        key_points, pro_tip, resources, position
      ) VALUES (
        'lesson.building-ai-apps-with-llms-few-shot-prompting', 'building-ai-apps-with-llms-module-2', 'course.building-ai-apps-with-llms',
        'Few-shot examples', 'building-ai-apps-with-llms-few-shot-prompting', '9qdgEBVkWR4',
        'https://www.youtube.com/watch?v=9qdgEBVkWR4', 271, false, '[{"_type":"block","_key":"building-ai-apps-with-llms-few-shot-prompting-intro","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"building-ai-apps-with-llms-few-shot-prompting-intro-span","text":"Examples communicate format and edge-case handling far better than description. Two well-chosen ones usually beat a paragraph of instructions.","marks":[]}]},{"_type":"block","_key":"building-ai-apps-with-llms-few-shot-prompting-h2","style":"h2","markDefs":[],"children":[{"_type":"span","_key":"building-ai-apps-with-llms-few-shot-prompting-h2-span","text":"What this lesson covers","marks":[]}]},{"_type":"block","_key":"building-ai-apps-with-llms-few-shot-prompting-point-0","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"building-ai-apps-with-llms-few-shot-prompting-point-0-span","text":"Show the format instead of describing it","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"building-ai-apps-with-llms-few-shot-prompting-point-1","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"building-ai-apps-with-llms-few-shot-prompting-point-1-span","text":"Choose examples that cover the tricky cases","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"building-ai-apps-with-llms-few-shot-prompting-point-2","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"building-ai-apps-with-llms-few-shot-prompting-point-2-span","text":"Watch for examples that bias the output","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"building-ai-apps-with-llms-few-shot-prompting-outro","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"building-ai-apps-with-llms-few-shot-prompting-outro-span","text":"This lesson sits in Prompting That Holds Up, part of Building AI Apps with LLMs. It assumes what came before it and leads directly into the next lesson in the module.","marks":[]}]}]'::jsonb,
        'Examples communicate format and edge-case handling far better than description. Two well-chosen ones usually beat a paragraph of instructions.

What this lesson covers

Show the format instead of describing it

Choose examples that cover the tricky cases

Watch for examples that bias the output

This lesson sits in Prompting That Holds Up, part of Building AI Apps with LLMs. It assumes what came before it and leads directly into the next lesson in the module.', '["Show the format instead of describing it","Choose examples that cover the tricky cases","Watch for examples that bias the output"]'::jsonb, '',
        '[{"_type":"resource","_key":"building-ai-apps-with-llms-few-shot-prompting-docs","type":"link","title":"Claude API documentation","description":"The official reference for the tools used in this lesson.","url":"https://docs.anthropic.com/en/api/overview"}]'::jsonb, 2
      ) ON CONFLICT (id) DO UPDATE SET
        module_id = EXCLUDED.module_id,
        course_id = EXCLUDED.course_id,
        title = EXCLUDED.title,
        slug = EXCLUDED.slug,
        youtube_video_id = EXCLUDED.youtube_video_id,
        video_url = EXCLUDED.video_url,
        duration = EXCLUDED.duration,
        free_preview = EXCLUDED.free_preview,
        notes = EXCLUDED.notes,
        notes_plain = EXCLUDED.notes_plain,
        key_points = EXCLUDED.key_points,
        pro_tip = EXCLUDED.pro_tip,
        resources = EXCLUDED.resources,
        position = EXCLUDED.position;

INSERT INTO public.lessons (
        id, module_id, course_id, title, slug, youtube_video_id,
        video_url, duration, free_preview, notes, notes_plain,
        key_points, pro_tip, resources, position
      ) VALUES (
        'lesson.building-ai-apps-with-llms-structured-output', 'building-ai-apps-with-llms-module-2', 'course.building-ai-apps-with-llms',
        'Structured output and JSON', 'building-ai-apps-with-llms-structured-output', 'CllLqPwCjD4',
        'https://www.youtube.com/watch?v=CllLqPwCjD4', 555, false, '[{"_type":"block","_key":"building-ai-apps-with-llms-structured-output-intro","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"building-ai-apps-with-llms-structured-output-intro-span","text":"If your code consumes the output, it needs a schema. Constrain the shape, then validate the response before anything downstream touches it.","marks":[]}]},{"_type":"block","_key":"building-ai-apps-with-llms-structured-output-h2","style":"h2","markDefs":[],"children":[{"_type":"span","_key":"building-ai-apps-with-llms-structured-output-h2-span","text":"What this lesson covers","marks":[]}]},{"_type":"block","_key":"building-ai-apps-with-llms-structured-output-point-0","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"building-ai-apps-with-llms-structured-output-point-0-span","text":"Constrain responses to a declared schema","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"building-ai-apps-with-llms-structured-output-point-1","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"building-ai-apps-with-llms-structured-output-point-1-span","text":"Validate the parsed output at runtime","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"building-ai-apps-with-llms-structured-output-point-2","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"building-ai-apps-with-llms-structured-output-point-2-span","text":"Handle the case where the model returns nothing usable","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"building-ai-apps-with-llms-structured-output-outro","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"building-ai-apps-with-llms-structured-output-outro-span","text":"This lesson sits in Prompting That Holds Up, part of Building AI Apps with LLMs. It assumes what came before it and leads directly into the next lesson in the module.","marks":[]}]}]'::jsonb,
        'If your code consumes the output, it needs a schema. Constrain the shape, then validate the response before anything downstream touches it.

What this lesson covers

Constrain responses to a declared schema

Validate the parsed output at runtime

Handle the case where the model returns nothing usable

This lesson sits in Prompting That Holds Up, part of Building AI Apps with LLMs. It assumes what came before it and leads directly into the next lesson in the module.', '["Constrain responses to a declared schema","Validate the parsed output at runtime","Handle the case where the model returns nothing usable"]'::jsonb, 'Validate structured output even when the API guarantees a schema. A retry is cheaper than corrupt data.',
        '[{"_type":"resource","_key":"building-ai-apps-with-llms-structured-output-docs","type":"link","title":"Claude API documentation","description":"The official reference for the tools used in this lesson.","url":"https://docs.anthropic.com/en/api/overview"}]'::jsonb, 3
      ) ON CONFLICT (id) DO UPDATE SET
        module_id = EXCLUDED.module_id,
        course_id = EXCLUDED.course_id,
        title = EXCLUDED.title,
        slug = EXCLUDED.slug,
        youtube_video_id = EXCLUDED.youtube_video_id,
        video_url = EXCLUDED.video_url,
        duration = EXCLUDED.duration,
        free_preview = EXCLUDED.free_preview,
        notes = EXCLUDED.notes,
        notes_plain = EXCLUDED.notes_plain,
        key_points = EXCLUDED.key_points,
        pro_tip = EXCLUDED.pro_tip,
        resources = EXCLUDED.resources,
        position = EXCLUDED.position;

INSERT INTO public.lessons (
        id, module_id, course_id, title, slug, youtube_video_id,
        video_url, duration, free_preview, notes, notes_plain,
        key_points, pro_tip, resources, position
      ) VALUES (
        'lesson.building-ai-apps-with-llms-tool-calling', 'building-ai-apps-with-llms-module-3', 'course.building-ai-apps-with-llms',
        'Tool calling fundamentals', 'building-ai-apps-with-llms-tool-calling', 'gMeTK6zzaO4',
        'https://www.youtube.com/watch?v=gMeTK6zzaO4', 1874, false, '[{"_type":"block","_key":"building-ai-apps-with-llms-tool-calling-intro","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"building-ai-apps-with-llms-tool-calling-intro-span","text":"You describe the functions, the model chooses one and supplies arguments, your code executes it. The description of each tool matters as much as the prompt.","marks":[]}]},{"_type":"block","_key":"building-ai-apps-with-llms-tool-calling-h2","style":"h2","markDefs":[],"children":[{"_type":"span","_key":"building-ai-apps-with-llms-tool-calling-h2-span","text":"What this lesson covers","marks":[]}]},{"_type":"block","_key":"building-ai-apps-with-llms-tool-calling-point-0","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"building-ai-apps-with-llms-tool-calling-point-0-span","text":"Describe a tool so the model uses it correctly","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"building-ai-apps-with-llms-tool-calling-point-1","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"building-ai-apps-with-llms-tool-calling-point-1-span","text":"Execute the call and feed the result back","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"building-ai-apps-with-llms-tool-calling-point-2","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"building-ai-apps-with-llms-tool-calling-point-2-span","text":"Validate arguments before executing anything","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"building-ai-apps-with-llms-tool-calling-outro","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"building-ai-apps-with-llms-tool-calling-outro-span","text":"This lesson sits in Tool Calling and Agents, part of Building AI Apps with LLMs. It assumes what came before it and leads directly into the next lesson in the module.","marks":[]}]}]'::jsonb,
        'You describe the functions, the model chooses one and supplies arguments, your code executes it. The description of each tool matters as much as the prompt.

What this lesson covers

Describe a tool so the model uses it correctly

Execute the call and feed the result back

Validate arguments before executing anything

This lesson sits in Tool Calling and Agents, part of Building AI Apps with LLMs. It assumes what came before it and leads directly into the next lesson in the module.', '["Describe a tool so the model uses it correctly","Execute the call and feed the result back","Validate arguments before executing anything"]'::jsonb, '',
        '[{"_type":"resource","_key":"building-ai-apps-with-llms-tool-calling-docs","type":"link","title":"Claude API documentation","description":"The official reference for the tools used in this lesson.","url":"https://docs.anthropic.com/en/api/overview"}]'::jsonb, 1
      ) ON CONFLICT (id) DO UPDATE SET
        module_id = EXCLUDED.module_id,
        course_id = EXCLUDED.course_id,
        title = EXCLUDED.title,
        slug = EXCLUDED.slug,
        youtube_video_id = EXCLUDED.youtube_video_id,
        video_url = EXCLUDED.video_url,
        duration = EXCLUDED.duration,
        free_preview = EXCLUDED.free_preview,
        notes = EXCLUDED.notes,
        notes_plain = EXCLUDED.notes_plain,
        key_points = EXCLUDED.key_points,
        pro_tip = EXCLUDED.pro_tip,
        resources = EXCLUDED.resources,
        position = EXCLUDED.position;

INSERT INTO public.lessons (
        id, module_id, course_id, title, slug, youtube_video_id,
        video_url, duration, free_preview, notes, notes_plain,
        key_points, pro_tip, resources, position
      ) VALUES (
        'lesson.building-ai-apps-with-llms-agent-loops', 'building-ai-apps-with-llms-module-3', 'course.building-ai-apps-with-llms',
        'Building an agent loop', 'building-ai-apps-with-llms-agent-loops', 'GErEgIOMy_4',
        'https://www.youtube.com/watch?v=GErEgIOMy_4', 950, false, '[{"_type":"block","_key":"building-ai-apps-with-llms-agent-loops-intro","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"building-ai-apps-with-llms-agent-loops-intro-span","text":"An agent is a loop: call the model, run the tool it asked for, feed the result back, repeat. Every loop needs a stopping condition it cannot argue with.","marks":[]}]},{"_type":"block","_key":"building-ai-apps-with-llms-agent-loops-h2","style":"h2","markDefs":[],"children":[{"_type":"span","_key":"building-ai-apps-with-llms-agent-loops-h2-span","text":"What this lesson covers","marks":[]}]},{"_type":"block","_key":"building-ai-apps-with-llms-agent-loops-point-0","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"building-ai-apps-with-llms-agent-loops-point-0-span","text":"Structure the call, execute, feed back cycle","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"building-ai-apps-with-llms-agent-loops-point-1","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"building-ai-apps-with-llms-agent-loops-point-1-span","text":"Bound the loop with iteration and token limits","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"building-ai-apps-with-llms-agent-loops-point-2","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"building-ai-apps-with-llms-agent-loops-point-2-span","text":"Log each step so failures can be replayed","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"building-ai-apps-with-llms-agent-loops-outro","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"building-ai-apps-with-llms-agent-loops-outro-span","text":"This lesson sits in Tool Calling and Agents, part of Building AI Apps with LLMs. It assumes what came before it and leads directly into the next lesson in the module.","marks":[]}]}]'::jsonb,
        'An agent is a loop: call the model, run the tool it asked for, feed the result back, repeat. Every loop needs a stopping condition it cannot argue with.

What this lesson covers

Structure the call, execute, feed back cycle

Bound the loop with iteration and token limits

Log each step so failures can be replayed

This lesson sits in Tool Calling and Agents, part of Building AI Apps with LLMs. It assumes what came before it and leads directly into the next lesson in the module.', '["Structure the call, execute, feed back cycle","Bound the loop with iteration and token limits","Log each step so failures can be replayed"]'::jsonb, '',
        '[{"_type":"resource","_key":"building-ai-apps-with-llms-agent-loops-docs","type":"link","title":"Claude API documentation","description":"The official reference for the tools used in this lesson.","url":"https://docs.anthropic.com/en/api/overview"}]'::jsonb, 2
      ) ON CONFLICT (id) DO UPDATE SET
        module_id = EXCLUDED.module_id,
        course_id = EXCLUDED.course_id,
        title = EXCLUDED.title,
        slug = EXCLUDED.slug,
        youtube_video_id = EXCLUDED.youtube_video_id,
        video_url = EXCLUDED.video_url,
        duration = EXCLUDED.duration,
        free_preview = EXCLUDED.free_preview,
        notes = EXCLUDED.notes,
        notes_plain = EXCLUDED.notes_plain,
        key_points = EXCLUDED.key_points,
        pro_tip = EXCLUDED.pro_tip,
        resources = EXCLUDED.resources,
        position = EXCLUDED.position;

INSERT INTO public.lessons (
        id, module_id, course_id, title, slug, youtube_video_id,
        video_url, duration, free_preview, notes, notes_plain,
        key_points, pro_tip, resources, position
      ) VALUES (
        'lesson.building-ai-apps-with-llms-guardrails-and-evals', 'building-ai-apps-with-llms-module-3', 'course.building-ai-apps-with-llms',
        'Guardrails and evaluation', 'building-ai-apps-with-llms-guardrails-and-evals', 'GvNrhULVpHI',
        'https://www.youtube.com/watch?v=GvNrhULVpHI', 438, false, '[{"_type":"block","_key":"building-ai-apps-with-llms-guardrails-and-evals-intro","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"building-ai-apps-with-llms-guardrails-and-evals-intro-span","text":"Without an evaluation set you cannot tell an improvement from a regression. Guardrails then enforce the limits your evaluation exposed.","marks":[]}]},{"_type":"block","_key":"building-ai-apps-with-llms-guardrails-and-evals-h2","style":"h2","markDefs":[],"children":[{"_type":"span","_key":"building-ai-apps-with-llms-guardrails-and-evals-h2-span","text":"What this lesson covers","marks":[]}]},{"_type":"block","_key":"building-ai-apps-with-llms-guardrails-and-evals-point-0","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"building-ai-apps-with-llms-guardrails-and-evals-point-0-span","text":"Build a small, honest evaluation set early","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"building-ai-apps-with-llms-guardrails-and-evals-point-1","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"building-ai-apps-with-llms-guardrails-and-evals-point-1-span","text":"Score changes against it before shipping","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"building-ai-apps-with-llms-guardrails-and-evals-point-2","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"building-ai-apps-with-llms-guardrails-and-evals-point-2-span","text":"Enforce boundaries the model must not cross","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"building-ai-apps-with-llms-guardrails-and-evals-outro","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"building-ai-apps-with-llms-guardrails-and-evals-outro-span","text":"This lesson sits in Tool Calling and Agents, part of Building AI Apps with LLMs. It assumes what came before it and leads directly into the next lesson in the module.","marks":[]}]}]'::jsonb,
        'Without an evaluation set you cannot tell an improvement from a regression. Guardrails then enforce the limits your evaluation exposed.

What this lesson covers

Build a small, honest evaluation set early

Score changes against it before shipping

Enforce boundaries the model must not cross

This lesson sits in Tool Calling and Agents, part of Building AI Apps with LLMs. It assumes what came before it and leads directly into the next lesson in the module.', '["Build a small, honest evaluation set early","Score changes against it before shipping","Enforce boundaries the model must not cross"]'::jsonb, 'Thirty real examples you curated beat a thousand you generated with the same model you are testing.',
        '[{"_type":"resource","_key":"building-ai-apps-with-llms-guardrails-and-evals-docs","type":"link","title":"Claude API documentation","description":"The official reference for the tools used in this lesson.","url":"https://docs.anthropic.com/en/api/overview"}]'::jsonb, 3
      ) ON CONFLICT (id) DO UPDATE SET
        module_id = EXCLUDED.module_id,
        course_id = EXCLUDED.course_id,
        title = EXCLUDED.title,
        slug = EXCLUDED.slug,
        youtube_video_id = EXCLUDED.youtube_video_id,
        video_url = EXCLUDED.video_url,
        duration = EXCLUDED.duration,
        free_preview = EXCLUDED.free_preview,
        notes = EXCLUDED.notes,
        notes_plain = EXCLUDED.notes_plain,
        key_points = EXCLUDED.key_points,
        pro_tip = EXCLUDED.pro_tip,
        resources = EXCLUDED.resources,
        position = EXCLUDED.position;

INSERT INTO public.lessons (
        id, module_id, course_id, title, slug, youtube_video_id,
        video_url, duration, free_preview, notes, notes_plain,
        key_points, pro_tip, resources, position
      ) VALUES (
        'lesson.building-ai-apps-with-llms-streaming-responses', 'building-ai-apps-with-llms-module-4', 'course.building-ai-apps-with-llms',
        'Streaming responses to the browser', 'building-ai-apps-with-llms-streaming-responses', 'hOAAg1WaZh8',
        'https://www.youtube.com/watch?v=hOAAg1WaZh8', 536, false, '[{"_type":"block","_key":"building-ai-apps-with-llms-streaming-responses-intro","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"building-ai-apps-with-llms-streaming-responses-intro-span","text":"A streamed answer feels immediate even when total latency is unchanged. Streaming through your own server also keeps your API key off the client.","marks":[]}]},{"_type":"block","_key":"building-ai-apps-with-llms-streaming-responses-h2","style":"h2","markDefs":[],"children":[{"_type":"span","_key":"building-ai-apps-with-llms-streaming-responses-h2-span","text":"What this lesson covers","marks":[]}]},{"_type":"block","_key":"building-ai-apps-with-llms-streaming-responses-point-0","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"building-ai-apps-with-llms-streaming-responses-point-0-span","text":"Stream tokens from the server to the browser","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"building-ai-apps-with-llms-streaming-responses-point-1","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"building-ai-apps-with-llms-streaming-responses-point-1-span","text":"Render partial output without layout thrash","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"building-ai-apps-with-llms-streaming-responses-point-2","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"building-ai-apps-with-llms-streaming-responses-point-2-span","text":"Handle cancellation and mid-stream errors","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"building-ai-apps-with-llms-streaming-responses-outro","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"building-ai-apps-with-llms-streaming-responses-outro-span","text":"This lesson sits in Shipping to Production, part of Building AI Apps with LLMs. It assumes what came before it and leads directly into the next lesson in the module.","marks":[]}]}]'::jsonb,
        'A streamed answer feels immediate even when total latency is unchanged. Streaming through your own server also keeps your API key off the client.

What this lesson covers

Stream tokens from the server to the browser

Render partial output without layout thrash

Handle cancellation and mid-stream errors

This lesson sits in Shipping to Production, part of Building AI Apps with LLMs. It assumes what came before it and leads directly into the next lesson in the module.', '["Stream tokens from the server to the browser","Render partial output without layout thrash","Handle cancellation and mid-stream errors"]'::jsonb, '',
        '[{"_type":"resource","_key":"building-ai-apps-with-llms-streaming-responses-docs","type":"link","title":"Claude API documentation","description":"The official reference for the tools used in this lesson.","url":"https://docs.anthropic.com/en/api/overview"}]'::jsonb, 1
      ) ON CONFLICT (id) DO UPDATE SET
        module_id = EXCLUDED.module_id,
        course_id = EXCLUDED.course_id,
        title = EXCLUDED.title,
        slug = EXCLUDED.slug,
        youtube_video_id = EXCLUDED.youtube_video_id,
        video_url = EXCLUDED.video_url,
        duration = EXCLUDED.duration,
        free_preview = EXCLUDED.free_preview,
        notes = EXCLUDED.notes,
        notes_plain = EXCLUDED.notes_plain,
        key_points = EXCLUDED.key_points,
        pro_tip = EXCLUDED.pro_tip,
        resources = EXCLUDED.resources,
        position = EXCLUDED.position;

INSERT INTO public.lessons (
        id, module_id, course_id, title, slug, youtube_video_id,
        video_url, duration, free_preview, notes, notes_plain,
        key_points, pro_tip, resources, position
      ) VALUES (
        'lesson.building-ai-apps-with-llms-cost-and-latency', 'building-ai-apps-with-llms-module-4', 'course.building-ai-apps-with-llms',
        'Managing cost and latency', 'building-ai-apps-with-llms-cost-and-latency', 'E3j-4XH0q4g',
        'https://www.youtube.com/watch?v=E3j-4XH0q4g', 805, false, '[{"_type":"block","_key":"building-ai-apps-with-llms-cost-and-latency-intro","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"building-ai-apps-with-llms-cost-and-latency-intro-span","text":"Cost is prompt design, model choice, and how often you call. Measure per-request tokens before you try to optimise anything.","marks":[]}]},{"_type":"block","_key":"building-ai-apps-with-llms-cost-and-latency-h2","style":"h2","markDefs":[],"children":[{"_type":"span","_key":"building-ai-apps-with-llms-cost-and-latency-h2-span","text":"What this lesson covers","marks":[]}]},{"_type":"block","_key":"building-ai-apps-with-llms-cost-and-latency-point-0","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"building-ai-apps-with-llms-cost-and-latency-point-0-span","text":"Attribute spend to specific calls and prompts","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"building-ai-apps-with-llms-cost-and-latency-point-1","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"building-ai-apps-with-llms-cost-and-latency-point-1-span","text":"Trim prompts and route by difficulty","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"building-ai-apps-with-llms-cost-and-latency-point-2","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"building-ai-apps-with-llms-cost-and-latency-point-2-span","text":"Set timeouts and fall back gracefully","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"building-ai-apps-with-llms-cost-and-latency-outro","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"building-ai-apps-with-llms-cost-and-latency-outro-span","text":"This lesson sits in Shipping to Production, part of Building AI Apps with LLMs. It assumes what came before it and leads directly into the next lesson in the module.","marks":[]}]}]'::jsonb,
        'Cost is prompt design, model choice, and how often you call. Measure per-request tokens before you try to optimise anything.

What this lesson covers

Attribute spend to specific calls and prompts

Trim prompts and route by difficulty

Set timeouts and fall back gracefully

This lesson sits in Shipping to Production, part of Building AI Apps with LLMs. It assumes what came before it and leads directly into the next lesson in the module.', '["Attribute spend to specific calls and prompts","Trim prompts and route by difficulty","Set timeouts and fall back gracefully"]'::jsonb, '',
        '[{"_type":"resource","_key":"building-ai-apps-with-llms-cost-and-latency-docs","type":"link","title":"Claude API documentation","description":"The official reference for the tools used in this lesson.","url":"https://docs.anthropic.com/en/api/overview"}]'::jsonb, 2
      ) ON CONFLICT (id) DO UPDATE SET
        module_id = EXCLUDED.module_id,
        course_id = EXCLUDED.course_id,
        title = EXCLUDED.title,
        slug = EXCLUDED.slug,
        youtube_video_id = EXCLUDED.youtube_video_id,
        video_url = EXCLUDED.video_url,
        duration = EXCLUDED.duration,
        free_preview = EXCLUDED.free_preview,
        notes = EXCLUDED.notes,
        notes_plain = EXCLUDED.notes_plain,
        key_points = EXCLUDED.key_points,
        pro_tip = EXCLUDED.pro_tip,
        resources = EXCLUDED.resources,
        position = EXCLUDED.position;

INSERT INTO public.lessons (
        id, module_id, course_id, title, slug, youtube_video_id,
        video_url, duration, free_preview, notes, notes_plain,
        key_points, pro_tip, resources, position
      ) VALUES (
        'lesson.building-ai-apps-with-llms-caching-and-rate-limits', 'building-ai-apps-with-llms-module-4', 'course.building-ai-apps-with-llms',
        'Caching and rate limits', 'building-ai-apps-with-llms-caching-and-rate-limits', 'u57EnkQaUTY',
        'https://www.youtube.com/watch?v=u57EnkQaUTY', 546, false, '[{"_type":"block","_key":"building-ai-apps-with-llms-caching-and-rate-limits-intro","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"building-ai-apps-with-llms-caching-and-rate-limits-0d072edd","text":"Repeated prefixes can be cached, repeated questions can be answered from your own cache, and rate limits will find you eventually — so retry with backoff.","marks":[]}]},{"_type":"block","_key":"building-ai-apps-with-llms-caching-and-rate-limits-h2","style":"h2","markDefs":[],"children":[{"_type":"span","_key":"building-ai-apps-with-llms-caching-and-rate-limits-h2-span","text":"What this lesson covers","marks":[]}]},{"_type":"block","_key":"building-ai-apps-with-llms-caching-and-rate-limits-point-0","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"building-ai-apps-with-llms-caching-and-rate-limits-ffc5fae4","text":"Cache stable prompt prefixes to cut cost","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"building-ai-apps-with-llms-caching-and-rate-limits-point-1","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"building-ai-apps-with-llms-caching-and-rate-limits-0e6417c4","text":"Retry with exponential backoff on rate limits","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"building-ai-apps-with-llms-caching-and-rate-limits-point-2","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"building-ai-apps-with-llms-caching-and-rate-limits-a8727f24","text":"Queue or shed load instead of failing hard","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"building-ai-apps-with-llms-caching-and-rate-limits-outro","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"building-ai-apps-with-llms-caching-and-rate-limits-367aac27","text":"This lesson sits in Shipping to Production, part of Building AI Apps with LLMs. It assumes what came before it and leads directly into the next lesson in the module.","marks":[]}]}]'::jsonb,
        'Repeated prefixes can be cached, repeated questions can be answered from your own cache, and rate limits will find you eventually — so retry with backoff.

What this lesson covers

Cache stable prompt prefixes to cut cost

Retry with exponential backoff on rate limits

Queue or shed load instead of failing hard

This lesson sits in Shipping to Production, part of Building AI Apps with LLMs. It assumes what came before it and leads directly into the next lesson in the module.', '["Cache stable prompt prefixes to cut cost","Retry with exponential backoff on rate limits","Queue or shed load instead of failing hard"]'::jsonb, '',
        '[{"_type":"resource","_key":"building-ai-apps-with-llms-caching-and-rate-limits-docs","type":"link","title":"Claude API documentation","description":"The official reference for the tools used in this lesson.","url":"https://docs.anthropic.com/en/api/overview"}]'::jsonb, 3
      ) ON CONFLICT (id) DO UPDATE SET
        module_id = EXCLUDED.module_id,
        course_id = EXCLUDED.course_id,
        title = EXCLUDED.title,
        slug = EXCLUDED.slug,
        youtube_video_id = EXCLUDED.youtube_video_id,
        video_url = EXCLUDED.video_url,
        duration = EXCLUDED.duration,
        free_preview = EXCLUDED.free_preview,
        notes = EXCLUDED.notes,
        notes_plain = EXCLUDED.notes_plain,
        key_points = EXCLUDED.key_points,
        pro_tip = EXCLUDED.pro_tip,
        resources = EXCLUDED.resources,
        position = EXCLUDED.position;

INSERT INTO public.lessons (
        id, module_id, course_id, title, slug, youtube_video_id,
        video_url, duration, free_preview, notes, notes_plain,
        key_points, pro_tip, resources, position
      ) VALUES (
        'lesson.retrieval-augmented-generation-from-scratch-what-embeddings-are', 'retrieval-augmented-generation-from-scratch-module-1', 'course.retrieval-augmented-generation-from-scratch',
        'What an embedding actually encodes', 'retrieval-augmented-generation-from-scratch-what-embeddings-are', 'wgfSDrqYMJ4',
        'https://www.youtube.com/watch?v=wgfSDrqYMJ4', 518, true, '[{"_type":"block","_key":"retrieval-augmented-generation-from-scratch-what-em-15571b4c","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"retrieval-augmented-generation-from-scratch-what-em-3018e765","text":"An embedding maps text to a point in space where nearby means related. It captures topic and usage, not truth, and definitely not recency.","marks":[]}]},{"_type":"block","_key":"retrieval-augmented-generation-from-scratch-what-em-4afdcdc9","style":"h2","markDefs":[],"children":[{"_type":"span","_key":"retrieval-augmented-generation-from-scratch-what-em-097bea8c","text":"What this lesson covers","marks":[]}]},{"_type":"block","_key":"retrieval-augmented-generation-from-scratch-what-em-a255caad","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"retrieval-augmented-generation-from-scratch-what-em-1e133052","text":"Read an embedding as a position in semantic space","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"retrieval-augmented-generation-from-scratch-what-em-ff4921c6","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"retrieval-augmented-generation-from-scratch-what-em-18235a67","text":"Know what embeddings fail to capture","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"retrieval-augmented-generation-from-scratch-what-em-df6a973c","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"retrieval-augmented-generation-from-scratch-what-em-584a307f","text":"Choose an embedding model for your content","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"retrieval-augmented-generation-from-scratch-what-em-ae75404f","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"retrieval-augmented-generation-from-scratch-what-em-c7694898","text":"This lesson sits in Embeddings and Vector Search, part of Retrieval-Augmented Generation from Scratch. It assumes what came before it and leads directly into the next lesson in the module.","marks":[]}]}]'::jsonb,
        'An embedding maps text to a point in space where nearby means related. It captures topic and usage, not truth, and definitely not recency.

What this lesson covers

Read an embedding as a position in semantic space

Know what embeddings fail to capture

Choose an embedding model for your content

This lesson sits in Embeddings and Vector Search, part of Retrieval-Augmented Generation from Scratch. It assumes what came before it and leads directly into the next lesson in the module.', '["Read an embedding as a position in semantic space","Know what embeddings fail to capture","Choose an embedding model for your content"]'::jsonb, '',
        '[{"_type":"resource","_key":"retrieval-augmented-generation-from-scratch-what-em-6e3ef451","type":"link","title":"Sanity Context and content APIs","description":"The official reference for the tools used in this lesson.","url":"https://www.sanity.io/docs"}]'::jsonb, 1
      ) ON CONFLICT (id) DO UPDATE SET
        module_id = EXCLUDED.module_id,
        course_id = EXCLUDED.course_id,
        title = EXCLUDED.title,
        slug = EXCLUDED.slug,
        youtube_video_id = EXCLUDED.youtube_video_id,
        video_url = EXCLUDED.video_url,
        duration = EXCLUDED.duration,
        free_preview = EXCLUDED.free_preview,
        notes = EXCLUDED.notes,
        notes_plain = EXCLUDED.notes_plain,
        key_points = EXCLUDED.key_points,
        pro_tip = EXCLUDED.pro_tip,
        resources = EXCLUDED.resources,
        position = EXCLUDED.position;

INSERT INTO public.lessons (
        id, module_id, course_id, title, slug, youtube_video_id,
        video_url, duration, free_preview, notes, notes_plain,
        key_points, pro_tip, resources, position
      ) VALUES (
        'lesson.retrieval-augmented-generation-from-scratch-vector-databases', 'retrieval-augmented-generation-from-scratch-module-1', 'course.retrieval-augmented-generation-from-scratch',
        'Vector databases and indexes', 'retrieval-augmented-generation-from-scratch-vector-databases', 'dN0lsF2cvm4',
        'https://www.youtube.com/watch?v=dN0lsF2cvm4', 263, false, '[{"_type":"block","_key":"retrieval-augmented-generation-from-scratch-vector-e452a964","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"retrieval-augmented-generation-from-scratch-vector-3f015cd6","text":"Exact nearest-neighbour search does not scale, so vector indexes trade a little recall for a lot of speed. Knowing the trade-off keeps you out of trouble.","marks":[]}]},{"_type":"block","_key":"retrieval-augmented-generation-from-scratch-vector-f186f902","style":"h2","markDefs":[],"children":[{"_type":"span","_key":"retrieval-augmented-generation-from-scratch-vector-1d6755d8","text":"What this lesson covers","marks":[]}]},{"_type":"block","_key":"retrieval-augmented-generation-from-scratch-vector-918bcb07","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"retrieval-augmented-generation-from-scratch-vector-82e147f2","text":"Understand approximate nearest neighbour search","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"retrieval-augmented-generation-from-scratch-vector-680b9fc8","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"retrieval-augmented-generation-from-scratch-vector-7bab9e4d","text":"Trade recall against latency deliberately","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"retrieval-augmented-generation-from-scratch-vector-39989d70","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"retrieval-augmented-generation-from-scratch-vector-26a416fa","text":"Store metadata alongside vectors for filtering","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"retrieval-augmented-generation-from-scratch-vector-36650b15","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"retrieval-augmented-generation-from-scratch-vector-4eb91e6b","text":"This lesson sits in Embeddings and Vector Search, part of Retrieval-Augmented Generation from Scratch. It assumes what came before it and leads directly into the next lesson in the module.","marks":[]}]}]'::jsonb,
        'Exact nearest-neighbour search does not scale, so vector indexes trade a little recall for a lot of speed. Knowing the trade-off keeps you out of trouble.

What this lesson covers

Understand approximate nearest neighbour search

Trade recall against latency deliberately

Store metadata alongside vectors for filtering

This lesson sits in Embeddings and Vector Search, part of Retrieval-Augmented Generation from Scratch. It assumes what came before it and leads directly into the next lesson in the module.', '["Understand approximate nearest neighbour search","Trade recall against latency deliberately","Store metadata alongside vectors for filtering"]'::jsonb, '',
        '[{"_type":"resource","_key":"retrieval-augmented-generation-from-scratch-vector-3464e98d","type":"link","title":"Sanity Context and content APIs","description":"The official reference for the tools used in this lesson.","url":"https://www.sanity.io/docs"}]'::jsonb, 2
      ) ON CONFLICT (id) DO UPDATE SET
        module_id = EXCLUDED.module_id,
        course_id = EXCLUDED.course_id,
        title = EXCLUDED.title,
        slug = EXCLUDED.slug,
        youtube_video_id = EXCLUDED.youtube_video_id,
        video_url = EXCLUDED.video_url,
        duration = EXCLUDED.duration,
        free_preview = EXCLUDED.free_preview,
        notes = EXCLUDED.notes,
        notes_plain = EXCLUDED.notes_plain,
        key_points = EXCLUDED.key_points,
        pro_tip = EXCLUDED.pro_tip,
        resources = EXCLUDED.resources,
        position = EXCLUDED.position;

INSERT INTO public.lessons (
        id, module_id, course_id, title, slug, youtube_video_id,
        video_url, duration, free_preview, notes, notes_plain,
        key_points, pro_tip, resources, position
      ) VALUES (
        'lesson.retrieval-augmented-generation-from-scratch-similarity-metrics', 'retrieval-augmented-generation-from-scratch-module-1', 'course.retrieval-augmented-generation-from-scratch',
        'Similarity metrics and thresholds', 'retrieval-augmented-generation-from-scratch-similarity-metrics', 'yGsGQBGzy6Y',
        'https://www.youtube.com/watch?v=yGsGQBGzy6Y', 473, false, '[{"_type":"block","_key":"retrieval-augmented-generation-from-scratch-similar-d6683f15","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"retrieval-augmented-generation-from-scratch-similar-1427076c","text":"Cosine similarity is the usual default, but the number it gives you is only meaningful relative to your own corpus. Calibrate the threshold, do not guess it.","marks":[]}]},{"_type":"block","_key":"retrieval-augmented-generation-from-scratch-similar-6d5f5235","style":"h2","markDefs":[],"children":[{"_type":"span","_key":"retrieval-augmented-generation-from-scratch-similar-58f2be80","text":"What this lesson covers","marks":[]}]},{"_type":"block","_key":"retrieval-augmented-generation-from-scratch-similar-9c9fb80d","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"retrieval-augmented-generation-from-scratch-similar-26e716e9","text":"Compare cosine, dot product, and euclidean distance","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"retrieval-augmented-generation-from-scratch-similar-5b9a4f44","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"retrieval-augmented-generation-from-scratch-similar-fc5a11f0","text":"Calibrate a relevance threshold on real queries","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"retrieval-augmented-generation-from-scratch-similar-bdfd088d","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"retrieval-augmented-generation-from-scratch-similar-fcd6ee9f","text":"Detect the case where nothing is actually relevant","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"retrieval-augmented-generation-from-scratch-similar-e13df703","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"retrieval-augmented-generation-from-scratch-similar-4a4ff9c2","text":"This lesson sits in Embeddings and Vector Search, part of Retrieval-Augmented Generation from Scratch. It assumes what came before it and leads directly into the next lesson in the module.","marks":[]}]}]'::jsonb,
        'Cosine similarity is the usual default, but the number it gives you is only meaningful relative to your own corpus. Calibrate the threshold, do not guess it.

What this lesson covers

Compare cosine, dot product, and euclidean distance

Calibrate a relevance threshold on real queries

Detect the case where nothing is actually relevant

This lesson sits in Embeddings and Vector Search, part of Retrieval-Augmented Generation from Scratch. It assumes what came before it and leads directly into the next lesson in the module.', '["Compare cosine, dot product, and euclidean distance","Calibrate a relevance threshold on real queries","Detect the case where nothing is actually relevant"]'::jsonb, 'A similarity score has no absolute meaning. Calibrate the cutoff against queries you know the answers to.',
        '[{"_type":"resource","_key":"retrieval-augmented-generation-from-scratch-similar-d9aaf9c6","type":"link","title":"Sanity Context and content APIs","description":"The official reference for the tools used in this lesson.","url":"https://www.sanity.io/docs"}]'::jsonb, 3
      ) ON CONFLICT (id) DO UPDATE SET
        module_id = EXCLUDED.module_id,
        course_id = EXCLUDED.course_id,
        title = EXCLUDED.title,
        slug = EXCLUDED.slug,
        youtube_video_id = EXCLUDED.youtube_video_id,
        video_url = EXCLUDED.video_url,
        duration = EXCLUDED.duration,
        free_preview = EXCLUDED.free_preview,
        notes = EXCLUDED.notes,
        notes_plain = EXCLUDED.notes_plain,
        key_points = EXCLUDED.key_points,
        pro_tip = EXCLUDED.pro_tip,
        resources = EXCLUDED.resources,
        position = EXCLUDED.position;

INSERT INTO public.lessons (
        id, module_id, course_id, title, slug, youtube_video_id,
        video_url, duration, free_preview, notes, notes_plain,
        key_points, pro_tip, resources, position
      ) VALUES (
        'lesson.retrieval-augmented-generation-from-scratch-chunking-strategies', 'retrieval-augmented-generation-from-scratch-module-2', 'course.retrieval-augmented-generation-from-scratch',
        'Chunking strategies', 'retrieval-augmented-generation-from-scratch-chunking-strategies', 'pIGRwMjhMaQ',
        'https://www.youtube.com/watch?v=pIGRwMjhMaQ', 842, false, '[{"_type":"block","_key":"retrieval-augmented-generation-from-scratch-chunkin-b3aa900d","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"retrieval-augmented-generation-from-scratch-chunkin-79ea4308","text":"Chunk size decides what a match can even mean. Too small and passages lose context; too large and the relevant sentence gets drowned.","marks":[]}]},{"_type":"block","_key":"retrieval-augmented-generation-from-scratch-chunkin-53b89a09","style":"h2","markDefs":[],"children":[{"_type":"span","_key":"retrieval-augmented-generation-from-scratch-chunkin-5560ea03","text":"What this lesson covers","marks":[]}]},{"_type":"block","_key":"retrieval-augmented-generation-from-scratch-chunkin-c63f2061","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"retrieval-augmented-generation-from-scratch-chunkin-e0953a07","text":"Split on structure rather than a fixed character count","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"retrieval-augmented-generation-from-scratch-chunkin-af3a5cb9","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"retrieval-augmented-generation-from-scratch-chunkin-6b0763ed","text":"Use overlap to avoid cutting an idea in half","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"retrieval-augmented-generation-from-scratch-chunkin-ef4297d0","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"retrieval-augmented-generation-from-scratch-chunkin-6fb9fc2a","text":"Keep each chunk understandable on its own","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"retrieval-augmented-generation-from-scratch-chunkin-64d85ee6","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"retrieval-augmented-generation-from-scratch-chunkin-13b0998c","text":"This lesson sits in Ingestion and Indexing, part of Retrieval-Augmented Generation from Scratch. It assumes what came before it and leads directly into the next lesson in the module.","marks":[]}]}]'::jsonb,
        'Chunk size decides what a match can even mean. Too small and passages lose context; too large and the relevant sentence gets drowned.

What this lesson covers

Split on structure rather than a fixed character count

Use overlap to avoid cutting an idea in half

Keep each chunk understandable on its own

This lesson sits in Ingestion and Indexing, part of Retrieval-Augmented Generation from Scratch. It assumes what came before it and leads directly into the next lesson in the module.', '["Split on structure rather than a fixed character count","Use overlap to avoid cutting an idea in half","Keep each chunk understandable on its own"]'::jsonb, '',
        '[{"_type":"resource","_key":"retrieval-augmented-generation-from-scratch-chunkin-97444eb7","type":"link","title":"Sanity Context and content APIs","description":"The official reference for the tools used in this lesson.","url":"https://www.sanity.io/docs"}]'::jsonb, 1
      ) ON CONFLICT (id) DO UPDATE SET
        module_id = EXCLUDED.module_id,
        course_id = EXCLUDED.course_id,
        title = EXCLUDED.title,
        slug = EXCLUDED.slug,
        youtube_video_id = EXCLUDED.youtube_video_id,
        video_url = EXCLUDED.video_url,
        duration = EXCLUDED.duration,
        free_preview = EXCLUDED.free_preview,
        notes = EXCLUDED.notes,
        notes_plain = EXCLUDED.notes_plain,
        key_points = EXCLUDED.key_points,
        pro_tip = EXCLUDED.pro_tip,
        resources = EXCLUDED.resources,
        position = EXCLUDED.position;

INSERT INTO public.lessons (
        id, module_id, course_id, title, slug, youtube_video_id,
        video_url, duration, free_preview, notes, notes_plain,
        key_points, pro_tip, resources, position
      ) VALUES (
        'lesson.retrieval-augmented-generation-from-scratch-metadata-and-filtering', 'retrieval-augmented-generation-from-scratch-module-2', 'course.retrieval-augmented-generation-from-scratch',
        'Metadata and filtered retrieval', 'retrieval-augmented-generation-from-scratch-metadata-and-filtering', 'RPpGIxmdZYs',
        'https://www.youtube.com/watch?v=RPpGIxmdZYs', 744, false, '[{"_type":"block","_key":"retrieval-augmented-generation-from-scratch-metadat-1ef962ed","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"retrieval-augmented-generation-from-scratch-metadat-abd934ae","text":"Metadata turns semantic search into scoped semantic search. Filtering by source, type, or date removes whole classes of wrong answer.","marks":[]}]},{"_type":"block","_key":"retrieval-augmented-generation-from-scratch-metadat-16b63a6b","style":"h2","markDefs":[],"children":[{"_type":"span","_key":"retrieval-augmented-generation-from-scratch-metadat-6c90187c","text":"What this lesson covers","marks":[]}]},{"_type":"block","_key":"retrieval-augmented-generation-from-scratch-metadat-e8296d08","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"retrieval-augmented-generation-from-scratch-metadat-773939ed","text":"Attach source, type, and timestamp to every chunk","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"retrieval-augmented-generation-from-scratch-metadat-4e427f54","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"retrieval-augmented-generation-from-scratch-metadat-0699da11","text":"Filter before ranking to cut the candidate set","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"retrieval-augmented-generation-from-scratch-metadat-af0b60c5","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"retrieval-augmented-generation-from-scratch-metadat-df2491a7","text":"Use metadata to attribute answers back to a source","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"retrieval-augmented-generation-from-scratch-metadat-6778503b","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"retrieval-augmented-generation-from-scratch-metadat-ed5d8253","text":"This lesson sits in Ingestion and Indexing, part of Retrieval-Augmented Generation from Scratch. It assumes what came before it and leads directly into the next lesson in the module.","marks":[]}]}]'::jsonb,
        'Metadata turns semantic search into scoped semantic search. Filtering by source, type, or date removes whole classes of wrong answer.

What this lesson covers

Attach source, type, and timestamp to every chunk

Filter before ranking to cut the candidate set

Use metadata to attribute answers back to a source

This lesson sits in Ingestion and Indexing, part of Retrieval-Augmented Generation from Scratch. It assumes what came before it and leads directly into the next lesson in the module.', '["Attach source, type, and timestamp to every chunk","Filter before ranking to cut the candidate set","Use metadata to attribute answers back to a source"]'::jsonb, '',
        '[{"_type":"resource","_key":"retrieval-augmented-generation-from-scratch-metadat-8e297062","type":"link","title":"Sanity Context and content APIs","description":"The official reference for the tools used in this lesson.","url":"https://www.sanity.io/docs"}]'::jsonb, 2
      ) ON CONFLICT (id) DO UPDATE SET
        module_id = EXCLUDED.module_id,
        course_id = EXCLUDED.course_id,
        title = EXCLUDED.title,
        slug = EXCLUDED.slug,
        youtube_video_id = EXCLUDED.youtube_video_id,
        video_url = EXCLUDED.video_url,
        duration = EXCLUDED.duration,
        free_preview = EXCLUDED.free_preview,
        notes = EXCLUDED.notes,
        notes_plain = EXCLUDED.notes_plain,
        key_points = EXCLUDED.key_points,
        pro_tip = EXCLUDED.pro_tip,
        resources = EXCLUDED.resources,
        position = EXCLUDED.position;

INSERT INTO public.lessons (
        id, module_id, course_id, title, slug, youtube_video_id,
        video_url, duration, free_preview, notes, notes_plain,
        key_points, pro_tip, resources, position
      ) VALUES (
        'lesson.retrieval-augmented-generation-from-scratch-keeping-the-index-fresh', 'retrieval-augmented-generation-from-scratch-module-2', 'course.retrieval-augmented-generation-from-scratch',
        'Keeping the index fresh', 'retrieval-augmented-generation-from-scratch-keeping-the-index-fresh', 'PmA_0DT7zds',
        'https://www.youtube.com/watch?v=PmA_0DT7zds', 358, false, '[{"_type":"block","_key":"retrieval-augmented-generation-from-scratch-keeping-96374ec2","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"retrieval-augmented-generation-from-scratch-keeping-866bf21b","text":"Content changes and stale chunks keep getting retrieved. Incremental reindexing driven by content events beats rebuilding everything nightly.","marks":[]}]},{"_type":"block","_key":"retrieval-augmented-generation-from-scratch-keeping-0be7f626","style":"h2","markDefs":[],"children":[{"_type":"span","_key":"retrieval-augmented-generation-from-scratch-keeping-03549842","text":"What this lesson covers","marks":[]}]},{"_type":"block","_key":"retrieval-augmented-generation-from-scratch-keeping-74d3f603","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"retrieval-augmented-generation-from-scratch-keeping-a3031cc9","text":"Reindex incrementally on content change events","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"retrieval-augmented-generation-from-scratch-keeping-08055552","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"retrieval-augmented-generation-from-scratch-keeping-df6a533a","text":"Delete chunks whose source no longer exists","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"retrieval-augmented-generation-from-scratch-keeping-62ac0433","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"retrieval-augmented-generation-from-scratch-keeping-86a2e14c","text":"Version the index so a bad run can be rolled back","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"retrieval-augmented-generation-from-scratch-keeping-fb54acd9","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"retrieval-augmented-generation-from-scratch-keeping-8a58c50a","text":"This lesson sits in Ingestion and Indexing, part of Retrieval-Augmented Generation from Scratch. It assumes what came before it and leads directly into the next lesson in the module.","marks":[]}]}]'::jsonb,
        'Content changes and stale chunks keep getting retrieved. Incremental reindexing driven by content events beats rebuilding everything nightly.

What this lesson covers

Reindex incrementally on content change events

Delete chunks whose source no longer exists

Version the index so a bad run can be rolled back

This lesson sits in Ingestion and Indexing, part of Retrieval-Augmented Generation from Scratch. It assumes what came before it and leads directly into the next lesson in the module.', '["Reindex incrementally on content change events","Delete chunks whose source no longer exists","Version the index so a bad run can be rolled back"]'::jsonb, '',
        '[{"_type":"resource","_key":"retrieval-augmented-generation-from-scratch-keeping-3ae487d0","type":"link","title":"Sanity Context and content APIs","description":"The official reference for the tools used in this lesson.","url":"https://www.sanity.io/docs"}]'::jsonb, 3
      ) ON CONFLICT (id) DO UPDATE SET
        module_id = EXCLUDED.module_id,
        course_id = EXCLUDED.course_id,
        title = EXCLUDED.title,
        slug = EXCLUDED.slug,
        youtube_video_id = EXCLUDED.youtube_video_id,
        video_url = EXCLUDED.video_url,
        duration = EXCLUDED.duration,
        free_preview = EXCLUDED.free_preview,
        notes = EXCLUDED.notes,
        notes_plain = EXCLUDED.notes_plain,
        key_points = EXCLUDED.key_points,
        pro_tip = EXCLUDED.pro_tip,
        resources = EXCLUDED.resources,
        position = EXCLUDED.position;

INSERT INTO public.lessons (
        id, module_id, course_id, title, slug, youtube_video_id,
        video_url, duration, free_preview, notes, notes_plain,
        key_points, pro_tip, resources, position
      ) VALUES (
        'lesson.retrieval-augmented-generation-from-scratch-hybrid-search', 'retrieval-augmented-generation-from-scratch-module-3', 'course.retrieval-augmented-generation-from-scratch',
        'Hybrid keyword and vector search', 'retrieval-augmented-generation-from-scratch-hybrid-search', 'lYxGYXjfrNI',
        'https://www.youtube.com/watch?v=lYxGYXjfrNI', 407, false, '[{"_type":"block","_key":"retrieval-augmented-generation-from-scratch-hybrid-ef5bfdd5","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"retrieval-augmented-generation-from-scratch-hybrid-f24e61f6","text":"Vector search misses exact identifiers; keyword search misses paraphrase. Running both and fusing the rankings covers each one’s blind spot.","marks":[]}]},{"_type":"block","_key":"retrieval-augmented-generation-from-scratch-hybrid-search-h2","style":"h2","markDefs":[],"children":[{"_type":"span","_key":"retrieval-augmented-generation-from-scratch-hybrid-a465fc8f","text":"What this lesson covers","marks":[]}]},{"_type":"block","_key":"retrieval-augmented-generation-from-scratch-hybrid-aaf8e35e","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"retrieval-augmented-generation-from-scratch-hybrid-463e6ef2","text":"Combine lexical and semantic result sets","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"retrieval-augmented-generation-from-scratch-hybrid-a4d4a8f5","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"retrieval-augmented-generation-from-scratch-hybrid-05f7caeb","text":"Fuse rankings rather than concatenating them","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"retrieval-augmented-generation-from-scratch-hybrid-05498722","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"retrieval-augmented-generation-from-scratch-hybrid-53da9e7b","text":"Fall back to keyword search when embeddings are unavailable","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"retrieval-augmented-generation-from-scratch-hybrid-dc8c2c3f","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"retrieval-augmented-generation-from-scratch-hybrid-9cabd1ee","text":"This lesson sits in Retrieval Quality, part of Retrieval-Augmented Generation from Scratch. It assumes what came before it and leads directly into the next lesson in the module.","marks":[]}]}]'::jsonb,
        'Vector search misses exact identifiers; keyword search misses paraphrase. Running both and fusing the rankings covers each one’s blind spot.

What this lesson covers

Combine lexical and semantic result sets

Fuse rankings rather than concatenating them

Fall back to keyword search when embeddings are unavailable

This lesson sits in Retrieval Quality, part of Retrieval-Augmented Generation from Scratch. It assumes what came before it and leads directly into the next lesson in the module.', '["Combine lexical and semantic result sets","Fuse rankings rather than concatenating them","Fall back to keyword search when embeddings are unavailable"]'::jsonb, 'If embeddings are switched off in your environment, wildcarded keyword matching is the fallback that still works.',
        '[{"_type":"resource","_key":"retrieval-augmented-generation-from-scratch-hybrid-8e51eb07","type":"link","title":"Sanity Context and content APIs","description":"The official reference for the tools used in this lesson.","url":"https://www.sanity.io/docs"}]'::jsonb, 1
      ) ON CONFLICT (id) DO UPDATE SET
        module_id = EXCLUDED.module_id,
        course_id = EXCLUDED.course_id,
        title = EXCLUDED.title,
        slug = EXCLUDED.slug,
        youtube_video_id = EXCLUDED.youtube_video_id,
        video_url = EXCLUDED.video_url,
        duration = EXCLUDED.duration,
        free_preview = EXCLUDED.free_preview,
        notes = EXCLUDED.notes,
        notes_plain = EXCLUDED.notes_plain,
        key_points = EXCLUDED.key_points,
        pro_tip = EXCLUDED.pro_tip,
        resources = EXCLUDED.resources,
        position = EXCLUDED.position;

INSERT INTO public.lessons (
        id, module_id, course_id, title, slug, youtube_video_id,
        video_url, duration, free_preview, notes, notes_plain,
        key_points, pro_tip, resources, position
      ) VALUES (
        'lesson.retrieval-augmented-generation-from-scratch-reranking', 'retrieval-augmented-generation-from-scratch-module-3', 'course.retrieval-augmented-generation-from-scratch',
        'Reranking retrieved candidates', 'retrieval-augmented-generation-from-scratch-reranking', 'aVgZE746OXw',
        'https://www.youtube.com/watch?v=aVgZE746OXw', 315, false, '[{"_type":"block","_key":"retrieval-augmented-generation-from-scratch-reranking-intro","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"retrieval-augmented-generation-from-scratch-reranki-d229d5f6","text":"Retrieve broadly, then rerank precisely. A reranker reads query and passage together, which is why it beats vector distance on ordering.","marks":[]}]},{"_type":"block","_key":"retrieval-augmented-generation-from-scratch-reranking-h2","style":"h2","markDefs":[],"children":[{"_type":"span","_key":"retrieval-augmented-generation-from-scratch-reranki-39df8ff2","text":"What this lesson covers","marks":[]}]},{"_type":"block","_key":"retrieval-augmented-generation-from-scratch-reranki-e3c8a43c","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"retrieval-augmented-generation-from-scratch-reranki-907a76fc","text":"Retrieve a wide candidate set, then narrow it","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"retrieval-augmented-generation-from-scratch-reranki-e5b576a3","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"retrieval-augmented-generation-from-scratch-reranki-bed65959","text":"Score query and passage jointly with a reranker","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"retrieval-augmented-generation-from-scratch-reranki-dc63f216","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"retrieval-augmented-generation-from-scratch-reranki-59a98347","text":"Balance the latency cost against the accuracy gain","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"retrieval-augmented-generation-from-scratch-reranking-outro","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"retrieval-augmented-generation-from-scratch-reranki-bda146b5","text":"This lesson sits in Retrieval Quality, part of Retrieval-Augmented Generation from Scratch. It assumes what came before it and leads directly into the next lesson in the module.","marks":[]}]}]'::jsonb,
        'Retrieve broadly, then rerank precisely. A reranker reads query and passage together, which is why it beats vector distance on ordering.

What this lesson covers

Retrieve a wide candidate set, then narrow it

Score query and passage jointly with a reranker

Balance the latency cost against the accuracy gain

This lesson sits in Retrieval Quality, part of Retrieval-Augmented Generation from Scratch. It assumes what came before it and leads directly into the next lesson in the module.', '["Retrieve a wide candidate set, then narrow it","Score query and passage jointly with a reranker","Balance the latency cost against the accuracy gain"]'::jsonb, '',
        '[{"_type":"resource","_key":"retrieval-augmented-generation-from-scratch-reranking-docs","type":"link","title":"Sanity Context and content APIs","description":"The official reference for the tools used in this lesson.","url":"https://www.sanity.io/docs"}]'::jsonb, 2
      ) ON CONFLICT (id) DO UPDATE SET
        module_id = EXCLUDED.module_id,
        course_id = EXCLUDED.course_id,
        title = EXCLUDED.title,
        slug = EXCLUDED.slug,
        youtube_video_id = EXCLUDED.youtube_video_id,
        video_url = EXCLUDED.video_url,
        duration = EXCLUDED.duration,
        free_preview = EXCLUDED.free_preview,
        notes = EXCLUDED.notes,
        notes_plain = EXCLUDED.notes_plain,
        key_points = EXCLUDED.key_points,
        pro_tip = EXCLUDED.pro_tip,
        resources = EXCLUDED.resources,
        position = EXCLUDED.position;

INSERT INTO public.lessons (
        id, module_id, course_id, title, slug, youtube_video_id,
        video_url, duration, free_preview, notes, notes_plain,
        key_points, pro_tip, resources, position
      ) VALUES (
        'lesson.retrieval-augmented-generation-from-scratch-evaluating-retrieval', 'retrieval-augmented-generation-from-scratch-module-3', 'course.retrieval-augmented-generation-from-scratch',
        'Evaluating retrieval', 'retrieval-augmented-generation-from-scratch-evaluating-retrieval', '7_LTU0LA374',
        'https://www.youtube.com/watch?v=7_LTU0LA374', 739, false, '[{"_type":"block","_key":"retrieval-augmented-generation-from-scratch-evaluat-3d396574","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"retrieval-augmented-generation-from-scratch-evaluat-94a9215f","text":"Before blaming the model for a bad answer, check whether the right passage was ever retrieved. Recall at k tells you which half of the system to fix.","marks":[]}]},{"_type":"block","_key":"retrieval-augmented-generation-from-scratch-evaluat-fc0deb14","style":"h2","markDefs":[],"children":[{"_type":"span","_key":"retrieval-augmented-generation-from-scratch-evaluat-4b11a0be","text":"What this lesson covers","marks":[]}]},{"_type":"block","_key":"retrieval-augmented-generation-from-scratch-evaluat-882b5e0e","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"retrieval-augmented-generation-from-scratch-evaluat-1400df3a","text":"Build a query set with known correct passages","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"retrieval-augmented-generation-from-scratch-evaluat-1286ad35","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"retrieval-augmented-generation-from-scratch-evaluat-501a34cd","text":"Measure recall and precision at k","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"retrieval-augmented-generation-from-scratch-evaluat-91a57cde","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"retrieval-augmented-generation-from-scratch-evaluat-88fcb9ec","text":"Separate retrieval failures from generation failures","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"retrieval-augmented-generation-from-scratch-evaluat-0dd5624f","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"retrieval-augmented-generation-from-scratch-evaluat-842f9db3","text":"This lesson sits in Retrieval Quality, part of Retrieval-Augmented Generation from Scratch. It assumes what came before it and leads directly into the next lesson in the module.","marks":[]}]}]'::jsonb,
        'Before blaming the model for a bad answer, check whether the right passage was ever retrieved. Recall at k tells you which half of the system to fix.

What this lesson covers

Build a query set with known correct passages

Measure recall and precision at k

Separate retrieval failures from generation failures

This lesson sits in Retrieval Quality, part of Retrieval-Augmented Generation from Scratch. It assumes what came before it and leads directly into the next lesson in the module.', '["Build a query set with known correct passages","Measure recall and precision at k","Separate retrieval failures from generation failures"]'::jsonb, '',
        '[{"_type":"resource","_key":"retrieval-augmented-generation-from-scratch-evaluat-a1e05865","type":"link","title":"Sanity Context and content APIs","description":"The official reference for the tools used in this lesson.","url":"https://www.sanity.io/docs"}]'::jsonb, 3
      ) ON CONFLICT (id) DO UPDATE SET
        module_id = EXCLUDED.module_id,
        course_id = EXCLUDED.course_id,
        title = EXCLUDED.title,
        slug = EXCLUDED.slug,
        youtube_video_id = EXCLUDED.youtube_video_id,
        video_url = EXCLUDED.video_url,
        duration = EXCLUDED.duration,
        free_preview = EXCLUDED.free_preview,
        notes = EXCLUDED.notes,
        notes_plain = EXCLUDED.notes_plain,
        key_points = EXCLUDED.key_points,
        pro_tip = EXCLUDED.pro_tip,
        resources = EXCLUDED.resources,
        position = EXCLUDED.position;

INSERT INTO public.lessons (
        id, module_id, course_id, title, slug, youtube_video_id,
        video_url, duration, free_preview, notes, notes_plain,
        key_points, pro_tip, resources, position
      ) VALUES (
        'lesson.retrieval-augmented-generation-from-scratch-grounding-and-citations', 'retrieval-augmented-generation-from-scratch-module-4', 'course.retrieval-augmented-generation-from-scratch',
        'Grounding answers with citations', 'retrieval-augmented-generation-from-scratch-grounding-and-citations', 'YZmCy-cGmbs',
        'https://www.youtube.com/watch?v=YZmCy-cGmbs', 436, false, '[{"_type":"block","_key":"retrieval-augmented-generation-from-scratch-groundi-0646cd88","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"retrieval-augmented-generation-from-scratch-groundi-8e4bb190","text":"An answer the user can verify is worth far more than a confident one. Carry identifiers through retrieval so every claim can point back to a source.","marks":[]}]},{"_type":"block","_key":"retrieval-augmented-generation-from-scratch-groundi-f00daea0","style":"h2","markDefs":[],"children":[{"_type":"span","_key":"retrieval-augmented-generation-from-scratch-groundi-0c523261","text":"What this lesson covers","marks":[]}]},{"_type":"block","_key":"retrieval-augmented-generation-from-scratch-groundi-9a4c4d67","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"retrieval-augmented-generation-from-scratch-groundi-4811845c","text":"Instruct the model to answer only from context","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"retrieval-augmented-generation-from-scratch-groundi-8595e8a5","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"retrieval-augmented-generation-from-scratch-groundi-0f8e7d89","text":"Thread source ids through to the rendered answer","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"retrieval-augmented-generation-from-scratch-groundi-cc90e984","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"retrieval-augmented-generation-from-scratch-groundi-5baa3f42","text":"Make citations clickable back to the original","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"retrieval-augmented-generation-from-scratch-groundi-b96b5145","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"retrieval-augmented-generation-from-scratch-groundi-1d43ebfd","text":"This lesson sits in Grounded Generation, part of Retrieval-Augmented Generation from Scratch. It assumes what came before it and leads directly into the next lesson in the module.","marks":[]}]}]'::jsonb,
        'An answer the user can verify is worth far more than a confident one. Carry identifiers through retrieval so every claim can point back to a source.

What this lesson covers

Instruct the model to answer only from context

Thread source ids through to the rendered answer

Make citations clickable back to the original

This lesson sits in Grounded Generation, part of Retrieval-Augmented Generation from Scratch. It assumes what came before it and leads directly into the next lesson in the module.', '["Instruct the model to answer only from context","Thread source ids through to the rendered answer","Make citations clickable back to the original"]'::jsonb, '',
        '[{"_type":"resource","_key":"retrieval-augmented-generation-from-scratch-groundi-fec5950a","type":"link","title":"Sanity Context and content APIs","description":"The official reference for the tools used in this lesson.","url":"https://www.sanity.io/docs"}]'::jsonb, 1
      ) ON CONFLICT (id) DO UPDATE SET
        module_id = EXCLUDED.module_id,
        course_id = EXCLUDED.course_id,
        title = EXCLUDED.title,
        slug = EXCLUDED.slug,
        youtube_video_id = EXCLUDED.youtube_video_id,
        video_url = EXCLUDED.video_url,
        duration = EXCLUDED.duration,
        free_preview = EXCLUDED.free_preview,
        notes = EXCLUDED.notes,
        notes_plain = EXCLUDED.notes_plain,
        key_points = EXCLUDED.key_points,
        pro_tip = EXCLUDED.pro_tip,
        resources = EXCLUDED.resources,
        position = EXCLUDED.position;

INSERT INTO public.lessons (
        id, module_id, course_id, title, slug, youtube_video_id,
        video_url, duration, free_preview, notes, notes_plain,
        key_points, pro_tip, resources, position
      ) VALUES (
        'lesson.retrieval-augmented-generation-from-scratch-handling-no-answer', 'retrieval-augmented-generation-from-scratch-module-4', 'course.retrieval-augmented-generation-from-scratch',
        'Handling the no-answer case', 'retrieval-augmented-generation-from-scratch-handling-no-answer', 'DAmklaX4UKE',
        'https://www.youtube.com/watch?v=DAmklaX4UKE', 1293, false, '[{"_type":"block","_key":"retrieval-augmented-generation-from-scratch-handlin-962174d7","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"retrieval-augmented-generation-from-scratch-handlin-abfe33d2","text":"The hardest behaviour to get is a clean \"I don’t know\". Make it an explicit, allowed output instead of the model’s last resort.","marks":[]}]},{"_type":"block","_key":"retrieval-augmented-generation-from-scratch-handlin-99cc6fba","style":"h2","markDefs":[],"children":[{"_type":"span","_key":"retrieval-augmented-generation-from-scratch-handlin-04b881a6","text":"What this lesson covers","marks":[]}]},{"_type":"block","_key":"retrieval-augmented-generation-from-scratch-handlin-4f7ede6b","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"retrieval-augmented-generation-from-scratch-handlin-0ca180d9","text":"Detect when retrieval returned nothing relevant","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"retrieval-augmented-generation-from-scratch-handlin-fde80c52","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"retrieval-augmented-generation-from-scratch-handlin-30d0e3e9","text":"Make abstaining an explicit, acceptable outcome","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"retrieval-augmented-generation-from-scratch-handlin-b8f465b8","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"retrieval-augmented-generation-from-scratch-handlin-5e159fb3","text":"Offer a next step instead of a dead end","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"retrieval-augmented-generation-from-scratch-handlin-89315f4b","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"retrieval-augmented-generation-from-scratch-handlin-a42d36c2","text":"This lesson sits in Grounded Generation, part of Retrieval-Augmented Generation from Scratch. It assumes what came before it and leads directly into the next lesson in the module.","marks":[]}]}]'::jsonb,
        'The hardest behaviour to get is a clean "I don’t know". Make it an explicit, allowed output instead of the model’s last resort.

What this lesson covers

Detect when retrieval returned nothing relevant

Make abstaining an explicit, acceptable outcome

Offer a next step instead of a dead end

This lesson sits in Grounded Generation, part of Retrieval-Augmented Generation from Scratch. It assumes what came before it and leads directly into the next lesson in the module.', '["Detect when retrieval returned nothing relevant","Make abstaining an explicit, acceptable outcome","Offer a next step instead of a dead end"]'::jsonb, 'An empty state that points somewhere useful beats a fabricated answer every single time.',
        '[{"_type":"resource","_key":"retrieval-augmented-generation-from-scratch-handlin-6f248f49","type":"link","title":"Sanity Context and content APIs","description":"The official reference for the tools used in this lesson.","url":"https://www.sanity.io/docs"}]'::jsonb, 2
      ) ON CONFLICT (id) DO UPDATE SET
        module_id = EXCLUDED.module_id,
        course_id = EXCLUDED.course_id,
        title = EXCLUDED.title,
        slug = EXCLUDED.slug,
        youtube_video_id = EXCLUDED.youtube_video_id,
        video_url = EXCLUDED.video_url,
        duration = EXCLUDED.duration,
        free_preview = EXCLUDED.free_preview,
        notes = EXCLUDED.notes,
        notes_plain = EXCLUDED.notes_plain,
        key_points = EXCLUDED.key_points,
        pro_tip = EXCLUDED.pro_tip,
        resources = EXCLUDED.resources,
        position = EXCLUDED.position;

INSERT INTO public.lessons (
        id, module_id, course_id, title, slug, youtube_video_id,
        video_url, duration, free_preview, notes, notes_plain,
        key_points, pro_tip, resources, position
      ) VALUES (
        'lesson.retrieval-augmented-generation-from-scratch-end-to-end-rag-evaluation', 'retrieval-augmented-generation-from-scratch-module-4', 'course.retrieval-augmented-generation-from-scratch',
        'End-to-end RAG evaluation', 'retrieval-augmented-generation-from-scratch-end-to-end-rag-evaluation', 'cRz0BWkuwHg',
        'https://www.youtube.com/watch?v=cRz0BWkuwHg', 643, false, '[{"_type":"block","_key":"retrieval-augmented-generation-from-scratch-end-to-a82716fd","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"retrieval-augmented-generation-from-scratch-end-to-8bf856ea","text":"Evaluate the pipeline the user experiences: was the answer faithful to the retrieved context, and did it address the question.","marks":[]}]},{"_type":"block","_key":"retrieval-augmented-generation-from-scratch-end-to-ab5eec1e","style":"h2","markDefs":[],"children":[{"_type":"span","_key":"retrieval-augmented-generation-from-scratch-end-to-bbefa2a4","text":"What this lesson covers","marks":[]}]},{"_type":"block","_key":"retrieval-augmented-generation-from-scratch-end-to-51272932","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"retrieval-augmented-generation-from-scratch-end-to-7737422f","text":"Score faithfulness to the retrieved context","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"retrieval-augmented-generation-from-scratch-end-to-7ab5fd2a","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"retrieval-augmented-generation-from-scratch-end-to-48b394f6","text":"Score relevance to the original question","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"retrieval-augmented-generation-from-scratch-end-to-83c86109","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"retrieval-augmented-generation-from-scratch-end-to-36ebabd9","text":"Track both across releases to catch regressions","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"retrieval-augmented-generation-from-scratch-end-to-470ee57e","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"retrieval-augmented-generation-from-scratch-end-to-c2b737ac","text":"This lesson sits in Grounded Generation, part of Retrieval-Augmented Generation from Scratch. It assumes what came before it and leads directly into the next lesson in the module.","marks":[]}]}]'::jsonb,
        'Evaluate the pipeline the user experiences: was the answer faithful to the retrieved context, and did it address the question.

What this lesson covers

Score faithfulness to the retrieved context

Score relevance to the original question

Track both across releases to catch regressions

This lesson sits in Grounded Generation, part of Retrieval-Augmented Generation from Scratch. It assumes what came before it and leads directly into the next lesson in the module.', '["Score faithfulness to the retrieved context","Score relevance to the original question","Track both across releases to catch regressions"]'::jsonb, '',
        '[{"_type":"resource","_key":"retrieval-augmented-generation-from-scratch-end-to-e77d7980","type":"link","title":"Sanity Context and content APIs","description":"The official reference for the tools used in this lesson.","url":"https://www.sanity.io/docs"}]'::jsonb, 3
      ) ON CONFLICT (id) DO UPDATE SET
        module_id = EXCLUDED.module_id,
        course_id = EXCLUDED.course_id,
        title = EXCLUDED.title,
        slug = EXCLUDED.slug,
        youtube_video_id = EXCLUDED.youtube_video_id,
        video_url = EXCLUDED.video_url,
        duration = EXCLUDED.duration,
        free_preview = EXCLUDED.free_preview,
        notes = EXCLUDED.notes,
        notes_plain = EXCLUDED.notes_plain,
        key_points = EXCLUDED.key_points,
        pro_tip = EXCLUDED.pro_tip,
        resources = EXCLUDED.resources,
        position = EXCLUDED.position;

INSERT INTO public.lessons (
        id, module_id, course_id, title, slug, youtube_video_id,
        video_url, duration, free_preview, notes, notes_plain,
        key_points, pro_tip, resources, position
      ) VALUES (
        'lesson.python-for-data-work-python-data-types', 'python-for-data-work-module-1', 'course.python-for-data-work',
        'Lists, dicts, and the types you will use', 'python-for-data-work-python-data-types', 'MZZSMaEAC2g',
        'https://www.youtube.com/watch?v=MZZSMaEAC2g', 486, true, '[{"_type":"block","_key":"python-for-data-work-python-data-types-intro","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"python-for-data-work-python-data-types-intro-span","text":"Lists, dictionaries, sets, and tuples cover almost everything before a dataframe shows up. Picking the right one is a performance decision as much as a style one.","marks":[]}]},{"_type":"block","_key":"python-for-data-work-python-data-types-h2","style":"h2","markDefs":[],"children":[{"_type":"span","_key":"python-for-data-work-python-data-types-h2-span","text":"What this lesson covers","marks":[]}]},{"_type":"block","_key":"python-for-data-work-python-data-types-point-0","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"python-for-data-work-python-data-types-point-0-span","text":"Choose between list, dict, set, and tuple","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"python-for-data-work-python-data-types-point-1","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"python-for-data-work-python-data-types-point-1-span","text":"Index, slice, and iterate without off-by-one errors","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"python-for-data-work-python-data-types-point-2","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"python-for-data-work-python-data-types-point-2-span","text":"Understand mutability and why it bites","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"python-for-data-work-python-data-types-outro","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"python-for-data-work-python-data-types-outro-span","text":"This lesson sits in Python Foundations for Data, part of Python for Data Work. It assumes what came before it and leads directly into the next lesson in the module.","marks":[]}]}]'::jsonb,
        'Lists, dictionaries, sets, and tuples cover almost everything before a dataframe shows up. Picking the right one is a performance decision as much as a style one.

What this lesson covers

Choose between list, dict, set, and tuple

Index, slice, and iterate without off-by-one errors

Understand mutability and why it bites

This lesson sits in Python Foundations for Data, part of Python for Data Work. It assumes what came before it and leads directly into the next lesson in the module.', '["Choose between list, dict, set, and tuple","Index, slice, and iterate without off-by-one errors","Understand mutability and why it bites"]'::jsonb, '',
        '[{"_type":"resource","_key":"python-for-data-work-python-data-types-docs","type":"link","title":"pandas documentation","description":"The official reference for the tools used in this lesson.","url":"https://pandas.pydata.org/docs/"}]'::jsonb, 1
      ) ON CONFLICT (id) DO UPDATE SET
        module_id = EXCLUDED.module_id,
        course_id = EXCLUDED.course_id,
        title = EXCLUDED.title,
        slug = EXCLUDED.slug,
        youtube_video_id = EXCLUDED.youtube_video_id,
        video_url = EXCLUDED.video_url,
        duration = EXCLUDED.duration,
        free_preview = EXCLUDED.free_preview,
        notes = EXCLUDED.notes,
        notes_plain = EXCLUDED.notes_plain,
        key_points = EXCLUDED.key_points,
        pro_tip = EXCLUDED.pro_tip,
        resources = EXCLUDED.resources,
        position = EXCLUDED.position;

INSERT INTO public.lessons (
        id, module_id, course_id, title, slug, youtube_video_id,
        video_url, duration, free_preview, notes, notes_plain,
        key_points, pro_tip, resources, position
      ) VALUES (
        'lesson.python-for-data-work-comprehensions', 'python-for-data-work-module-1', 'course.python-for-data-work',
        'Comprehensions and iteration', 'python-for-data-work-comprehensions', 'YlY2g2xrl6Q',
        'https://www.youtube.com/watch?v=YlY2g2xrl6Q', 620, false, '[{"_type":"block","_key":"python-for-data-work-comprehensions-intro","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"python-for-data-work-comprehensions-intro-span","text":"A comprehension is a filter and a transform in one line. Readable when the logic is small, unreadable the moment you nest three of them.","marks":[]}]},{"_type":"block","_key":"python-for-data-work-comprehensions-h2","style":"h2","markDefs":[],"children":[{"_type":"span","_key":"python-for-data-work-comprehensions-h2-span","text":"What this lesson covers","marks":[]}]},{"_type":"block","_key":"python-for-data-work-comprehensions-point-0","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"python-for-data-work-comprehensions-point-0-span","text":"Transform and filter a sequence in one expression","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"python-for-data-work-comprehensions-point-1","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"python-for-data-work-comprehensions-point-1-span","text":"Build dict and set comprehensions","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"python-for-data-work-comprehensions-point-2","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"python-for-data-work-comprehensions-point-2-span","text":"Know when a plain loop is clearer","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"python-for-data-work-comprehensions-outro","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"python-for-data-work-comprehensions-outro-span","text":"This lesson sits in Python Foundations for Data, part of Python for Data Work. It assumes what came before it and leads directly into the next lesson in the module.","marks":[]}]}]'::jsonb,
        'A comprehension is a filter and a transform in one line. Readable when the logic is small, unreadable the moment you nest three of them.

What this lesson covers

Transform and filter a sequence in one expression

Build dict and set comprehensions

Know when a plain loop is clearer

This lesson sits in Python Foundations for Data, part of Python for Data Work. It assumes what came before it and leads directly into the next lesson in the module.', '["Transform and filter a sequence in one expression","Build dict and set comprehensions","Know when a plain loop is clearer"]'::jsonb, '',
        '[{"_type":"resource","_key":"python-for-data-work-comprehensions-docs","type":"link","title":"pandas documentation","description":"The official reference for the tools used in this lesson.","url":"https://pandas.pydata.org/docs/"}]'::jsonb, 2
      ) ON CONFLICT (id) DO UPDATE SET
        module_id = EXCLUDED.module_id,
        course_id = EXCLUDED.course_id,
        title = EXCLUDED.title,
        slug = EXCLUDED.slug,
        youtube_video_id = EXCLUDED.youtube_video_id,
        video_url = EXCLUDED.video_url,
        duration = EXCLUDED.duration,
        free_preview = EXCLUDED.free_preview,
        notes = EXCLUDED.notes,
        notes_plain = EXCLUDED.notes_plain,
        key_points = EXCLUDED.key_points,
        pro_tip = EXCLUDED.pro_tip,
        resources = EXCLUDED.resources,
        position = EXCLUDED.position;

INSERT INTO public.lessons (
        id, module_id, course_id, title, slug, youtube_video_id,
        video_url, duration, free_preview, notes, notes_plain,
        key_points, pro_tip, resources, position
      ) VALUES (
        'lesson.python-for-data-work-files-and-csv', 'python-for-data-work-module-1', 'course.python-for-data-work',
        'Reading files and CSVs', 'python-for-data-work-files-and-csv', 'H-hagjt65cE',
        'https://www.youtube.com/watch?v=H-hagjt65cE', 395, false, '[{"_type":"block","_key":"python-for-data-work-files-and-csv-intro","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"python-for-data-work-files-and-csv-intro-span","text":"Real data arrives as a slightly wrong file. Encodings, delimiters, and missing values are the first three problems you will meet.","marks":[]}]},{"_type":"block","_key":"python-for-data-work-files-and-csv-h2","style":"h2","markDefs":[],"children":[{"_type":"span","_key":"python-for-data-work-files-and-csv-h2-span","text":"What this lesson covers","marks":[]}]},{"_type":"block","_key":"python-for-data-work-files-and-csv-point-0","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"python-for-data-work-files-and-csv-point-0-span","text":"Read and write files safely with context managers","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"python-for-data-work-files-and-csv-point-1","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"python-for-data-work-files-and-csv-point-1-span","text":"Parse CSV data and handle encoding issues","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"python-for-data-work-files-and-csv-point-2","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"python-for-data-work-files-and-csv-point-2-span","text":"Deal with missing and malformed rows on load","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"python-for-data-work-files-and-csv-outro","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"python-for-data-work-files-and-csv-outro-span","text":"This lesson sits in Python Foundations for Data, part of Python for Data Work. It assumes what came before it and leads directly into the next lesson in the module.","marks":[]}]}]'::jsonb,
        'Real data arrives as a slightly wrong file. Encodings, delimiters, and missing values are the first three problems you will meet.

What this lesson covers

Read and write files safely with context managers

Parse CSV data and handle encoding issues

Deal with missing and malformed rows on load

This lesson sits in Python Foundations for Data, part of Python for Data Work. It assumes what came before it and leads directly into the next lesson in the module.', '["Read and write files safely with context managers","Parse CSV data and handle encoding issues","Deal with missing and malformed rows on load"]'::jsonb, 'Open a file with a context manager. It closes even when the code inside raises.',
        '[{"_type":"resource","_key":"python-for-data-work-files-and-csv-docs","type":"link","title":"pandas documentation","description":"The official reference for the tools used in this lesson.","url":"https://pandas.pydata.org/docs/"}]'::jsonb, 3
      ) ON CONFLICT (id) DO UPDATE SET
        module_id = EXCLUDED.module_id,
        course_id = EXCLUDED.course_id,
        title = EXCLUDED.title,
        slug = EXCLUDED.slug,
        youtube_video_id = EXCLUDED.youtube_video_id,
        video_url = EXCLUDED.video_url,
        duration = EXCLUDED.duration,
        free_preview = EXCLUDED.free_preview,
        notes = EXCLUDED.notes,
        notes_plain = EXCLUDED.notes_plain,
        key_points = EXCLUDED.key_points,
        pro_tip = EXCLUDED.pro_tip,
        resources = EXCLUDED.resources,
        position = EXCLUDED.position;

INSERT INTO public.lessons (
        id, module_id, course_id, title, slug, youtube_video_id,
        video_url, duration, free_preview, notes, notes_plain,
        key_points, pro_tip, resources, position
      ) VALUES (
        'lesson.python-for-data-work-dataframes-basics', 'python-for-data-work-module-2', 'course.python-for-data-work',
        'Series, dataframes, and indexing', 'python-for-data-work-dataframes-basics', 'EXIgjIBu4EU',
        'https://www.youtube.com/watch?v=EXIgjIBu4EU', 1837, false, '[{"_type":"block","_key":"python-for-data-work-dataframes-basics-intro","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"python-for-data-work-dataframes-basics-intro-span","text":"A dataframe is columns of typed series sharing an index. Once the index clicks, selection with loc and iloc stops being guesswork.","marks":[]}]},{"_type":"block","_key":"python-for-data-work-dataframes-basics-h2","style":"h2","markDefs":[],"children":[{"_type":"span","_key":"python-for-data-work-dataframes-basics-h2-span","text":"What this lesson covers","marks":[]}]},{"_type":"block","_key":"python-for-data-work-dataframes-basics-point-0","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"python-for-data-work-dataframes-basics-point-0-span","text":"Create dataframes and inspect their dtypes","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"python-for-data-work-dataframes-basics-point-1","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"python-for-data-work-dataframes-basics-point-1-span","text":"Select rows and columns with loc and iloc","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"python-for-data-work-dataframes-basics-point-2","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"python-for-data-work-dataframes-basics-point-2-span","text":"Understand why the index matters","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"python-for-data-work-dataframes-basics-outro","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"python-for-data-work-dataframes-basics-outro-span","text":"This lesson sits in pandas Essentials, part of Python for Data Work. It assumes what came before it and leads directly into the next lesson in the module.","marks":[]}]}]'::jsonb,
        'A dataframe is columns of typed series sharing an index. Once the index clicks, selection with loc and iloc stops being guesswork.

What this lesson covers

Create dataframes and inspect their dtypes

Select rows and columns with loc and iloc

Understand why the index matters

This lesson sits in pandas Essentials, part of Python for Data Work. It assumes what came before it and leads directly into the next lesson in the module.', '["Create dataframes and inspect their dtypes","Select rows and columns with loc and iloc","Understand why the index matters"]'::jsonb, '',
        '[{"_type":"resource","_key":"python-for-data-work-dataframes-basics-docs","type":"link","title":"pandas documentation","description":"The official reference for the tools used in this lesson.","url":"https://pandas.pydata.org/docs/"}]'::jsonb, 1
      ) ON CONFLICT (id) DO UPDATE SET
        module_id = EXCLUDED.module_id,
        course_id = EXCLUDED.course_id,
        title = EXCLUDED.title,
        slug = EXCLUDED.slug,
        youtube_video_id = EXCLUDED.youtube_video_id,
        video_url = EXCLUDED.video_url,
        duration = EXCLUDED.duration,
        free_preview = EXCLUDED.free_preview,
        notes = EXCLUDED.notes,
        notes_plain = EXCLUDED.notes_plain,
        key_points = EXCLUDED.key_points,
        pro_tip = EXCLUDED.pro_tip,
        resources = EXCLUDED.resources,
        position = EXCLUDED.position;

INSERT INTO public.lessons (
        id, module_id, course_id, title, slug, youtube_video_id,
        video_url, duration, free_preview, notes, notes_plain,
        key_points, pro_tip, resources, position
      ) VALUES (
        'lesson.python-for-data-work-cleaning-data', 'python-for-data-work-module-2', 'course.python-for-data-work',
        'Cleaning messy data', 'python-for-data-work-cleaning-data', 'KdmPHEnPJPs',
        'https://www.youtube.com/watch?v=KdmPHEnPJPs', 1914, false, '[{"_type":"block","_key":"python-for-data-work-cleaning-data-intro","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"python-for-data-work-cleaning-data-intro-span","text":"Cleaning is most of the job: missing values, duplicate rows, inconsistent categories, and columns that arrived as strings.","marks":[]}]},{"_type":"block","_key":"python-for-data-work-cleaning-data-h2","style":"h2","markDefs":[],"children":[{"_type":"span","_key":"python-for-data-work-cleaning-data-h2-span","text":"What this lesson covers","marks":[]}]},{"_type":"block","_key":"python-for-data-work-cleaning-data-point-0","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"python-for-data-work-cleaning-data-point-0-span","text":"Handle missing values without silently distorting results","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"python-for-data-work-cleaning-data-point-1","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"python-for-data-work-cleaning-data-point-1-span","text":"Remove duplicates and normalise categories","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"python-for-data-work-cleaning-data-point-2","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"python-for-data-work-cleaning-data-point-2-span","text":"Convert columns to the correct dtype","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"python-for-data-work-cleaning-data-outro","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"python-for-data-work-cleaning-data-outro-span","text":"This lesson sits in pandas Essentials, part of Python for Data Work. It assumes what came before it and leads directly into the next lesson in the module.","marks":[]}]}]'::jsonb,
        'Cleaning is most of the job: missing values, duplicate rows, inconsistent categories, and columns that arrived as strings.

What this lesson covers

Handle missing values without silently distorting results

Remove duplicates and normalise categories

Convert columns to the correct dtype

This lesson sits in pandas Essentials, part of Python for Data Work. It assumes what came before it and leads directly into the next lesson in the module.', '["Handle missing values without silently distorting results","Remove duplicates and normalise categories","Convert columns to the correct dtype"]'::jsonb, '',
        '[{"_type":"resource","_key":"python-for-data-work-cleaning-data-docs","type":"link","title":"pandas documentation","description":"The official reference for the tools used in this lesson.","url":"https://pandas.pydata.org/docs/"}]'::jsonb, 2
      ) ON CONFLICT (id) DO UPDATE SET
        module_id = EXCLUDED.module_id,
        course_id = EXCLUDED.course_id,
        title = EXCLUDED.title,
        slug = EXCLUDED.slug,
        youtube_video_id = EXCLUDED.youtube_video_id,
        video_url = EXCLUDED.video_url,
        duration = EXCLUDED.duration,
        free_preview = EXCLUDED.free_preview,
        notes = EXCLUDED.notes,
        notes_plain = EXCLUDED.notes_plain,
        key_points = EXCLUDED.key_points,
        pro_tip = EXCLUDED.pro_tip,
        resources = EXCLUDED.resources,
        position = EXCLUDED.position;

INSERT INTO public.lessons (
        id, module_id, course_id, title, slug, youtube_video_id,
        video_url, duration, free_preview, notes, notes_plain,
        key_points, pro_tip, resources, position
      ) VALUES (
        'lesson.python-for-data-work-groupby-and-aggregation', 'python-for-data-work-module-2', 'course.python-for-data-work',
        'groupby and aggregation', 'python-for-data-work-groupby-and-aggregation', 'VRmXto2YA2I',
        'https://www.youtube.com/watch?v=VRmXto2YA2I', 665, false, '[{"_type":"block","_key":"python-for-data-work-groupby-and-aggregation-intro","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"python-for-data-work-groupby-and-aggregation-intro-span","text":"Split, apply, combine is the pattern behind nearly every summary table you will ever produce.","marks":[]}]},{"_type":"block","_key":"python-for-data-work-groupby-and-aggregation-h2","style":"h2","markDefs":[],"children":[{"_type":"span","_key":"python-for-data-work-groupby-and-aggregation-h2-span","text":"What this lesson covers","marks":[]}]},{"_type":"block","_key":"python-for-data-work-groupby-and-aggregation-point-0","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"python-for-data-work-groupby-and-aggregation-point-0-span","text":"Group rows and aggregate each group","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"python-for-data-work-groupby-and-aggregation-point-1","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"python-for-data-work-groupby-and-aggregation-point-1-span","text":"Apply several aggregations at once","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"python-for-data-work-groupby-and-aggregation-point-2","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"python-for-data-work-groupby-and-aggregation-point-2-span","text":"Pivot and reshape a summary for presentation","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"python-for-data-work-groupby-and-aggregation-outro","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"python-for-data-work-groupby-and-aggregation-outro-span","text":"This lesson sits in pandas Essentials, part of Python for Data Work. It assumes what came before it and leads directly into the next lesson in the module.","marks":[]}]}]'::jsonb,
        'Split, apply, combine is the pattern behind nearly every summary table you will ever produce.

What this lesson covers

Group rows and aggregate each group

Apply several aggregations at once

Pivot and reshape a summary for presentation

This lesson sits in pandas Essentials, part of Python for Data Work. It assumes what came before it and leads directly into the next lesson in the module.', '["Group rows and aggregate each group","Apply several aggregations at once","Pivot and reshape a summary for presentation"]'::jsonb, 'Think split-apply-combine. Almost every reporting question is a groupby wearing a disguise.',
        '[{"_type":"resource","_key":"python-for-data-work-groupby-and-aggregation-docs","type":"link","title":"pandas documentation","description":"The official reference for the tools used in this lesson.","url":"https://pandas.pydata.org/docs/"}]'::jsonb, 3
      ) ON CONFLICT (id) DO UPDATE SET
        module_id = EXCLUDED.module_id,
        course_id = EXCLUDED.course_id,
        title = EXCLUDED.title,
        slug = EXCLUDED.slug,
        youtube_video_id = EXCLUDED.youtube_video_id,
        video_url = EXCLUDED.video_url,
        duration = EXCLUDED.duration,
        free_preview = EXCLUDED.free_preview,
        notes = EXCLUDED.notes,
        notes_plain = EXCLUDED.notes_plain,
        key_points = EXCLUDED.key_points,
        pro_tip = EXCLUDED.pro_tip,
        resources = EXCLUDED.resources,
        position = EXCLUDED.position;

INSERT INTO public.lessons (
        id, module_id, course_id, title, slug, youtube_video_id,
        video_url, duration, free_preview, notes, notes_plain,
        key_points, pro_tip, resources, position
      ) VALUES (
        'lesson.python-for-data-work-matplotlib-basics', 'python-for-data-work-module-3', 'course.python-for-data-work',
        'Plotting with matplotlib', 'python-for-data-work-matplotlib-basics', '7Lc2AxiM17o',
        'https://www.youtube.com/watch?v=7Lc2AxiM17o', 1851, false, '[{"_type":"block","_key":"python-for-data-work-matplotlib-basics-intro","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"python-for-data-work-matplotlib-basics-intro-span","text":"Matplotlib is verbose but total. Learn the figure and axes model once and every other plotting library makes more sense.","marks":[]}]},{"_type":"block","_key":"python-for-data-work-matplotlib-basics-h2","style":"h2","markDefs":[],"children":[{"_type":"span","_key":"python-for-data-work-matplotlib-basics-h2-span","text":"What this lesson covers","marks":[]}]},{"_type":"block","_key":"python-for-data-work-matplotlib-basics-point-0","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"python-for-data-work-matplotlib-basics-point-0-span","text":"Work with the figure and axes objects","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"python-for-data-work-matplotlib-basics-point-1","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"python-for-data-work-matplotlib-basics-point-1-span","text":"Plot lines, bars, and scatter charts","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"python-for-data-work-matplotlib-basics-point-2","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"python-for-data-work-matplotlib-basics-point-2-span","text":"Label axes and export at the right resolution","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"python-for-data-work-matplotlib-basics-outro","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"python-for-data-work-matplotlib-basics-outro-span","text":"This lesson sits in Visualising Data, part of Python for Data Work. It assumes what came before it and leads directly into the next lesson in the module.","marks":[]}]}]'::jsonb,
        'Matplotlib is verbose but total. Learn the figure and axes model once and every other plotting library makes more sense.

What this lesson covers

Work with the figure and axes objects

Plot lines, bars, and scatter charts

Label axes and export at the right resolution

This lesson sits in Visualising Data, part of Python for Data Work. It assumes what came before it and leads directly into the next lesson in the module.', '["Work with the figure and axes objects","Plot lines, bars, and scatter charts","Label axes and export at the right resolution"]'::jsonb, '',
        '[{"_type":"resource","_key":"python-for-data-work-matplotlib-basics-docs","type":"link","title":"pandas documentation","description":"The official reference for the tools used in this lesson.","url":"https://pandas.pydata.org/docs/"}]'::jsonb, 1
      ) ON CONFLICT (id) DO UPDATE SET
        module_id = EXCLUDED.module_id,
        course_id = EXCLUDED.course_id,
        title = EXCLUDED.title,
        slug = EXCLUDED.slug,
        youtube_video_id = EXCLUDED.youtube_video_id,
        video_url = EXCLUDED.video_url,
        duration = EXCLUDED.duration,
        free_preview = EXCLUDED.free_preview,
        notes = EXCLUDED.notes,
        notes_plain = EXCLUDED.notes_plain,
        key_points = EXCLUDED.key_points,
        pro_tip = EXCLUDED.pro_tip,
        resources = EXCLUDED.resources,
        position = EXCLUDED.position;

INSERT INTO public.lessons (
        id, module_id, course_id, title, slug, youtube_video_id,
        video_url, duration, free_preview, notes, notes_plain,
        key_points, pro_tip, resources, position
      ) VALUES (
        'lesson.python-for-data-work-seaborn-statistical-plots', 'python-for-data-work-module-3', 'course.python-for-data-work',
        'Statistical plots with seaborn', 'python-for-data-work-seaborn-statistical-plots', 'rLVCSmtoA7U',
        'https://www.youtube.com/watch?v=rLVCSmtoA7U', 2156, false, '[{"_type":"block","_key":"python-for-data-work-seaborn-statistical-plots-intro","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"python-for-data-work-seaborn-statistical-plots-intro-span","text":"Seaborn sits on matplotlib and handles distributions, categories, and relationships with far less code.","marks":[]}]},{"_type":"block","_key":"python-for-data-work-seaborn-statistical-plots-h2","style":"h2","markDefs":[],"children":[{"_type":"span","_key":"python-for-data-work-seaborn-statistical-plots-h2-span","text":"What this lesson covers","marks":[]}]},{"_type":"block","_key":"python-for-data-work-seaborn-statistical-plots-point-0","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"python-for-data-work-seaborn-statistical-plots-point-0-span","text":"Plot distributions and relationships quickly","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"python-for-data-work-seaborn-statistical-plots-point-1","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"python-for-data-work-seaborn-statistical-plots-point-1-span","text":"Facet a chart by a categorical column","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"python-for-data-work-seaborn-statistical-plots-point-2","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"python-for-data-work-seaborn-statistical-plots-point-2-span","text":"Drop down to matplotlib when you need control","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"python-for-data-work-seaborn-statistical-plots-outro","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"python-for-data-work-seaborn-statistical-plots-outro-span","text":"This lesson sits in Visualising Data, part of Python for Data Work. It assumes what came before it and leads directly into the next lesson in the module.","marks":[]}]}]'::jsonb,
        'Seaborn sits on matplotlib and handles distributions, categories, and relationships with far less code.

What this lesson covers

Plot distributions and relationships quickly

Facet a chart by a categorical column

Drop down to matplotlib when you need control

This lesson sits in Visualising Data, part of Python for Data Work. It assumes what came before it and leads directly into the next lesson in the module.', '["Plot distributions and relationships quickly","Facet a chart by a categorical column","Drop down to matplotlib when you need control"]'::jsonb, '',
        '[{"_type":"resource","_key":"python-for-data-work-seaborn-statistical-plots-docs","type":"link","title":"pandas documentation","description":"The official reference for the tools used in this lesson.","url":"https://pandas.pydata.org/docs/"}]'::jsonb, 2
      ) ON CONFLICT (id) DO UPDATE SET
        module_id = EXCLUDED.module_id,
        course_id = EXCLUDED.course_id,
        title = EXCLUDED.title,
        slug = EXCLUDED.slug,
        youtube_video_id = EXCLUDED.youtube_video_id,
        video_url = EXCLUDED.video_url,
        duration = EXCLUDED.duration,
        free_preview = EXCLUDED.free_preview,
        notes = EXCLUDED.notes,
        notes_plain = EXCLUDED.notes_plain,
        key_points = EXCLUDED.key_points,
        pro_tip = EXCLUDED.pro_tip,
        resources = EXCLUDED.resources,
        position = EXCLUDED.position;

INSERT INTO public.lessons (
        id, module_id, course_id, title, slug, youtube_video_id,
        video_url, duration, free_preview, notes, notes_plain,
        key_points, pro_tip, resources, position
      ) VALUES (
        'lesson.python-for-data-work-telling-a-story-with-charts', 'python-for-data-work-module-3', 'course.python-for-data-work',
        'Choosing the right chart', 'python-for-data-work-telling-a-story-with-charts', 'fBgk_cNCnsk',
        'https://www.youtube.com/watch?v=fBgk_cNCnsk', 369, false, '[{"_type":"block","_key":"python-for-data-work-telling-a-story-with-charts-intro","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"python-for-data-work-telling-a-story-with-charts-intro-span","text":"The chart type encodes your claim. Comparison, distribution, composition, and relationship each have a form that reads instantly and several that mislead.","marks":[]}]},{"_type":"block","_key":"python-for-data-work-telling-a-story-with-charts-h2","style":"h2","markDefs":[],"children":[{"_type":"span","_key":"python-for-data-work-telling-a-story-with-charts-h2-span","text":"What this lesson covers","marks":[]}]},{"_type":"block","_key":"python-for-data-work-telling-a-story-with-charts-point-0","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"python-for-data-work-telling-a-story-with-charts-po-ab44df12","text":"Match the chart form to the question being asked","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"python-for-data-work-telling-a-story-with-charts-point-1","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"python-for-data-work-telling-a-story-with-charts-po-642651ef","text":"Remove decoration that competes with the data","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"python-for-data-work-telling-a-story-with-charts-point-2","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"python-for-data-work-telling-a-story-with-charts-po-e009b38a","text":"Avoid axis choices that overstate a difference","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"python-for-data-work-telling-a-story-with-charts-outro","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"python-for-data-work-telling-a-story-with-charts-outro-span","text":"This lesson sits in Visualising Data, part of Python for Data Work. It assumes what came before it and leads directly into the next lesson in the module.","marks":[]}]}]'::jsonb,
        'The chart type encodes your claim. Comparison, distribution, composition, and relationship each have a form that reads instantly and several that mislead.

What this lesson covers

Match the chart form to the question being asked

Remove decoration that competes with the data

Avoid axis choices that overstate a difference

This lesson sits in Visualising Data, part of Python for Data Work. It assumes what came before it and leads directly into the next lesson in the module.', '["Match the chart form to the question being asked","Remove decoration that competes with the data","Avoid axis choices that overstate a difference"]'::jsonb, 'If the chart needs a paragraph to explain what it shows, the chart is the wrong one.',
        '[{"_type":"resource","_key":"python-for-data-work-telling-a-story-with-charts-docs","type":"link","title":"pandas documentation","description":"The official reference for the tools used in this lesson.","url":"https://pandas.pydata.org/docs/"}]'::jsonb, 3
      ) ON CONFLICT (id) DO UPDATE SET
        module_id = EXCLUDED.module_id,
        course_id = EXCLUDED.course_id,
        title = EXCLUDED.title,
        slug = EXCLUDED.slug,
        youtube_video_id = EXCLUDED.youtube_video_id,
        video_url = EXCLUDED.video_url,
        duration = EXCLUDED.duration,
        free_preview = EXCLUDED.free_preview,
        notes = EXCLUDED.notes,
        notes_plain = EXCLUDED.notes_plain,
        key_points = EXCLUDED.key_points,
        pro_tip = EXCLUDED.pro_tip,
        resources = EXCLUDED.resources,
        position = EXCLUDED.position;

INSERT INTO public.lessons (
        id, module_id, course_id, title, slug, youtube_video_id,
        video_url, duration, free_preview, notes, notes_plain,
        key_points, pro_tip, resources, position
      ) VALUES (
        'lesson.python-for-data-work-jupyter-notebooks', 'python-for-data-work-module-4', 'course.python-for-data-work',
        'Working effectively in notebooks', 'python-for-data-work-jupyter-notebooks', 'YuWZNV4BkkY',
        'https://www.youtube.com/watch?v=YuWZNV4BkkY', 1397, false, '[{"_type":"block","_key":"python-for-data-work-jupyter-notebooks-intro","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"python-for-data-work-jupyter-notebooks-intro-span","text":"Notebooks are excellent for exploring and terrible at hidden state. Restart and run all is the only honest test of a notebook.","marks":[]}]},{"_type":"block","_key":"python-for-data-work-jupyter-notebooks-h2","style":"h2","markDefs":[],"children":[{"_type":"span","_key":"python-for-data-work-jupyter-notebooks-h2-span","text":"What this lesson covers","marks":[]}]},{"_type":"block","_key":"python-for-data-work-jupyter-notebooks-point-0","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"python-for-data-work-jupyter-notebooks-point-0-span","text":"Structure a notebook so it reads top to bottom","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"python-for-data-work-jupyter-notebooks-point-1","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"python-for-data-work-jupyter-notebooks-point-1-span","text":"Avoid out-of-order execution and stale state","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"python-for-data-work-jupyter-notebooks-point-2","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"python-for-data-work-jupyter-notebooks-point-2-span","text":"Move stable code out into importable modules","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"python-for-data-work-jupyter-notebooks-outro","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"python-for-data-work-jupyter-notebooks-outro-span","text":"This lesson sits in Reproducible Workflows, part of Python for Data Work. It assumes what came before it and leads directly into the next lesson in the module.","marks":[]}]}]'::jsonb,
        'Notebooks are excellent for exploring and terrible at hidden state. Restart and run all is the only honest test of a notebook.

What this lesson covers

Structure a notebook so it reads top to bottom

Avoid out-of-order execution and stale state

Move stable code out into importable modules

This lesson sits in Reproducible Workflows, part of Python for Data Work. It assumes what came before it and leads directly into the next lesson in the module.', '["Structure a notebook so it reads top to bottom","Avoid out-of-order execution and stale state","Move stable code out into importable modules"]'::jsonb, '',
        '[{"_type":"resource","_key":"python-for-data-work-jupyter-notebooks-docs","type":"link","title":"pandas documentation","description":"The official reference for the tools used in this lesson.","url":"https://pandas.pydata.org/docs/"}]'::jsonb, 1
      ) ON CONFLICT (id) DO UPDATE SET
        module_id = EXCLUDED.module_id,
        course_id = EXCLUDED.course_id,
        title = EXCLUDED.title,
        slug = EXCLUDED.slug,
        youtube_video_id = EXCLUDED.youtube_video_id,
        video_url = EXCLUDED.video_url,
        duration = EXCLUDED.duration,
        free_preview = EXCLUDED.free_preview,
        notes = EXCLUDED.notes,
        notes_plain = EXCLUDED.notes_plain,
        key_points = EXCLUDED.key_points,
        pro_tip = EXCLUDED.pro_tip,
        resources = EXCLUDED.resources,
        position = EXCLUDED.position;

INSERT INTO public.lessons (
        id, module_id, course_id, title, slug, youtube_video_id,
        video_url, duration, free_preview, notes, notes_plain,
        key_points, pro_tip, resources, position
      ) VALUES (
        'lesson.python-for-data-work-virtual-environments', 'python-for-data-work-module-4', 'course.python-for-data-work',
        'Virtual environments and dependencies', 'python-for-data-work-virtual-environments', 'Y21OR1OPC9A',
        'https://www.youtube.com/watch?v=Y21OR1OPC9A', 545, false, '[{"_type":"block","_key":"python-for-data-work-virtual-environments-intro","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"python-for-data-work-virtual-environments-intro-span","text":"An environment per project, with pinned versions, is what stops \"it worked yesterday\" from being a real sentence.","marks":[]}]},{"_type":"block","_key":"python-for-data-work-virtual-environments-h2","style":"h2","markDefs":[],"children":[{"_type":"span","_key":"python-for-data-work-virtual-environments-h2-span","text":"What this lesson covers","marks":[]}]},{"_type":"block","_key":"python-for-data-work-virtual-environments-point-0","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"python-for-data-work-virtual-environments-point-0-span","text":"Create and activate a per-project environment","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"python-for-data-work-virtual-environments-point-1","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"python-for-data-work-virtual-environments-point-1-span","text":"Pin dependencies so installs are repeatable","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"python-for-data-work-virtual-environments-point-2","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"python-for-data-work-virtual-environments-point-2-span","text":"Keep environment files under version control","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"python-for-data-work-virtual-environments-outro","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"python-for-data-work-virtual-environments-outro-span","text":"This lesson sits in Reproducible Workflows, part of Python for Data Work. It assumes what came before it and leads directly into the next lesson in the module.","marks":[]}]}]'::jsonb,
        'An environment per project, with pinned versions, is what stops "it worked yesterday" from being a real sentence.

What this lesson covers

Create and activate a per-project environment

Pin dependencies so installs are repeatable

Keep environment files under version control

This lesson sits in Reproducible Workflows, part of Python for Data Work. It assumes what came before it and leads directly into the next lesson in the module.', '["Create and activate a per-project environment","Pin dependencies so installs are repeatable","Keep environment files under version control"]'::jsonb, '',
        '[{"_type":"resource","_key":"python-for-data-work-virtual-environments-docs","type":"link","title":"pandas documentation","description":"The official reference for the tools used in this lesson.","url":"https://pandas.pydata.org/docs/"}]'::jsonb, 2
      ) ON CONFLICT (id) DO UPDATE SET
        module_id = EXCLUDED.module_id,
        course_id = EXCLUDED.course_id,
        title = EXCLUDED.title,
        slug = EXCLUDED.slug,
        youtube_video_id = EXCLUDED.youtube_video_id,
        video_url = EXCLUDED.video_url,
        duration = EXCLUDED.duration,
        free_preview = EXCLUDED.free_preview,
        notes = EXCLUDED.notes,
        notes_plain = EXCLUDED.notes_plain,
        key_points = EXCLUDED.key_points,
        pro_tip = EXCLUDED.pro_tip,
        resources = EXCLUDED.resources,
        position = EXCLUDED.position;

INSERT INTO public.lessons (
        id, module_id, course_id, title, slug, youtube_video_id,
        video_url, duration, free_preview, notes, notes_plain,
        key_points, pro_tip, resources, position
      ) VALUES (
        'lesson.python-for-data-work-automating-a-data-job', 'python-for-data-work-module-4', 'course.python-for-data-work',
        'Automating a recurring data job', 'python-for-data-work-automating-a-data-job', 'eZfD6x9FJ4E',
        'https://www.youtube.com/watch?v=eZfD6x9FJ4E', 690, false, '[{"_type":"block","_key":"python-for-data-work-automating-a-data-job-intro","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"python-for-data-work-automating-a-data-job-intro-span","text":"The last step is turning the analysis into a script that runs on a schedule, logs what it did, and fails loudly.","marks":[]}]},{"_type":"block","_key":"python-for-data-work-automating-a-data-job-h2","style":"h2","markDefs":[],"children":[{"_type":"span","_key":"python-for-data-work-automating-a-data-job-h2-span","text":"What this lesson covers","marks":[]}]},{"_type":"block","_key":"python-for-data-work-automating-a-data-job-point-0","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"python-for-data-work-automating-a-data-job-point-0-span","text":"Turn a notebook into a parameterised script","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"python-for-data-work-automating-a-data-job-point-1","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"python-for-data-work-automating-a-data-job-point-1-span","text":"Log progress and failures usefully","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"python-for-data-work-automating-a-data-job-point-2","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"python-for-data-work-automating-a-data-job-point-2-span","text":"Schedule the job and alert when it breaks","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"python-for-data-work-automating-a-data-job-outro","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"python-for-data-work-automating-a-data-job-outro-span","text":"This lesson sits in Reproducible Workflows, part of Python for Data Work. It assumes what came before it and leads directly into the next lesson in the module.","marks":[]}]}]'::jsonb,
        'The last step is turning the analysis into a script that runs on a schedule, logs what it did, and fails loudly.

What this lesson covers

Turn a notebook into a parameterised script

Log progress and failures usefully

Schedule the job and alert when it breaks

This lesson sits in Reproducible Workflows, part of Python for Data Work. It assumes what came before it and leads directly into the next lesson in the module.', '["Turn a notebook into a parameterised script","Log progress and failures usefully","Schedule the job and alert when it breaks"]'::jsonb, '',
        '[{"_type":"resource","_key":"python-for-data-work-automating-a-data-job-docs","type":"link","title":"pandas documentation","description":"The official reference for the tools used in this lesson.","url":"https://pandas.pydata.org/docs/"}]'::jsonb, 3
      ) ON CONFLICT (id) DO UPDATE SET
        module_id = EXCLUDED.module_id,
        course_id = EXCLUDED.course_id,
        title = EXCLUDED.title,
        slug = EXCLUDED.slug,
        youtube_video_id = EXCLUDED.youtube_video_id,
        video_url = EXCLUDED.video_url,
        duration = EXCLUDED.duration,
        free_preview = EXCLUDED.free_preview,
        notes = EXCLUDED.notes,
        notes_plain = EXCLUDED.notes_plain,
        key_points = EXCLUDED.key_points,
        pro_tip = EXCLUDED.pro_tip,
        resources = EXCLUDED.resources,
        position = EXCLUDED.position;

INSERT INTO public.lessons (
        id, module_id, course_id, title, slug, youtube_video_id,
        video_url, duration, free_preview, notes, notes_plain,
        key_points, pro_tip, resources, position
      ) VALUES (
        'lesson.system-design-foundations-load-balancing', 'system-design-foundations-module-1', 'course.system-design-foundations',
        'Load balancing', 'system-design-foundations-load-balancing', 'chyZRNT7eEo',
        'https://www.youtube.com/watch?v=chyZRNT7eEo', 282, true, '[{"_type":"block","_key":"system-design-foundations-load-balancing-intro","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"system-design-foundations-load-balancing-intro-span","text":"A load balancer spreads traffic and hides failed instances. The interesting choices are the algorithm and what happens to sessions.","marks":[]}]},{"_type":"block","_key":"system-design-foundations-load-balancing-h2","style":"h2","markDefs":[],"children":[{"_type":"span","_key":"system-design-foundations-load-balancing-h2-span","text":"What this lesson covers","marks":[]}]},{"_type":"block","_key":"system-design-foundations-load-balancing-point-0","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"system-design-foundations-load-balancing-point-0-span","text":"Compare round robin, least connections, and hashing","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"system-design-foundations-load-balancing-point-1","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"system-design-foundations-load-balancing-point-1-span","text":"Health check instances and drain them safely","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"system-design-foundations-load-balancing-point-2","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"system-design-foundations-load-balancing-point-2-span","text":"Handle session affinity without pinning users forever","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"system-design-foundations-load-balancing-outro","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"system-design-foundations-load-balancing-outro-span","text":"This lesson sits in Core Building Blocks, part of System Design Foundations. It assumes what came before it and leads directly into the next lesson in the module.","marks":[]}]}]'::jsonb,
        'A load balancer spreads traffic and hides failed instances. The interesting choices are the algorithm and what happens to sessions.

What this lesson covers

Compare round robin, least connections, and hashing

Health check instances and drain them safely

Handle session affinity without pinning users forever

This lesson sits in Core Building Blocks, part of System Design Foundations. It assumes what came before it and leads directly into the next lesson in the module.', '["Compare round robin, least connections, and hashing","Health check instances and drain them safely","Handle session affinity without pinning users forever"]'::jsonb, '',
        '[{"_type":"resource","_key":"system-design-foundations-load-balancing-docs","type":"link","title":"AWS Architecture Center","description":"The official reference for the tools used in this lesson.","url":"https://aws.amazon.com/architecture/"}]'::jsonb, 1
      ) ON CONFLICT (id) DO UPDATE SET
        module_id = EXCLUDED.module_id,
        course_id = EXCLUDED.course_id,
        title = EXCLUDED.title,
        slug = EXCLUDED.slug,
        youtube_video_id = EXCLUDED.youtube_video_id,
        video_url = EXCLUDED.video_url,
        duration = EXCLUDED.duration,
        free_preview = EXCLUDED.free_preview,
        notes = EXCLUDED.notes,
        notes_plain = EXCLUDED.notes_plain,
        key_points = EXCLUDED.key_points,
        pro_tip = EXCLUDED.pro_tip,
        resources = EXCLUDED.resources,
        position = EXCLUDED.position;

INSERT INTO public.lessons (
        id, module_id, course_id, title, slug, youtube_video_id,
        video_url, duration, free_preview, notes, notes_plain,
        key_points, pro_tip, resources, position
      ) VALUES (
        'lesson.system-design-foundations-caching-layers', 'system-design-foundations-module-1', 'course.system-design-foundations',
        'Caching layers and invalidation', 'system-design-foundations-caching-layers', 'wh98s0XhMmQ',
        'https://www.youtube.com/watch?v=wh98s0XhMmQ', 401, false, '[{"_type":"block","_key":"system-design-foundations-caching-layers-intro","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"system-design-foundations-caching-layers-intro-span","text":"Caching is the cheapest performance win and the most common source of confusing bugs. Decide where it lives and what invalidates it before you add it.","marks":[]}]},{"_type":"block","_key":"system-design-foundations-caching-layers-h2","style":"h2","markDefs":[],"children":[{"_type":"span","_key":"system-design-foundations-caching-layers-h2-span","text":"What this lesson covers","marks":[]}]},{"_type":"block","_key":"system-design-foundations-caching-layers-point-0","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"system-design-foundations-caching-layers-point-0-span","text":"Place caches at the edge, application, or data layer","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"system-design-foundations-caching-layers-point-1","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"system-design-foundations-caching-layers-point-1-span","text":"Choose a write strategy and an eviction policy","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"system-design-foundations-caching-layers-point-2","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"system-design-foundations-caching-layers-point-2-span","text":"Plan invalidation before you plan the cache","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"system-design-foundations-caching-layers-outro","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"system-design-foundations-caching-layers-outro-span","text":"This lesson sits in Core Building Blocks, part of System Design Foundations. It assumes what came before it and leads directly into the next lesson in the module.","marks":[]}]}]'::jsonb,
        'Caching is the cheapest performance win and the most common source of confusing bugs. Decide where it lives and what invalidates it before you add it.

What this lesson covers

Place caches at the edge, application, or data layer

Choose a write strategy and an eviction policy

Plan invalidation before you plan the cache

This lesson sits in Core Building Blocks, part of System Design Foundations. It assumes what came before it and leads directly into the next lesson in the module.', '["Place caches at the edge, application, or data layer","Choose a write strategy and an eviction policy","Plan invalidation before you plan the cache"]'::jsonb, 'Design the invalidation path first. A cache you cannot invalidate is a bug with a latency benefit.',
        '[{"_type":"resource","_key":"system-design-foundations-caching-layers-docs","type":"link","title":"AWS Architecture Center","description":"The official reference for the tools used in this lesson.","url":"https://aws.amazon.com/architecture/"}]'::jsonb, 2
      ) ON CONFLICT (id) DO UPDATE SET
        module_id = EXCLUDED.module_id,
        course_id = EXCLUDED.course_id,
        title = EXCLUDED.title,
        slug = EXCLUDED.slug,
        youtube_video_id = EXCLUDED.youtube_video_id,
        video_url = EXCLUDED.video_url,
        duration = EXCLUDED.duration,
        free_preview = EXCLUDED.free_preview,
        notes = EXCLUDED.notes,
        notes_plain = EXCLUDED.notes_plain,
        key_points = EXCLUDED.key_points,
        pro_tip = EXCLUDED.pro_tip,
        resources = EXCLUDED.resources,
        position = EXCLUDED.position;

INSERT INTO public.lessons (
        id, module_id, course_id, title, slug, youtube_video_id,
        video_url, duration, free_preview, notes, notes_plain,
        key_points, pro_tip, resources, position
      ) VALUES (
        'lesson.system-design-foundations-message-queues', 'system-design-foundations-module-1', 'course.system-design-foundations',
        'Queues and asynchronous work', 'system-design-foundations-message-queues', '1ISRd0bS714',
        'https://www.youtube.com/watch?v=1ISRd0bS714', 1606, false, '[{"_type":"block","_key":"system-design-foundations-message-queues-intro","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"system-design-foundations-message-queues-intro-span","text":"A queue decouples producers from consumers and absorbs bursts. The cost is that you now have to think about ordering, retries, and duplicates.","marks":[]}]},{"_type":"block","_key":"system-design-foundations-message-queues-h2","style":"h2","markDefs":[],"children":[{"_type":"span","_key":"system-design-foundations-message-queues-h2-span","text":"What this lesson covers","marks":[]}]},{"_type":"block","_key":"system-design-foundations-message-queues-point-0","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"system-design-foundations-message-queues-point-0-span","text":"Move slow work out of the request path","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"system-design-foundations-message-queues-point-1","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"system-design-foundations-message-queues-point-1-span","text":"Handle retries, dead letters, and duplicate delivery","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"system-design-foundations-message-queues-point-2","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"system-design-foundations-message-queues-point-2-span","text":"Reason about ordering guarantees you actually have","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"system-design-foundations-message-queues-outro","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"system-design-foundations-message-queues-outro-span","text":"This lesson sits in Core Building Blocks, part of System Design Foundations. It assumes what came before it and leads directly into the next lesson in the module.","marks":[]}]}]'::jsonb,
        'A queue decouples producers from consumers and absorbs bursts. The cost is that you now have to think about ordering, retries, and duplicates.

What this lesson covers

Move slow work out of the request path

Handle retries, dead letters, and duplicate delivery

Reason about ordering guarantees you actually have

This lesson sits in Core Building Blocks, part of System Design Foundations. It assumes what came before it and leads directly into the next lesson in the module.', '["Move slow work out of the request path","Handle retries, dead letters, and duplicate delivery","Reason about ordering guarantees you actually have"]'::jsonb, '',
        '[{"_type":"resource","_key":"system-design-foundations-message-queues-docs","type":"link","title":"AWS Architecture Center","description":"The official reference for the tools used in this lesson.","url":"https://aws.amazon.com/architecture/"}]'::jsonb, 3
      ) ON CONFLICT (id) DO UPDATE SET
        module_id = EXCLUDED.module_id,
        course_id = EXCLUDED.course_id,
        title = EXCLUDED.title,
        slug = EXCLUDED.slug,
        youtube_video_id = EXCLUDED.youtube_video_id,
        video_url = EXCLUDED.video_url,
        duration = EXCLUDED.duration,
        free_preview = EXCLUDED.free_preview,
        notes = EXCLUDED.notes,
        notes_plain = EXCLUDED.notes_plain,
        key_points = EXCLUDED.key_points,
        pro_tip = EXCLUDED.pro_tip,
        resources = EXCLUDED.resources,
        position = EXCLUDED.position;

INSERT INTO public.lessons (
        id, module_id, course_id, title, slug, youtube_video_id,
        video_url, duration, free_preview, notes, notes_plain,
        key_points, pro_tip, resources, position
      ) VALUES (
        'lesson.system-design-foundations-sharding-and-partitioning', 'system-design-foundations-module-2', 'course.system-design-foundations',
        'Sharding and partitioning', 'system-design-foundations-sharding-and-partitioning', 'be6PLMKKSto',
        'https://www.youtube.com/watch?v=be6PLMKKSto', 362, false, '[{"_type":"block","_key":"system-design-foundations-sharding-and-partitioning-intro","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"system-design-foundations-sharding-and-partitioning-f96c5e7d","text":"Partitioning splits data across machines. The shard key decides whether that scales smoothly or creates one very hot node.","marks":[]}]},{"_type":"block","_key":"system-design-foundations-sharding-and-partitioning-h2","style":"h2","markDefs":[],"children":[{"_type":"span","_key":"system-design-foundations-sharding-and-partitioning-h2-span","text":"What this lesson covers","marks":[]}]},{"_type":"block","_key":"system-design-foundations-sharding-and-partitioning-point-0","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"system-design-foundations-sharding-and-partitioning-3d563fd3","text":"Choose a shard key that spreads load evenly","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"system-design-foundations-sharding-and-partitioning-point-1","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"system-design-foundations-sharding-and-partitioning-2d1ca026","text":"Compare range, hash, and directory partitioning","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"system-design-foundations-sharding-and-partitioning-point-2","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"system-design-foundations-sharding-and-partitioning-5ab3ed5f","text":"Plan for resharding before you need it","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"system-design-foundations-sharding-and-partitioning-outro","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"system-design-foundations-sharding-and-partitioning-59c36b24","text":"This lesson sits in Data at Scale, part of System Design Foundations. It assumes what came before it and leads directly into the next lesson in the module.","marks":[]}]}]'::jsonb,
        'Partitioning splits data across machines. The shard key decides whether that scales smoothly or creates one very hot node.

What this lesson covers

Choose a shard key that spreads load evenly

Compare range, hash, and directory partitioning

Plan for resharding before you need it

This lesson sits in Data at Scale, part of System Design Foundations. It assumes what came before it and leads directly into the next lesson in the module.', '["Choose a shard key that spreads load evenly","Compare range, hash, and directory partitioning","Plan for resharding before you need it"]'::jsonb, '',
        '[{"_type":"resource","_key":"system-design-foundations-sharding-and-partitioning-docs","type":"link","title":"AWS Architecture Center","description":"The official reference for the tools used in this lesson.","url":"https://aws.amazon.com/architecture/"}]'::jsonb, 1
      ) ON CONFLICT (id) DO UPDATE SET
        module_id = EXCLUDED.module_id,
        course_id = EXCLUDED.course_id,
        title = EXCLUDED.title,
        slug = EXCLUDED.slug,
        youtube_video_id = EXCLUDED.youtube_video_id,
        video_url = EXCLUDED.video_url,
        duration = EXCLUDED.duration,
        free_preview = EXCLUDED.free_preview,
        notes = EXCLUDED.notes,
        notes_plain = EXCLUDED.notes_plain,
        key_points = EXCLUDED.key_points,
        pro_tip = EXCLUDED.pro_tip,
        resources = EXCLUDED.resources,
        position = EXCLUDED.position;

INSERT INTO public.lessons (
        id, module_id, course_id, title, slug, youtube_video_id,
        video_url, duration, free_preview, notes, notes_plain,
        key_points, pro_tip, resources, position
      ) VALUES (
        'lesson.system-design-foundations-replication', 'system-design-foundations-module-2', 'course.system-design-foundations',
        'Replication and read scaling', 'system-design-foundations-replication', 'bI8Ry6GhMSE',
        'https://www.youtube.com/watch?v=bI8Ry6GhMSE', 302, false, '[{"_type":"block","_key":"system-design-foundations-replication-intro","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"system-design-foundations-replication-intro-span","text":"Replicas give you read capacity and failover. They also give you a window where a follower answers with data that is slightly out of date.","marks":[]}]},{"_type":"block","_key":"system-design-foundations-replication-h2","style":"h2","markDefs":[],"children":[{"_type":"span","_key":"system-design-foundations-replication-h2-span","text":"What this lesson covers","marks":[]}]},{"_type":"block","_key":"system-design-foundations-replication-point-0","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"system-design-foundations-replication-point-0-span","text":"Distinguish synchronous from asynchronous replication","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"system-design-foundations-replication-point-1","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"system-design-foundations-replication-point-1-span","text":"Route reads to replicas without breaking read-your-writes","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"system-design-foundations-replication-point-2","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"system-design-foundations-replication-point-2-span","text":"Plan and rehearse failover","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"system-design-foundations-replication-outro","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"system-design-foundations-replication-outro-span","text":"This lesson sits in Data at Scale, part of System Design Foundations. It assumes what came before it and leads directly into the next lesson in the module.","marks":[]}]}]'::jsonb,
        'Replicas give you read capacity and failover. They also give you a window where a follower answers with data that is slightly out of date.

What this lesson covers

Distinguish synchronous from asynchronous replication

Route reads to replicas without breaking read-your-writes

Plan and rehearse failover

This lesson sits in Data at Scale, part of System Design Foundations. It assumes what came before it and leads directly into the next lesson in the module.', '["Distinguish synchronous from asynchronous replication","Route reads to replicas without breaking read-your-writes","Plan and rehearse failover"]'::jsonb, '',
        '[{"_type":"resource","_key":"system-design-foundations-replication-docs","type":"link","title":"AWS Architecture Center","description":"The official reference for the tools used in this lesson.","url":"https://aws.amazon.com/architecture/"}]'::jsonb, 2
      ) ON CONFLICT (id) DO UPDATE SET
        module_id = EXCLUDED.module_id,
        course_id = EXCLUDED.course_id,
        title = EXCLUDED.title,
        slug = EXCLUDED.slug,
        youtube_video_id = EXCLUDED.youtube_video_id,
        video_url = EXCLUDED.video_url,
        duration = EXCLUDED.duration,
        free_preview = EXCLUDED.free_preview,
        notes = EXCLUDED.notes,
        notes_plain = EXCLUDED.notes_plain,
        key_points = EXCLUDED.key_points,
        pro_tip = EXCLUDED.pro_tip,
        resources = EXCLUDED.resources,
        position = EXCLUDED.position;

INSERT INTO public.lessons (
        id, module_id, course_id, title, slug, youtube_video_id,
        video_url, duration, free_preview, notes, notes_plain,
        key_points, pro_tip, resources, position
      ) VALUES (
        'lesson.system-design-foundations-consistency-and-cap', 'system-design-foundations-module-2', 'course.system-design-foundations',
        'Consistency models and CAP', 'system-design-foundations-consistency-and-cap', 'gkg-FAEXIkY',
        'https://www.youtube.com/watch?v=gkg-FAEXIkY', 408, false, '[{"_type":"block","_key":"system-design-foundations-consistency-and-cap-intro","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"system-design-foundations-consistency-and-cap-intro-span","text":"When the network partitions you choose consistency or availability. Most real systems pick a different answer per operation.","marks":[]}]},{"_type":"block","_key":"system-design-foundations-consistency-and-cap-h2","style":"h2","markDefs":[],"children":[{"_type":"span","_key":"system-design-foundations-consistency-and-cap-h2-span","text":"What this lesson covers","marks":[]}]},{"_type":"block","_key":"system-design-foundations-consistency-and-cap-point-0","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"system-design-foundations-consistency-and-cap-point-0-span","text":"Place a system on the consistency spectrum","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"system-design-foundations-consistency-and-cap-point-1","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"system-design-foundations-consistency-and-cap-point-1-span","text":"Choose guarantees per operation, not per database","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"system-design-foundations-consistency-and-cap-point-2","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"system-design-foundations-consistency-and-cap-point-2-span","text":"Explain the user-visible effect of eventual consistency","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"system-design-foundations-consistency-and-cap-outro","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"system-design-foundations-consistency-and-cap-outro-span","text":"This lesson sits in Data at Scale, part of System Design Foundations. It assumes what came before it and leads directly into the next lesson in the module.","marks":[]}]}]'::jsonb,
        'When the network partitions you choose consistency or availability. Most real systems pick a different answer per operation.

What this lesson covers

Place a system on the consistency spectrum

Choose guarantees per operation, not per database

Explain the user-visible effect of eventual consistency

This lesson sits in Data at Scale, part of System Design Foundations. It assumes what came before it and leads directly into the next lesson in the module.', '["Place a system on the consistency spectrum","Choose guarantees per operation, not per database","Explain the user-visible effect of eventual consistency"]'::jsonb, 'Ask what the user sees when a read is stale. That answer picks your consistency model faster than any theorem.',
        '[{"_type":"resource","_key":"system-design-foundations-consistency-and-cap-docs","type":"link","title":"AWS Architecture Center","description":"The official reference for the tools used in this lesson.","url":"https://aws.amazon.com/architecture/"}]'::jsonb, 3
      ) ON CONFLICT (id) DO UPDATE SET
        module_id = EXCLUDED.module_id,
        course_id = EXCLUDED.course_id,
        title = EXCLUDED.title,
        slug = EXCLUDED.slug,
        youtube_video_id = EXCLUDED.youtube_video_id,
        video_url = EXCLUDED.video_url,
        duration = EXCLUDED.duration,
        free_preview = EXCLUDED.free_preview,
        notes = EXCLUDED.notes,
        notes_plain = EXCLUDED.notes_plain,
        key_points = EXCLUDED.key_points,
        pro_tip = EXCLUDED.pro_tip,
        resources = EXCLUDED.resources,
        position = EXCLUDED.position;

INSERT INTO public.lessons (
        id, module_id, course_id, title, slug, youtube_video_id,
        video_url, duration, free_preview, notes, notes_plain,
        key_points, pro_tip, resources, position
      ) VALUES (
        'lesson.system-design-foundations-rest-vs-graphql', 'system-design-foundations-module-3', 'course.system-design-foundations',
        'REST and GraphQL trade-offs', 'system-design-foundations-rest-vs-graphql', 'yWzKJPw_VzM',
        'https://www.youtube.com/watch?v=yWzKJPw_VzM', 315, false, '[{"_type":"block","_key":"system-design-foundations-rest-vs-graphql-intro","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"system-design-foundations-rest-vs-graphql-intro-span","text":"REST gives you cacheable, predictable endpoints; GraphQL gives clients exactly the data they asked for. The trade is caching and complexity.","marks":[]}]},{"_type":"block","_key":"system-design-foundations-rest-vs-graphql-h2","style":"h2","markDefs":[],"children":[{"_type":"span","_key":"system-design-foundations-rest-vs-graphql-h2-span","text":"What this lesson covers","marks":[]}]},{"_type":"block","_key":"system-design-foundations-rest-vs-graphql-point-0","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"system-design-foundations-rest-vs-graphql-point-0-span","text":"Compare fixed endpoints against flexible queries","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"system-design-foundations-rest-vs-graphql-point-1","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"system-design-foundations-rest-vs-graphql-point-1-span","text":"Weigh caching behaviour on each side","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"system-design-foundations-rest-vs-graphql-point-2","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"system-design-foundations-rest-vs-graphql-point-2-span","text":"Version an API without breaking existing clients","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"system-design-foundations-rest-vs-graphql-outro","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"system-design-foundations-rest-vs-graphql-outro-span","text":"This lesson sits in API Design at Scale, part of System Design Foundations. It assumes what came before it and leads directly into the next lesson in the module.","marks":[]}]}]'::jsonb,
        'REST gives you cacheable, predictable endpoints; GraphQL gives clients exactly the data they asked for. The trade is caching and complexity.

What this lesson covers

Compare fixed endpoints against flexible queries

Weigh caching behaviour on each side

Version an API without breaking existing clients

This lesson sits in API Design at Scale, part of System Design Foundations. It assumes what came before it and leads directly into the next lesson in the module.', '["Compare fixed endpoints against flexible queries","Weigh caching behaviour on each side","Version an API without breaking existing clients"]'::jsonb, '',
        '[{"_type":"resource","_key":"system-design-foundations-rest-vs-graphql-docs","type":"link","title":"AWS Architecture Center","description":"The official reference for the tools used in this lesson.","url":"https://aws.amazon.com/architecture/"}]'::jsonb, 1
      ) ON CONFLICT (id) DO UPDATE SET
        module_id = EXCLUDED.module_id,
        course_id = EXCLUDED.course_id,
        title = EXCLUDED.title,
        slug = EXCLUDED.slug,
        youtube_video_id = EXCLUDED.youtube_video_id,
        video_url = EXCLUDED.video_url,
        duration = EXCLUDED.duration,
        free_preview = EXCLUDED.free_preview,
        notes = EXCLUDED.notes,
        notes_plain = EXCLUDED.notes_plain,
        key_points = EXCLUDED.key_points,
        pro_tip = EXCLUDED.pro_tip,
        resources = EXCLUDED.resources,
        position = EXCLUDED.position;

INSERT INTO public.lessons (
        id, module_id, course_id, title, slug, youtube_video_id,
        video_url, duration, free_preview, notes, notes_plain,
        key_points, pro_tip, resources, position
      ) VALUES (
        'lesson.system-design-foundations-rate-limiting', 'system-design-foundations-module-3', 'course.system-design-foundations',
        'Rate limiting', 'system-design-foundations-rate-limiting', 'YXkOdWBwqaA',
        'https://www.youtube.com/watch?v=YXkOdWBwqaA', 466, false, '[{"_type":"block","_key":"system-design-foundations-rate-limiting-intro","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"system-design-foundations-rate-limiting-intro-span","text":"Rate limiting protects you from clients and clients from themselves. Token bucket is the usual answer; the hard part is the key you limit on.","marks":[]}]},{"_type":"block","_key":"system-design-foundations-rate-limiting-h2","style":"h2","markDefs":[],"children":[{"_type":"span","_key":"system-design-foundations-rate-limiting-h2-span","text":"What this lesson covers","marks":[]}]},{"_type":"block","_key":"system-design-foundations-rate-limiting-point-0","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"system-design-foundations-rate-limiting-point-0-span","text":"Implement token bucket and sliding window limits","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"system-design-foundations-rate-limiting-point-1","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"system-design-foundations-rate-limiting-point-1-span","text":"Choose the right key: user, tenant, or IP","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"system-design-foundations-rate-limiting-point-2","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"system-design-foundations-rate-limiting-point-2-span","text":"Return limits and retry hints in the response","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"system-design-foundations-rate-limiting-outro","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"system-design-foundations-rate-limiting-outro-span","text":"This lesson sits in API Design at Scale, part of System Design Foundations. It assumes what came before it and leads directly into the next lesson in the module.","marks":[]}]}]'::jsonb,
        'Rate limiting protects you from clients and clients from themselves. Token bucket is the usual answer; the hard part is the key you limit on.

What this lesson covers

Implement token bucket and sliding window limits

Choose the right key: user, tenant, or IP

Return limits and retry hints in the response

This lesson sits in API Design at Scale, part of System Design Foundations. It assumes what came before it and leads directly into the next lesson in the module.', '["Implement token bucket and sliding window limits","Choose the right key: user, tenant, or IP","Return limits and retry hints in the response"]'::jsonb, '',
        '[{"_type":"resource","_key":"system-design-foundations-rate-limiting-docs","type":"link","title":"AWS Architecture Center","description":"The official reference for the tools used in this lesson.","url":"https://aws.amazon.com/architecture/"}]'::jsonb, 2
      ) ON CONFLICT (id) DO UPDATE SET
        module_id = EXCLUDED.module_id,
        course_id = EXCLUDED.course_id,
        title = EXCLUDED.title,
        slug = EXCLUDED.slug,
        youtube_video_id = EXCLUDED.youtube_video_id,
        video_url = EXCLUDED.video_url,
        duration = EXCLUDED.duration,
        free_preview = EXCLUDED.free_preview,
        notes = EXCLUDED.notes,
        notes_plain = EXCLUDED.notes_plain,
        key_points = EXCLUDED.key_points,
        pro_tip = EXCLUDED.pro_tip,
        resources = EXCLUDED.resources,
        position = EXCLUDED.position;

INSERT INTO public.lessons (
        id, module_id, course_id, title, slug, youtube_video_id,
        video_url, duration, free_preview, notes, notes_plain,
        key_points, pro_tip, resources, position
      ) VALUES (
        'lesson.system-design-foundations-idempotency-and-retries', 'system-design-foundations-module-3', 'course.system-design-foundations',
        'Idempotency and safe retries', 'system-design-foundations-idempotency-and-retries', 't99NvIazD68',
        'https://www.youtube.com/watch?v=t99NvIazD68', 451, false, '[{"_type":"block","_key":"system-design-foundations-idempotency-and-retries-intro","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"system-design-foundations-idempotency-and-retries-intro-span","text":"Any request can be delivered twice. An idempotency key lets the second delivery return the first result instead of charging the card again.","marks":[]}]},{"_type":"block","_key":"system-design-foundations-idempotency-and-retries-h2","style":"h2","markDefs":[],"children":[{"_type":"span","_key":"system-design-foundations-idempotency-and-retries-h2-span","text":"What this lesson covers","marks":[]}]},{"_type":"block","_key":"system-design-foundations-idempotency-and-retries-point-0","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"system-design-foundations-idempotency-and-retries-p-510ba2d6","text":"Make write endpoints safe to retry","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"system-design-foundations-idempotency-and-retries-point-1","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"system-design-foundations-idempotency-and-retries-p-e8696e81","text":"Accept and store idempotency keys","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"system-design-foundations-idempotency-and-retries-point-2","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"system-design-foundations-idempotency-and-retries-p-af9678ff","text":"Retry with backoff and jitter, not in lockstep","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"system-design-foundations-idempotency-and-retries-outro","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"system-design-foundations-idempotency-and-retries-outro-span","text":"This lesson sits in API Design at Scale, part of System Design Foundations. It assumes what came before it and leads directly into the next lesson in the module.","marks":[]}]}]'::jsonb,
        'Any request can be delivered twice. An idempotency key lets the second delivery return the first result instead of charging the card again.

What this lesson covers

Make write endpoints safe to retry

Accept and store idempotency keys

Retry with backoff and jitter, not in lockstep

This lesson sits in API Design at Scale, part of System Design Foundations. It assumes what came before it and leads directly into the next lesson in the module.', '["Make write endpoints safe to retry","Accept and store idempotency keys","Retry with backoff and jitter, not in lockstep"]'::jsonb, 'Retries without jitter turn one blip into a synchronised stampede.',
        '[{"_type":"resource","_key":"system-design-foundations-idempotency-and-retries-docs","type":"link","title":"AWS Architecture Center","description":"The official reference for the tools used in this lesson.","url":"https://aws.amazon.com/architecture/"}]'::jsonb, 3
      ) ON CONFLICT (id) DO UPDATE SET
        module_id = EXCLUDED.module_id,
        course_id = EXCLUDED.course_id,
        title = EXCLUDED.title,
        slug = EXCLUDED.slug,
        youtube_video_id = EXCLUDED.youtube_video_id,
        video_url = EXCLUDED.video_url,
        duration = EXCLUDED.duration,
        free_preview = EXCLUDED.free_preview,
        notes = EXCLUDED.notes,
        notes_plain = EXCLUDED.notes_plain,
        key_points = EXCLUDED.key_points,
        pro_tip = EXCLUDED.pro_tip,
        resources = EXCLUDED.resources,
        position = EXCLUDED.position;

INSERT INTO public.lessons (
        id, module_id, course_id, title, slug, youtube_video_id,
        video_url, duration, free_preview, notes, notes_plain,
        key_points, pro_tip, resources, position
      ) VALUES (
        'lesson.system-design-foundations-observability', 'system-design-foundations-module-4', 'course.system-design-foundations',
        'Observability: logs, metrics, traces', 'system-design-foundations-observability', 'aJpzr8648XE',
        'https://www.youtube.com/watch?v=aJpzr8648XE', 489, false, '[{"_type":"block","_key":"system-design-foundations-observability-intro","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"system-design-foundations-observability-intro-span","text":"Metrics tell you something is wrong, traces tell you where, logs tell you why. You need all three, and they need to share request ids.","marks":[]}]},{"_type":"block","_key":"system-design-foundations-observability-h2","style":"h2","markDefs":[],"children":[{"_type":"span","_key":"system-design-foundations-observability-h2-span","text":"What this lesson covers","marks":[]}]},{"_type":"block","_key":"system-design-foundations-observability-point-0","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"system-design-foundations-observability-point-0-span","text":"Instrument the three signals and correlate them","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"system-design-foundations-observability-point-1","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"system-design-foundations-observability-point-1-span","text":"Alert on symptoms users feel, not on causes","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"system-design-foundations-observability-point-2","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"system-design-foundations-observability-point-2-span","text":"Trace a request across service boundaries","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"system-design-foundations-observability-outro","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"system-design-foundations-observability-outro-span","text":"This lesson sits in Reliability and Operations, part of System Design Foundations. It assumes what came before it and leads directly into the next lesson in the module.","marks":[]}]}]'::jsonb,
        'Metrics tell you something is wrong, traces tell you where, logs tell you why. You need all three, and they need to share request ids.

What this lesson covers

Instrument the three signals and correlate them

Alert on symptoms users feel, not on causes

Trace a request across service boundaries

This lesson sits in Reliability and Operations, part of System Design Foundations. It assumes what came before it and leads directly into the next lesson in the module.', '["Instrument the three signals and correlate them","Alert on symptoms users feel, not on causes","Trace a request across service boundaries"]'::jsonb, '',
        '[{"_type":"resource","_key":"system-design-foundations-observability-docs","type":"link","title":"AWS Architecture Center","description":"The official reference for the tools used in this lesson.","url":"https://aws.amazon.com/architecture/"}]'::jsonb, 1
      ) ON CONFLICT (id) DO UPDATE SET
        module_id = EXCLUDED.module_id,
        course_id = EXCLUDED.course_id,
        title = EXCLUDED.title,
        slug = EXCLUDED.slug,
        youtube_video_id = EXCLUDED.youtube_video_id,
        video_url = EXCLUDED.video_url,
        duration = EXCLUDED.duration,
        free_preview = EXCLUDED.free_preview,
        notes = EXCLUDED.notes,
        notes_plain = EXCLUDED.notes_plain,
        key_points = EXCLUDED.key_points,
        pro_tip = EXCLUDED.pro_tip,
        resources = EXCLUDED.resources,
        position = EXCLUDED.position;

INSERT INTO public.lessons (
        id, module_id, course_id, title, slug, youtube_video_id,
        video_url, duration, free_preview, notes, notes_plain,
        key_points, pro_tip, resources, position
      ) VALUES (
        'lesson.system-design-foundations-failure-modes-and-timeouts', 'system-design-foundations-module-4', 'course.system-design-foundations',
        'Timeouts, retries, and circuit breakers', 'system-design-foundations-failure-modes-and-timeouts', 'nzeKH7moGfo',
        'https://www.youtube.com/watch?v=nzeKH7moGfo', 254, false, '[{"_type":"block","_key":"system-design-foundations-failure-modes-and-timeouts-intro","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"system-design-foundations-failure-modes-and-timeout-0055d18c","text":"A dependency that hangs is worse than one that fails. Timeouts convert hanging into failing, and circuit breakers stop failure spreading.","marks":[]}]},{"_type":"block","_key":"system-design-foundations-failure-modes-and-timeouts-h2","style":"h2","markDefs":[],"children":[{"_type":"span","_key":"system-design-foundations-failure-modes-and-timeouts-h2-span","text":"What this lesson covers","marks":[]}]},{"_type":"block","_key":"system-design-foundations-failure-modes-and-timeouts-point-0","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"system-design-foundations-failure-modes-and-timeout-bf99be00","text":"Set timeouts on every outbound call","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"system-design-foundations-failure-modes-and-timeouts-point-1","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"system-design-foundations-failure-modes-and-timeout-16d4c428","text":"Break the circuit when a dependency is clearly down","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"system-design-foundations-failure-modes-and-timeouts-point-2","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"system-design-foundations-failure-modes-and-timeout-9da806b6","text":"Degrade gracefully instead of cascading","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"system-design-foundations-failure-modes-and-timeouts-outro","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"system-design-foundations-failure-modes-and-timeout-61ca00ba","text":"This lesson sits in Reliability and Operations, part of System Design Foundations. It assumes what came before it and leads directly into the next lesson in the module.","marks":[]}]}]'::jsonb,
        'A dependency that hangs is worse than one that fails. Timeouts convert hanging into failing, and circuit breakers stop failure spreading.

What this lesson covers

Set timeouts on every outbound call

Break the circuit when a dependency is clearly down

Degrade gracefully instead of cascading

This lesson sits in Reliability and Operations, part of System Design Foundations. It assumes what came before it and leads directly into the next lesson in the module.', '["Set timeouts on every outbound call","Break the circuit when a dependency is clearly down","Degrade gracefully instead of cascading"]'::jsonb, '',
        '[{"_type":"resource","_key":"system-design-foundations-failure-modes-and-timeouts-docs","type":"link","title":"AWS Architecture Center","description":"The official reference for the tools used in this lesson.","url":"https://aws.amazon.com/architecture/"}]'::jsonb, 2
      ) ON CONFLICT (id) DO UPDATE SET
        module_id = EXCLUDED.module_id,
        course_id = EXCLUDED.course_id,
        title = EXCLUDED.title,
        slug = EXCLUDED.slug,
        youtube_video_id = EXCLUDED.youtube_video_id,
        video_url = EXCLUDED.video_url,
        duration = EXCLUDED.duration,
        free_preview = EXCLUDED.free_preview,
        notes = EXCLUDED.notes,
        notes_plain = EXCLUDED.notes_plain,
        key_points = EXCLUDED.key_points,
        pro_tip = EXCLUDED.pro_tip,
        resources = EXCLUDED.resources,
        position = EXCLUDED.position;

INSERT INTO public.lessons (
        id, module_id, course_id, title, slug, youtube_video_id,
        video_url, duration, free_preview, notes, notes_plain,
        key_points, pro_tip, resources, position
      ) VALUES (
        'lesson.system-design-foundations-capacity-estimation', 'system-design-foundations-module-4', 'course.system-design-foundations',
        'Capacity estimation', 'system-design-foundations-capacity-estimation', 'UC5xf8FbdJc',
        'https://www.youtube.com/watch?v=UC5xf8FbdJc', 512, false, '[{"_type":"block","_key":"system-design-foundations-capacity-estimation-intro","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"system-design-foundations-capacity-estimation-intro-span","text":"Rough arithmetic on requests, payload sizes, and growth turns opinions into a design you can defend in a review.","marks":[]}]},{"_type":"block","_key":"system-design-foundations-capacity-estimation-h2","style":"h2","markDefs":[],"children":[{"_type":"span","_key":"system-design-foundations-capacity-estimation-h2-span","text":"What this lesson covers","marks":[]}]},{"_type":"block","_key":"system-design-foundations-capacity-estimation-point-0","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"system-design-foundations-capacity-estimation-point-0-span","text":"Estimate throughput, storage, and bandwidth","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"system-design-foundations-capacity-estimation-point-1","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"system-design-foundations-capacity-estimation-point-1-span","text":"Size for peak, not for average","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"system-design-foundations-capacity-estimation-point-2","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"system-design-foundations-capacity-estimation-point-2-span","text":"Sanity check a design against the numbers","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"system-design-foundations-capacity-estimation-outro","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"system-design-foundations-capacity-estimation-outro-span","text":"This lesson sits in Reliability and Operations, part of System Design Foundations. It assumes what came before it and leads directly into the next lesson in the module.","marks":[]}]}]'::jsonb,
        'Rough arithmetic on requests, payload sizes, and growth turns opinions into a design you can defend in a review.

What this lesson covers

Estimate throughput, storage, and bandwidth

Size for peak, not for average

Sanity check a design against the numbers

This lesson sits in Reliability and Operations, part of System Design Foundations. It assumes what came before it and leads directly into the next lesson in the module.', '["Estimate throughput, storage, and bandwidth","Size for peak, not for average","Sanity check a design against the numbers"]'::jsonb, '',
        '[{"_type":"resource","_key":"system-design-foundations-capacity-estimation-docs","type":"link","title":"AWS Architecture Center","description":"The official reference for the tools used in this lesson.","url":"https://aws.amazon.com/architecture/"}]'::jsonb, 3
      ) ON CONFLICT (id) DO UPDATE SET
        module_id = EXCLUDED.module_id,
        course_id = EXCLUDED.course_id,
        title = EXCLUDED.title,
        slug = EXCLUDED.slug,
        youtube_video_id = EXCLUDED.youtube_video_id,
        video_url = EXCLUDED.video_url,
        duration = EXCLUDED.duration,
        free_preview = EXCLUDED.free_preview,
        notes = EXCLUDED.notes,
        notes_plain = EXCLUDED.notes_plain,
        key_points = EXCLUDED.key_points,
        pro_tip = EXCLUDED.pro_tip,
        resources = EXCLUDED.resources,
        position = EXCLUDED.position;

INSERT INTO public.lessons (
        id, module_id, course_id, title, slug, youtube_video_id,
        video_url, duration, free_preview, notes, notes_plain,
        key_points, pro_tip, resources, position
      ) VALUES (
        'lesson.postgresql-for-developers-select-and-joins', 'postgresql-for-developers-module-1', 'course.postgresql-for-developers',
        'SELECT and joins', 'postgresql-for-developers-select-and-joins', 'G3lJAxg1cy8',
        'https://www.youtube.com/watch?v=G3lJAxg1cy8', 304, true, '[{"_type":"block","_key":"postgresql-for-developers-select-and-joins-intro","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"postgresql-for-developers-select-and-joins-intro-span","text":"Joins combine rows across tables, and the join type decides what happens to the rows with no match. Most wrong result sets are a join type mistake.","marks":[]}]},{"_type":"block","_key":"postgresql-for-developers-select-and-joins-h2","style":"h2","markDefs":[],"children":[{"_type":"span","_key":"postgresql-for-developers-select-and-joins-h2-span","text":"What this lesson covers","marks":[]}]},{"_type":"block","_key":"postgresql-for-developers-select-and-joins-point-0","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"postgresql-for-developers-select-and-joins-point-0-span","text":"Choose between inner, left, right, and full joins","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"postgresql-for-developers-select-and-joins-point-1","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"postgresql-for-developers-select-and-joins-point-1-span","text":"Join on the right keys and avoid accidental fan-out","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"postgresql-for-developers-select-and-joins-point-2","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"postgresql-for-developers-select-and-joins-point-2-span","text":"Filter in WHERE versus in the join condition","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"postgresql-for-developers-select-and-joins-outro","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"postgresql-for-developers-select-and-joins-outro-span","text":"This lesson sits in SQL Essentials, part of PostgreSQL for Developers. It assumes what came before it and leads directly into the next lesson in the module.","marks":[]}]}]'::jsonb,
        'Joins combine rows across tables, and the join type decides what happens to the rows with no match. Most wrong result sets are a join type mistake.

What this lesson covers

Choose between inner, left, right, and full joins

Join on the right keys and avoid accidental fan-out

Filter in WHERE versus in the join condition

This lesson sits in SQL Essentials, part of PostgreSQL for Developers. It assumes what came before it and leads directly into the next lesson in the module.', '["Choose between inner, left, right, and full joins","Join on the right keys and avoid accidental fan-out","Filter in WHERE versus in the join condition"]'::jsonb, '',
        '[{"_type":"resource","_key":"postgresql-for-developers-select-and-joins-docs","type":"link","title":"PostgreSQL documentation","description":"The official reference for the tools used in this lesson.","url":"https://www.postgresql.org/docs/current/"}]'::jsonb, 1
      ) ON CONFLICT (id) DO UPDATE SET
        module_id = EXCLUDED.module_id,
        course_id = EXCLUDED.course_id,
        title = EXCLUDED.title,
        slug = EXCLUDED.slug,
        youtube_video_id = EXCLUDED.youtube_video_id,
        video_url = EXCLUDED.video_url,
        duration = EXCLUDED.duration,
        free_preview = EXCLUDED.free_preview,
        notes = EXCLUDED.notes,
        notes_plain = EXCLUDED.notes_plain,
        key_points = EXCLUDED.key_points,
        pro_tip = EXCLUDED.pro_tip,
        resources = EXCLUDED.resources,
        position = EXCLUDED.position;

INSERT INTO public.lessons (
        id, module_id, course_id, title, slug, youtube_video_id,
        video_url, duration, free_preview, notes, notes_plain,
        key_points, pro_tip, resources, position
      ) VALUES (
        'lesson.postgresql-for-developers-aggregates-and-grouping', 'postgresql-for-developers-module-1', 'course.postgresql-for-developers',
        'Aggregates and GROUP BY', 'postgresql-for-developers-aggregates-and-grouping', 'nNrgRVIzeHg',
        'https://www.youtube.com/watch?v=nNrgRVIzeHg', 360, false, '[{"_type":"block","_key":"postgresql-for-developers-aggregates-and-grouping-intro","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"postgresql-for-developers-aggregates-and-grouping-intro-span","text":"Aggregation collapses rows into summaries. WHERE filters before grouping and HAVING after — mixing them up is the classic bug.","marks":[]}]},{"_type":"block","_key":"postgresql-for-developers-aggregates-and-grouping-h2","style":"h2","markDefs":[],"children":[{"_type":"span","_key":"postgresql-for-developers-aggregates-and-grouping-h2-span","text":"What this lesson covers","marks":[]}]},{"_type":"block","_key":"postgresql-for-developers-aggregates-and-grouping-point-0","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"postgresql-for-developers-aggregates-and-grouping-p-a04c6b1e","text":"Aggregate with count, sum, avg, min, and max","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"postgresql-for-developers-aggregates-and-grouping-point-1","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"postgresql-for-developers-aggregates-and-grouping-p-e108e22d","text":"Group correctly and know what must be in GROUP BY","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"postgresql-for-developers-aggregates-and-grouping-point-2","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"postgresql-for-developers-aggregates-and-grouping-p-399ee8f8","text":"Filter groups with HAVING, rows with WHERE","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"postgresql-for-developers-aggregates-and-grouping-outro","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"postgresql-for-developers-aggregates-and-grouping-outro-span","text":"This lesson sits in SQL Essentials, part of PostgreSQL for Developers. It assumes what came before it and leads directly into the next lesson in the module.","marks":[]}]}]'::jsonb,
        'Aggregation collapses rows into summaries. WHERE filters before grouping and HAVING after — mixing them up is the classic bug.

What this lesson covers

Aggregate with count, sum, avg, min, and max

Group correctly and know what must be in GROUP BY

Filter groups with HAVING, rows with WHERE

This lesson sits in SQL Essentials, part of PostgreSQL for Developers. It assumes what came before it and leads directly into the next lesson in the module.', '["Aggregate with count, sum, avg, min, and max","Group correctly and know what must be in GROUP BY","Filter groups with HAVING, rows with WHERE"]'::jsonb, '',
        '[{"_type":"resource","_key":"postgresql-for-developers-aggregates-and-grouping-docs","type":"link","title":"PostgreSQL documentation","description":"The official reference for the tools used in this lesson.","url":"https://www.postgresql.org/docs/current/"}]'::jsonb, 2
      ) ON CONFLICT (id) DO UPDATE SET
        module_id = EXCLUDED.module_id,
        course_id = EXCLUDED.course_id,
        title = EXCLUDED.title,
        slug = EXCLUDED.slug,
        youtube_video_id = EXCLUDED.youtube_video_id,
        video_url = EXCLUDED.video_url,
        duration = EXCLUDED.duration,
        free_preview = EXCLUDED.free_preview,
        notes = EXCLUDED.notes,
        notes_plain = EXCLUDED.notes_plain,
        key_points = EXCLUDED.key_points,
        pro_tip = EXCLUDED.pro_tip,
        resources = EXCLUDED.resources,
        position = EXCLUDED.position;

INSERT INTO public.lessons (
        id, module_id, course_id, title, slug, youtube_video_id,
        video_url, duration, free_preview, notes, notes_plain,
        key_points, pro_tip, resources, position
      ) VALUES (
        'lesson.postgresql-for-developers-ctes-and-window-functions', 'postgresql-for-developers-module-1', 'course.postgresql-for-developers',
        'CTEs and window functions', 'postgresql-for-developers-ctes-and-window-functions', 'rIcB4zMYMas',
        'https://www.youtube.com/watch?v=rIcB4zMYMas', 472, false, '[{"_type":"block","_key":"postgresql-for-developers-ctes-and-window-functions-intro","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"postgresql-for-developers-ctes-and-window-functions-c774d695","text":"CTEs make a long query readable; window functions compute across related rows without collapsing them. Running totals and rankings stop being hard.","marks":[]}]},{"_type":"block","_key":"postgresql-for-developers-ctes-and-window-functions-h2","style":"h2","markDefs":[],"children":[{"_type":"span","_key":"postgresql-for-developers-ctes-and-window-functions-h2-span","text":"What this lesson covers","marks":[]}]},{"_type":"block","_key":"postgresql-for-developers-ctes-and-window-functions-point-0","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"postgresql-for-developers-ctes-and-window-functions-0dbbefb5","text":"Break a complex query into named CTEs","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"postgresql-for-developers-ctes-and-window-functions-point-1","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"postgresql-for-developers-ctes-and-window-functions-973480e8","text":"Rank and number rows within partitions","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"postgresql-for-developers-ctes-and-window-functions-point-2","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"postgresql-for-developers-ctes-and-window-functions-ef67adf7","text":"Compute running totals and row-to-row differences","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"postgresql-for-developers-ctes-and-window-functions-outro","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"postgresql-for-developers-ctes-and-window-functions-50b010fe","text":"This lesson sits in SQL Essentials, part of PostgreSQL for Developers. It assumes what came before it and leads directly into the next lesson in the module.","marks":[]}]}]'::jsonb,
        'CTEs make a long query readable; window functions compute across related rows without collapsing them. Running totals and rankings stop being hard.

What this lesson covers

Break a complex query into named CTEs

Rank and number rows within partitions

Compute running totals and row-to-row differences

This lesson sits in SQL Essentials, part of PostgreSQL for Developers. It assumes what came before it and leads directly into the next lesson in the module.', '["Break a complex query into named CTEs","Rank and number rows within partitions","Compute running totals and row-to-row differences"]'::jsonb, 'When you catch yourself writing a subquery inside a subquery, a CTE will make it readable.',
        '[{"_type":"resource","_key":"postgresql-for-developers-ctes-and-window-functions-docs","type":"link","title":"PostgreSQL documentation","description":"The official reference for the tools used in this lesson.","url":"https://www.postgresql.org/docs/current/"}]'::jsonb, 3
      ) ON CONFLICT (id) DO UPDATE SET
        module_id = EXCLUDED.module_id,
        course_id = EXCLUDED.course_id,
        title = EXCLUDED.title,
        slug = EXCLUDED.slug,
        youtube_video_id = EXCLUDED.youtube_video_id,
        video_url = EXCLUDED.video_url,
        duration = EXCLUDED.duration,
        free_preview = EXCLUDED.free_preview,
        notes = EXCLUDED.notes,
        notes_plain = EXCLUDED.notes_plain,
        key_points = EXCLUDED.key_points,
        pro_tip = EXCLUDED.pro_tip,
        resources = EXCLUDED.resources,
        position = EXCLUDED.position;

INSERT INTO public.lessons (
        id, module_id, course_id, title, slug, youtube_video_id,
        video_url, duration, free_preview, notes, notes_plain,
        key_points, pro_tip, resources, position
      ) VALUES (
        'lesson.postgresql-for-developers-normalization', 'postgresql-for-developers-module-2', 'course.postgresql-for-developers',
        'Normalisation and when to break it', 'postgresql-for-developers-normalization', 'FzVCGou8SMA',
        'https://www.youtube.com/watch?v=FzVCGou8SMA', 213, false, '[{"_type":"block","_key":"postgresql-for-developers-normalization-intro","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"postgresql-for-developers-normalization-intro-span","text":"Normalising removes duplicated truth. Denormalising trades that safety for read speed, and should be a decision rather than an accident.","marks":[]}]},{"_type":"block","_key":"postgresql-for-developers-normalization-h2","style":"h2","markDefs":[],"children":[{"_type":"span","_key":"postgresql-for-developers-normalization-h2-span","text":"What this lesson covers","marks":[]}]},{"_type":"block","_key":"postgresql-for-developers-normalization-point-0","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"postgresql-for-developers-normalization-point-0-span","text":"Remove duplicated data and update anomalies","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"postgresql-for-developers-normalization-point-1","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"postgresql-for-developers-normalization-point-1-span","text":"Recognise when denormalisation is justified","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"postgresql-for-developers-normalization-point-2","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"postgresql-for-developers-normalization-point-2-span","text":"Model many-to-many relationships properly","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"postgresql-for-developers-normalization-outro","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"postgresql-for-developers-normalization-outro-span","text":"This lesson sits in Schema Design, part of PostgreSQL for Developers. It assumes what came before it and leads directly into the next lesson in the module.","marks":[]}]}]'::jsonb,
        'Normalising removes duplicated truth. Denormalising trades that safety for read speed, and should be a decision rather than an accident.

What this lesson covers

Remove duplicated data and update anomalies

Recognise when denormalisation is justified

Model many-to-many relationships properly

This lesson sits in Schema Design, part of PostgreSQL for Developers. It assumes what came before it and leads directly into the next lesson in the module.', '["Remove duplicated data and update anomalies","Recognise when denormalisation is justified","Model many-to-many relationships properly"]'::jsonb, '',
        '[{"_type":"resource","_key":"postgresql-for-developers-normalization-docs","type":"link","title":"PostgreSQL documentation","description":"The official reference for the tools used in this lesson.","url":"https://www.postgresql.org/docs/current/"}]'::jsonb, 1
      ) ON CONFLICT (id) DO UPDATE SET
        module_id = EXCLUDED.module_id,
        course_id = EXCLUDED.course_id,
        title = EXCLUDED.title,
        slug = EXCLUDED.slug,
        youtube_video_id = EXCLUDED.youtube_video_id,
        video_url = EXCLUDED.video_url,
        duration = EXCLUDED.duration,
        free_preview = EXCLUDED.free_preview,
        notes = EXCLUDED.notes,
        notes_plain = EXCLUDED.notes_plain,
        key_points = EXCLUDED.key_points,
        pro_tip = EXCLUDED.pro_tip,
        resources = EXCLUDED.resources,
        position = EXCLUDED.position;

INSERT INTO public.lessons (
        id, module_id, course_id, title, slug, youtube_video_id,
        video_url, duration, free_preview, notes, notes_plain,
        key_points, pro_tip, resources, position
      ) VALUES (
        'lesson.postgresql-for-developers-constraints-and-keys', 'postgresql-for-developers-module-2', 'course.postgresql-for-developers',
        'Constraints, keys, and integrity', 'postgresql-for-developers-constraints-and-keys', '5kiMg7GXAsY',
        'https://www.youtube.com/watch?v=5kiMg7GXAsY', 233, false, '[{"_type":"block","_key":"postgresql-for-developers-constraints-and-keys-intro","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"postgresql-for-developers-constraints-and-keys-intro-span","text":"Constraints are guarantees the database keeps even when a buggy deploy does not. Foreign keys, uniqueness, and checks belong in the schema.","marks":[]}]},{"_type":"block","_key":"postgresql-for-developers-constraints-and-keys-h2","style":"h2","markDefs":[],"children":[{"_type":"span","_key":"postgresql-for-developers-constraints-and-keys-h2-span","text":"What this lesson covers","marks":[]}]},{"_type":"block","_key":"postgresql-for-developers-constraints-and-keys-point-0","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"postgresql-for-developers-constraints-and-keys-point-0-span","text":"Enforce relationships with foreign keys","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"postgresql-for-developers-constraints-and-keys-point-1","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"postgresql-for-developers-constraints-and-keys-point-1-span","text":"Use unique and check constraints as invariants","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"postgresql-for-developers-constraints-and-keys-point-2","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"postgresql-for-developers-constraints-and-keys-point-2-span","text":"Choose delete behaviour deliberately","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"postgresql-for-developers-constraints-and-keys-outro","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"postgresql-for-developers-constraints-and-keys-outro-span","text":"This lesson sits in Schema Design, part of PostgreSQL for Developers. It assumes what came before it and leads directly into the next lesson in the module.","marks":[]}]}]'::jsonb,
        'Constraints are guarantees the database keeps even when a buggy deploy does not. Foreign keys, uniqueness, and checks belong in the schema.

What this lesson covers

Enforce relationships with foreign keys

Use unique and check constraints as invariants

Choose delete behaviour deliberately

This lesson sits in Schema Design, part of PostgreSQL for Developers. It assumes what came before it and leads directly into the next lesson in the module.', '["Enforce relationships with foreign keys","Use unique and check constraints as invariants","Choose delete behaviour deliberately"]'::jsonb, '',
        '[{"_type":"resource","_key":"postgresql-for-developers-constraints-and-keys-docs","type":"link","title":"PostgreSQL documentation","description":"The official reference for the tools used in this lesson.","url":"https://www.postgresql.org/docs/current/"}]'::jsonb, 2
      ) ON CONFLICT (id) DO UPDATE SET
        module_id = EXCLUDED.module_id,
        course_id = EXCLUDED.course_id,
        title = EXCLUDED.title,
        slug = EXCLUDED.slug,
        youtube_video_id = EXCLUDED.youtube_video_id,
        video_url = EXCLUDED.video_url,
        duration = EXCLUDED.duration,
        free_preview = EXCLUDED.free_preview,
        notes = EXCLUDED.notes,
        notes_plain = EXCLUDED.notes_plain,
        key_points = EXCLUDED.key_points,
        pro_tip = EXCLUDED.pro_tip,
        resources = EXCLUDED.resources,
        position = EXCLUDED.position;

INSERT INTO public.lessons (
        id, module_id, course_id, title, slug, youtube_video_id,
        video_url, duration, free_preview, notes, notes_plain,
        key_points, pro_tip, resources, position
      ) VALUES (
        'lesson.postgresql-for-developers-data-types-and-jsonb', 'postgresql-for-developers-module-2', 'course.postgresql-for-developers',
        'Data types and JSONB', 'postgresql-for-developers-data-types-and-jsonb', 'PZFiThbuTFg',
        'https://www.youtube.com/watch?v=PZFiThbuTFg', 754, false, '[{"_type":"block","_key":"postgresql-for-developers-data-types-and-jsonb-intro","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"postgresql-for-developers-data-types-and-jsonb-intro-span","text":"Postgres has rich types, and JSONB for the genuinely unstructured remainder. Reaching for JSONB too early throws away every guarantee above.","marks":[]}]},{"_type":"block","_key":"postgresql-for-developers-data-types-and-jsonb-h2","style":"h2","markDefs":[],"children":[{"_type":"span","_key":"postgresql-for-developers-data-types-and-jsonb-h2-span","text":"What this lesson covers","marks":[]}]},{"_type":"block","_key":"postgresql-for-developers-data-types-and-jsonb-point-0","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"postgresql-for-developers-data-types-and-jsonb-point-0-span","text":"Pick precise types for time, money, and identifiers","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"postgresql-for-developers-data-types-and-jsonb-point-1","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"postgresql-for-developers-data-types-and-jsonb-point-1-span","text":"Use JSONB for genuinely variable data only","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"postgresql-for-developers-data-types-and-jsonb-point-2","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"postgresql-for-developers-data-types-and-jsonb-point-2-span","text":"Index inside a JSONB column when you must query it","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"postgresql-for-developers-data-types-and-jsonb-outro","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"postgresql-for-developers-data-types-and-jsonb-outro-span","text":"This lesson sits in Schema Design, part of PostgreSQL for Developers. It assumes what came before it and leads directly into the next lesson in the module.","marks":[]}]}]'::jsonb,
        'Postgres has rich types, and JSONB for the genuinely unstructured remainder. Reaching for JSONB too early throws away every guarantee above.

What this lesson covers

Pick precise types for time, money, and identifiers

Use JSONB for genuinely variable data only

Index inside a JSONB column when you must query it

This lesson sits in Schema Design, part of PostgreSQL for Developers. It assumes what came before it and leads directly into the next lesson in the module.', '["Pick precise types for time, money, and identifiers","Use JSONB for genuinely variable data only","Index inside a JSONB column when you must query it"]'::jsonb, 'JSONB is for data whose shape you genuinely cannot know. It is not a shortcut past schema design.',
        '[{"_type":"resource","_key":"postgresql-for-developers-data-types-and-jsonb-docs","type":"link","title":"PostgreSQL documentation","description":"The official reference for the tools used in this lesson.","url":"https://www.postgresql.org/docs/current/"}]'::jsonb, 3
      ) ON CONFLICT (id) DO UPDATE SET
        module_id = EXCLUDED.module_id,
        course_id = EXCLUDED.course_id,
        title = EXCLUDED.title,
        slug = EXCLUDED.slug,
        youtube_video_id = EXCLUDED.youtube_video_id,
        video_url = EXCLUDED.video_url,
        duration = EXCLUDED.duration,
        free_preview = EXCLUDED.free_preview,
        notes = EXCLUDED.notes,
        notes_plain = EXCLUDED.notes_plain,
        key_points = EXCLUDED.key_points,
        pro_tip = EXCLUDED.pro_tip,
        resources = EXCLUDED.resources,
        position = EXCLUDED.position;

INSERT INTO public.lessons (
        id, module_id, course_id, title, slug, youtube_video_id,
        video_url, duration, free_preview, notes, notes_plain,
        key_points, pro_tip, resources, position
      ) VALUES (
        'lesson.postgresql-for-developers-indexes', 'postgresql-for-developers-module-3', 'course.postgresql-for-developers',
        'How indexes work', 'postgresql-for-developers-indexes', 'NI9wYuVIYcA',
        'https://www.youtube.com/watch?v=NI9wYuVIYcA', 273, false, '[{"_type":"block","_key":"postgresql-for-developers-indexes-intro","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"postgresql-for-developers-indexes-intro-span","text":"An index is a sorted structure the planner may choose to use. Column order in a composite index decides which queries it can serve.","marks":[]}]},{"_type":"block","_key":"postgresql-for-developers-indexes-h2","style":"h2","markDefs":[],"children":[{"_type":"span","_key":"postgresql-for-developers-indexes-h2-span","text":"What this lesson covers","marks":[]}]},{"_type":"block","_key":"postgresql-for-developers-indexes-point-0","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"postgresql-for-developers-indexes-point-0-span","text":"Understand B-tree indexes and column order","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"postgresql-for-developers-indexes-point-1","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"postgresql-for-developers-indexes-point-1-span","text":"Add partial and expression indexes where they fit","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"postgresql-for-developers-indexes-point-2","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"postgresql-for-developers-indexes-point-2-span","text":"Weigh the write cost of every index you add","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"postgresql-for-developers-indexes-outro","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"postgresql-for-developers-indexes-outro-span","text":"This lesson sits in Query Performance, part of PostgreSQL for Developers. It assumes what came before it and leads directly into the next lesson in the module.","marks":[]}]}]'::jsonb,
        'An index is a sorted structure the planner may choose to use. Column order in a composite index decides which queries it can serve.

What this lesson covers

Understand B-tree indexes and column order

Add partial and expression indexes where they fit

Weigh the write cost of every index you add

This lesson sits in Query Performance, part of PostgreSQL for Developers. It assumes what came before it and leads directly into the next lesson in the module.', '["Understand B-tree indexes and column order","Add partial and expression indexes where they fit","Weigh the write cost of every index you add"]'::jsonb, '',
        '[{"_type":"resource","_key":"postgresql-for-developers-indexes-docs","type":"link","title":"PostgreSQL documentation","description":"The official reference for the tools used in this lesson.","url":"https://www.postgresql.org/docs/current/"}]'::jsonb, 1
      ) ON CONFLICT (id) DO UPDATE SET
        module_id = EXCLUDED.module_id,
        course_id = EXCLUDED.course_id,
        title = EXCLUDED.title,
        slug = EXCLUDED.slug,
        youtube_video_id = EXCLUDED.youtube_video_id,
        video_url = EXCLUDED.video_url,
        duration = EXCLUDED.duration,
        free_preview = EXCLUDED.free_preview,
        notes = EXCLUDED.notes,
        notes_plain = EXCLUDED.notes_plain,
        key_points = EXCLUDED.key_points,
        pro_tip = EXCLUDED.pro_tip,
        resources = EXCLUDED.resources,
        position = EXCLUDED.position;

INSERT INTO public.lessons (
        id, module_id, course_id, title, slug, youtube_video_id,
        video_url, duration, free_preview, notes, notes_plain,
        key_points, pro_tip, resources, position
      ) VALUES (
        'lesson.postgresql-for-developers-explain-analyze', 'postgresql-for-developers-module-3', 'course.postgresql-for-developers',
        'Reading EXPLAIN ANALYZE', 'postgresql-for-developers-explain-analyze', 'P7EUFtjeAmI',
        'https://www.youtube.com/watch?v=P7EUFtjeAmI', 617, false, '[{"_type":"block","_key":"postgresql-for-developers-explain-analyze-intro","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"postgresql-for-developers-explain-analyze-intro-span","text":"The plan tells you what the database did and what it expected. A large gap between estimated and actual rows is usually the real problem.","marks":[]}]},{"_type":"block","_key":"postgresql-for-developers-explain-analyze-h2","style":"h2","markDefs":[],"children":[{"_type":"span","_key":"postgresql-for-developers-explain-analyze-h2-span","text":"What this lesson covers","marks":[]}]},{"_type":"block","_key":"postgresql-for-developers-explain-analyze-point-0","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"postgresql-for-developers-explain-analyze-point-0-span","text":"Read a plan from the innermost node outwards","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"postgresql-for-developers-explain-analyze-point-1","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"postgresql-for-developers-explain-analyze-point-1-span","text":"Spot sequential scans that should be index scans","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"postgresql-for-developers-explain-analyze-point-2","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"postgresql-for-developers-explain-analyze-point-2-span","text":"Compare estimated against actual row counts","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"postgresql-for-developers-explain-analyze-outro","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"postgresql-for-developers-explain-analyze-outro-span","text":"This lesson sits in Query Performance, part of PostgreSQL for Developers. It assumes what came before it and leads directly into the next lesson in the module.","marks":[]}]}]'::jsonb,
        'The plan tells you what the database did and what it expected. A large gap between estimated and actual rows is usually the real problem.

What this lesson covers

Read a plan from the innermost node outwards

Spot sequential scans that should be index scans

Compare estimated against actual row counts

This lesson sits in Query Performance, part of PostgreSQL for Developers. It assumes what came before it and leads directly into the next lesson in the module.', '["Read a plan from the innermost node outwards","Spot sequential scans that should be index scans","Compare estimated against actual row counts"]'::jsonb, '',
        '[{"_type":"resource","_key":"postgresql-for-developers-explain-analyze-docs","type":"link","title":"PostgreSQL documentation","description":"The official reference for the tools used in this lesson.","url":"https://www.postgresql.org/docs/current/"}]'::jsonb, 2
      ) ON CONFLICT (id) DO UPDATE SET
        module_id = EXCLUDED.module_id,
        course_id = EXCLUDED.course_id,
        title = EXCLUDED.title,
        slug = EXCLUDED.slug,
        youtube_video_id = EXCLUDED.youtube_video_id,
        video_url = EXCLUDED.video_url,
        duration = EXCLUDED.duration,
        free_preview = EXCLUDED.free_preview,
        notes = EXCLUDED.notes,
        notes_plain = EXCLUDED.notes_plain,
        key_points = EXCLUDED.key_points,
        pro_tip = EXCLUDED.pro_tip,
        resources = EXCLUDED.resources,
        position = EXCLUDED.position;

INSERT INTO public.lessons (
        id, module_id, course_id, title, slug, youtube_video_id,
        video_url, duration, free_preview, notes, notes_plain,
        key_points, pro_tip, resources, position
      ) VALUES (
        'lesson.postgresql-for-developers-query-tuning', 'postgresql-for-developers-module-3', 'course.postgresql-for-developers',
        'Tuning a slow query', 'postgresql-for-developers-query-tuning', 'YON9PliOYFk',
        'https://www.youtube.com/watch?v=YON9PliOYFk', 492, false, '[{"_type":"block","_key":"postgresql-for-developers-query-tuning-intro","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"postgresql-for-developers-query-tuning-intro-span","text":"Rewriting is often better than indexing. Remove the function on the indexed column, cut the rows early, and check the plan again.","marks":[]}]},{"_type":"block","_key":"postgresql-for-developers-query-tuning-h2","style":"h2","markDefs":[],"children":[{"_type":"span","_key":"postgresql-for-developers-query-tuning-h2-span","text":"What this lesson covers","marks":[]}]},{"_type":"block","_key":"postgresql-for-developers-query-tuning-point-0","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"postgresql-for-developers-query-tuning-point-0-span","text":"Rewrite predicates so an index can be used","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"postgresql-for-developers-query-tuning-point-1","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"postgresql-for-developers-query-tuning-point-1-span","text":"Reduce the row count as early as possible","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"postgresql-for-developers-query-tuning-point-2","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"postgresql-for-developers-query-tuning-point-2-span","text":"Verify the improvement with a fresh plan","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"postgresql-for-developers-query-tuning-outro","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"postgresql-for-developers-query-tuning-outro-span","text":"This lesson sits in Query Performance, part of PostgreSQL for Developers. It assumes what came before it and leads directly into the next lesson in the module.","marks":[]}]}]'::jsonb,
        'Rewriting is often better than indexing. Remove the function on the indexed column, cut the rows early, and check the plan again.

What this lesson covers

Rewrite predicates so an index can be used

Reduce the row count as early as possible

Verify the improvement with a fresh plan

This lesson sits in Query Performance, part of PostgreSQL for Developers. It assumes what came before it and leads directly into the next lesson in the module.', '["Rewrite predicates so an index can be used","Reduce the row count as early as possible","Verify the improvement with a fresh plan"]'::jsonb, 'Wrapping an indexed column in a function usually disables the index. Transform the parameter instead.',
        '[{"_type":"resource","_key":"postgresql-for-developers-query-tuning-docs","type":"link","title":"PostgreSQL documentation","description":"The official reference for the tools used in this lesson.","url":"https://www.postgresql.org/docs/current/"}]'::jsonb, 3
      ) ON CONFLICT (id) DO UPDATE SET
        module_id = EXCLUDED.module_id,
        course_id = EXCLUDED.course_id,
        title = EXCLUDED.title,
        slug = EXCLUDED.slug,
        youtube_video_id = EXCLUDED.youtube_video_id,
        video_url = EXCLUDED.video_url,
        duration = EXCLUDED.duration,
        free_preview = EXCLUDED.free_preview,
        notes = EXCLUDED.notes,
        notes_plain = EXCLUDED.notes_plain,
        key_points = EXCLUDED.key_points,
        pro_tip = EXCLUDED.pro_tip,
        resources = EXCLUDED.resources,
        position = EXCLUDED.position;

INSERT INTO public.lessons (
        id, module_id, course_id, title, slug, youtube_video_id,
        video_url, duration, free_preview, notes, notes_plain,
        key_points, pro_tip, resources, position
      ) VALUES (
        'lesson.postgresql-for-developers-transactions-and-isolation', 'postgresql-for-developers-module-4', 'course.postgresql-for-developers',
        'Transactions and isolation levels', 'postgresql-for-developers-transactions-and-isolation', 'G8wDjV0N9tk',
        'https://www.youtube.com/watch?v=G8wDjV0N9tk', 498, false, '[{"_type":"block","_key":"postgresql-for-developers-transactions-and-isolation-intro","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"postgresql-for-developers-transactions-and-isolatio-5ba691b3","text":"Isolation decides which concurrency anomalies you can still see. Read committed is the default, and it permits more than most people assume.","marks":[]}]},{"_type":"block","_key":"postgresql-for-developers-transactions-and-isolation-h2","style":"h2","markDefs":[],"children":[{"_type":"span","_key":"postgresql-for-developers-transactions-and-isolation-h2-span","text":"What this lesson covers","marks":[]}]},{"_type":"block","_key":"postgresql-for-developers-transactions-and-isolation-point-0","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"postgresql-for-developers-transactions-and-isolatio-fdb279db","text":"Keep transactions short and correctly scoped","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"postgresql-for-developers-transactions-and-isolation-point-1","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"postgresql-for-developers-transactions-and-isolatio-6028c561","text":"Compare read committed, repeatable read, and serializable","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"postgresql-for-developers-transactions-and-isolation-point-2","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"postgresql-for-developers-transactions-and-isolatio-2d49ec8e","text":"Avoid deadlocks by ordering access consistently","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"postgresql-for-developers-transactions-and-isolation-outro","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"postgresql-for-developers-transactions-and-isolatio-9369f42a","text":"This lesson sits in Operating Postgres, part of PostgreSQL for Developers. It assumes what came before it and leads directly into the next lesson in the module.","marks":[]}]}]'::jsonb,
        'Isolation decides which concurrency anomalies you can still see. Read committed is the default, and it permits more than most people assume.

What this lesson covers

Keep transactions short and correctly scoped

Compare read committed, repeatable read, and serializable

Avoid deadlocks by ordering access consistently

This lesson sits in Operating Postgres, part of PostgreSQL for Developers. It assumes what came before it and leads directly into the next lesson in the module.', '["Keep transactions short and correctly scoped","Compare read committed, repeatable read, and serializable","Avoid deadlocks by ordering access consistently"]'::jsonb, '',
        '[{"_type":"resource","_key":"postgresql-for-developers-transactions-and-isolation-docs","type":"link","title":"PostgreSQL documentation","description":"The official reference for the tools used in this lesson.","url":"https://www.postgresql.org/docs/current/"}]'::jsonb, 1
      ) ON CONFLICT (id) DO UPDATE SET
        module_id = EXCLUDED.module_id,
        course_id = EXCLUDED.course_id,
        title = EXCLUDED.title,
        slug = EXCLUDED.slug,
        youtube_video_id = EXCLUDED.youtube_video_id,
        video_url = EXCLUDED.video_url,
        duration = EXCLUDED.duration,
        free_preview = EXCLUDED.free_preview,
        notes = EXCLUDED.notes,
        notes_plain = EXCLUDED.notes_plain,
        key_points = EXCLUDED.key_points,
        pro_tip = EXCLUDED.pro_tip,
        resources = EXCLUDED.resources,
        position = EXCLUDED.position;

INSERT INTO public.lessons (
        id, module_id, course_id, title, slug, youtube_video_id,
        video_url, duration, free_preview, notes, notes_plain,
        key_points, pro_tip, resources, position
      ) VALUES (
        'lesson.postgresql-for-developers-migrations', 'postgresql-for-developers-module-4', 'course.postgresql-for-developers',
        'Schema migrations without downtime', 'postgresql-for-developers-migrations', 'mr_J5v398Qo',
        'https://www.youtube.com/watch?v=mr_J5v398Qo', 1893, false, '[{"_type":"block","_key":"postgresql-for-developers-migrations-intro","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"postgresql-for-developers-migrations-intro-span","text":"A migration runs against a live application. Expand, migrate, contract lets you change a schema while both old and new code are running.","marks":[]}]},{"_type":"block","_key":"postgresql-for-developers-migrations-h2","style":"h2","markDefs":[],"children":[{"_type":"span","_key":"postgresql-for-developers-migrations-h2-span","text":"What this lesson covers","marks":[]}]},{"_type":"block","_key":"postgresql-for-developers-migrations-point-0","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"postgresql-for-developers-migrations-point-0-span","text":"Apply the expand, migrate, contract pattern","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"postgresql-for-developers-migrations-point-1","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"postgresql-for-developers-migrations-point-1-span","text":"Avoid locks that block writes on large tables","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"postgresql-for-developers-migrations-point-2","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"postgresql-for-developers-migrations-point-2-span","text":"Make every migration reversible or forward-only on purpose","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"postgresql-for-developers-migrations-outro","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"postgresql-for-developers-migrations-outro-span","text":"This lesson sits in Operating Postgres, part of PostgreSQL for Developers. It assumes what came before it and leads directly into the next lesson in the module.","marks":[]}]}]'::jsonb,
        'A migration runs against a live application. Expand, migrate, contract lets you change a schema while both old and new code are running.

What this lesson covers

Apply the expand, migrate, contract pattern

Avoid locks that block writes on large tables

Make every migration reversible or forward-only on purpose

This lesson sits in Operating Postgres, part of PostgreSQL for Developers. It assumes what came before it and leads directly into the next lesson in the module.', '["Apply the expand, migrate, contract pattern","Avoid locks that block writes on large tables","Make every migration reversible or forward-only on purpose"]'::jsonb, '',
        '[{"_type":"resource","_key":"postgresql-for-developers-migrations-docs","type":"link","title":"PostgreSQL documentation","description":"The official reference for the tools used in this lesson.","url":"https://www.postgresql.org/docs/current/"}]'::jsonb, 2
      ) ON CONFLICT (id) DO UPDATE SET
        module_id = EXCLUDED.module_id,
        course_id = EXCLUDED.course_id,
        title = EXCLUDED.title,
        slug = EXCLUDED.slug,
        youtube_video_id = EXCLUDED.youtube_video_id,
        video_url = EXCLUDED.video_url,
        duration = EXCLUDED.duration,
        free_preview = EXCLUDED.free_preview,
        notes = EXCLUDED.notes,
        notes_plain = EXCLUDED.notes_plain,
        key_points = EXCLUDED.key_points,
        pro_tip = EXCLUDED.pro_tip,
        resources = EXCLUDED.resources,
        position = EXCLUDED.position;

INSERT INTO public.lessons (
        id, module_id, course_id, title, slug, youtube_video_id,
        video_url, duration, free_preview, notes, notes_plain,
        key_points, pro_tip, resources, position
      ) VALUES (
        'lesson.postgresql-for-developers-backups-and-pooling', 'postgresql-for-developers-module-4', 'course.postgresql-for-developers',
        'Backups and connection pooling', 'postgresql-for-developers-backups-and-pooling', '9IcyoLxRAYY',
        'https://www.youtube.com/watch?v=9IcyoLxRAYY', 1872, false, '[{"_type":"block","_key":"postgresql-for-developers-backups-and-pooling-intro","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"postgresql-for-developers-backups-and-pooling-intro-span","text":"A backup you have never restored is a hypothesis. A pooler is what stops a few hundred idle app connections from exhausting the server.","marks":[]}]},{"_type":"block","_key":"postgresql-for-developers-backups-and-pooling-h2","style":"h2","markDefs":[],"children":[{"_type":"span","_key":"postgresql-for-developers-backups-and-pooling-h2-span","text":"What this lesson covers","marks":[]}]},{"_type":"block","_key":"postgresql-for-developers-backups-and-pooling-point-0","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"postgresql-for-developers-backups-and-pooling-point-0-span","text":"Take backups and rehearse a restore","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"postgresql-for-developers-backups-and-pooling-point-1","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"postgresql-for-developers-backups-and-pooling-point-1-span","text":"Understand point-in-time recovery","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"postgresql-for-developers-backups-and-pooling-point-2","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"postgresql-for-developers-backups-and-pooling-point-2-span","text":"Pool connections in front of the database","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"postgresql-for-developers-backups-and-pooling-outro","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"postgresql-for-developers-backups-and-pooling-outro-span","text":"This lesson sits in Operating Postgres, part of PostgreSQL for Developers. It assumes what came before it and leads directly into the next lesson in the module.","marks":[]}]}]'::jsonb,
        'A backup you have never restored is a hypothesis. A pooler is what stops a few hundred idle app connections from exhausting the server.

What this lesson covers

Take backups and rehearse a restore

Understand point-in-time recovery

Pool connections in front of the database

This lesson sits in Operating Postgres, part of PostgreSQL for Developers. It assumes what came before it and leads directly into the next lesson in the module.', '["Take backups and rehearse a restore","Understand point-in-time recovery","Pool connections in front of the database"]'::jsonb, 'An untested backup is not a backup. Restore one on a schedule.',
        '[{"_type":"resource","_key":"postgresql-for-developers-backups-and-pooling-docs","type":"link","title":"PostgreSQL documentation","description":"The official reference for the tools used in this lesson.","url":"https://www.postgresql.org/docs/current/"}]'::jsonb, 3
      ) ON CONFLICT (id) DO UPDATE SET
        module_id = EXCLUDED.module_id,
        course_id = EXCLUDED.course_id,
        title = EXCLUDED.title,
        slug = EXCLUDED.slug,
        youtube_video_id = EXCLUDED.youtube_video_id,
        video_url = EXCLUDED.video_url,
        duration = EXCLUDED.duration,
        free_preview = EXCLUDED.free_preview,
        notes = EXCLUDED.notes,
        notes_plain = EXCLUDED.notes_plain,
        key_points = EXCLUDED.key_points,
        pro_tip = EXCLUDED.pro_tip,
        resources = EXCLUDED.resources,
        position = EXCLUDED.position;

INSERT INTO public.lessons (
        id, module_id, course_id, title, slug, youtube_video_id,
        video_url, duration, free_preview, notes, notes_plain,
        key_points, pro_tip, resources, position
      ) VALUES (
        'lesson.devops-with-docker-and-kubernetes-docker-images-and-dockerfiles', 'devops-with-docker-and-kubernetes-module-1', 'course.devops-with-docker-and-kubernetes',
        'Images, containers, and Dockerfiles', 'devops-with-docker-and-kubernetes-docker-images-and-dockerfiles', 'SnSH8Ht3MIc',
        'https://www.youtube.com/watch?v=SnSH8Ht3MIc', 1100, true, '[{"_type":"block","_key":"devops-with-docker-and-kubernetes-docker-images-and-b3dc00e8","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"devops-with-docker-and-kubernetes-docker-images-and-3629d8c9","text":"An image is a stacked filesystem plus metadata; a container is a running instance of one. Every Dockerfile instruction is a layer.","marks":[]}]},{"_type":"block","_key":"devops-with-docker-and-kubernetes-docker-images-and-3c1154b1","style":"h2","markDefs":[],"children":[{"_type":"span","_key":"devops-with-docker-and-kubernetes-docker-images-and-f9da650f","text":"What this lesson covers","marks":[]}]},{"_type":"block","_key":"devops-with-docker-and-kubernetes-docker-images-and-c1d0d4cd","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"devops-with-docker-and-kubernetes-docker-images-and-87c9b52b","text":"Distinguish an image from a running container","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"devops-with-docker-and-kubernetes-docker-images-and-083793c6","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"devops-with-docker-and-kubernetes-docker-images-and-31b1126b","text":"Write a Dockerfile that builds reproducibly","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"devops-with-docker-and-kubernetes-docker-images-and-cb2267b8","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"devops-with-docker-and-kubernetes-docker-images-and-7a014141","text":"Choose a base image deliberately","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"devops-with-docker-and-kubernetes-docker-images-and-a3913927","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"devops-with-docker-and-kubernetes-docker-images-and-d46d2dfc","text":"This lesson sits in Containers and Images, part of DevOps with Docker and Kubernetes. It assumes what came before it and leads directly into the next lesson in the module.","marks":[]}]}]'::jsonb,
        'An image is a stacked filesystem plus metadata; a container is a running instance of one. Every Dockerfile instruction is a layer.

What this lesson covers

Distinguish an image from a running container

Write a Dockerfile that builds reproducibly

Choose a base image deliberately

This lesson sits in Containers and Images, part of DevOps with Docker and Kubernetes. It assumes what came before it and leads directly into the next lesson in the module.', '["Distinguish an image from a running container","Write a Dockerfile that builds reproducibly","Choose a base image deliberately"]'::jsonb, '',
        '[{"_type":"resource","_key":"devops-with-docker-and-kubernetes-docker-images-and-249cdb84","type":"link","title":"Kubernetes documentation","description":"The official reference for the tools used in this lesson.","url":"https://kubernetes.io/docs/home/"}]'::jsonb, 1
      ) ON CONFLICT (id) DO UPDATE SET
        module_id = EXCLUDED.module_id,
        course_id = EXCLUDED.course_id,
        title = EXCLUDED.title,
        slug = EXCLUDED.slug,
        youtube_video_id = EXCLUDED.youtube_video_id,
        video_url = EXCLUDED.video_url,
        duration = EXCLUDED.duration,
        free_preview = EXCLUDED.free_preview,
        notes = EXCLUDED.notes,
        notes_plain = EXCLUDED.notes_plain,
        key_points = EXCLUDED.key_points,
        pro_tip = EXCLUDED.pro_tip,
        resources = EXCLUDED.resources,
        position = EXCLUDED.position;

INSERT INTO public.lessons (
        id, module_id, course_id, title, slug, youtube_video_id,
        video_url, duration, free_preview, notes, notes_plain,
        key_points, pro_tip, resources, position
      ) VALUES (
        'lesson.devops-with-docker-and-kubernetes-layers-and-build-cache', 'devops-with-docker-and-kubernetes-module-1', 'course.devops-with-docker-and-kubernetes',
        'Layers, caching, and multi-stage builds', 'devops-with-docker-and-kubernetes-layers-and-build-cache', '_Q9KSFUZH0c',
        'https://www.youtube.com/watch?v=_Q9KSFUZH0c', 391, false, '[{"_type":"block","_key":"devops-with-docker-and-kubernetes-layers-and-build-7e6fda87","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"devops-with-docker-and-kubernetes-layers-and-build-fb530e45","text":"Instruction order decides your build time. Copy dependency manifests before source, and use a multi-stage build to leave the toolchain behind.","marks":[]}]},{"_type":"block","_key":"devops-with-docker-and-kubernetes-layers-and-build-cache-h2","style":"h2","markDefs":[],"children":[{"_type":"span","_key":"devops-with-docker-and-kubernetes-layers-and-build-b1026f25","text":"What this lesson covers","marks":[]}]},{"_type":"block","_key":"devops-with-docker-and-kubernetes-layers-and-build-892dd033","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"devops-with-docker-and-kubernetes-layers-and-build-e5fd7c81","text":"Order instructions so the cache survives code changes","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"devops-with-docker-and-kubernetes-layers-and-build-3d9b50a6","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"devops-with-docker-and-kubernetes-layers-and-build-8523dff0","text":"Separate build and runtime with multi-stage builds","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"devops-with-docker-and-kubernetes-layers-and-build-5b9e4761","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"devops-with-docker-and-kubernetes-layers-and-build-15a9f822","text":"Cut image size and shrink the attack surface","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"devops-with-docker-and-kubernetes-layers-and-build-f8bca6ac","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"devops-with-docker-and-kubernetes-layers-and-build-a4caaa06","text":"This lesson sits in Containers and Images, part of DevOps with Docker and Kubernetes. It assumes what came before it and leads directly into the next lesson in the module.","marks":[]}]}]'::jsonb,
        'Instruction order decides your build time. Copy dependency manifests before source, and use a multi-stage build to leave the toolchain behind.

What this lesson covers

Order instructions so the cache survives code changes

Separate build and runtime with multi-stage builds

Cut image size and shrink the attack surface

This lesson sits in Containers and Images, part of DevOps with Docker and Kubernetes. It assumes what came before it and leads directly into the next lesson in the module.', '["Order instructions so the cache survives code changes","Separate build and runtime with multi-stage builds","Cut image size and shrink the attack surface"]'::jsonb, 'Copy your lockfile and install dependencies before copying source. Otherwise every edit invalidates the install layer.',
        '[{"_type":"resource","_key":"devops-with-docker-and-kubernetes-layers-and-build-6fbc38aa","type":"link","title":"Kubernetes documentation","description":"The official reference for the tools used in this lesson.","url":"https://kubernetes.io/docs/home/"}]'::jsonb, 2
      ) ON CONFLICT (id) DO UPDATE SET
        module_id = EXCLUDED.module_id,
        course_id = EXCLUDED.course_id,
        title = EXCLUDED.title,
        slug = EXCLUDED.slug,
        youtube_video_id = EXCLUDED.youtube_video_id,
        video_url = EXCLUDED.video_url,
        duration = EXCLUDED.duration,
        free_preview = EXCLUDED.free_preview,
        notes = EXCLUDED.notes,
        notes_plain = EXCLUDED.notes_plain,
        key_points = EXCLUDED.key_points,
        pro_tip = EXCLUDED.pro_tip,
        resources = EXCLUDED.resources,
        position = EXCLUDED.position;

INSERT INTO public.lessons (
        id, module_id, course_id, title, slug, youtube_video_id,
        video_url, duration, free_preview, notes, notes_plain,
        key_points, pro_tip, resources, position
      ) VALUES (
        'lesson.devops-with-docker-and-kubernetes-docker-compose', 'devops-with-docker-and-kubernetes-module-1', 'course.devops-with-docker-and-kubernetes',
        'Local stacks with Compose', 'devops-with-docker-and-kubernetes-docker-compose', 'iTL3Edxzgug',
        'https://www.youtube.com/watch?v=iTL3Edxzgug', 194, false, '[{"_type":"block","_key":"devops-with-docker-and-kubernetes-docker-compose-intro","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"devops-with-docker-and-kubernetes-docker-compose-intro-span","text":"Compose runs your app together with its database and cache, with one file describing the whole local environment.","marks":[]}]},{"_type":"block","_key":"devops-with-docker-and-kubernetes-docker-compose-h2","style":"h2","markDefs":[],"children":[{"_type":"span","_key":"devops-with-docker-and-kubernetes-docker-compose-h2-span","text":"What this lesson covers","marks":[]}]},{"_type":"block","_key":"devops-with-docker-and-kubernetes-docker-compose-point-0","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"devops-with-docker-and-kubernetes-docker-compose-po-f89a2e11","text":"Define multi-service stacks in one file","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"devops-with-docker-and-kubernetes-docker-compose-point-1","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"devops-with-docker-and-kubernetes-docker-compose-po-ef676074","text":"Wire up networks, volumes, and environment variables","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"devops-with-docker-and-kubernetes-docker-compose-point-2","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"devops-with-docker-and-kubernetes-docker-compose-po-68781280","text":"Keep local configuration close to production","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"devops-with-docker-and-kubernetes-docker-compose-outro","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"devops-with-docker-and-kubernetes-docker-compose-outro-span","text":"This lesson sits in Containers and Images, part of DevOps with Docker and Kubernetes. It assumes what came before it and leads directly into the next lesson in the module.","marks":[]}]}]'::jsonb,
        'Compose runs your app together with its database and cache, with one file describing the whole local environment.

What this lesson covers

Define multi-service stacks in one file

Wire up networks, volumes, and environment variables

Keep local configuration close to production

This lesson sits in Containers and Images, part of DevOps with Docker and Kubernetes. It assumes what came before it and leads directly into the next lesson in the module.', '["Define multi-service stacks in one file","Wire up networks, volumes, and environment variables","Keep local configuration close to production"]'::jsonb, '',
        '[{"_type":"resource","_key":"devops-with-docker-and-kubernetes-docker-compose-docs","type":"link","title":"Kubernetes documentation","description":"The official reference for the tools used in this lesson.","url":"https://kubernetes.io/docs/home/"}]'::jsonb, 3
      ) ON CONFLICT (id) DO UPDATE SET
        module_id = EXCLUDED.module_id,
        course_id = EXCLUDED.course_id,
        title = EXCLUDED.title,
        slug = EXCLUDED.slug,
        youtube_video_id = EXCLUDED.youtube_video_id,
        video_url = EXCLUDED.video_url,
        duration = EXCLUDED.duration,
        free_preview = EXCLUDED.free_preview,
        notes = EXCLUDED.notes,
        notes_plain = EXCLUDED.notes_plain,
        key_points = EXCLUDED.key_points,
        pro_tip = EXCLUDED.pro_tip,
        resources = EXCLUDED.resources,
        position = EXCLUDED.position;

INSERT INTO public.lessons (
        id, module_id, course_id, title, slug, youtube_video_id,
        video_url, duration, free_preview, notes, notes_plain,
        key_points, pro_tip, resources, position
      ) VALUES (
        'lesson.devops-with-docker-and-kubernetes-pods-and-deployments', 'devops-with-docker-and-kubernetes-module-2', 'course.devops-with-docker-and-kubernetes',
        'Pods, ReplicaSets, and Deployments', 'devops-with-docker-and-kubernetes-pods-and-deployments', 'TlHvYWVUZyc',
        'https://www.youtube.com/watch?v=TlHvYWVUZyc', 388, false, '[{"_type":"block","_key":"devops-with-docker-and-kubernetes-pods-and-deployments-intro","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"devops-with-docker-and-kubernetes-pods-and-deployme-2e3afb32","text":"You declare a desired state and the controller works towards it. A Deployment is how you express \"n copies of this, updated this way\".","marks":[]}]},{"_type":"block","_key":"devops-with-docker-and-kubernetes-pods-and-deployments-h2","style":"h2","markDefs":[],"children":[{"_type":"span","_key":"devops-with-docker-and-kubernetes-pods-and-deployme-61b9b3e0","text":"What this lesson covers","marks":[]}]},{"_type":"block","_key":"devops-with-docker-and-kubernetes-pods-and-deployme-7d9dbf23","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"devops-with-docker-and-kubernetes-pods-and-deployme-b295a5c3","text":"Read the pod, ReplicaSet, and Deployment relationship","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"devops-with-docker-and-kubernetes-pods-and-deployme-2eabccb2","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"devops-with-docker-and-kubernetes-pods-and-deployme-a55aa894","text":"Declare desired state and let controllers converge","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"devops-with-docker-and-kubernetes-pods-and-deployme-39ac5110","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"devops-with-docker-and-kubernetes-pods-and-deployme-5323be34","text":"Configure readiness and liveness probes","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"devops-with-docker-and-kubernetes-pods-and-deployments-outro","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"devops-with-docker-and-kubernetes-pods-and-deployme-a38ada3e","text":"This lesson sits in Kubernetes Core Objects, part of DevOps with Docker and Kubernetes. It assumes what came before it and leads directly into the next lesson in the module.","marks":[]}]}]'::jsonb,
        'You declare a desired state and the controller works towards it. A Deployment is how you express "n copies of this, updated this way".

What this lesson covers

Read the pod, ReplicaSet, and Deployment relationship

Declare desired state and let controllers converge

Configure readiness and liveness probes

This lesson sits in Kubernetes Core Objects, part of DevOps with Docker and Kubernetes. It assumes what came before it and leads directly into the next lesson in the module.', '["Read the pod, ReplicaSet, and Deployment relationship","Declare desired state and let controllers converge","Configure readiness and liveness probes"]'::jsonb, '',
        '[{"_type":"resource","_key":"devops-with-docker-and-kubernetes-pods-and-deployments-docs","type":"link","title":"Kubernetes documentation","description":"The official reference for the tools used in this lesson.","url":"https://kubernetes.io/docs/home/"}]'::jsonb, 1
      ) ON CONFLICT (id) DO UPDATE SET
        module_id = EXCLUDED.module_id,
        course_id = EXCLUDED.course_id,
        title = EXCLUDED.title,
        slug = EXCLUDED.slug,
        youtube_video_id = EXCLUDED.youtube_video_id,
        video_url = EXCLUDED.video_url,
        duration = EXCLUDED.duration,
        free_preview = EXCLUDED.free_preview,
        notes = EXCLUDED.notes,
        notes_plain = EXCLUDED.notes_plain,
        key_points = EXCLUDED.key_points,
        pro_tip = EXCLUDED.pro_tip,
        resources = EXCLUDED.resources,
        position = EXCLUDED.position;

INSERT INTO public.lessons (
        id, module_id, course_id, title, slug, youtube_video_id,
        video_url, duration, free_preview, notes, notes_plain,
        key_points, pro_tip, resources, position
      ) VALUES (
        'lesson.devops-with-docker-and-kubernetes-services-and-ingress', 'devops-with-docker-and-kubernetes-module-2', 'course.devops-with-docker-and-kubernetes',
        'Services and ingress', 'devops-with-docker-and-kubernetes-services-and-ingress', 'NPFbYpb0I7w',
        'https://www.youtube.com/watch?v=NPFbYpb0I7w', 341, false, '[{"_type":"block","_key":"devops-with-docker-and-kubernetes-services-and-ingress-intro","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"devops-with-docker-and-kubernetes-services-and-ingr-b61a02d5","text":"Pods come and go, so Services give them a stable address. Ingress is what puts an HTTP route in front of that.","marks":[]}]},{"_type":"block","_key":"devops-with-docker-and-kubernetes-services-and-ingress-h2","style":"h2","markDefs":[],"children":[{"_type":"span","_key":"devops-with-docker-and-kubernetes-services-and-ingr-365711e4","text":"What this lesson covers","marks":[]}]},{"_type":"block","_key":"devops-with-docker-and-kubernetes-services-and-ingr-7fefc0ca","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"devops-with-docker-and-kubernetes-services-and-ingr-36c50472","text":"Expose pods with a stable service address","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"devops-with-docker-and-kubernetes-services-and-ingr-07afb31e","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"devops-with-docker-and-kubernetes-services-and-ingr-41350034","text":"Compare ClusterIP, NodePort, and LoadBalancer","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"devops-with-docker-and-kubernetes-services-and-ingr-c7ba2fb7","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"devops-with-docker-and-kubernetes-services-and-ingr-0c13566e","text":"Route external HTTP traffic with ingress rules","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"devops-with-docker-and-kubernetes-services-and-ingress-outro","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"devops-with-docker-and-kubernetes-services-and-ingr-fd27d648","text":"This lesson sits in Kubernetes Core Objects, part of DevOps with Docker and Kubernetes. It assumes what came before it and leads directly into the next lesson in the module.","marks":[]}]}]'::jsonb,
        'Pods come and go, so Services give them a stable address. Ingress is what puts an HTTP route in front of that.

What this lesson covers

Expose pods with a stable service address

Compare ClusterIP, NodePort, and LoadBalancer

Route external HTTP traffic with ingress rules

This lesson sits in Kubernetes Core Objects, part of DevOps with Docker and Kubernetes. It assumes what came before it and leads directly into the next lesson in the module.', '["Expose pods with a stable service address","Compare ClusterIP, NodePort, and LoadBalancer","Route external HTTP traffic with ingress rules"]'::jsonb, '',
        '[{"_type":"resource","_key":"devops-with-docker-and-kubernetes-services-and-ingress-docs","type":"link","title":"Kubernetes documentation","description":"The official reference for the tools used in this lesson.","url":"https://kubernetes.io/docs/home/"}]'::jsonb, 2
      ) ON CONFLICT (id) DO UPDATE SET
        module_id = EXCLUDED.module_id,
        course_id = EXCLUDED.course_id,
        title = EXCLUDED.title,
        slug = EXCLUDED.slug,
        youtube_video_id = EXCLUDED.youtube_video_id,
        video_url = EXCLUDED.video_url,
        duration = EXCLUDED.duration,
        free_preview = EXCLUDED.free_preview,
        notes = EXCLUDED.notes,
        notes_plain = EXCLUDED.notes_plain,
        key_points = EXCLUDED.key_points,
        pro_tip = EXCLUDED.pro_tip,
        resources = EXCLUDED.resources,
        position = EXCLUDED.position;

INSERT INTO public.lessons (
        id, module_id, course_id, title, slug, youtube_video_id,
        video_url, duration, free_preview, notes, notes_plain,
        key_points, pro_tip, resources, position
      ) VALUES (
        'lesson.devops-with-docker-and-kubernetes-configmaps-and-secrets', 'devops-with-docker-and-kubernetes-module-2', 'course.devops-with-docker-and-kubernetes',
        'ConfigMaps and Secrets', 'devops-with-docker-and-kubernetes-configmaps-and-secrets', 'FAnQTgr04mU',
        'https://www.youtube.com/watch?v=FAnQTgr04mU', 1014, false, '[{"_type":"block","_key":"devops-with-docker-and-kubernetes-configmaps-and-se-5c98a212","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"devops-with-docker-and-kubernetes-configmaps-and-se-dafe8f0e","text":"Configuration belongs outside the image. Secrets look like ConfigMaps but need encryption at rest and tighter access control.","marks":[]}]},{"_type":"block","_key":"devops-with-docker-and-kubernetes-configmaps-and-secrets-h2","style":"h2","markDefs":[],"children":[{"_type":"span","_key":"devops-with-docker-and-kubernetes-configmaps-and-se-9db99381","text":"What this lesson covers","marks":[]}]},{"_type":"block","_key":"devops-with-docker-and-kubernetes-configmaps-and-se-97c41afa","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"devops-with-docker-and-kubernetes-configmaps-and-se-5dff5c62","text":"Inject configuration as environment variables or files","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"devops-with-docker-and-kubernetes-configmaps-and-se-e71a047d","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"devops-with-docker-and-kubernetes-configmaps-and-se-812d35f7","text":"Keep secrets out of images and manifests","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"devops-with-docker-and-kubernetes-configmaps-and-se-986a4176","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"devops-with-docker-and-kubernetes-configmaps-and-se-241ee1b2","text":"Roll configuration changes without rebuilding","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"devops-with-docker-and-kubernetes-configmaps-and-se-96843072","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"devops-with-docker-and-kubernetes-configmaps-and-se-e3d9e3e2","text":"This lesson sits in Kubernetes Core Objects, part of DevOps with Docker and Kubernetes. It assumes what came before it and leads directly into the next lesson in the module.","marks":[]}]}]'::jsonb,
        'Configuration belongs outside the image. Secrets look like ConfigMaps but need encryption at rest and tighter access control.

What this lesson covers

Inject configuration as environment variables or files

Keep secrets out of images and manifests

Roll configuration changes without rebuilding

This lesson sits in Kubernetes Core Objects, part of DevOps with Docker and Kubernetes. It assumes what came before it and leads directly into the next lesson in the module.', '["Inject configuration as environment variables or files","Keep secrets out of images and manifests","Roll configuration changes without rebuilding"]'::jsonb, 'A Kubernetes Secret is only base64 encoded by default. Encryption at rest and RBAC are what make it a secret.',
        '[{"_type":"resource","_key":"devops-with-docker-and-kubernetes-configmaps-and-se-372c23db","type":"link","title":"Kubernetes documentation","description":"The official reference for the tools used in this lesson.","url":"https://kubernetes.io/docs/home/"}]'::jsonb, 3
      ) ON CONFLICT (id) DO UPDATE SET
        module_id = EXCLUDED.module_id,
        course_id = EXCLUDED.course_id,
        title = EXCLUDED.title,
        slug = EXCLUDED.slug,
        youtube_video_id = EXCLUDED.youtube_video_id,
        video_url = EXCLUDED.video_url,
        duration = EXCLUDED.duration,
        free_preview = EXCLUDED.free_preview,
        notes = EXCLUDED.notes,
        notes_plain = EXCLUDED.notes_plain,
        key_points = EXCLUDED.key_points,
        pro_tip = EXCLUDED.pro_tip,
        resources = EXCLUDED.resources,
        position = EXCLUDED.position;

INSERT INTO public.lessons (
        id, module_id, course_id, title, slug, youtube_video_id,
        video_url, duration, free_preview, notes, notes_plain,
        key_points, pro_tip, resources, position
      ) VALUES (
        'lesson.devops-with-docker-and-kubernetes-ci-cd-pipelines', 'devops-with-docker-and-kubernetes-module-3', 'course.devops-with-docker-and-kubernetes',
        'Building a CI/CD pipeline', 'devops-with-docker-and-kubernetes-ci-cd-pipelines', 'YLtlz88zrLg',
        'https://www.youtube.com/watch?v=YLtlz88zrLg', 373, false, '[{"_type":"block","_key":"devops-with-docker-and-kubernetes-ci-cd-pipelines-intro","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"devops-with-docker-and-kubernetes-ci-cd-pipelines-intro-span","text":"A pipeline runs the same steps every time: test, build, push, deploy. Its value is the consistency, not the automation.","marks":[]}]},{"_type":"block","_key":"devops-with-docker-and-kubernetes-ci-cd-pipelines-h2","style":"h2","markDefs":[],"children":[{"_type":"span","_key":"devops-with-docker-and-kubernetes-ci-cd-pipelines-h2-span","text":"What this lesson covers","marks":[]}]},{"_type":"block","_key":"devops-with-docker-and-kubernetes-ci-cd-pipelines-point-0","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"devops-with-docker-and-kubernetes-ci-cd-pipelines-p-e2750111","text":"Structure test, build, and deploy stages","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"devops-with-docker-and-kubernetes-ci-cd-pipelines-point-1","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"devops-with-docker-and-kubernetes-ci-cd-pipelines-p-6f7469e0","text":"Cache dependencies to keep pipelines quick","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"devops-with-docker-and-kubernetes-ci-cd-pipelines-point-2","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"devops-with-docker-and-kubernetes-ci-cd-pipelines-p-ba4364c7","text":"Gate deploys on checks that genuinely matter","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"devops-with-docker-and-kubernetes-ci-cd-pipelines-outro","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"devops-with-docker-and-kubernetes-ci-cd-pipelines-outro-span","text":"This lesson sits in Continuous Delivery, part of DevOps with Docker and Kubernetes. It assumes what came before it and leads directly into the next lesson in the module.","marks":[]}]}]'::jsonb,
        'A pipeline runs the same steps every time: test, build, push, deploy. Its value is the consistency, not the automation.

What this lesson covers

Structure test, build, and deploy stages

Cache dependencies to keep pipelines quick

Gate deploys on checks that genuinely matter

This lesson sits in Continuous Delivery, part of DevOps with Docker and Kubernetes. It assumes what came before it and leads directly into the next lesson in the module.', '["Structure test, build, and deploy stages","Cache dependencies to keep pipelines quick","Gate deploys on checks that genuinely matter"]'::jsonb, '',
        '[{"_type":"resource","_key":"devops-with-docker-and-kubernetes-ci-cd-pipelines-docs","type":"link","title":"Kubernetes documentation","description":"The official reference for the tools used in this lesson.","url":"https://kubernetes.io/docs/home/"}]'::jsonb, 1
      ) ON CONFLICT (id) DO UPDATE SET
        module_id = EXCLUDED.module_id,
        course_id = EXCLUDED.course_id,
        title = EXCLUDED.title,
        slug = EXCLUDED.slug,
        youtube_video_id = EXCLUDED.youtube_video_id,
        video_url = EXCLUDED.video_url,
        duration = EXCLUDED.duration,
        free_preview = EXCLUDED.free_preview,
        notes = EXCLUDED.notes,
        notes_plain = EXCLUDED.notes_plain,
        key_points = EXCLUDED.key_points,
        pro_tip = EXCLUDED.pro_tip,
        resources = EXCLUDED.resources,
        position = EXCLUDED.position;

INSERT INTO public.lessons (
        id, module_id, course_id, title, slug, youtube_video_id,
        video_url, duration, free_preview, notes, notes_plain,
        key_points, pro_tip, resources, position
      ) VALUES (
        'lesson.devops-with-docker-and-kubernetes-rolling-deploys-and-rollbacks', 'devops-with-docker-and-kubernetes-module-3', 'course.devops-with-docker-and-kubernetes',
        'Rolling deploys and rollbacks', 'devops-with-docker-and-kubernetes-rolling-deploys-and-rollbacks', 'wWA9JgAvuqw',
        'https://www.youtube.com/watch?v=wWA9JgAvuqw', 524, false, '[{"_type":"block","_key":"devops-with-docker-and-kubernetes-rolling-deploys-a-11058e49","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"devops-with-docker-and-kubernetes-rolling-deploys-a-9b9db319","text":"A rolling update replaces pods gradually so there is no downtime. The important half is being able to reverse it in seconds.","marks":[]}]},{"_type":"block","_key":"devops-with-docker-and-kubernetes-rolling-deploys-a-b3dd9005","style":"h2","markDefs":[],"children":[{"_type":"span","_key":"devops-with-docker-and-kubernetes-rolling-deploys-a-2f5597af","text":"What this lesson covers","marks":[]}]},{"_type":"block","_key":"devops-with-docker-and-kubernetes-rolling-deploys-a-ea31e6d4","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"devops-with-docker-and-kubernetes-rolling-deploys-a-4ea4f738","text":"Configure a rolling update and its surge settings","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"devops-with-docker-and-kubernetes-rolling-deploys-a-bf30d8c5","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"devops-with-docker-and-kubernetes-rolling-deploys-a-2baf4728","text":"Compare rolling, blue-green, and canary strategies","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"devops-with-docker-and-kubernetes-rolling-deploys-a-2228a32e","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"devops-with-docker-and-kubernetes-rolling-deploys-a-435ade6f","text":"Roll back quickly and predictably","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"devops-with-docker-and-kubernetes-rolling-deploys-a-e26d4c5e","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"devops-with-docker-and-kubernetes-rolling-deploys-a-5a255889","text":"This lesson sits in Continuous Delivery, part of DevOps with Docker and Kubernetes. It assumes what came before it and leads directly into the next lesson in the module.","marks":[]}]}]'::jsonb,
        'A rolling update replaces pods gradually so there is no downtime. The important half is being able to reverse it in seconds.

What this lesson covers

Configure a rolling update and its surge settings

Compare rolling, blue-green, and canary strategies

Roll back quickly and predictably

This lesson sits in Continuous Delivery, part of DevOps with Docker and Kubernetes. It assumes what came before it and leads directly into the next lesson in the module.', '["Configure a rolling update and its surge settings","Compare rolling, blue-green, and canary strategies","Roll back quickly and predictably"]'::jsonb, '',
        '[{"_type":"resource","_key":"devops-with-docker-and-kubernetes-rolling-deploys-a-0419e2ea","type":"link","title":"Kubernetes documentation","description":"The official reference for the tools used in this lesson.","url":"https://kubernetes.io/docs/home/"}]'::jsonb, 2
      ) ON CONFLICT (id) DO UPDATE SET
        module_id = EXCLUDED.module_id,
        course_id = EXCLUDED.course_id,
        title = EXCLUDED.title,
        slug = EXCLUDED.slug,
        youtube_video_id = EXCLUDED.youtube_video_id,
        video_url = EXCLUDED.video_url,
        duration = EXCLUDED.duration,
        free_preview = EXCLUDED.free_preview,
        notes = EXCLUDED.notes,
        notes_plain = EXCLUDED.notes_plain,
        key_points = EXCLUDED.key_points,
        pro_tip = EXCLUDED.pro_tip,
        resources = EXCLUDED.resources,
        position = EXCLUDED.position;

INSERT INTO public.lessons (
        id, module_id, course_id, title, slug, youtube_video_id,
        video_url, duration, free_preview, notes, notes_plain,
        key_points, pro_tip, resources, position
      ) VALUES (
        'lesson.devops-with-docker-and-kubernetes-helm', 'devops-with-docker-and-kubernetes-module-3', 'course.devops-with-docker-and-kubernetes',
        'Packaging with Helm', 'devops-with-docker-and-kubernetes-helm', 'jUYNS90nq8U',
        'https://www.youtube.com/watch?v=jUYNS90nq8U', 1346, false, '[{"_type":"block","_key":"devops-with-docker-and-kubernetes-helm-intro","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"devops-with-docker-and-kubernetes-helm-intro-span","text":"Helm templates your manifests so one chart serves staging and production with different values, instead of four near-identical YAML directories.","marks":[]}]},{"_type":"block","_key":"devops-with-docker-and-kubernetes-helm-h2","style":"h2","markDefs":[],"children":[{"_type":"span","_key":"devops-with-docker-and-kubernetes-helm-h2-span","text":"What this lesson covers","marks":[]}]},{"_type":"block","_key":"devops-with-docker-and-kubernetes-helm-point-0","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"devops-with-docker-and-kubernetes-helm-point-0-span","text":"Template manifests and separate values per environment","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"devops-with-docker-and-kubernetes-helm-point-1","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"devops-with-docker-and-kubernetes-helm-point-1-span","text":"Install, upgrade, and roll back a release","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"devops-with-docker-and-kubernetes-helm-point-2","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"devops-with-docker-and-kubernetes-helm-point-2-span","text":"Manage chart dependencies","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"devops-with-docker-and-kubernetes-helm-outro","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"devops-with-docker-and-kubernetes-helm-outro-span","text":"This lesson sits in Continuous Delivery, part of DevOps with Docker and Kubernetes. It assumes what came before it and leads directly into the next lesson in the module.","marks":[]}]}]'::jsonb,
        'Helm templates your manifests so one chart serves staging and production with different values, instead of four near-identical YAML directories.

What this lesson covers

Template manifests and separate values per environment

Install, upgrade, and roll back a release

Manage chart dependencies

This lesson sits in Continuous Delivery, part of DevOps with Docker and Kubernetes. It assumes what came before it and leads directly into the next lesson in the module.', '["Template manifests and separate values per environment","Install, upgrade, and roll back a release","Manage chart dependencies"]'::jsonb, '',
        '[{"_type":"resource","_key":"devops-with-docker-and-kubernetes-helm-docs","type":"link","title":"Kubernetes documentation","description":"The official reference for the tools used in this lesson.","url":"https://kubernetes.io/docs/home/"}]'::jsonb, 3
      ) ON CONFLICT (id) DO UPDATE SET
        module_id = EXCLUDED.module_id,
        course_id = EXCLUDED.course_id,
        title = EXCLUDED.title,
        slug = EXCLUDED.slug,
        youtube_video_id = EXCLUDED.youtube_video_id,
        video_url = EXCLUDED.video_url,
        duration = EXCLUDED.duration,
        free_preview = EXCLUDED.free_preview,
        notes = EXCLUDED.notes,
        notes_plain = EXCLUDED.notes_plain,
        key_points = EXCLUDED.key_points,
        pro_tip = EXCLUDED.pro_tip,
        resources = EXCLUDED.resources,
        position = EXCLUDED.position;

INSERT INTO public.lessons (
        id, module_id, course_id, title, slug, youtube_video_id,
        video_url, duration, free_preview, notes, notes_plain,
        key_points, pro_tip, resources, position
      ) VALUES (
        'lesson.devops-with-docker-and-kubernetes-monitoring-and-logs', 'devops-with-docker-and-kubernetes-module-4', 'course.devops-with-docker-and-kubernetes',
        'Monitoring and logs', 'devops-with-docker-and-kubernetes-monitoring-and-logs', 'gBdyIv9d_O8',
        'https://www.youtube.com/watch?v=gBdyIv9d_O8', 1908, false, '[{"_type":"block","_key":"devops-with-docker-and-kubernetes-monitoring-and-logs-intro","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"devops-with-docker-and-kubernetes-monitoring-and-lo-bc8b9a90","text":"Container logs vanish with the container. Ship them somewhere, scrape metrics, and alert on what users would notice.","marks":[]}]},{"_type":"block","_key":"devops-with-docker-and-kubernetes-monitoring-and-logs-h2","style":"h2","markDefs":[],"children":[{"_type":"span","_key":"devops-with-docker-and-kubernetes-monitoring-and-lo-a0b535d7","text":"What this lesson covers","marks":[]}]},{"_type":"block","_key":"devops-with-docker-and-kubernetes-monitoring-and-lo-3001f75b","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"devops-with-docker-and-kubernetes-monitoring-and-lo-035487ab","text":"Aggregate logs off ephemeral pods","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"devops-with-docker-and-kubernetes-monitoring-and-lo-c1921f16","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"devops-with-docker-and-kubernetes-monitoring-and-lo-7268e9b9","text":"Scrape and dashboard cluster and app metrics","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"devops-with-docker-and-kubernetes-monitoring-and-lo-e90e004e","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"devops-with-docker-and-kubernetes-monitoring-and-lo-ada95d95","text":"Alert on user-visible symptoms","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"devops-with-docker-and-kubernetes-monitoring-and-logs-outro","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"devops-with-docker-and-kubernetes-monitoring-and-lo-a9758322","text":"This lesson sits in Operating a Cluster, part of DevOps with Docker and Kubernetes. It assumes what came before it and leads directly into the next lesson in the module.","marks":[]}]}]'::jsonb,
        'Container logs vanish with the container. Ship them somewhere, scrape metrics, and alert on what users would notice.

What this lesson covers

Aggregate logs off ephemeral pods

Scrape and dashboard cluster and app metrics

Alert on user-visible symptoms

This lesson sits in Operating a Cluster, part of DevOps with Docker and Kubernetes. It assumes what came before it and leads directly into the next lesson in the module.', '["Aggregate logs off ephemeral pods","Scrape and dashboard cluster and app metrics","Alert on user-visible symptoms"]'::jsonb, '',
        '[{"_type":"resource","_key":"devops-with-docker-and-kubernetes-monitoring-and-logs-docs","type":"link","title":"Kubernetes documentation","description":"The official reference for the tools used in this lesson.","url":"https://kubernetes.io/docs/home/"}]'::jsonb, 1
      ) ON CONFLICT (id) DO UPDATE SET
        module_id = EXCLUDED.module_id,
        course_id = EXCLUDED.course_id,
        title = EXCLUDED.title,
        slug = EXCLUDED.slug,
        youtube_video_id = EXCLUDED.youtube_video_id,
        video_url = EXCLUDED.video_url,
        duration = EXCLUDED.duration,
        free_preview = EXCLUDED.free_preview,
        notes = EXCLUDED.notes,
        notes_plain = EXCLUDED.notes_plain,
        key_points = EXCLUDED.key_points,
        pro_tip = EXCLUDED.pro_tip,
        resources = EXCLUDED.resources,
        position = EXCLUDED.position;

INSERT INTO public.lessons (
        id, module_id, course_id, title, slug, youtube_video_id,
        video_url, duration, free_preview, notes, notes_plain,
        key_points, pro_tip, resources, position
      ) VALUES (
        'lesson.devops-with-docker-and-kubernetes-autoscaling', 'devops-with-docker-and-kubernetes-module-4', 'course.devops-with-docker-and-kubernetes',
        'Autoscaling workloads', 'devops-with-docker-and-kubernetes-autoscaling', 'dRC-5Z2p7Ns',
        'https://www.youtube.com/watch?v=dRC-5Z2p7Ns', 1685, false, '[{"_type":"block","_key":"devops-with-docker-and-kubernetes-autoscaling-intro","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"devops-with-docker-and-kubernetes-autoscaling-intro-span","text":"Horizontal autoscaling adds pods when a metric crosses a threshold. It only works if requests are set and your app starts quickly.","marks":[]}]},{"_type":"block","_key":"devops-with-docker-and-kubernetes-autoscaling-h2","style":"h2","markDefs":[],"children":[{"_type":"span","_key":"devops-with-docker-and-kubernetes-autoscaling-h2-span","text":"What this lesson covers","marks":[]}]},{"_type":"block","_key":"devops-with-docker-and-kubernetes-autoscaling-point-0","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"devops-with-docker-and-kubernetes-autoscaling-point-0-span","text":"Scale pods on CPU or custom metrics","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"devops-with-docker-and-kubernetes-autoscaling-point-1","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"devops-with-docker-and-kubernetes-autoscaling-point-1-span","text":"Tune thresholds to avoid flapping","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"devops-with-docker-and-kubernetes-autoscaling-point-2","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"devops-with-docker-and-kubernetes-autoscaling-point-2-span","text":"Combine pod autoscaling with cluster autoscaling","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"devops-with-docker-and-kubernetes-autoscaling-outro","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"devops-with-docker-and-kubernetes-autoscaling-outro-span","text":"This lesson sits in Operating a Cluster, part of DevOps with Docker and Kubernetes. It assumes what came before it and leads directly into the next lesson in the module.","marks":[]}]}]'::jsonb,
        'Horizontal autoscaling adds pods when a metric crosses a threshold. It only works if requests are set and your app starts quickly.

What this lesson covers

Scale pods on CPU or custom metrics

Tune thresholds to avoid flapping

Combine pod autoscaling with cluster autoscaling

This lesson sits in Operating a Cluster, part of DevOps with Docker and Kubernetes. It assumes what came before it and leads directly into the next lesson in the module.', '["Scale pods on CPU or custom metrics","Tune thresholds to avoid flapping","Combine pod autoscaling with cluster autoscaling"]'::jsonb, '',
        '[{"_type":"resource","_key":"devops-with-docker-and-kubernetes-autoscaling-docs","type":"link","title":"Kubernetes documentation","description":"The official reference for the tools used in this lesson.","url":"https://kubernetes.io/docs/home/"}]'::jsonb, 2
      ) ON CONFLICT (id) DO UPDATE SET
        module_id = EXCLUDED.module_id,
        course_id = EXCLUDED.course_id,
        title = EXCLUDED.title,
        slug = EXCLUDED.slug,
        youtube_video_id = EXCLUDED.youtube_video_id,
        video_url = EXCLUDED.video_url,
        duration = EXCLUDED.duration,
        free_preview = EXCLUDED.free_preview,
        notes = EXCLUDED.notes,
        notes_plain = EXCLUDED.notes_plain,
        key_points = EXCLUDED.key_points,
        pro_tip = EXCLUDED.pro_tip,
        resources = EXCLUDED.resources,
        position = EXCLUDED.position;

INSERT INTO public.lessons (
        id, module_id, course_id, title, slug, youtube_video_id,
        video_url, duration, free_preview, notes, notes_plain,
        key_points, pro_tip, resources, position
      ) VALUES (
        'lesson.devops-with-docker-and-kubernetes-resource-limits-and-troubleshooting', 'devops-with-docker-and-kubernetes-module-4', 'course.devops-with-docker-and-kubernetes',
        'Resource limits and troubleshooting', 'devops-with-docker-and-kubernetes-resource-limits-and-troubleshooting', 'JLw_pHLCN4Y',
        'https://www.youtube.com/watch?v=JLw_pHLCN4Y', 308, false, '[{"_type":"block","_key":"devops-with-docker-and-kubernetes-resource-limits-a-a75a0710","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"devops-with-docker-and-kubernetes-resource-limits-a-e1e2c096","text":"Requests drive scheduling, limits drive eviction. CrashLoopBackOff and OOMKilled are usually a limits conversation, not a code one.","marks":[]}]},{"_type":"block","_key":"devops-with-docker-and-kubernetes-resource-limits-a-7f8db7c0","style":"h2","markDefs":[],"children":[{"_type":"span","_key":"devops-with-docker-and-kubernetes-resource-limits-a-1261efcb","text":"What this lesson covers","marks":[]}]},{"_type":"block","_key":"devops-with-docker-and-kubernetes-resource-limits-a-da94de87","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"devops-with-docker-and-kubernetes-resource-limits-a-62b261e9","text":"Set requests and limits that reflect real usage","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"devops-with-docker-and-kubernetes-resource-limits-a-ea3b33bf","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"devops-with-docker-and-kubernetes-resource-limits-a-aa221c26","text":"Diagnose CrashLoopBackOff and OOMKilled pods","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"devops-with-docker-and-kubernetes-resource-limits-a-b7a822d1","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"devops-with-docker-and-kubernetes-resource-limits-a-92a9bd94","text":"Debug a pod with logs, describe, and exec","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"devops-with-docker-and-kubernetes-resource-limits-a-d7bded8d","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"devops-with-docker-and-kubernetes-resource-limits-a-57bf9ab9","text":"This lesson sits in Operating a Cluster, part of DevOps with Docker and Kubernetes. It assumes what came before it and leads directly into the next lesson in the module.","marks":[]}]}]'::jsonb,
        'Requests drive scheduling, limits drive eviction. CrashLoopBackOff and OOMKilled are usually a limits conversation, not a code one.

What this lesson covers

Set requests and limits that reflect real usage

Diagnose CrashLoopBackOff and OOMKilled pods

Debug a pod with logs, describe, and exec

This lesson sits in Operating a Cluster, part of DevOps with Docker and Kubernetes. It assumes what came before it and leads directly into the next lesson in the module.', '["Set requests and limits that reflect real usage","Diagnose CrashLoopBackOff and OOMKilled pods","Debug a pod with logs, describe, and exec"]'::jsonb, 'Requests decide where a pod is scheduled; limits decide when it gets killed. They are not the same number.',
        '[{"_type":"resource","_key":"devops-with-docker-and-kubernetes-resource-limits-a-aea62d1c","type":"link","title":"Kubernetes documentation","description":"The official reference for the tools used in this lesson.","url":"https://kubernetes.io/docs/home/"}]'::jsonb, 3
      ) ON CONFLICT (id) DO UPDATE SET
        module_id = EXCLUDED.module_id,
        course_id = EXCLUDED.course_id,
        title = EXCLUDED.title,
        slug = EXCLUDED.slug,
        youtube_video_id = EXCLUDED.youtube_video_id,
        video_url = EXCLUDED.video_url,
        duration = EXCLUDED.duration,
        free_preview = EXCLUDED.free_preview,
        notes = EXCLUDED.notes,
        notes_plain = EXCLUDED.notes_plain,
        key_points = EXCLUDED.key_points,
        pro_tip = EXCLUDED.pro_tip,
        resources = EXCLUDED.resources,
        position = EXCLUDED.position;

INSERT INTO public.lessons (
        id, module_id, course_id, title, slug, youtube_video_id,
        video_url, duration, free_preview, notes, notes_plain,
        key_points, pro_tip, resources, position
      ) VALUES (
        'lesson.practical-web-security-owasp-top-ten', 'practical-web-security-module-1', 'course.practical-web-security',
        'The OWASP Top 10, practically', 'practical-web-security-owasp-top-ten', 'wUaeKEl1RCw',
        'https://www.youtube.com/watch?v=wUaeKEl1RCw', 898, true, '[{"_type":"block","_key":"practical-web-security-owasp-top-ten-intro","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"practical-web-security-owasp-top-ten-intro-span","text":"The Top 10 is a map of where things actually go wrong. Reading it as categories rather than a checklist is what makes it useful.","marks":[]}]},{"_type":"block","_key":"practical-web-security-owasp-top-ten-h2","style":"h2","markDefs":[],"children":[{"_type":"span","_key":"practical-web-security-owasp-top-ten-h2-span","text":"What this lesson covers","marks":[]}]},{"_type":"block","_key":"practical-web-security-owasp-top-ten-point-0","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"practical-web-security-owasp-top-ten-point-0-span","text":"Recognise each category in real application code","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"practical-web-security-owasp-top-ten-point-1","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"practical-web-security-owasp-top-ten-point-1-span","text":"Prioritise by exploitability and impact","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"practical-web-security-owasp-top-ten-point-2","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"practical-web-security-owasp-top-ten-point-2-span","text":"Use it as a review lens rather than a checklist","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"practical-web-security-owasp-top-ten-outro","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"practical-web-security-owasp-top-ten-outro-span","text":"This lesson sits in Thinking About Threats, part of Practical Web Security. It assumes what came before it and leads directly into the next lesson in the module.","marks":[]}]}]'::jsonb,
        'The Top 10 is a map of where things actually go wrong. Reading it as categories rather than a checklist is what makes it useful.

What this lesson covers

Recognise each category in real application code

Prioritise by exploitability and impact

Use it as a review lens rather than a checklist

This lesson sits in Thinking About Threats, part of Practical Web Security. It assumes what came before it and leads directly into the next lesson in the module.', '["Recognise each category in real application code","Prioritise by exploitability and impact","Use it as a review lens rather than a checklist"]'::jsonb, '',
        '[{"_type":"resource","_key":"practical-web-security-owasp-top-ten-docs","type":"link","title":"OWASP Top 10","description":"The official reference for the tools used in this lesson.","url":"https://owasp.org/www-project-top-ten/"}]'::jsonb, 1
      ) ON CONFLICT (id) DO UPDATE SET
        module_id = EXCLUDED.module_id,
        course_id = EXCLUDED.course_id,
        title = EXCLUDED.title,
        slug = EXCLUDED.slug,
        youtube_video_id = EXCLUDED.youtube_video_id,
        video_url = EXCLUDED.video_url,
        duration = EXCLUDED.duration,
        free_preview = EXCLUDED.free_preview,
        notes = EXCLUDED.notes,
        notes_plain = EXCLUDED.notes_plain,
        key_points = EXCLUDED.key_points,
        pro_tip = EXCLUDED.pro_tip,
        resources = EXCLUDED.resources,
        position = EXCLUDED.position;

INSERT INTO public.lessons (
        id, module_id, course_id, title, slug, youtube_video_id,
        video_url, duration, free_preview, notes, notes_plain,
        key_points, pro_tip, resources, position
      ) VALUES (
        'lesson.practical-web-security-authentication-vs-authorization', 'practical-web-security-module-1', 'course.practical-web-security',
        'Authentication versus authorization', 'practical-web-security-authentication-vs-authorization', '7ijBiXddB7w',
        'https://www.youtube.com/watch?v=7ijBiXddB7w', 221, false, '[{"_type":"block","_key":"practical-web-security-authentication-vs-authorization-intro","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"practical-web-security-authentication-vs-authorizat-c299d50d","text":"Authentication is who you are; authorization is what you may do. Broken access control is consistently the most common serious finding.","marks":[]}]},{"_type":"block","_key":"practical-web-security-authentication-vs-authorization-h2","style":"h2","markDefs":[],"children":[{"_type":"span","_key":"practical-web-security-authentication-vs-authorizat-e94fe7b3","text":"What this lesson covers","marks":[]}]},{"_type":"block","_key":"practical-web-security-authentication-vs-authorizat-82df85e3","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"practical-web-security-authentication-vs-authorizat-a1bdbfda","text":"Separate identity from permission checks","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"practical-web-security-authentication-vs-authorizat-e734187c","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"practical-web-security-authentication-vs-authorizat-6c218555","text":"Enforce authorization on the server, every time","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"practical-web-security-authentication-vs-authorizat-97cd18c8","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"practical-web-security-authentication-vs-authorizat-431218e6","text":"Catch insecure direct object references","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"practical-web-security-authentication-vs-authorization-outro","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"practical-web-security-authentication-vs-authorizat-9aa66d04","text":"This lesson sits in Thinking About Threats, part of Practical Web Security. It assumes what came before it and leads directly into the next lesson in the module.","marks":[]}]}]'::jsonb,
        'Authentication is who you are; authorization is what you may do. Broken access control is consistently the most common serious finding.

What this lesson covers

Separate identity from permission checks

Enforce authorization on the server, every time

Catch insecure direct object references

This lesson sits in Thinking About Threats, part of Practical Web Security. It assumes what came before it and leads directly into the next lesson in the module.', '["Separate identity from permission checks","Enforce authorization on the server, every time","Catch insecure direct object references"]'::jsonb, 'Every authorization check must happen on the server. A hidden button is not a permission.',
        '[{"_type":"resource","_key":"practical-web-security-authentication-vs-authorization-docs","type":"link","title":"OWASP Top 10","description":"The official reference for the tools used in this lesson.","url":"https://owasp.org/www-project-top-ten/"}]'::jsonb, 2
      ) ON CONFLICT (id) DO UPDATE SET
        module_id = EXCLUDED.module_id,
        course_id = EXCLUDED.course_id,
        title = EXCLUDED.title,
        slug = EXCLUDED.slug,
        youtube_video_id = EXCLUDED.youtube_video_id,
        video_url = EXCLUDED.video_url,
        duration = EXCLUDED.duration,
        free_preview = EXCLUDED.free_preview,
        notes = EXCLUDED.notes,
        notes_plain = EXCLUDED.notes_plain,
        key_points = EXCLUDED.key_points,
        pro_tip = EXCLUDED.pro_tip,
        resources = EXCLUDED.resources,
        position = EXCLUDED.position;

INSERT INTO public.lessons (
        id, module_id, course_id, title, slug, youtube_video_id,
        video_url, duration, free_preview, notes, notes_plain,
        key_points, pro_tip, resources, position
      ) VALUES (
        'lesson.practical-web-security-secure-defaults', 'practical-web-security-module-1', 'course.practical-web-security',
        'Secure defaults and least privilege', 'practical-web-security-secure-defaults', '130ioey4isw',
        'https://www.youtube.com/watch?v=130ioey4isw', 296, false, '[{"_type":"block","_key":"practical-web-security-secure-defaults-intro","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"practical-web-security-secure-defaults-intro-span","text":"Most breaches exploit something that was left open rather than something clever. Default deny, then grant the narrow thing that is needed.","marks":[]}]},{"_type":"block","_key":"practical-web-security-secure-defaults-h2","style":"h2","markDefs":[],"children":[{"_type":"span","_key":"practical-web-security-secure-defaults-h2-span","text":"What this lesson covers","marks":[]}]},{"_type":"block","_key":"practical-web-security-secure-defaults-point-0","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"practical-web-security-secure-defaults-point-0-span","text":"Default to deny and grant explicitly","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"practical-web-security-secure-defaults-point-1","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"practical-web-security-secure-defaults-point-1-span","text":"Scope credentials to the minimum they need","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"practical-web-security-secure-defaults-point-2","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"practical-web-security-secure-defaults-point-2-span","text":"Reduce attack surface by removing unused paths","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"practical-web-security-secure-defaults-outro","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"practical-web-security-secure-defaults-outro-span","text":"This lesson sits in Thinking About Threats, part of Practical Web Security. It assumes what came before it and leads directly into the next lesson in the module.","marks":[]}]}]'::jsonb,
        'Most breaches exploit something that was left open rather than something clever. Default deny, then grant the narrow thing that is needed.

What this lesson covers

Default to deny and grant explicitly

Scope credentials to the minimum they need

Reduce attack surface by removing unused paths

This lesson sits in Thinking About Threats, part of Practical Web Security. It assumes what came before it and leads directly into the next lesson in the module.', '["Default to deny and grant explicitly","Scope credentials to the minimum they need","Reduce attack surface by removing unused paths"]'::jsonb, '',
        '[{"_type":"resource","_key":"practical-web-security-secure-defaults-docs","type":"link","title":"OWASP Top 10","description":"The official reference for the tools used in this lesson.","url":"https://owasp.org/www-project-top-ten/"}]'::jsonb, 3
      ) ON CONFLICT (id) DO UPDATE SET
        module_id = EXCLUDED.module_id,
        course_id = EXCLUDED.course_id,
        title = EXCLUDED.title,
        slug = EXCLUDED.slug,
        youtube_video_id = EXCLUDED.youtube_video_id,
        video_url = EXCLUDED.video_url,
        duration = EXCLUDED.duration,
        free_preview = EXCLUDED.free_preview,
        notes = EXCLUDED.notes,
        notes_plain = EXCLUDED.notes_plain,
        key_points = EXCLUDED.key_points,
        pro_tip = EXCLUDED.pro_tip,
        resources = EXCLUDED.resources,
        position = EXCLUDED.position;

INSERT INTO public.lessons (
        id, module_id, course_id, title, slug, youtube_video_id,
        video_url, duration, free_preview, notes, notes_plain,
        key_points, pro_tip, resources, position
      ) VALUES (
        'lesson.practical-web-security-cross-site-scripting', 'practical-web-security-module-2', 'course.practical-web-security',
        'Cross-site scripting (XSS)', 'practical-web-security-cross-site-scripting', 'pD6C1-zSxIM',
        'https://www.youtube.com/watch?v=pD6C1-zSxIM', 1112, false, '[{"_type":"block","_key":"practical-web-security-cross-site-scripting-intro","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"practical-web-security-cross-site-scripting-intro-span","text":"XSS is attacker-controlled content executing as script in your page. Contextual output encoding is the fix; blocklists are not.","marks":[]}]},{"_type":"block","_key":"practical-web-security-cross-site-scripting-h2","style":"h2","markDefs":[],"children":[{"_type":"span","_key":"practical-web-security-cross-site-scripting-h2-span","text":"What this lesson covers","marks":[]}]},{"_type":"block","_key":"practical-web-security-cross-site-scripting-point-0","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"practical-web-security-cross-site-scripting-point-0-span","text":"Tell stored, reflected, and DOM-based XSS apart","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"practical-web-security-cross-site-scripting-point-1","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"practical-web-security-cross-site-scripting-point-1-span","text":"Encode output for the context it lands in","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"practical-web-security-cross-site-scripting-point-2","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"practical-web-security-cross-site-scripting-point-2-span","text":"Constrain script sources with a content security policy","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"practical-web-security-cross-site-scripting-outro","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"practical-web-security-cross-site-scripting-outro-span","text":"This lesson sits in Common Web Vulnerabilities, part of Practical Web Security. It assumes what came before it and leads directly into the next lesson in the module.","marks":[]}]}]'::jsonb,
        'XSS is attacker-controlled content executing as script in your page. Contextual output encoding is the fix; blocklists are not.

What this lesson covers

Tell stored, reflected, and DOM-based XSS apart

Encode output for the context it lands in

Constrain script sources with a content security policy

This lesson sits in Common Web Vulnerabilities, part of Practical Web Security. It assumes what came before it and leads directly into the next lesson in the module.', '["Tell stored, reflected, and DOM-based XSS apart","Encode output for the context it lands in","Constrain script sources with a content security policy"]'::jsonb, '',
        '[{"_type":"resource","_key":"practical-web-security-cross-site-scripting-docs","type":"link","title":"OWASP Top 10","description":"The official reference for the tools used in this lesson.","url":"https://owasp.org/www-project-top-ten/"}]'::jsonb, 1
      ) ON CONFLICT (id) DO UPDATE SET
        module_id = EXCLUDED.module_id,
        course_id = EXCLUDED.course_id,
        title = EXCLUDED.title,
        slug = EXCLUDED.slug,
        youtube_video_id = EXCLUDED.youtube_video_id,
        video_url = EXCLUDED.video_url,
        duration = EXCLUDED.duration,
        free_preview = EXCLUDED.free_preview,
        notes = EXCLUDED.notes,
        notes_plain = EXCLUDED.notes_plain,
        key_points = EXCLUDED.key_points,
        pro_tip = EXCLUDED.pro_tip,
        resources = EXCLUDED.resources,
        position = EXCLUDED.position;

INSERT INTO public.lessons (
        id, module_id, course_id, title, slug, youtube_video_id,
        video_url, duration, free_preview, notes, notes_plain,
        key_points, pro_tip, resources, position
      ) VALUES (
        'lesson.practical-web-security-sql-injection', 'practical-web-security-module-2', 'course.practical-web-security',
        'SQL injection', 'practical-web-security-sql-injection', 'AOXMDbc11AE',
        'https://www.youtube.com/watch?v=AOXMDbc11AE', 254, false, '[{"_type":"block","_key":"practical-web-security-sql-injection-intro","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"practical-web-security-sql-injection-intro-span","text":"Injection happens when data becomes part of the query. Parameterised queries keep the two separate, and they are not optional.","marks":[]}]},{"_type":"block","_key":"practical-web-security-sql-injection-h2","style":"h2","markDefs":[],"children":[{"_type":"span","_key":"practical-web-security-sql-injection-h2-span","text":"What this lesson covers","marks":[]}]},{"_type":"block","_key":"practical-web-security-sql-injection-point-0","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"practical-web-security-sql-injection-point-0-span","text":"See how concatenated input changes a query","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"practical-web-security-sql-injection-point-1","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"practical-web-security-sql-injection-point-1-span","text":"Use parameterised queries everywhere","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"practical-web-security-sql-injection-point-2","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"practical-web-security-sql-injection-point-2-span","text":"Limit database privileges to contain the damage","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"practical-web-security-sql-injection-outro","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"practical-web-security-sql-injection-outro-span","text":"This lesson sits in Common Web Vulnerabilities, part of Practical Web Security. It assumes what came before it and leads directly into the next lesson in the module.","marks":[]}]}]'::jsonb,
        'Injection happens when data becomes part of the query. Parameterised queries keep the two separate, and they are not optional.

What this lesson covers

See how concatenated input changes a query

Use parameterised queries everywhere

Limit database privileges to contain the damage

This lesson sits in Common Web Vulnerabilities, part of Practical Web Security. It assumes what came before it and leads directly into the next lesson in the module.', '["See how concatenated input changes a query","Use parameterised queries everywhere","Limit database privileges to contain the damage"]'::jsonb, 'Never build a query with string concatenation. Parameters are the whole defence, not a style preference.',
        '[{"_type":"resource","_key":"practical-web-security-sql-injection-docs","type":"link","title":"OWASP Top 10","description":"The official reference for the tools used in this lesson.","url":"https://owasp.org/www-project-top-ten/"}]'::jsonb, 2
      ) ON CONFLICT (id) DO UPDATE SET
        module_id = EXCLUDED.module_id,
        course_id = EXCLUDED.course_id,
        title = EXCLUDED.title,
        slug = EXCLUDED.slug,
        youtube_video_id = EXCLUDED.youtube_video_id,
        video_url = EXCLUDED.video_url,
        duration = EXCLUDED.duration,
        free_preview = EXCLUDED.free_preview,
        notes = EXCLUDED.notes,
        notes_plain = EXCLUDED.notes_plain,
        key_points = EXCLUDED.key_points,
        pro_tip = EXCLUDED.pro_tip,
        resources = EXCLUDED.resources,
        position = EXCLUDED.position;

INSERT INTO public.lessons (
        id, module_id, course_id, title, slug, youtube_video_id,
        video_url, duration, free_preview, notes, notes_plain,
        key_points, pro_tip, resources, position
      ) VALUES (
        'lesson.practical-web-security-csrf', 'practical-web-security-module-2', 'course.practical-web-security',
        'Cross-site request forgery', 'practical-web-security-csrf', '80S8h5hEwTY',
        'https://www.youtube.com/watch?v=80S8h5hEwTY', 597, false, '[{"_type":"block","_key":"practical-web-security-csrf-intro","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"practical-web-security-csrf-intro-span","text":"CSRF makes a logged-in user’s browser send a request they never intended. SameSite cookies and anti-forgery tokens close it.","marks":[]}]},{"_type":"block","_key":"practical-web-security-csrf-h2","style":"h2","markDefs":[],"children":[{"_type":"span","_key":"practical-web-security-csrf-h2-span","text":"What this lesson covers","marks":[]}]},{"_type":"block","_key":"practical-web-security-csrf-point-0","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"practical-web-security-csrf-point-0-span","text":"Understand how an ambient credential is abused","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"practical-web-security-csrf-point-1","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"practical-web-security-csrf-point-1-span","text":"Set SameSite cookie attributes correctly","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"practical-web-security-csrf-point-2","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"practical-web-security-csrf-point-2-span","text":"Validate anti-forgery tokens on state-changing requests","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"practical-web-security-csrf-outro","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"practical-web-security-csrf-outro-span","text":"This lesson sits in Common Web Vulnerabilities, part of Practical Web Security. It assumes what came before it and leads directly into the next lesson in the module.","marks":[]}]}]'::jsonb,
        'CSRF makes a logged-in user’s browser send a request they never intended. SameSite cookies and anti-forgery tokens close it.

What this lesson covers

Understand how an ambient credential is abused

Set SameSite cookie attributes correctly

Validate anti-forgery tokens on state-changing requests

This lesson sits in Common Web Vulnerabilities, part of Practical Web Security. It assumes what came before it and leads directly into the next lesson in the module.', '["Understand how an ambient credential is abused","Set SameSite cookie attributes correctly","Validate anti-forgery tokens on state-changing requests"]'::jsonb, '',
        '[{"_type":"resource","_key":"practical-web-security-csrf-docs","type":"link","title":"OWASP Top 10","description":"The official reference for the tools used in this lesson.","url":"https://owasp.org/www-project-top-ten/"}]'::jsonb, 3
      ) ON CONFLICT (id) DO UPDATE SET
        module_id = EXCLUDED.module_id,
        course_id = EXCLUDED.course_id,
        title = EXCLUDED.title,
        slug = EXCLUDED.slug,
        youtube_video_id = EXCLUDED.youtube_video_id,
        video_url = EXCLUDED.video_url,
        duration = EXCLUDED.duration,
        free_preview = EXCLUDED.free_preview,
        notes = EXCLUDED.notes,
        notes_plain = EXCLUDED.notes_plain,
        key_points = EXCLUDED.key_points,
        pro_tip = EXCLUDED.pro_tip,
        resources = EXCLUDED.resources,
        position = EXCLUDED.position;

INSERT INTO public.lessons (
        id, module_id, course_id, title, slug, youtube_video_id,
        video_url, duration, free_preview, notes, notes_plain,
        key_points, pro_tip, resources, position
      ) VALUES (
        'lesson.practical-web-security-sessions-vs-jwt', 'practical-web-security-module-3', 'course.practical-web-security',
        'Sessions versus JWTs', 'practical-web-security-sessions-vs-jwt', 'z9-_YQWxwJ4',
        'https://www.youtube.com/watch?v=z9-_YQWxwJ4', 492, false, '[{"_type":"block","_key":"practical-web-security-sessions-vs-jwt-intro","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"practical-web-security-sessions-vs-jwt-intro-span","text":"Server sessions are revocable; JWTs are stateless and awkward to revoke. Pick based on whether you need to log someone out immediately.","marks":[]}]},{"_type":"block","_key":"practical-web-security-sessions-vs-jwt-h2","style":"h2","markDefs":[],"children":[{"_type":"span","_key":"practical-web-security-sessions-vs-jwt-h2-span","text":"What this lesson covers","marks":[]}]},{"_type":"block","_key":"practical-web-security-sessions-vs-jwt-point-0","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"practical-web-security-sessions-vs-jwt-point-0-span","text":"Compare revocability and statelessness honestly","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"practical-web-security-sessions-vs-jwt-point-1","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"practical-web-security-sessions-vs-jwt-point-1-span","text":"Store tokens in cookies with the right flags","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"practical-web-security-sessions-vs-jwt-point-2","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"practical-web-security-sessions-vs-jwt-point-2-span","text":"Design refresh and logout before you ship","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"practical-web-security-sessions-vs-jwt-outro","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"practical-web-security-sessions-vs-jwt-outro-span","text":"This lesson sits in Authentication Done Right, part of Practical Web Security. It assumes what came before it and leads directly into the next lesson in the module.","marks":[]}]}]'::jsonb,
        'Server sessions are revocable; JWTs are stateless and awkward to revoke. Pick based on whether you need to log someone out immediately.

What this lesson covers

Compare revocability and statelessness honestly

Store tokens in cookies with the right flags

Design refresh and logout before you ship

This lesson sits in Authentication Done Right, part of Practical Web Security. It assumes what came before it and leads directly into the next lesson in the module.', '["Compare revocability and statelessness honestly","Store tokens in cookies with the right flags","Design refresh and logout before you ship"]'::jsonb, '',
        '[{"_type":"resource","_key":"practical-web-security-sessions-vs-jwt-docs","type":"link","title":"OWASP Top 10","description":"The official reference for the tools used in this lesson.","url":"https://owasp.org/www-project-top-ten/"}]'::jsonb, 1
      ) ON CONFLICT (id) DO UPDATE SET
        module_id = EXCLUDED.module_id,
        course_id = EXCLUDED.course_id,
        title = EXCLUDED.title,
        slug = EXCLUDED.slug,
        youtube_video_id = EXCLUDED.youtube_video_id,
        video_url = EXCLUDED.video_url,
        duration = EXCLUDED.duration,
        free_preview = EXCLUDED.free_preview,
        notes = EXCLUDED.notes,
        notes_plain = EXCLUDED.notes_plain,
        key_points = EXCLUDED.key_points,
        pro_tip = EXCLUDED.pro_tip,
        resources = EXCLUDED.resources,
        position = EXCLUDED.position;

INSERT INTO public.lessons (
        id, module_id, course_id, title, slug, youtube_video_id,
        video_url, duration, free_preview, notes, notes_plain,
        key_points, pro_tip, resources, position
      ) VALUES (
        'lesson.practical-web-security-password-storage', 'practical-web-security-module-3', 'course.practical-web-security',
        'Password storage and hashing', 'practical-web-security-password-storage', 'qgpsIBLvrGY',
        'https://www.youtube.com/watch?v=qgpsIBLvrGY', 616, false, '[{"_type":"block","_key":"practical-web-security-password-storage-intro","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"practical-web-security-password-storage-intro-span","text":"Passwords are hashed with a slow, salted algorithm designed for the job. Anything faster is a favour to whoever steals the table.","marks":[]}]},{"_type":"block","_key":"practical-web-security-password-storage-h2","style":"h2","markDefs":[],"children":[{"_type":"span","_key":"practical-web-security-password-storage-h2-span","text":"What this lesson covers","marks":[]}]},{"_type":"block","_key":"practical-web-security-password-storage-point-0","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"practical-web-security-password-storage-point-0-span","text":"Use a slow, salted hash such as argon2 or bcrypt","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"practical-web-security-password-storage-point-1","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"practical-web-security-password-storage-point-1-span","text":"Tune work factors as hardware improves","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"practical-web-security-password-storage-point-2","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"practical-web-security-password-storage-point-2-span","text":"Handle reset flows without leaking account existence","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"practical-web-security-password-storage-outro","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"practical-web-security-password-storage-outro-span","text":"This lesson sits in Authentication Done Right, part of Practical Web Security. It assumes what came before it and leads directly into the next lesson in the module.","marks":[]}]}]'::jsonb,
        'Passwords are hashed with a slow, salted algorithm designed for the job. Anything faster is a favour to whoever steals the table.

What this lesson covers

Use a slow, salted hash such as argon2 or bcrypt

Tune work factors as hardware improves

Handle reset flows without leaking account existence

This lesson sits in Authentication Done Right, part of Practical Web Security. It assumes what came before it and leads directly into the next lesson in the module.', '["Use a slow, salted hash such as argon2 or bcrypt","Tune work factors as hardware improves","Handle reset flows without leaking account existence"]'::jsonb, 'Never write your own password hashing. Use a vetted algorithm with sane parameters and move on.',
        '[{"_type":"resource","_key":"practical-web-security-password-storage-docs","type":"link","title":"OWASP Top 10","description":"The official reference for the tools used in this lesson.","url":"https://owasp.org/www-project-top-ten/"}]'::jsonb, 2
      ) ON CONFLICT (id) DO UPDATE SET
        module_id = EXCLUDED.module_id,
        course_id = EXCLUDED.course_id,
        title = EXCLUDED.title,
        slug = EXCLUDED.slug,
        youtube_video_id = EXCLUDED.youtube_video_id,
        video_url = EXCLUDED.video_url,
        duration = EXCLUDED.duration,
        free_preview = EXCLUDED.free_preview,
        notes = EXCLUDED.notes,
        notes_plain = EXCLUDED.notes_plain,
        key_points = EXCLUDED.key_points,
        pro_tip = EXCLUDED.pro_tip,
        resources = EXCLUDED.resources,
        position = EXCLUDED.position;

INSERT INTO public.lessons (
        id, module_id, course_id, title, slug, youtube_video_id,
        video_url, duration, free_preview, notes, notes_plain,
        key_points, pro_tip, resources, position
      ) VALUES (
        'lesson.practical-web-security-mfa-and-oauth', 'practical-web-security-module-3', 'course.practical-web-security',
        'MFA and delegated authentication', 'practical-web-security-mfa-and-oauth', 'ZV5yTm4pT8g',
        'https://www.youtube.com/watch?v=ZV5yTm4pT8g', 272, false, '[{"_type":"block","_key":"practical-web-security-mfa-and-oauth-intro","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"practical-web-security-mfa-and-oauth-intro-span","text":"A second factor defeats stolen passwords. OAuth and OIDC hand identity to a provider — useful, and only if you validate what comes back.","marks":[]}]},{"_type":"block","_key":"practical-web-security-mfa-and-oauth-h2","style":"h2","markDefs":[],"children":[{"_type":"span","_key":"practical-web-security-mfa-and-oauth-h2-span","text":"What this lesson covers","marks":[]}]},{"_type":"block","_key":"practical-web-security-mfa-and-oauth-point-0","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"practical-web-security-mfa-and-oauth-point-0-span","text":"Add a second factor without wrecking usability","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"practical-web-security-mfa-and-oauth-point-1","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"practical-web-security-mfa-and-oauth-point-1-span","text":"Distinguish OAuth authorization from OIDC identity","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"practical-web-security-mfa-and-oauth-point-2","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"practical-web-security-mfa-and-oauth-point-2-span","text":"Validate tokens and claims on every request","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"practical-web-security-mfa-and-oauth-outro","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"practical-web-security-mfa-and-oauth-outro-span","text":"This lesson sits in Authentication Done Right, part of Practical Web Security. It assumes what came before it and leads directly into the next lesson in the module.","marks":[]}]}]'::jsonb,
        'A second factor defeats stolen passwords. OAuth and OIDC hand identity to a provider — useful, and only if you validate what comes back.

What this lesson covers

Add a second factor without wrecking usability

Distinguish OAuth authorization from OIDC identity

Validate tokens and claims on every request

This lesson sits in Authentication Done Right, part of Practical Web Security. It assumes what came before it and leads directly into the next lesson in the module.', '["Add a second factor without wrecking usability","Distinguish OAuth authorization from OIDC identity","Validate tokens and claims on every request"]'::jsonb, '',
        '[{"_type":"resource","_key":"practical-web-security-mfa-and-oauth-docs","type":"link","title":"OWASP Top 10","description":"The official reference for the tools used in this lesson.","url":"https://owasp.org/www-project-top-ten/"}]'::jsonb, 3
      ) ON CONFLICT (id) DO UPDATE SET
        module_id = EXCLUDED.module_id,
        course_id = EXCLUDED.course_id,
        title = EXCLUDED.title,
        slug = EXCLUDED.slug,
        youtube_video_id = EXCLUDED.youtube_video_id,
        video_url = EXCLUDED.video_url,
        duration = EXCLUDED.duration,
        free_preview = EXCLUDED.free_preview,
        notes = EXCLUDED.notes,
        notes_plain = EXCLUDED.notes_plain,
        key_points = EXCLUDED.key_points,
        pro_tip = EXCLUDED.pro_tip,
        resources = EXCLUDED.resources,
        position = EXCLUDED.position;

INSERT INTO public.lessons (
        id, module_id, course_id, title, slug, youtube_video_id,
        video_url, duration, free_preview, notes, notes_plain,
        key_points, pro_tip, resources, position
      ) VALUES (
        'lesson.practical-web-security-https-headers-and-csp', 'practical-web-security-module-4', 'course.practical-web-security',
        'HTTPS, security headers, and CSP', 'practical-web-security-https-headers-and-csp', '4bQeGUzHpOE',
        'https://www.youtube.com/watch?v=4bQeGUzHpOE', 486, false, '[{"_type":"block","_key":"practical-web-security-https-headers-and-csp-intro","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"practical-web-security-https-headers-and-csp-intro-span","text":"A handful of response headers remove entire attack classes. CSP is the strongest and the fiddliest, so roll it out in report-only first.","marks":[]}]},{"_type":"block","_key":"practical-web-security-https-headers-and-csp-h2","style":"h2","markDefs":[],"children":[{"_type":"span","_key":"practical-web-security-https-headers-and-csp-h2-span","text":"What this lesson covers","marks":[]}]},{"_type":"block","_key":"practical-web-security-https-headers-and-csp-point-0","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"practical-web-security-https-headers-and-csp-point-0-span","text":"Enforce HTTPS and enable HSTS","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"practical-web-security-https-headers-and-csp-point-1","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"practical-web-security-https-headers-and-csp-point-1-span","text":"Set the headers that block framing and sniffing","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"practical-web-security-https-headers-and-csp-point-2","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"practical-web-security-https-headers-and-csp-point-2-span","text":"Introduce a content security policy incrementally","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"practical-web-security-https-headers-and-csp-outro","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"practical-web-security-https-headers-and-csp-outro-span","text":"This lesson sits in Hardening and Supply Chain, part of Practical Web Security. It assumes what came before it and leads directly into the next lesson in the module.","marks":[]}]}]'::jsonb,
        'A handful of response headers remove entire attack classes. CSP is the strongest and the fiddliest, so roll it out in report-only first.

What this lesson covers

Enforce HTTPS and enable HSTS

Set the headers that block framing and sniffing

Introduce a content security policy incrementally

This lesson sits in Hardening and Supply Chain, part of Practical Web Security. It assumes what came before it and leads directly into the next lesson in the module.', '["Enforce HTTPS and enable HSTS","Set the headers that block framing and sniffing","Introduce a content security policy incrementally"]'::jsonb, '',
        '[{"_type":"resource","_key":"practical-web-security-https-headers-and-csp-docs","type":"link","title":"OWASP Top 10","description":"The official reference for the tools used in this lesson.","url":"https://owasp.org/www-project-top-ten/"}]'::jsonb, 1
      ) ON CONFLICT (id) DO UPDATE SET
        module_id = EXCLUDED.module_id,
        course_id = EXCLUDED.course_id,
        title = EXCLUDED.title,
        slug = EXCLUDED.slug,
        youtube_video_id = EXCLUDED.youtube_video_id,
        video_url = EXCLUDED.video_url,
        duration = EXCLUDED.duration,
        free_preview = EXCLUDED.free_preview,
        notes = EXCLUDED.notes,
        notes_plain = EXCLUDED.notes_plain,
        key_points = EXCLUDED.key_points,
        pro_tip = EXCLUDED.pro_tip,
        resources = EXCLUDED.resources,
        position = EXCLUDED.position;

INSERT INTO public.lessons (
        id, module_id, course_id, title, slug, youtube_video_id,
        video_url, duration, free_preview, notes, notes_plain,
        key_points, pro_tip, resources, position
      ) VALUES (
        'lesson.practical-web-security-secrets-management', 'practical-web-security-module-4', 'course.practical-web-security',
        'Secrets management', 'practical-web-security-secrets-management', 'FQE_gyEwu0Q',
        'https://www.youtube.com/watch?v=FQE_gyEwu0Q', 1125, false, '[{"_type":"block","_key":"practical-web-security-secrets-management-intro","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"practical-web-security-secrets-management-intro-span","text":"Secrets belong in a manager, injected at runtime, never in the repository. Assume anything committed once is compromised forever.","marks":[]}]},{"_type":"block","_key":"practical-web-security-secrets-management-h2","style":"h2","markDefs":[],"children":[{"_type":"span","_key":"practical-web-security-secrets-management-h2-span","text":"What this lesson covers","marks":[]}]},{"_type":"block","_key":"practical-web-security-secrets-management-point-0","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"practical-web-security-secrets-management-point-0-span","text":"Keep credentials out of source control","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"practical-web-security-secrets-management-point-1","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"practical-web-security-secrets-management-point-1-span","text":"Inject secrets at runtime and scope them tightly","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"practical-web-security-secrets-management-point-2","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"practical-web-security-secrets-management-point-2-span","text":"Rotate credentials and revoke exposed ones immediately","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"practical-web-security-secrets-management-outro","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"practical-web-security-secrets-management-outro-span","text":"This lesson sits in Hardening and Supply Chain, part of Practical Web Security. It assumes what came before it and leads directly into the next lesson in the module.","marks":[]}]}]'::jsonb,
        'Secrets belong in a manager, injected at runtime, never in the repository. Assume anything committed once is compromised forever.

What this lesson covers

Keep credentials out of source control

Inject secrets at runtime and scope them tightly

Rotate credentials and revoke exposed ones immediately

This lesson sits in Hardening and Supply Chain, part of Practical Web Security. It assumes what came before it and leads directly into the next lesson in the module.', '["Keep credentials out of source control","Inject secrets at runtime and scope them tightly","Rotate credentials and revoke exposed ones immediately"]'::jsonb, 'A secret committed once is compromised even after you delete the commit. Rotate it, do not just remove it.',
        '[{"_type":"resource","_key":"practical-web-security-secrets-management-docs","type":"link","title":"OWASP Top 10","description":"The official reference for the tools used in this lesson.","url":"https://owasp.org/www-project-top-ten/"}]'::jsonb, 2
      ) ON CONFLICT (id) DO UPDATE SET
        module_id = EXCLUDED.module_id,
        course_id = EXCLUDED.course_id,
        title = EXCLUDED.title,
        slug = EXCLUDED.slug,
        youtube_video_id = EXCLUDED.youtube_video_id,
        video_url = EXCLUDED.video_url,
        duration = EXCLUDED.duration,
        free_preview = EXCLUDED.free_preview,
        notes = EXCLUDED.notes,
        notes_plain = EXCLUDED.notes_plain,
        key_points = EXCLUDED.key_points,
        pro_tip = EXCLUDED.pro_tip,
        resources = EXCLUDED.resources,
        position = EXCLUDED.position;

INSERT INTO public.lessons (
        id, module_id, course_id, title, slug, youtube_video_id,
        video_url, duration, free_preview, notes, notes_plain,
        key_points, pro_tip, resources, position
      ) VALUES (
        'lesson.practical-web-security-dependency-and-supply-chain', 'practical-web-security-module-4', 'course.practical-web-security',
        'Dependency and supply chain risk', 'practical-web-security-dependency-and-supply-chain', 'njm1nZlrR68',
        'https://www.youtube.com/watch?v=njm1nZlrR68', 824, false, '[{"_type":"block","_key":"practical-web-security-dependency-and-supply-chain-intro","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"practical-web-security-dependency-and-supply-chain-d63c4b23","text":"Most of your production code came from someone else. Lockfiles, audits, and update discipline are what keep that manageable.","marks":[]}]},{"_type":"block","_key":"practical-web-security-dependency-and-supply-chain-h2","style":"h2","markDefs":[],"children":[{"_type":"span","_key":"practical-web-security-dependency-and-supply-chain-h2-span","text":"What this lesson covers","marks":[]}]},{"_type":"block","_key":"practical-web-security-dependency-and-supply-chain-point-0","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"practical-web-security-dependency-and-supply-chain-915621dd","text":"Pin dependencies with a committed lockfile","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"practical-web-security-dependency-and-supply-chain-point-1","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"practical-web-security-dependency-and-supply-chain-b067dbd9","text":"Audit for known vulnerabilities continuously","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"practical-web-security-dependency-and-supply-chain-point-2","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"practical-web-security-dependency-and-supply-chain-25f5baf2","text":"Review what a new dependency actually pulls in","marks":[]}],"listItem":"bullet","level":1},{"_type":"block","_key":"practical-web-security-dependency-and-supply-chain-outro","style":"normal","markDefs":[],"children":[{"_type":"span","_key":"practical-web-security-dependency-and-supply-chain-bd77a726","text":"This lesson sits in Hardening and Supply Chain, part of Practical Web Security. It assumes what came before it and leads directly into the next lesson in the module.","marks":[]}]}]'::jsonb,
        'Most of your production code came from someone else. Lockfiles, audits, and update discipline are what keep that manageable.

What this lesson covers

Pin dependencies with a committed lockfile

Audit for known vulnerabilities continuously

Review what a new dependency actually pulls in

This lesson sits in Hardening and Supply Chain, part of Practical Web Security. It assumes what came before it and leads directly into the next lesson in the module.', '["Pin dependencies with a committed lockfile","Audit for known vulnerabilities continuously","Review what a new dependency actually pulls in"]'::jsonb, '',
        '[{"_type":"resource","_key":"practical-web-security-dependency-and-supply-chain-docs","type":"link","title":"OWASP Top 10","description":"The official reference for the tools used in this lesson.","url":"https://owasp.org/www-project-top-ten/"}]'::jsonb, 3
      ) ON CONFLICT (id) DO UPDATE SET
        module_id = EXCLUDED.module_id,
        course_id = EXCLUDED.course_id,
        title = EXCLUDED.title,
        slug = EXCLUDED.slug,
        youtube_video_id = EXCLUDED.youtube_video_id,
        video_url = EXCLUDED.video_url,
        duration = EXCLUDED.duration,
        free_preview = EXCLUDED.free_preview,
        notes = EXCLUDED.notes,
        notes_plain = EXCLUDED.notes_plain,
        key_points = EXCLUDED.key_points,
        pro_tip = EXCLUDED.pro_tip,
        resources = EXCLUDED.resources,
        position = EXCLUDED.position;


COMMIT;
