import { SignUp } from "@clerk/clerk-react"
import { Link } from "react-router-dom"
import { Rocket } from "lucide-react"
import { vibeLearnClerkAppearance } from "@/lib/clerk-appearance"
import logoImg from "@/assets/logo.png"

export function SignUpPage() {
  return (
    <div className="relative flex min-h-[calc(100vh-72px)] flex-col items-center justify-center overflow-hidden bg-background px-4 py-12 text-foreground">
      {/* Ambient background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-primary-500/10 blur-3xl dark:bg-primary-500/15"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-md flex-col items-center">
        {/* Brand header */}
        <div className="mb-6 flex flex-col items-center text-center">
          <Link
            to="/"
            className="group mb-4 flex items-center gap-3 transition-opacity hover:opacity-90"
          >
            <img
              src={logoImg}
              alt="Vibe Learn Logo"
              className="h-10 w-auto object-contain transition-transform group-hover:scale-105"
            />
            <span className="font-sans text-2xl font-bold tracking-tight text-neutral-900 dark:text-white">
              Vibe <span className="text-primary-500">Learn</span>
            </span>
          </Link>

          <div className="inline-flex items-center gap-1.5 rounded-full bg-primary-100 px-3 py-1 text-xs font-semibold text-primary-800 dark:bg-primary-950/60 dark:text-primary-300">
            <Rocket className="h-3.5 w-3.5 text-primary-500" />
            <span>START LEARNING FOR FREE</span>
          </div>

          <h1 className="mt-3 font-serif text-3xl font-bold text-foreground">
            Create Your Account
          </h1>
          <p className="mt-1.5 font-sans text-sm text-muted-foreground">
            Join thousands of developers mastering modern web skills
          </p>
        </div>

        {/* Clerk Sign Up component */}
        <SignUp
          path="/sign-up"
          routing="path"
          signInUrl="/sign-in"
          appearance={vibeLearnClerkAppearance}
        />

        {/* Bottom reassurance */}
        <p className="mt-6 text-center font-sans text-xs text-muted-foreground">
          By creating an account, you agree to Vibe Learn's Terms of Service and Privacy Policy.
        </p>
      </div>
    </div>
  )
}

export default SignUpPage
