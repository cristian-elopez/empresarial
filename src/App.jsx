import { Routes } from "./routes/routes";
import { Box } from "@mui/material";
import Layout from "./components/Layout";

export default function App() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
      }}
    >
      <Layout />
      <Routes />
    </Box>
  );
}
