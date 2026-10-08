import { createSlice } from "@reduxjs/toolkit";
import { menuItems } from "../data/menuData";

const INITIAL_STATE = {
  toolMenuItems: menuItems,
  selectedItem: menuItems[1],
};

export const toolItemSlice = createSlice({
  name: "menuItems",
  initialState: INITIAL_STATE,
  reducers: {
    setSelectedItem: (state, action) => {
      state.selectedItem = action.payload;
    },
    toolMenuItems: (state) => state,
  },
});

export const { toolMenuItems, setSelectedItem } = toolItemSlice.actions;
export default toolItemSlice.reducer;
