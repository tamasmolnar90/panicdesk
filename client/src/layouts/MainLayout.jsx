import { Suspense } from "react";
import { Outlet } from "react-router";
import Header from "../components/Header/Header";

const loadingStyle = {
  display: "flex",
  justifyContent: "center",
  fontSize: "2.6rem",
};

export default function MainLayout() {
  return (
    <>
      <Header />

      <Suspense fallback={<p style={loadingStyle}>Loading...</p>}>
        <Outlet />
      </Suspense>
    </>
  );
}
