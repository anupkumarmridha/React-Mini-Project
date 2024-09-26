import { createSlice } from "@reduxjs/toolkit";
import { CartItem } from "../../types/CartItem";

const initialState: CartItem[] = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const itemIndex = state.findIndex((item) => item.id === action.payload.id);
      if (itemIndex >= 0) {
        // If item exists in the cart, just update the quantity
        state[itemIndex].quantity += action.payload.quantity;
      } else {
        // If item doesn't exist, add it to the cart
        state.push({ ...action.payload });
      }
    },
    removeFromCart(state, action) {
      return state.filter((item) => item.id !== action.payload.id);
    },
    updateCartQuantity(state, action) {
      const itemIndex = state.findIndex((item) => item.id === action.payload.id);
      if (itemIndex >= 0) {
        state[itemIndex].quantity = action.payload.quantity;
      }
    }
  }
});

export const { addToCart, removeFromCart, updateCartQuantity } = cartSlice.actions;

export default cartSlice.reducer;
