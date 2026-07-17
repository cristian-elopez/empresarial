import React from "react";
import { Box, Button, Stack } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedItem } from "../redux/toolItemSlice";

export default function RibbonMenu() {
  const { toolMenuItems } = useSelector((state) => state.toolMenuItems);

  const dispatch = useDispatch();

  return (
    <Stack
      direction="row"
      spacing={1}
      sx={{
        mt: 0.5,
        overflowX: "auto",
      }}
    >
      {toolMenuItems.map((item, index) => (
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
          onClick={() => dispatch(setSelectedItem(item))}
        >
          {item.name}
        </Button>
      ))}
    </Stack>
  );
}
