import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeSlice";
import userReducer from "./userSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    user: userReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
