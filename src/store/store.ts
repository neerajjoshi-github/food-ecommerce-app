import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import itemsReducer from "./slices/itemsSlice";
import cartReducer from "./slices/cartSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    items: itemsReducer,
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
