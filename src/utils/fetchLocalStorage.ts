import { User } from "../store/slices/userSlice";

export const fetchUser = (): User | null => {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
};
