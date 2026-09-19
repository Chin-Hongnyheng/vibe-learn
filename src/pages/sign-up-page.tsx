import { SignUp } from "@clerk/clerk-react"

export function SignUpPage() {
  return (
    <div className="flex min-h-[calc(100vh-72px)] items-center justify-center px-4 py-12 bg-[#FAFAFC] dark:bg-background">
      <SignUp path="/sign-up" routing="path" signInUrl="/sign-in" />
    </div>
  )
}

export default SignUpPage
