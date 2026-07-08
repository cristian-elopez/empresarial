import { createSlice } from "@reduxjs/toolkit";
import { topMenu } from "../data/menuData";

const INITIAL_STATE = {
  toolItems: topMenu,
  selectedItem: topMenu[0],
};

export const toolItemSlice = createSlice({
  name: "toolItems",
  initialState: INITIAL_STATE,
  reducers: {
    selectedItem: (state, action) => {
      return {
        ...state,
        selectedItem:
          action.payload !== state.selectedItem ? action.payload : null,
      };
    },
    toolItems: (state) => {
      return state;
    },
  },
});

export const { toolItems, selectedItem } = toolItemSlice.actions;
export default toolItemSlice.reducer;
