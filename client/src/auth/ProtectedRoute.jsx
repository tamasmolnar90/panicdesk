import { Navigate, Outlet, useLocation } from "react-router";
import { useAuth } from "./useAuth";

export default function ProtectedRoute() {
  const { user, isLoading } = useAuth();
  const location = useLocation();

  if (isLoading) {
    // return null;
    return <div>PROTECTED ROUTERBŐL: BETÖLTÉS</div>;
  }

  if (!user) {
    return <Navigate to="/bejelentkezes" state={{ from: location }} replace />;
  }

  return <Outlet />;
}

// Hogyan működik?
// 1. useAuth() – lekéri a globális autentikációs állapotot.
// 2. isLoading – megvárja, amíg az alkalmazás ellenőrzi a felhasználó bejelentkezési állapotát.
// 3. !user – ha nincs bejelentkezett felhasználó, átirányít a bejelentkezési oldalra.
// 4. state={{ from: location }} – eltárolja, melyik oldalra szeretett volna eljutni a felhasználó.
// 5. replace – Lecseréli az aktuális history-bejegyzést.
// 6. <Outlet /> – megjeleníti a védett útvonal gyermekkomponensét.
