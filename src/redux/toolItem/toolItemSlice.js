import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  item: null,
};

export const toolItemSlice = createSlice({
  name: "toolItem",
  initialState: INITIAL_STATE,
  reducers: {
    itemSelected: (state, action) => {
      return {
        ...state,
        item: action.payload,
      };
    },
  },
});

export const { itemSelected } = toolItemSlice.actions;
export default toolItemSlice.reducer;
