import { createSlice } from "@reduxjs/toolkit";
import { productsList } from "./Data";

const ProductSlice = createSlice({
  name: "Products",
  initialState: productsList,
  reducers: {
    addProduct: (state, action) => {
      state.push(action.payload);
    },
    editProduct: (state, action) => {
      const { id, name } = action.payload;
      const ep = state.find((product) => product.id == id);
      if (ep) {
        ep.name = name;
      }
    },
    deleteProduct: (state, action) => {
      const { id } = action.payload;
      const ep = state.find((product) => product.id == id);
      if (ep) {
        return state.filter((d) => d.id !== id);
      }
    },
  },
});

export const { addProduct, editProduct, deleteProduct } = ProductSlice.actions;
export default ProductSlice.reducer;
