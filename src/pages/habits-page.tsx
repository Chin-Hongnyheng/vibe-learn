import { useState, useEffect, useCallback, useMemo } from "react"
import { useUser, useAuth } from "@clerk/clerk-react"
import type { SupabaseClient } from "@supabase/supabase-js"
import {
  getHabitsWithTodayStatus,
  createHabit,
  deleteHabit,
  logHabit,
} from "@/lib/api/habits"
import { createClerkSupabaseClient } from "@/lib/supabase"
import type { HabitWithTodayLog, CreateHabitInput } from "@/types/habits"

// ─── Icons (inline SVG to avoid extra deps) ──────────────────────────────────

function CheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-4 h-4"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

function TrashIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-4 h-4"
    >
      <polyline points="3 6 5 6 21 6" />
      <path d="M19 6l-1 14H6L5 6" />
      <path d="M10 11v6M14 11v6" />
      <path d="M9 6V4h6v2" />
    </svg>
  )
}

function PlusIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-4 h-4"
    >
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  )
}

function SpinnerIcon() {
  return (
    <svg
      className="w-4 h-4 animate-spin"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8v8H4z"
      />
    </svg>
  )
}

// ─── Add-habit form state ─────────────────────────────────────────────────────

const CATEGORIES = ["Learning", "Coding", "Focus", "Health", "Reading"]

const defaultForm: CreateHabitInput = {
  title: "",
  description: "",
  category: "Learning",
  frequency: "daily",
  targetCount: 1,
  unit: "times",
}

// ─── Loading skeleton ─────────────────────────────────────────────────────────

function HabitCardSkeleton() {
  return (
    <div className="bg-card border border-border rounded-lg shadow-sm p-4 flex items-center gap-4 animate-pulse">
      <div className="w-10 h-10 rounded-full bg-muted shrink-0" />
      <div className="flex-1 space-y-2">
        <div className="h-4 bg-muted rounded w-1/2" />
        <div className="h-3 bg-muted rounded w-1/3" />
      </div>
    </div>
  )
}

// ─── Stat card ────────────────────────────────────────────────────────────────

function StatCard({ label, value }: { label: string; value: number | string }) {
  return (
    <div className="bg-card border border-border rounded-lg shadow-sm p-4 flex flex-col gap-1 min-w-0">
      <span className="text-2xl font-bold text-foreground">{value}</span>
      <span className="text-sm text-muted-foreground">{label}</span>
    </div>
  )
}

// ─── Habit card ───────────────────────────────────────────────────────────────

interface HabitCardProps {
  habit: HabitWithTodayLog
  toggling: boolean
  deleting: boolean
  onToggle: () => void
  onDelete: () => void
}

function HabitCard({ habit, toggling, deleting, onToggle, onDelete }: HabitCardProps) {
  const busy = toggling || deleting

  return (
    <div
      className={`bg-card border border-border rounded-lg shadow-sm p-4 flex items-center gap-4 transition-opacity ${
        busy ? "opacity-60 pointer-events-none" : ""
      }`}
    >
      {/* Toggle button */}
      <button
        id={`toggle-habit-${habit.id}`}
        aria-label={habit.isCompletedToday ? "Mark incomplete" : "Mark complete"}
        onClick={onToggle}
        disabled={busy}
        className={`w-10 h-10 rounded-full shrink-0 flex items-center justify-center border-2 transition-all cursor-pointer ${
          habit.isCompletedToday
            ? "bg-primary border-primary text-primary-foreground"
            : "border-border bg-background text-muted-foreground hover:border-primary hover:text-primary"
        }`}
      >
        {toggling ? <SpinnerIcon /> : habit.isCompletedToday ? <CheckIcon /> : null}
      </button>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <p
          className={`font-semibold text-foreground truncate ${
            habit.isCompletedToday ? "line-through text-muted-foreground" : ""
          }`}
        >
          {habit.title}
        </p>
        <div className="flex items-center gap-2 mt-1 flex-wrap">
          <span className="bg-accent text-accent-foreground rounded-full text-xs px-2 py-0.5 font-medium">
            {habit.category}
          </span>
          <span className="text-muted-foreground text-sm">
            {habit.frequency} · {habit.targetCount} {habit.unit}
          </span>
        </div>
        {habit.description && (
          <p className="text-muted-foreground text-sm mt-1 truncate">{habit.description}</p>
        )}
      </div>

      {/* Delete button */}
      <button
        id={`delete-habit-${habit.id}`}
        aria-label="Delete habit"
        onClick={onDelete}
        disabled={busy}
        className="text-muted-foreground hover:text-destructive transition-colors p-1.5 rounded-md hover:bg-destructive/10 cursor-pointer"
      >
        {deleting ? <SpinnerIcon /> : <TrashIcon />}
      </button>
    </div>
  )
}

// ─── Add-habit form ───────────────────────────────────────────────────────────

interface AddHabitFormProps {
  userId: string | null | undefined
  db: SupabaseClient
  onAdd: (habit: HabitWithTodayLog) => void
  onCancel: () => void
}

function AddHabitForm({ userId, db, onAdd, onCancel }: AddHabitFormProps) {
  const [form, setForm] = useState<CreateHabitInput>(defaultForm)
  const [saving, setSaving] = useState(false)
  const [validationError, setValidationError] = useState("")

  function update<K extends keyof CreateHabitInput>(key: K, value: CreateHabitInput[K]) {
    setForm((prev) => ({ ...prev, [key]: value }))
    if (key === "title") setValidationError("")
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!form.title.trim()) {
      setValidationError("Habit title is required.")
      return
    }
    setSaving(true)
    const created = await createHabit({ ...form, userId: userId ?? null }, db)
    setSaving(false)
    if (created) {
      onAdd({ ...created, todayLog: null, isCompletedToday: false })
      setForm(defaultForm)
    }
  }

  return (
    <form
      id="add-habit-form"
      onSubmit={handleSubmit}
      className="bg-card border border-border rounded-lg shadow-md p-5 space-y-4"
    >
      <h3 className="font-semibold text-foreground text-base">New Habit</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Title */}
        <div className="sm:col-span-2">
          <label htmlFor="habit-title" className="block text-sm font-medium text-foreground mb-1">
            Title <span className="text-destructive">*</span>
          </label>
          <input
            id="habit-title"
            type="text"
            value={form.title}
            onChange={(e) => update("title", e.target.value)}
            placeholder="e.g. Read 20 pages"
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          />
          {validationError && (
            <p className="text-destructive text-xs mt-1">{validationError}</p>
          )}
        </div>

        {/* Description */}
        <div className="sm:col-span-2">
          <label htmlFor="habit-description" className="block text-sm font-medium text-foreground mb-1">
            Description
          </label>
          <textarea
            id="habit-description"
            value={form.description ?? ""}
            onChange={(e) => update("description", e.target.value)}
            placeholder="Optional short description"
            rows={2}
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
          />
        </div>

        {/* Category */}
        <div>
          <label htmlFor="habit-category" className="block text-sm font-medium text-foreground mb-1">
            Category
          </label>
          <select
            id="habit-category"
            value={form.category}
            onChange={(e) => update("category", e.target.value)}
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          >
            {CATEGORIES.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        {/* Frequency */}
        <div>
          <label htmlFor="habit-frequency" className="block text-sm font-medium text-foreground mb-1">
            Frequency
          </label>
          <select
            id="habit-frequency"
            value={form.frequency}
            onChange={(e) => update("frequency", e.target.value as "daily" | "weekly")}
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          >
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
          </select>
        </div>

        {/* Target count */}
        <div>
          <label htmlFor="habit-target" className="block text-sm font-medium text-foreground mb-1">
            Target Count
          </label>
          <input
            id="habit-target"
            type="number"
            min={1}
            value={form.targetCount}
            onChange={(e) => update("targetCount", Number(e.target.value))}
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </div>

        {/* Unit */}
        <div>
          <label htmlFor="habit-unit" className="block text-sm font-medium text-foreground mb-1">
            Unit
          </label>
          <input
            id="habit-unit"
            type="text"
            value={form.unit}
            onChange={(e) => update("unit", e.target.value)}
            placeholder="times, minutes, pages…"
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </div>
      </div>

      <div className="flex gap-3 pt-1">
        <button
          id="save-habit-btn"
          type="submit"
          disabled={saving}
          className="flex items-center gap-2 bg-primary text-primary-foreground rounded-md px-4 py-2 text-sm font-medium hover:bg-primary/90 transition-colors disabled:opacity-60 cursor-pointer"
        >
          {saving && <SpinnerIcon />}
          {saving ? "Saving…" : "Save Habit"}
        </button>
        <button
          id="cancel-habit-btn"
          type="button"
          onClick={onCancel}
          className="bg-secondary text-secondary-foreground rounded-md px-4 py-2 text-sm font-medium hover:bg-secondary/80 transition-colors cursor-pointer"
        >
          Cancel
        </button>
      </div>
    </form>
  )
}

// ─── Main page ────────────────────────────────────────────────────────────────

export function HabitsPage() {
  const { user, isLoaded } = useUser()
  const { getToken } = useAuth()
  const userId = user?.id

  // Memoised Clerk-aware Supabase client — injects Bearer JWT on every request
  const db = useMemo(
    () => createClerkSupabaseClient(getToken as (opts: { template: string }) => Promise<string | null>),
    [getToken]
  )

  const [habits, setHabits] = useState<HabitWithTodayLog[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [showForm, setShowForm] = useState(false)
  const [togglingIds, setTogglingIds] = useState<Set<number>>(new Set())
  const [deletingIds, setDeletingIds] = useState<Set<number>>(new Set())
  const [fetchTick, setFetchTick] = useState(0)

  const retry = useCallback(() => setFetchTick((t) => t + 1), [])

  useEffect(() => {
    if (!isLoaded) return
    let cancelled = false
    const run = async () => {
      setLoading(true)
      setError(null)
      // With RLS active, pass the clerk-aware client so Supabase
      // sees the user's JWT and returns only their own rows.
      const data = await getHabitsWithTodayStatus(userId, db)
      if (!cancelled) {
        setHabits(data)
        setLoading(false)
      }
    }
    void run()
    return () => {
      cancelled = true
    }
  }, [isLoaded, userId, fetchTick, db])

  async function handleToggle(habit: HabitWithTodayLog) {
    setTogglingIds((prev) => new Set(prev).add(habit.id))
    const result = await logHabit({
      habitId: habit.id,
      completed: !habit.isCompletedToday,
      count: 1,
    }, db)
    setTogglingIds((prev) => {
      const next = new Set(prev)
      next.delete(habit.id)
      return next
    })
    if (result) {
      setHabits((prev) =>
        prev.map((h) =>
          h.id === habit.id
            ? { ...h, isCompletedToday: result.completed, todayLog: result }
            : h
        )
      )
    }
  }

  async function handleDelete(id: number) {
    setDeletingIds((prev) => new Set(prev).add(id))
    const ok = await deleteHabit(id, db)
    setDeletingIds((prev) => {
      const next = new Set(prev)
      next.delete(id)
      return next
    })
    if (ok) {
      setHabits((prev) => prev.filter((h) => h.id !== id))
    }
  }

  function handleAdd(newHabit: HabitWithTodayLog) {
    setHabits((prev) => [...prev, newHabit])
    setShowForm(false)
  }

  // Stats
  const total = habits.length
  const completedToday = habits.filter((h) => h.isCompletedToday).length
  const streak = completedToday > 0 ? 1 : 0 // Simple: 1 if any completed today

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto px-4 py-10 sm:px-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-foreground font-sans">My Habits</h1>
            <p className="text-muted-foreground text-sm mt-1">
              Track your daily learning rituals
            </p>
          </div>
          <button
            id="open-add-habit-btn"
            onClick={() => setShowForm((v) => !v)}
            className="flex items-center gap-2 bg-primary text-primary-foreground rounded-md px-4 py-2 text-sm font-medium hover:bg-primary/90 transition-colors shadow-sm cursor-pointer"
          >
            <PlusIcon />
            Add Habit
          </button>
        </div>

        {/* Stat bar */}
        <div className="grid grid-cols-3 gap-3 mb-8">
          <StatCard label="Total Habits" value={total} />
          <StatCard label="Done Today" value={`${completedToday}/${total}`} />
          <StatCard label="Today's Streak" value={streak > 0 ? `🔥 ${streak}` : "—"} />
        </div>

        {/* Add form */}
        {showForm && (
          <div className="mb-6">
            <AddHabitForm
              userId={userId}
              db={db}
              onAdd={handleAdd}
              onCancel={() => setShowForm(false)}
            />
          </div>
        )}

        {/* Error state */}
        {error && (
          <div className="mb-6 flex items-center gap-3 bg-destructive/10 border border-destructive/30 text-destructive rounded-lg px-4 py-3 text-sm">
            <span className="flex-1">{error}</span>
            <button
              id="retry-fetch-btn"
              onClick={retry}
              className="underline underline-offset-2 font-medium shrink-0 cursor-pointer"
            >
              Retry
            </button>
          </div>
        )}

        {/* Loading skeleton */}
        {loading && (
          <div className="space-y-3">
            <HabitCardSkeleton />
            <HabitCardSkeleton />
            <HabitCardSkeleton />
          </div>
        )}

        {/* Empty state */}
        {!loading && !error && habits.length === 0 && (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mb-4 text-3xl">
              🌱
            </div>
            <h2 className="font-semibold text-foreground text-lg mb-2">No habits yet</h2>
            <p className="text-muted-foreground text-sm mb-6 max-w-xs">
              Start building your learning routine — add your first habit above.
            </p>
            <button
              id="empty-add-habit-btn"
              onClick={() => setShowForm(true)}
              className="flex items-center gap-2 bg-primary text-primary-foreground rounded-md px-4 py-2 text-sm font-medium hover:bg-primary/90 transition-colors cursor-pointer"
            >
              <PlusIcon />
              Add your first habit
            </button>
          </div>
        )}

        {/* Habit list */}
        {!loading && habits.length > 0 && (
          <div className="space-y-3">
            {habits.map((habit) => (
              <HabitCard
                key={habit.id}
                habit={habit}
                toggling={togglingIds.has(habit.id)}
                deleting={deletingIds.has(habit.id)}
                onToggle={() => handleToggle(habit)}
                onDelete={() => handleDelete(habit.id)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default HabitsPage
