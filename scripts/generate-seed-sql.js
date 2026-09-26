/**
 * Generates supabase/seed.sql from docs/seed.ndjson and docs/videos.json
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");

const seedNdjsonPath = path.join(rootDir, "docs", "seed.ndjson");
const videosJsonPath = path.join(rootDir, "docs", "videos.json");
const outputSqlPath = path.join(rootDir, "supabase", "seed.sql");

const lines = fs.readFileSync(seedNdjsonPath, "utf8").trim().split("\n");
let videosData = {};
try {
  videosData = JSON.parse(fs.readFileSync(videosJsonPath, "utf8"));
} catch (e) {
  console.warn("Could not read videos.json, will rely on videoUrl in seed.ndjson");
}

const categories = new Map();
const instructors = new Map();
const rawLessons = new Map();
const rawCourses = [];

for (const line of lines) {
  if (!line.trim()) continue;
  const item = JSON.parse(line);
  if (item._type === "category") {
    categories.set(item._id, item);
  } else if (item._type === "instructor") {
    instructors.set(item._id, item);
  } else if (item._type === "lesson") {
    rawLessons.set(item._id, item);
  } else if (item._type === "course") {
    rawCourses.push(item);
  }
}

function escapeSql(val) {
  if (val === null || val === undefined) return "NULL";
  if (typeof val === "boolean") return val ? "TRUE" : "FALSE";
  if (typeof val === "number") return String(val);
  if (typeof val === "object") {
    return `'${JSON.stringify(val).replace(/'/g, "''")}'::jsonb`;
  }
  return `'${String(val).replace(/'/g, "''")}'`;
}

let sql = `-- ==============================================================================
-- Vibelearn: Seed Data for Supabase
-- Contains: 10 Courses, 40 Modules, 120 Lessons
-- ==============================================================================

BEGIN;

`;

// 1. Insert Courses
sql += `-- 1. Courses\n`;
for (const course of rawCourses) {
  const courseId = course._id;
  const slug = course.slug?.current || course.slug;
  const title = course.title;
  const summary = course.summary || "";
  const coverImageUrl = course.coverImage?._sanityAsset?.replace("image@", "") || "";
  const cat = categories.get(course.category?._ref)?.title || "General";
  const inst = instructors.get(course.instructor?._ref);
  const instructorName = inst?.name || "Expert Instructor";
  const instructorBio = inst?.bio || "";
  const instructorAvatar = inst?.avatar?._sanityAsset?.replace("image@", "") || "";
  const level = course.level || "intermediate";
  const price = course.price || 0;
  const popular = !!course.popular;
  const studentCount = course.studentCount || 0;
  const learningOutcomes = course.learningOutcomes || [];

  sql += `INSERT INTO public.courses (
    id, slug, title, summary, cover_image_url, category,
    instructor_name, instructor_bio, instructor_avatar,
    level, price, popular, student_count, learning_outcomes
  ) VALUES (
    ${escapeSql(courseId)}, ${escapeSql(slug)}, ${escapeSql(title)}, ${escapeSql(summary)},
    ${escapeSql(coverImageUrl)}, ${escapeSql(cat)}, ${escapeSql(instructorName)},
    ${escapeSql(instructorBio)}, ${escapeSql(instructorAvatar)}, ${escapeSql(level)},
    ${escapeSql(price)}, ${popular}, ${studentCount}, ${escapeSql(learningOutcomes)}
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
\n`;
}

// 2. Insert Modules
sql += `\n-- 2. Modules\n`;
for (const course of rawCourses) {
  const courseId = course._id;
  if (!Array.isArray(course.modules)) continue;

  course.modules.forEach((mod, modIdx) => {
    const moduleId = mod._key || `${course.slug?.current || courseId}-module-${modIdx + 1}`;
    const title = mod.title || `Module ${modIdx + 1}`;
    const summary = mod.summary || "";
    const position = modIdx + 1;

    sql += `INSERT INTO public.modules (
      id, course_id, title, summary, position
    ) VALUES (
      ${escapeSql(moduleId)}, ${escapeSql(courseId)}, ${escapeSql(title)}, ${escapeSql(summary)}, ${position}
    ) ON CONFLICT (id) DO UPDATE SET
      course_id = EXCLUDED.course_id,
      title = EXCLUDED.title,
      summary = EXCLUDED.summary,
      position = EXCLUDED.position;
\n`;
  });
}

// 3. Insert Lessons
sql += `\n-- 3. Lessons\n`;
for (const course of rawCourses) {
  const courseId = course._id;
  if (!Array.isArray(course.modules)) continue;

  for (let modIdx = 0; modIdx < course.modules.length; modIdx++) {
    const mod = course.modules[modIdx];
    const moduleId = mod._key || `${course.slug?.current || courseId}-module-${modIdx + 1}`;
    const lessonRefs = mod.lessons || [];

    lessonRefs.forEach((ref, lessonIdx) => {
      const lesson = rawLessons.get(ref._ref);
      if (!lesson) return;

      const lessonId = lesson._id;
      const title = lesson.title;
      const slug = lesson.slug?.current || lesson.slug;
      const position = lessonIdx + 1;
      const videoUrl = lesson.videoUrl || "";

      // Extract youtube id
      let youtubeVideoId = "";
      const match = videoUrl.match(/[?&]v=([^&]+)/);
      if (match && match[1]) {
        youtubeVideoId = match[1];
      } else if (videosData[slug]?.id) {
        youtubeVideoId = videosData[slug].id;
      }

      const duration = lesson.duration || 0;
      const freePreview = !!lesson.freePreview;
      const notes = lesson.notes || [];
      const notesPlain = notes
        .map(b => (b.children || []).map(c => c.text).join(""))
        .filter(Boolean)
        .join("\n\n");
      const keyPoints = lesson.keyPoints || [];
      const proTip = lesson.proTip || "";
      const resources = lesson.resources || [];

      sql += `INSERT INTO public.lessons (
        id, module_id, course_id, title, slug, youtube_video_id,
        video_url, duration, free_preview, notes, notes_plain,
        key_points, pro_tip, resources, position
      ) VALUES (
        ${escapeSql(lessonId)}, ${escapeSql(moduleId)}, ${escapeSql(courseId)},
        ${escapeSql(title)}, ${escapeSql(slug)}, ${escapeSql(youtubeVideoId)},
        ${escapeSql(videoUrl)}, ${duration}, ${freePreview}, ${escapeSql(notes)},
        ${escapeSql(notesPlain)}, ${escapeSql(keyPoints)}, ${escapeSql(proTip)},
        ${escapeSql(resources)}, ${position}
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
\n`;
    });
  }
}

sql += `\nCOMMIT;\n`;

fs.writeFileSync(outputSqlPath, sql, "utf8");
console.log(`Generated ${outputSqlPath} successfully.`);
