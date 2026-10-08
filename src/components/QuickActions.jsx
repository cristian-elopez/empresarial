import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import { useSelector } from "react-redux";
import empresarialIcons from "../data/icons";

import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";

export default function QuickActions() {
  const { selectedItem } = useSelector((state) => state.toolMenuItems);

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
      {selectedItem.actions.map((action, index) => {
        const Icon = empresarialIcons[action.icon];

        return (
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
              {Icon && <Icon />}
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
        );
      })}
    </Box>
  );
}
