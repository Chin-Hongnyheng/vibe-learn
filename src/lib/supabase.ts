import { createClient } from "@supabase/supabase-js"

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey =
  import.meta.env.VITE_SUPABASE_ANON_KEY ||
  import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    "Missing Supabase env vars. Add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY to your .env file."
  )
}

// ── Base anon client — used for all public reads (courses, catalog) ────────────
export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// ── Clerk-aware client factory ─────────────────────────────────────────────────
// Creates a Supabase client that injects the Clerk session JWT on every request.
// This allows Supabase RLS policies to use `auth.jwt()->>'sub'` to identify users.
//
// Usage (inside a React component or hook):
//   const { getToken } = useAuth()
//   const client = createClerkSupabaseClient(getToken)
//
// NOTE: Clerk user IDs are strings (e.g. "user_2abc") — not UUIDs.
// Therefore RLS policies MUST use `auth.jwt()->>'sub'` not `auth.uid()`.
export function createClerkSupabaseClient(
  getToken: (opts: { template: string }) => Promise<string | null>
) {
  return createClient(supabaseUrl, supabaseAnonKey, {
    global: {
      fetch: async (url: RequestInfo | URL, options: RequestInit = {}) => {
        const clerkToken = await getToken({ template: "supabase" })
        const headers = new Headers(options.headers)
        if (clerkToken) {
          headers.set("Authorization", `Bearer ${clerkToken}`)
        }
        return fetch(url, { ...options, headers })
      },
    },
  })
}

