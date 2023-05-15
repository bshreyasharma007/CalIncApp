import { createSlice } from "@reduxjs/toolkit";

const incDecSlice = createSlice({
  name: "incDecSlice",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value = state.value + 5;
    },

    decrement(state) {
      state.value = state.value - 2;
    },
  },
});

export default incDecSlice.reducer;
export const { increment, decrement } = incDecSlice.actions;
