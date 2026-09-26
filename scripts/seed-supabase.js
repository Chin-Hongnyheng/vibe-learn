/**
 * Seed Supabase tables directly via PostgREST / Supabase Client
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { createClient } from "@supabase/supabase-js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");

// Load .env
const envPath = path.join(rootDir, ".env");
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, "utf8");
  for (const line of envContent.split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const [key, ...rest] = trimmed.split("=");
    if (key && rest.length) {
      process.env[key.trim()] = rest.join("=").trim();
    }
  }
}

const supabaseUrl = process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL;
const supabaseKey =
  process.env.SUPABASE_SERVICE_ROLE_KEY ||
  process.env.VITE_SUPABASE_ANON_KEY ||
  process.env.VITE_SUPABASE_PUBLISHABLE_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error("Error: Missing Supabase URL or Key in environment variables.");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

const seedNdjsonPath = path.join(rootDir, "docs", "seed.ndjson");
const videosJsonPath = path.join(rootDir, "docs", "videos.json");

const lines = fs.readFileSync(seedNdjsonPath, "utf8").trim().split("\n");
let videosData = {};
try {
  videosData = JSON.parse(fs.readFileSync(videosJsonPath, "utf8"));
} catch (e) {
  console.warn("Could not read videos.json");
}

const categories = new Map();
const instructors = new Map();
const rawLessons = new Map();
const rawCourses = [];

for (const line of lines) {
  if (!line.trim()) continue;
  const item = JSON.parse(line);
  if (item._type === "category") categories.set(item._id, item);
  else if (item._type === "instructor") instructors.set(item._id, item);
  else if (item._type === "lesson") rawLessons.set(item._id, item);
  else if (item._type === "course") rawCourses.push(item);
}

async function seed() {
  console.log("Starting Supabase seeding...");
  console.log(`Target: ${supabaseUrl}`);

  // 1. Prepare Courses
  const coursesToInsert = rawCourses.map((course) => {
    const cat = categories.get(course.category?._ref)?.title || "General";
    const inst = instructors.get(course.instructor?._ref);
    return {
      id: course._id,
      slug: course.slug?.current || course.slug,
      title: course.title,
      summary: course.summary || "",
      cover_image_url: course.coverImage?._sanityAsset?.replace("image@", "") || "",
      category: cat,
      instructor_name: inst?.name || "Expert Instructor",
      instructor_bio: inst?.bio || "",
      instructor_avatar: inst?.avatar?._sanityAsset?.replace("image@", "") || "",
      level: course.level || "intermediate",
      price: course.price || 0,
      popular: !!course.popular,
      student_count: course.studentCount || 0,
      learning_outcomes: course.learningOutcomes || [],
    };
  });

  console.log(`Upserting ${coursesToInsert.length} courses...`);
  const { error: courseError } = await supabase
    .from("courses")
    .upsert(coursesToInsert, { onConflict: "id" });

  if (courseError) {
    console.error("Error upserting courses:", courseError.message);
    if (courseError.code === "PGRST205") {
      console.error("\nNOTE: Tables do not exist yet in Supabase database.");
      console.error("Please run supabase/migrations/01_initial_schema.sql in your Supabase SQL Editor first.\n");
    }
    return;
  }
  console.log("Courses upserted successfully.");

  // 2. Prepare Modules
  const modulesToInsert = [];
  for (const course of rawCourses) {
    if (!Array.isArray(course.modules)) continue;
    course.modules.forEach((mod, modIdx) => {
      modulesToInsert.push({
        id: mod._key || `${course.slug?.current || course._id}-module-${modIdx + 1}`,
        course_id: course._id,
        title: mod.title || `Module ${modIdx + 1}`,
        summary: mod.summary || "",
        position: modIdx + 1,
      });
    });
  }

  console.log(`Upserting ${modulesToInsert.length} modules...`);
  const { error: moduleError } = await supabase
    .from("modules")
    .upsert(modulesToInsert, { onConflict: "id" });

  if (moduleError) {
    console.error("Error upserting modules:", moduleError.message);
    return;
  }
  console.log("Modules upserted successfully.");

  // 3. Prepare Lessons
  const lessonsToInsert = [];
  for (const course of rawCourses) {
    if (!Array.isArray(course.modules)) continue;
    course.modules.forEach((mod, modIdx) => {
      const moduleId = mod._key || `${course.slug?.current || course._id}-module-${modIdx + 1}`;
      (mod.lessons || []).forEach((ref, lessonIdx) => {
        const lesson = rawLessons.get(ref._ref);
        if (!lesson) return;

        let youtubeVideoId = "";
        const slug = lesson.slug?.current || lesson.slug;
        const match = (lesson.videoUrl || "").match(/[?&]v=([^&]+)/);
        if (match && match[1]) {
          youtubeVideoId = match[1];
        } else if (videosData[slug]?.id) {
          youtubeVideoId = videosData[slug].id;
        }

        const notes = lesson.notes || [];
        const notesPlain = notes
          .map((b) => (b.children || []).map((c) => c.text).join(""))
          .filter(Boolean)
          .join("\n\n");

        lessonsToInsert.push({
          id: lesson._id,
          module_id: moduleId,
          course_id: course._id,
          title: lesson.title,
          slug: slug,
          youtube_video_id: youtubeVideoId,
          video_url: lesson.videoUrl || "",
          duration: lesson.duration || 0,
          free_preview: !!lesson.freePreview,
          notes: notes,
          notes_plain: notesPlain,
          key_points: lesson.keyPoints || [],
          pro_tip: lesson.proTip || "",
          resources: lesson.resources || [],
          position: lessonIdx + 1,
        });
      });
    });
  }

  console.log(`Upserting ${lessonsToInsert.length} lessons in batches...`);
  // Batch in chunks of 40 to avoid payload limits
  const chunkSize = 40;
  for (let i = 0; i < lessonsToInsert.length; i += chunkSize) {
    const chunk = lessonsToInsert.slice(i, i + chunkSize);
    const { error: lessonError } = await supabase
      .from("lessons")
      .upsert(chunk, { onConflict: "id" });
    if (lessonError) {
      console.error(`Error upserting lessons chunk ${i}:`, lessonError.message);
      return;
    }
  }
  console.log("All lessons upserted successfully.");
  console.log("\nDatabase seeding completed successfully!");
}

seed().catch((err) => {
  console.error("Seeding failed:", err);
});
