import { supabase, isSupabaseConfigured } from "../lib/supabase";
import type { DbUser } from "../lib/supabase";

export interface SyncUserData {
  id: string; // Clerk User ID
  email?: string;
  fullName?: string;
}

export const userService = {
  /**
   * Sync Clerk user data into Supabase users table
   */
  async syncUser(userData: SyncUserData): Promise<DbUser | null> {
    if (!userData.id) return null;

    if (!isSupabaseConfigured) {
      return {
        id: userData.id,
        email: userData.email || null,
        full_name: userData.fullName || null,
        created_at: new Date().toISOString(),
      };
    }

    try {
      const payload = {
        id: userData.id,
        email: userData.email || null,
        full_name: userData.fullName || null,
      };

      const { data, error } = await supabase
        .from("users")
        .upsert(payload, { onConflict: "id" })
        .select()
        .single();

      if (error) {
        // Log gracefully without throwing to prevent breaking UI if tables are pending migration
        console.warn("Supabase userService.syncUser warning:", error.message);
        return {
          id: userData.id,
          email: userData.email || null,
          full_name: userData.fullName || null,
          created_at: new Date().toISOString(),
        };
      }

      return data as DbUser;
    } catch (err) {
      console.warn("Supabase userService.syncUser error:", err);
      return {
        id: userData.id,
        email: userData.email || null,
        full_name: userData.fullName || null,
        created_at: new Date().toISOString(),
      };
    }
  },

  /**
   * Retrieve a user from the Supabase database by Clerk ID
   */
  async getUserById(clerkUserId: string): Promise<DbUser | null> {
    if (!clerkUserId || !isSupabaseConfigured) return null;

    try {
      const { data, error } = await supabase
        .from("users")
        .select("*")
        .eq("id", clerkUserId)
        .maybeSingle();

      if (error || !data) {
        return null;
      }

      return data as DbUser;
    } catch (err) {
      console.warn("Supabase userService.getUserById error:", err);
      return null;
    }
  },
};
