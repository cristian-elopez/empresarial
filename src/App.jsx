import { Routes } from "./routes/routes";
import React from "react";
import { Box } from "@mui/material";
import Layout from "./components/Layout";
import TopBar from "./components/TopBar";
import QuickActions from "./components/QuickActions";

export default function App() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
      }}
    >
      <Layout>
        <TopBar />
        <QuickActions />
      </Layout>
      <Routes />
    </Box>
  );
}
