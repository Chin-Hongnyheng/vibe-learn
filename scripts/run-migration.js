/**
 * Directly executes supabase/migrations/01_initial_schema.sql on Supabase PostgreSQL
 * and then seeds the database.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import pg from "pg";

const { Client } = pg;

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

const projectRef = "runifmydlwpukmoialkq";
const inputTokenOrPass = process.argv[2] || process.env.SUPABASE_DB_PASSWORD || process.env.SUPABASE_ACCESS_TOKEN;
let connectionString = process.env.DATABASE_URL;

const isAccessToken = inputTokenOrPass && inputTokenOrPass.startsWith("sbp_");

if (!connectionString && inputTokenOrPass && !isAccessToken) {
  // Use Supabase Connection Pooler (port 6543)
  connectionString = `postgresql://postgres.${projectRef}:${encodeURIComponent(
    inputTokenOrPass
  )}@aws-0-ap-southeast-1.pooler.supabase.com:6543/postgres`;
}

if (!connectionString && !isAccessToken) {
  console.error("Missing Database Connection String, Password, or Access Token.");
  console.error("Usage: node scripts/run-migration.js <SUPABASE_DB_PASSWORD | SUPABASE_ACCESS_TOKEN>");
  console.error("Or set DATABASE_URL=postgresql://... in .env");
  process.exit(1);
}

async function runMigration() {
  const sqlPath = path.join(rootDir, "supabase", "migrations", "01_initial_schema.sql");
  const sql = fs.readFileSync(sqlPath, "utf8");

  if (isAccessToken) {
    console.log("Executing schema migration via Supabase Management API...");
    const res = await fetch(`https://api.supabase.com/v1/projects/${projectRef}/database/query`, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${inputTokenOrPass}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query: sql }),
    });

    if (!res.ok) {
      const errText = await res.text();
      throw new Error(`Management API error (${res.status}): ${errText}`);
    }
    console.log("✓ Schema migration executed successfully via Management API!");
  } else {
    console.log("Connecting to Supabase PostgreSQL database...");
    const client = new Client({
      connectionString,
      ssl: { rejectUnauthorized: false },
    });

    await client.connect();
    console.log("Connected successfully to PostgreSQL!");

    console.log("Executing schema migration...");
    await client.query(sql);
    console.log("✓ Schema migration executed successfully!");

    await client.end();
  }

  // Run seeder
  console.log("\nRunning seeder...");
  const { execSync } = await import("child_process");
  execSync("node scripts/seed-supabase.js", { stdio: "inherit", cwd: rootDir });
}

runMigration().catch((err) => {
  console.error("Migration failed:", err.message);
  process.exit(1);
});
