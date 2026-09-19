import { Outlet } from "react-router-dom"
import { NavigationSection } from "@/sections/navigationsection"

export function RootLayout() {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      <NavigationSection />
      <main className="min-h-[calc(100vh-72px)]">
        <Outlet />
      </main>
    </div>
  )
}
export default RootLayout
