import { Route, Routes } from "react-router";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import HomePage from "./pages/HomePage/HomePage";
import TicketsPage from "./pages/TicketsPage/TicketsPage";
import NewTicketPage from "./pages/NewTicketPage/NewTicketPage";
import TicketDetailPage from "./pages/TicketDetailPage/TicketDetailPage";
import AdminDashboardPage from "./pages/AdminDashboardPage/AdminDashboardPage";

export default function App() {
  return (
    <Routes>
      <Route path="/bejelentkezes" element={<LoginPage />} />
      <Route path="/regisztracio" element={<RegisterPage />} />

      <Route path="/" element={<HomePage />} />
      <Route path="/jegyek" element={<TicketsPage />} />
      <Route path="/jegy-letrehozasa" element={<NewTicketPage />} />
      <Route path="/jegyek/:id" element={<TicketDetailPage />} />
      <Route path="/admin" element={<AdminDashboardPage />} />
    </Routes>
  );
}
