import { supabase, isSupabaseConfigured } from "../lib/supabase";
import type { DbProgress } from "../lib/supabase";

export interface UserProgressState {
  lessonId: string;
  courseId: string;
  isCompleted: boolean;
  resumeTimestamp: number;
  updatedAt: string;
}

const LOCAL_STORAGE_KEY_PREFIX = "vibelearn_progress_";

function getLocalProgress(userId: string): Record<string, UserProgressState> {
  try {
    const raw = localStorage.getItem(`${LOCAL_STORAGE_KEY_PREFIX}${userId}`);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function saveLocalProgress(userId: string, progress: Record<string, UserProgressState>) {
  try {
    localStorage.setItem(`${LOCAL_STORAGE_KEY_PREFIX}${userId}`, JSON.stringify(progress));
  } catch (e) {
    console.warn("Failed to write progress to localStorage:", e);
  }
}

export const progressService = {
  /**
   * Fetch all progress records for a user, optionally filtered by courseId
   */
  async fetchUserProgress(userId: string, courseId?: string): Promise<UserProgressState[]> {
    if (!userId) return [];

    const localMap = getLocalProgress(userId);

    if (isSupabaseConfigured) {
      try {
        let query = supabase.from("progress").select("*").eq("user_id", userId);
        if (courseId) {
          query = query.eq("course_id", courseId);
        }

        const { data, error } = await query;
        if (!error && data && data.length > 0) {
          // Sync into local cache and return
          const results: UserProgressState[] = data.map((row: DbProgress) => ({
            lessonId: row.lesson_id,
            courseId: row.course_id,
            isCompleted: row.is_completed,
            resumeTimestamp: row.resume_timestamp,
            updatedAt: row.updated_at,
          }));

          for (const item of results) {
            localMap[item.lessonId] = item;
          }
          saveLocalProgress(userId, localMap);

          return results;
        }
      } catch (err) {
        console.warn("Supabase fetchUserProgress error, using local fallback:", err);
      }
    }

    // Return from local cache
    return Object.values(localMap).filter((item) =>
      courseId ? item.courseId === courseId : true
    );
  },

  /**
   * Get list of completed lesson IDs for quick UI checklist checks
   */
  async fetchCompletedLessonIds(userId: string, courseId?: string): Promise<string[]> {
    const all = await this.fetchUserProgress(userId, courseId);
    return all.filter((p) => p.isCompleted).map((p) => p.lessonId);
  },

  /**
   * Upsert progress record (handles both completion status and resume timestamps)
   */
  async upsertProgress(params: {
    userId: string;
    lessonId: string;
    courseId: string;
    isCompleted?: boolean;
    resumeTimestamp?: number;
  }): Promise<UserProgressState> {
    const { userId, lessonId, courseId, isCompleted, resumeTimestamp } = params;

    // Update local cache immediately for responsive UI
    const localMap = getLocalProgress(userId);
    const existing = localMap[lessonId] || {
      lessonId,
      courseId,
      isCompleted: false,
      resumeTimestamp: 0,
      updatedAt: new Date().toISOString(),
    };

    const updatedState: UserProgressState = {
      lessonId,
      courseId,
      isCompleted: isCompleted !== undefined ? isCompleted : existing.isCompleted,
      resumeTimestamp: resumeTimestamp !== undefined ? resumeTimestamp : existing.resumeTimestamp,
      updatedAt: new Date().toISOString(),
    };

    localMap[lessonId] = updatedState;
    saveLocalProgress(userId, localMap);

    // Persist to Supabase
    if (isSupabaseConfigured) {
      try {
        await supabase.from("progress").upsert(
          {
            user_id: userId,
            lesson_id: lessonId,
            course_id: courseId,
            is_completed: updatedState.isCompleted,
            resume_timestamp: updatedState.resumeTimestamp,
            updated_at: updatedState.updatedAt,
          },
          { onConflict: "user_id,lesson_id" }
        );
      } catch (err) {
        console.warn("Supabase upsertProgress error:", err);
      }
    }

    return updatedState;
  },

  /**
   * Toggle or set lesson completion status
   */
  async markLessonComplete(
    userId: string,
    lessonId: string,
    courseId: string,
    isCompleted = true
  ): Promise<UserProgressState> {
    return this.upsertProgress({
      userId,
      lessonId,
      courseId,
      isCompleted,
    });
  },

  /**
   * Save playback position (resume timestamp in seconds)
   */
  async updateResumeTimestamp(
    userId: string,
    lessonId: string,
    courseId: string,
    resumeTimestamp: number
  ): Promise<UserProgressState> {
    return this.upsertProgress({
      userId,
      lessonId,
      courseId,
      resumeTimestamp: Math.max(0, Math.floor(resumeTimestamp)),
    });
  },
};
