import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { RootLayout } from "@/components/layout/root-layout"
import { HomePage } from "@/pages/home-page"
import { CoursesPage } from "@/pages/courses-page"
import { CourseDetailPage } from "@/pages/course-detail-page"
import { MyLearningPage } from "@/pages/my-learning-page"
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
          <Route path="my-learning" element={<MyLearningPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
