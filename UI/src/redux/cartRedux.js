import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
    },
    removeItem: (state, action) => {
      const removedItem = state.products[action.payload];
      state.quantity -= removedItem.quantity;
      state.total -= removedItem.price * removedItem.quantity;


      if (state.quantity < 0) {
        state.quantity = 0;
      }
    
      if (state.total < 0) {
        state.total = 0;
      }



      state.products.splice(action.payload, 1);
    },
  },
});

export const { addProduct,removeItem } = cartSlice.actions;
export default cartSlice.reducer;