import React from "react";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import RibbonMenu from "./RibbonMenu";

export default function TopBar() {
  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        backgroundColor: "#d9641c",
        height: 85,
        justifyContent: "center",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "stretch",
          px: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: 35,
          }}
        >
          <Typography
            sx={{
              fontSize: 12,
              opacity: 0.9,
            }}
          >
            Empresarial - Principal
          </Typography>

          <Box sx={{ width: 50 }} />
        </Box>

        <RibbonMenu />
      </Toolbar>
    </AppBar>
  );
}
