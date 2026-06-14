import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import { ventasQuickActions } from "../data/menuData";

export default function QuickActions() {
  return (
    <Box
      sx={{
        backgroundColor: "#efefef",
        px: 2,
        py: 2,
        display: "flex",
        gap: 2,
        overflowX: "auto",
      }}
    >
      {ventasQuickActions.map((action, index) => (
        <Box
          key={index}
          sx={{
            minWidth: 80,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            color: "#777",
          }}
        >
          <IconButton
            sx={{
              color: "#888",
              mb: 0.5,
            }}
          >
            {action.icon}
          </IconButton>

          <Typography
            align="center"
            sx={{
              fontSize: 11,
              lineHeight: 1.1,
              whiteSpace: "pre-line",
            }}
          >
            {action.label}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}
