import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import AuthProvider from "./auth/AuthProvider";
import ProtectedRoute from "./auth/ProtectedRoute";
import MainLayout from "./layouts/MainLayout";

const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));
const RegisterPage = lazy(() => import("./pages/RegisterPage/RegisterPage"));
const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const TicketsPage = lazy(() => import("./pages/TicketsPage/TicketsPage"));
const NewTicketPage = lazy(() => import("./pages/NewTicketPage/NewTicketPage"));
const TicketDetailPage = lazy(
  () => import("./pages/TicketDetailPage/TicketDetailPage"),
);
const AdminDashboardPage = lazy(
  () => import("./pages/AdminDashboardPage/AdminDashboardPage"),
);

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Suspense fallback={<p>Loading...</p>}>
          <Routes>
            <Route path="/bejelentkezes" element={<LoginPage />} />
            <Route path="/regisztracio" element={<RegisterPage />} />

            <Route element={<ProtectedRoute />}>
              <Route element={<MainLayout />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/jegyek" element={<TicketsPage />} />
                <Route path="/jegy-letrehozasa" element={<NewTicketPage />} />
                <Route path="/jegyek/:id" element={<TicketDetailPage />} />
                <Route path="/admin" element={<AdminDashboardPage />} />
              </Route>
            </Route>
          </Routes>
        </Suspense>
      </AuthProvider>
    </BrowserRouter>
  );
}
