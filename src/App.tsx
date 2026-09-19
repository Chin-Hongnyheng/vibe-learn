import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { RootLayout } from "@/components/layout/root-layout"
import { HomePage } from "@/pages/home-page"
import { CoursesPage } from "@/pages/courses-page"
import { CourseDetailPage } from "@/pages/course-detail-page"
import { LearningPage } from "@/pages/learning-page"
import { SignInPage } from "@/pages/sign-in-page"
import { SignUpPage } from "@/pages/sign-up-page"
import { ProtectedRoute } from "@/components/auth/protected-route"
import { NotFoundPage } from "@/pages/not-found-page"

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<HomePage />} />
          <Route path="courses" element={<CoursesPage />} />
          <Route path="course" element={<Navigate to="/courses" replace />} />
          <Route path="courses/:id" element={<CourseDetailPage />} />
          <Route path="course/:id" element={<CourseDetailPage />} />
          <Route
            path="courses/:id/learn"
            element={
              <ProtectedRoute>
                <LearningPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="course/:id/learn"
            element={
              <ProtectedRoute>
                <LearningPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="my-learning"
            element={
              <ProtectedRoute>
                <LearningPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="my-learning/:id"
            element={
              <ProtectedRoute>
                <LearningPage />
              </ProtectedRoute>
            }
          />
          <Route path="sign-in/*" element={<SignInPage />} />
          <Route path="sign-up/*" element={<SignUpPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
