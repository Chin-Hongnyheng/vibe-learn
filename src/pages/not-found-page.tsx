import { Link } from "react-router-dom"
import { ArrowLeft } from "lucide-react"

export function NotFoundPage() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <span className="text-6xl font-bold text-primary-500">404</span>
      <h1 className="mt-4 text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl">
        Page Not Found
      </h1>
      <p className="mt-2 text-base text-neutral-600">
        Sorry, we couldn’t find the page you’re looking for.
      </p>
      <Link
        to="/"
        className="mt-6 inline-flex items-center gap-2 rounded-xl bg-primary-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-primary-600"
      >
        <ArrowLeft className="h-4 w-4" /> Back to Home
      </Link>
    </div>
  )
}
export default NotFoundPage
