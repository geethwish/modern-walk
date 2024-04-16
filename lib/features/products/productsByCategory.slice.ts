import { createAppSlice } from "./../../createAppSlice";
import type { AppThunk, RootState } from "./../../store";
import { createAsyncThunk, type PayloadAction } from "@reduxjs/toolkit";
import { requestProducts, requestProductsByCategory } from "./ProductsAPI";
import { Product, ProductCategoryType, ProductsFilter } from "./Products.types";

export interface ProductByCategoryState {
  products: Product[] | [];
  status: "idle" | "loading" | "success" | "failed";
}

const initialState: ProductByCategoryState = {
  products: [],
  status: "idle",
};

export const fetchProductsByCategory = createAsyncThunk(
  "products/fetchByCategory",
  async (data: ProductCategoryType) => {
    const response = await requestProductsByCategory(data);
    return response;
  }
);

// If you are not using async thunks you can use the standalone `createSlice`.
export const productsByCategorySlice = createAppSlice({
  name: "productsByCategory",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    cleanProductsByCategorySales: (state) => {
      state.products = [];
      state.status = "idle";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsByCategory.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProductsByCategory.fulfilled, (state, action) => {
        state.status = "success";
        state.products = action.payload as Product[];
      })
      .addCase(fetchProductsByCategory.rejected, (state) => {
        state.status = "failed";
      });
  },
});
export const { cleanProductsByCategorySales } = productsByCategorySlice.actions;

export const productByCategoryAPIStatus = (state: RootState) =>
  state.productsByCategory.status;
export const productByCategoryProducts = (state: RootState) =>
  state.productsByCategory.products as Product[] | [];

export default productsByCategorySlice.reducer;
