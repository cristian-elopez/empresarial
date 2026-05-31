import React from "react";
import { Box, Button, Stack } from "@mui/material";
import { topMenu } from "../data/menuData";

export default function RibbonMenu() {
  return (
    <Stack
      direction="row"
      spacing={1}
      sx={{
        mt: 0.5,
        overflowX: "auto",
      }}
    >
      {topMenu.map((item, index) => (
        <Button
          key={index}
          sx={{
            color: "#fff",
            backgroundColor: "transparent",
            textTransform: "none",
            fontSize: 13,
            minWidth: "auto",
            px: 1.2,
            "&:hover": {
              backgroundColor: "rgba(255,255,255,0.15)",
            },
          }}
        >
          {item}
        </Button>
      ))}
    </Stack>
  );
}
