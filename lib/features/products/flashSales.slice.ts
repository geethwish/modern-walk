import { createAppSlice } from "./../../createAppSlice";
import type { RootState } from "./../../store";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { requestProducts } from "./ProductsAPI";
import { Product, ProductsFilter } from "./Products.types";

export interface FlashSalesState {
  products: Product[] | [];
  status: "idle" | "loading" | "success" | "failed";
}

const initialState: FlashSalesState = {
  products: [],
  status: "idle",
};

export interface CounterSliceState {
  value: number;
  status: "idle" | "loading" | "failed";
}

export const fetchFlashProducts = createAsyncThunk(
  "products/fetchFlashSales",
  async (data: ProductsFilter) => {
    const response = await requestProducts(data);
    return response;
  }
);

// If you are not using async thunks you can use the standalone `createSlice`.
export const flashProductsSlice = createAppSlice({
  name: "flashSales",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    cleanFlashSales: (state) => {
      state.products = [];
      state.status = "idle";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFlashProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchFlashProducts.fulfilled, (state, action) => {
        state.status = "success";

        // given design only shows women's clothing and men's clothing because of that in here will filter products that related those mentioned categories
        const allProducts = action.payload as Product[];
        const filteredProducts = allProducts.filter((product: Product) => {
          return (
            product.category === `men's clothing` ||
            product.category === `women's clothing`
          );
        });

        state.products = filteredProducts;
      })
      .addCase(fetchFlashProducts.rejected, (state) => {
        state.status = "failed";
      });
  },
});
export const { cleanFlashSales } = flashProductsSlice.actions;

export const flashProductsApiStatus = (state: RootState) =>
  state.flashSales.status;
export const flashProducts = (state: RootState) =>
  state.flashSales.products as Product[] | [];

export default flashProductsSlice.reducer;
