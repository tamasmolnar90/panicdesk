import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import AuthProvider from "./auth/AuthProvider";
import ProtectedRoute from "./auth/ProtectedRoute";
import MainLayout from "./layouts/MainLayout";

// FONTOS: első betöltésnél amikor nincs tartalom akkor írja ki a Loading... szöveget, amikor átnavigálunk máshova utána már nem fogja kiírni a Loading... szöveget, a React elepértelmezett viselkedése, hogy az előző oldalt tartja meg amíg be nem töltődik az új oldal, ez jobb UX, mert nincs villogó Loadning... képernyő.

const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));
// const LoginPage = lazy(
//   () =>
//     new Promise((resolve) =>
//       setTimeout(() => resolve(import("./pages/LoginPage/LoginPage")), 1500),
//     ),
// );

const RegisterPage = lazy(() => import("./pages/RegisterPage/RegisterPage"));
// const RegisterPage = lazy(
//   () =>
//     new Promise((resolve) =>
//       setTimeout(
//         () => resolve(import("./pages/RegisterPage/RegisterPage")),
//         1500,
//       ),
//     ),
// );

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
// const HomePage = lazy(
//   () =>
//     new Promise((resolve) =>
//       setTimeout(() => resolve(import("./pages/HomePage/HomePage")), 1500),
//     ),
// );

const TicketsPage = lazy(() => import("./pages/TicketsPage/TicketsPage"));
// const TicketsPage = lazy(
//   () =>
//     new Promise((resolve) =>
//       setTimeout(
//         () => resolve(import("./pages/TicketsPage/TicketsPage")),
//         1500,
//       ),
//     ),
// );

const NewTicketPage = lazy(() => import("./pages/NewTicketPage/NewTicketPage"));
// const NewTicketPage = lazy(
//   () =>
//     new Promise((resolve) =>
//       setTimeout(
//         () => resolve(import("./pages/NewTicketPage/NewTicketPage")),
//         1500,
//       ),
//     ),
// );

const TicketDetailPage = lazy(
  () => import("./pages/TicketDetailPage/TicketDetailPage"),
);
// const TicketDetailPage = lazy(
//   () =>
//     new Promise((resolve) =>
//       setTimeout(
//         () => resolve(import("./pages/TicketDetailPage/TicketDetailPage")),
//         1500,
//       ),
//     ),
// );

const AdminDashboardPage = lazy(
  () => import("./pages/AdminDashboardPage/AdminDashboardPage"),
);
// const AdminDashboardPage = lazy(
//   () =>
//     new Promise((resolve) =>
//       setTimeout(
//         () => resolve(import("./pages/AdminDashboardPage/AdminDashboardPage")),
//         1500,
//       ),
//     ),
// );

const AdminUsersPage = lazy(
  () => import("./pages/AdminUsersPage/AdminUsersPage"),
);
// const AdminUsersPage = lazy(
//   () =>
//     new Promise((resolve) =>
//       setTimeout(
//         () => resolve(import("./pages/AdminUsersPage/AdminUsersPage")),
//         1500,
//       ),
//     ),
// );

const loadingStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100vh",
  fontSize: "2.6rem",
};

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Suspense fallback={<p style={loadingStyle}>Loading...</p>}>
          <Routes>
            <Route path="/bejelentkezes" element={<LoginPage />} />
            <Route path="/regisztracio" element={<RegisterPage />} />

            <Route element={<ProtectedRoute />}>
              <Route element={<MainLayout />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/jegyek" element={<TicketsPage />} />
                <Route path="/jegy-letrehozasa" element={<NewTicketPage />} />
                <Route path="/jegyek/:id" element={<TicketDetailPage />} />
                <Route
                  path="/admin-dashboard"
                  element={<AdminDashboardPage />}
                />
                <Route path="/admin-users" element={<AdminUsersPage />} />
              </Route>
            </Route>
          </Routes>
        </Suspense>
      </AuthProvider>
    </BrowserRouter>
  );
}
