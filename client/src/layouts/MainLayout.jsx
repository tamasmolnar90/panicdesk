import { Suspense } from "react";
import { Outlet } from "react-router";
import Header from "../components/Header/Header";

export default function MainLayout() {
  return (
    <>
      <Header />

      <Suspense fallback={<p>Loading...</p>}>
        <Outlet />
      </Suspense>
    </>
  );
}
