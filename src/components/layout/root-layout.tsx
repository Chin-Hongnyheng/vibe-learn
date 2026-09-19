import { Outlet } from "react-router-dom"
import { NavigationSection } from "@/sections/navigationsection"
import { Footer } from "@/sections/footer"

export function RootLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <NavigationSection />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default RootLayout
