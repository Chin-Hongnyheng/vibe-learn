import { Outlet } from "react-router-dom"
import { NavigationSection } from "@/sections/navigationsection"
import { Footer } from "@/sections/footer"
import { UserSyncProvider } from "@/components/auth/user-sync-provider"

export function RootLayout() {
  return (
    <UserSyncProvider>
      <div className="flex min-h-screen flex-col bg-background text-foreground">
        <NavigationSection />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </UserSyncProvider>
  )
}

export default RootLayout
