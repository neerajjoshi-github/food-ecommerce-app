import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import itemsReducer from "./slices/itemsSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    items: itemsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
