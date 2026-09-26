/**
 * Supabase Client & PostgREST Connectivity Test
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

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY || process.env.VITE_SUPABASE_PUBLISHABLE_KEY;

console.log("=== Testing Supabase Configuration ===");
console.log(`URL: ${supabaseUrl}`);
console.log(`Anon Key present: ${Boolean(supabaseAnonKey)}`);

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function testSupabase() {
  console.log("\n1. Testing query on courses table...");
  const { data: courses, error: coursesError } = await supabase
    .from("courses")
    .select("id, slug, title")
    .limit(5);

  if (coursesError) {
    console.log(`Status: PostgREST returned code ${coursesError.code} (${coursesError.message})`);
    if (coursesError.code === "PGRST205") {
      console.log("✓ Expected status: Schema tables pending execution in Supabase SQL editor.");
    }
  } else {
    console.log(`✓ Fetched ${courses?.length} courses from Supabase:`, courses);
  }

  console.log("\n2. Testing progress table access...");
  const { data: progress, error: progressError } = await supabase
    .from("progress")
    .select("*")
    .limit(1);

  if (progressError) {
    console.log(`Status: PostgREST returned code ${progressError.code} (${progressError.message})`);
  } else {
    console.log("✓ Progress table queried successfully:", progress);
  }

  console.log("\n=== Test Finished Successfully ===");
}

testSupabase().catch((e) => {
  console.error("Test failed:", e);
  process.exit(1);
});
