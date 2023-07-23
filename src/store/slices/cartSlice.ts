import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Item } from "./itemsSlice";
import { fetchCartItems } from "../../utils/fetchLocalStorage";

export interface CartItem extends Item {
  qty: string;
}

interface CartState {
  isCartOpen: boolean;
  cartItems: CartItem[] | [];
  cartTotal: number;
  numOfCartItems: number;
}

const initialState: CartState = {
  isCartOpen: false,
  cartItems: fetchCartItems()?.cartItems || [],
  cartTotal: fetchCartItems()?.cartTotal || 0,
  numOfCartItems: fetchCartItems()?.numOfCartItems || 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    toggleIsCartOpen: (state) => {
      state.isCartOpen = !state.isCartOpen;
    },
    addToCart: (state, action: PayloadAction<CartItem>) => {
      state.cartItems = [...state.cartItems, action.payload];
      state.cartTotal = state.cartItems.reduce(
        (total, item) => total + parseInt(item.qty) * parseInt(item.price),
        0
      );
      state.numOfCartItems = state.cartItems.length;
      localStorage.setItem(
        "cartItems",
        JSON.stringify({
          cartItems: state.cartItems,
          numOfCartItems: state.numOfCartItems,
          cartTotal: state.cartTotal,
        })
      );
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.cartItems = state.cartItems.filter(
        (cartItem) => cartItem.id !== action.payload
      );
      state.cartTotal = state.cartItems.reduce(
        (total, item) => total + parseInt(item.qty) * parseInt(item.price),
        0
      );
      state.numOfCartItems = state.cartItems.length;
      localStorage.setItem(
        "cartItems",
        JSON.stringify({
          cartItems: state.cartItems,
          numOfCartItems: state.numOfCartItems,
          cartTotal: state.cartTotal,
        })
      );
    },
    updateQuantity: (
      state,
      action: PayloadAction<{ id: string; qty: string }>
    ) => {
      state.cartItems = state.cartItems.map((item) =>
        item.id === action.payload.id
          ? { ...item, qty: action.payload.qty }
          : item
      );
      state.cartTotal = state.cartItems.reduce(
        (total, item) => total + parseInt(item.qty) * parseInt(item.price),
        0
      );
      localStorage.setItem(
        "cartItems",
        JSON.stringify({
          cartItems: state.cartItems,
          numOfCartItems: state.numOfCartItems,
          cartTotal: state.cartTotal,
        })
      );
    },
    clearCart: (state) => {
      state.cartItems = [];
      state.cartTotal = 0;
      state.numOfCartItems = 0;
      localStorage.setItem(
        "cartItems",
        JSON.stringify({
          cartItems: state.cartItems,
          numOfCartItems: state.numOfCartItems,
          cartTotal: state.cartTotal,
        })
      );
    },
  },
});

export const {
  toggleIsCartOpen,
  addToCart,
  removeFromCart,
  clearCart,
  updateQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
