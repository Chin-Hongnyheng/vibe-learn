import { SignIn } from "@clerk/clerk-react"

export function SignInPage() {
  return (
    <div className="flex min-h-[calc(100vh-72px)] items-center justify-center px-4 py-12 bg-[#FAFAFC] dark:bg-background">
      <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
    </div>
  )
}

export default SignInPage
