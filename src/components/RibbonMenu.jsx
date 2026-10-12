import { Button, Stack } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedItem } from "../redux/toolItemSlice";
import { useNavigate } from "react-router-dom";

export default function RibbonMenu() {
  const { toolMenuItems, selectedItem } = useSelector(
    (state) => state.toolMenuItems,
  );

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleMenuClick = (item) => {
    dispatch(setSelectedItem(item));
    navigate(item.path);
  };

  return (
    <Stack
      direction="row"
      spacing={1}
      sx={{
        mt: 0.5,
        overflowX: "auto",
      }}
    >
      {toolMenuItems.map((item, index) => {
        const isSelected = selectedItem?.id === item.id;

        return (
          <Button
            key={index}
            sx={{
              color: "#fff",
              backgroundColor: isSelected
                ? "rgba(255,255,255,0.15)"
                : "transparent",
              textTransform: "none",
              fontSize: 13,
              minWidth: "auto",
              px: 1.2,
              "&:hover": {
                backgroundColor: "rgba(255,255,255,0.15)",
              },
              "&:active": {
                backgroundColor: "rgba(255,255,255,0.15)",
              },
            }}
            onClick={() => {
              handleMenuClick(item);
            }}
          >
            {item.name}
          </Button>
        );
      })}
    </Stack>
  );
}
