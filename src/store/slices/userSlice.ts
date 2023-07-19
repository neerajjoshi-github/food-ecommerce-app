import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { fetchUser } from "../../utils/fetchLocalStorage";

export interface User {
  refreshToken: string;
  email: string | null;
  displayName: string | null;
  phoneNumber: string | null;
  photoURL: string | null;
  providerId: string;
  uid: string;
}

interface UserSate {
  user: User | null;
}

const initialState: UserSate = {
  user: fetchUser(),
};

export const counterSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User | null>) => {
      state.user = action.payload;
    },
  },
});

export const { setUser } = counterSlice.actions;

export default counterSlice.reducer;
