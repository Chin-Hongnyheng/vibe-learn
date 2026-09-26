import { supabase } from "@/lib/supabase"
import type { SupabaseClient } from "@supabase/supabase-js"
import type {
  Habit,
  DailyLog,
  HabitWithTodayLog,
  CreateHabitInput,
  LogHabitInput,
} from "@/types/habits"

type DB = SupabaseClient

// --------------------------------------------------------------------------
// Raw DB row shapes (snake_case from Supabase)
// --------------------------------------------------------------------------

type RawHabit = {
  id: number
  user_id: string | null
  title: string
  description: string | null
  category: string
  frequency: "daily" | "weekly"
  target_count: number
  unit: string
  is_active: boolean
  created_at: string
  updated_at: string
}

type RawDailyLog = {
  id: number
  habit_id: number
  log_date: string
  completed: boolean
  count: number
  notes: string | null
  created_at: string
}

// --------------------------------------------------------------------------
// Mappers
// --------------------------------------------------------------------------

function mapHabit(raw: RawHabit): Habit {
  return {
    id: raw.id,
    userId: raw.user_id,
    title: raw.title,
    description: raw.description,
    category: raw.category,
    frequency: raw.frequency,
    targetCount: raw.target_count,
    unit: raw.unit,
    isActive: raw.is_active,
    createdAt: raw.created_at,
    updatedAt: raw.updated_at,
  }
}

function mapDailyLog(raw: RawDailyLog): DailyLog {
  return {
    id: raw.id,
    habitId: raw.habit_id,
    logDate: raw.log_date,
    completed: raw.completed,
    count: raw.count,
    notes: raw.notes,
    createdAt: raw.created_at,
  }
}

function getTodayDateString(): string {
  return new Date().toISOString().split("T")[0]
}

// --------------------------------------------------------------------------
// Public API Functions
// --------------------------------------------------------------------------

/**
 * Fetch all active habits, optionally filtered by user ID.
 */
export async function getHabits(userId?: string, db?: DB): Promise<Habit[]> {
  const client = db ?? supabase
  let query = client
    .from("habits")
    .select("*")
    .eq("is_active", true)
    .order("created_at", { ascending: true })

  if (userId) {
    query = query.eq("user_id", userId)
  }

  const { data, error } = await query

  if (error) {
    console.error("Error fetching habits from Supabase:", error.message)
    return []
  }

  return (data as RawHabit[]).map(mapHabit)
}

/**
 * Fetch a single habit by its ID.
 */
export async function getHabitById(id: number, db?: DB): Promise<Habit | null> {
  const client = db ?? supabase
  const { data, error } = await client
    .from("habits")
    .select("*")
    .eq("id", id)
    .single()

  if (error) {
    console.error(`Error fetching habit id ${id}:`, error.message)
    return null
  }

  return mapHabit(data as RawHabit)
}

/**
 * Fetch daily logs for a habit or across all habits.
 */
export async function getDailyLogs(
  habitId?: number,
  startDate?: string,
  endDate?: string,
  db?: DB
): Promise<DailyLog[]> {
  const client = db ?? supabase
  let query = client
    .from("daily_logs")
    .select("*")
    .order("log_date", { ascending: false })

  if (habitId !== undefined) {
    query = query.eq("habit_id", habitId)
  }
  if (startDate) {
    query = query.gte("log_date", startDate)
  }
  if (endDate) {
    query = query.lte("log_date", endDate)
  }

  const { data, error } = await query

  if (error) {
    console.error("Error fetching daily logs:", error.message)
    return []
  }

  return (data as RawDailyLog[]).map(mapDailyLog)
}

/**
 * Fetch all habits joined with today's log status.
 */
export async function getHabitsWithTodayStatus(
  userId?: string,
  db?: DB
): Promise<HabitWithTodayLog[]> {
  const client = db ?? supabase
  const today = getTodayDateString()
  const habits = await getHabits(userId, client)

  if (habits.length === 0) return []

  const habitIds = habits.map((h) => h.id)
  const { data: logsData, error } = await client
    .from("daily_logs")
    .select("*")
    .in("habit_id", habitIds)
    .eq("log_date", today)

  if (error) {
    console.error("Error fetching today's logs:", error.message)
  }

  const logsByHabitId = new Map<number, DailyLog>()
  if (logsData) {
    for (const rawLog of logsData as RawDailyLog[]) {
      logsByHabitId.set(rawLog.habit_id, mapDailyLog(rawLog))
    }
  }

  return habits.map((habit) => {
    const todayLog = logsByHabitId.get(habit.id) ?? null
    return {
      ...habit,
      todayLog,
      isCompletedToday: todayLog?.completed ?? false,
    }
  })
}

/**
 * Upsert a daily log entry for a habit (e.g. toggle complete or log progress).
 */
export async function logHabit(input: LogHabitInput, db?: DB): Promise<DailyLog | null> {
  const client = db ?? supabase
  const logDate = input.logDate ?? getTodayDateString()

  const { data, error } = await client
    .from("daily_logs")
    .upsert(
      {
        habit_id: input.habitId,
        log_date: logDate,
        completed: input.completed,
        count: input.count ?? 1,
        notes: input.notes ?? null,
      },
      { onConflict: "habit_id,log_date" }
    )
    .select("*")
    .single()

  if (error) {
    console.error("Error logging habit in Supabase:", error.message)
    return null
  }

  return mapDailyLog(data as RawDailyLog)
}

/**
 * Create a new habit.
 */
export async function createHabit(input: CreateHabitInput, db?: DB): Promise<Habit | null> {
  const client = db ?? supabase
  const { data, error } = await client
    .from("habits")
    .insert({
      user_id: input.userId ?? null,
      title: input.title,
      description: input.description ?? null,
      category: input.category ?? "Learning",
      frequency: input.frequency ?? "daily",
      target_count: input.targetCount ?? 1,
      unit: input.unit ?? "times",
      is_active: true,
    })
    .select("*")
    .single()

  if (error) {
    console.error("Error creating habit:", error.message)
    return null
  }

  return mapHabit(data as RawHabit)
}

/**
 * Delete a habit (cascades to all linked daily_logs via foreign key).
 */
export async function deleteHabit(id: number, db?: DB): Promise<boolean> {
  const client = db ?? supabase
  const { error } = await client.from("habits").delete().eq("id", id)

  if (error) {
    console.error(`Error deleting habit ${id}:`, error.message)
    return false
  }

  return true
}
