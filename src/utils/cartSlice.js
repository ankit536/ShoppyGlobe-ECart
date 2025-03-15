import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addToCart(state, action) {
      const product = action.payload;
      const existing = state.items.find((item) => item.id === product.id);
      if (!existing) {
        state.items.push({ ...product, quantity: 1 });
      }
    },
    removeFromCart(state, action) {
      const id = action.payload;
      state.items = state.items.filter((item) => item.id !== id);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
