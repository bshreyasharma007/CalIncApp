import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const calSlice = createSlice({
  name: "calSlice",
  initialState: {
    calculate: 0,
  },
  reducers: {
    addition: (state, action: PayloadAction<{ a: number; b: number }>) => {
      const { a, b } = action.payload;
      state.calculate = a + b;
    },
    subtraction: (state, action: PayloadAction<{ a: number; b: number }>) => {
      const { a, b } = action.payload;
      state.calculate = a - b;
    },
    division: (state, action: PayloadAction<{ a: number; b: number }>) => {
      const { a, b } = action.payload;
      state.calculate = a / b;
    },
    multiplication: (
      state,
      action: PayloadAction<{ a: number; b: number }>
    ) => {
      const { a, b } = action.payload;
      state.calculate = a * b;
    },
  },
});

export default calSlice.reducer;
export const { addition, subtraction, division, multiplication } =
  calSlice.actions;
