import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    addItem: (state, action) => {
      const existingProduct = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (existingProduct) {
        existingProduct.count += 1;
      } else {
        state.cartItems.push({
          ...action.payload,
          price: action.payload.price * 100,
          count: 1,
        });
      }
    },

    decreaseCount: (state, action) => {
      const existingProduct = state.cartItems.find(
        (item) => item.id === action.payload
      );

      if (existingProduct && existingProduct.count > 0) {
        if (existingProduct.count === 1) {
          state.cartItems = state.cartItems.filter(
            (item) => item.id !== action.payload
          );
        }
        existingProduct.count -= 1;
      }
    },

    deleteItem: (state, action) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
  },
});

export const { addItem, decreaseCount, deleteItem } = cartSlice.actions;

export default cartSlice.reducer;
