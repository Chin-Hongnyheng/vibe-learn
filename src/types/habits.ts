// ─────────────────────────────────────────────────────────────────────────────
// Habits & Daily Logs Types
// ─────────────────────────────────────────────────────────────────────────────

export type HabitFrequency = "daily" | "weekly"

export type Habit = {
  id: number
  userId: string | null
  title: string
  description: string | null
  category: string
  frequency: HabitFrequency
  targetCount: number
  unit: string
  isActive: boolean
  createdAt: string
  updatedAt: string
}

export type DailyLog = {
  id: number
  habitId: number
  logDate: string
  completed: boolean
  count: number
  notes: string | null
  createdAt: string
}

export type HabitWithTodayLog = Habit & {
  todayLog: DailyLog | null
  isCompletedToday: boolean
}

export type CreateHabitInput = {
  userId?: string | null
  title: string
  description?: string | null
  category?: string
  frequency?: HabitFrequency
  targetCount?: number
  unit?: string
}

export type LogHabitInput = {
  habitId: number
  logDate?: string
  completed: boolean
  count?: number
  notes?: string | null
}
