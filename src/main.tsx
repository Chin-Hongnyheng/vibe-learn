import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { ClerkProvider } from "@clerk/clerk-react"

import "./globals.css"
import App from "./App.tsx"
import { ThemeProvider } from "@/components/theme-provider.tsx"
import { vibeLearnClerkAppearance } from "@/lib/clerk-appearance.ts"

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key: Add VITE_CLERK_PUBLISHABLE_KEY to your .env file")
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ClerkProvider
      publishableKey={PUBLISHABLE_KEY}
      afterSignOutUrl="/"
      appearance={vibeLearnClerkAppearance}
    >
      <ThemeProvider defaultTheme="light">
        <App />
      </ThemeProvider>
    </ClerkProvider>
  </StrictMode>
)
