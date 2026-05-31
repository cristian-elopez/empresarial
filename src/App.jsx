import { Routes } from "./routes/routes";
import React from "react";
import { Box } from "@mui/material";
import Layout from "./components/Layout";

export default function App() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        p: 2,
      }}
    >
      <Layout />
    </Box>
  );
}
