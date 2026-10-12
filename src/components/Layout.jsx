import { useEffect } from "react";
import { Paper } from "@mui/material";
import { useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";
import TopBar from "./TopBar";
import QuickActions from "./QuickActions";

export default function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <Paper
      elevation={4}
      sx={{
        borderRadius: "18px",
        overflow: "hidden",
      }}
    >
      <TopBar />
      <QuickActions />

      <main>
        <Outlet />
      </main>
    </Paper>
  );
}
