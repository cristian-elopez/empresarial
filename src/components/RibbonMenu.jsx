import React from "react";
import { Box, Button, Stack } from "@mui/material";
import { useSelector } from "react-redux";

export default function RibbonMenu() {
  const { items } = useSelector((state) => state.toolItems);

  return (
    <Stack
      direction="row"
      spacing={1}
      sx={{
        mt: 0.5,
        overflowX: "auto",
      }}
    >
      {items.map((item, index) => (
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
