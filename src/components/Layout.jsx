import React, { useEffect } from "react";
import { Paper } from "@mui/material";

import TopBar from "./TopBar";
import RibbonMenu from "./RibbonMenu";
import QuickActions from "./QuickActions";
import { useLocation } from "react-router-dom";

export default function Layout({ children }) {
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
      {children}
    </Paper>
  );
}
