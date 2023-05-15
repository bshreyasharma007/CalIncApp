import incDecSlice from "../slice/incDecSlice";
import calSlice from "../slice/calSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: { incDecSlice: incDecSlice, calSlice: calSlice },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
