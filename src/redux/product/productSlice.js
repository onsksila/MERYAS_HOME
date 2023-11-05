// productSlice.js
import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "products",
  initialState: {
    data: [],
    loading: false,
    error: null,
    maxRatedProductId: null,
    minRatedProductId: null,
    mostRatedProductId: null,
    leastRatedProductId: null,
    categories : [],
    choosenCategory: []
    // choosenCategory: null,
  },
  reducers: {
    setProducts: (state, action) => {
      state.data = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },

    setMaxRatedProductId: (state, action) => {
      state.maxRatedProductId = action.payload;
      state.minRatedProductId = null;
      state.mostRatedProductId = null;
      state.leastRatedProductId = null;
      state.choosenCategory = null;
    },
    setMinRatedProductId: (state, action) => {
      state.minRatedProductId = action.payload;
      state.maxRatedProductId = null;
      state.mostRatedProductId = null;
      state.leastRatedProductId = null;
      state.choosenCategory = null;

    },
    setMostRatedProductId: (state, action) => {
      state.mostRatedProductId = action.payload;
      state.maxRatedProductId = null;
      state.minRatedProductId = null;
      state.leastRatedProductId = null;
      state.choosenCategory = null;

    },
    setLeastRatedProductId: (state, action) => {
      state.leastRatedProductId = action.payload;
      state.maxRatedProductId = null;
      state.minRatedProductId = null;
      state.mostRatedProductId = null;
      state.choosenCategory = null;

    },
    getCategories: (state, action) => {
      state.categories = action.payload;
    },
    setCategory: (state, action) => {
      state.choosenCategory = action.payload;
    },
  },
});

export const {
  setProducts,
  setLoading,
  setError,
  setMaxRatedProductId,
  setMinRatedProductId,
  setLeastRatedProductId,
  setMostRatedProductId,
  getCategories,
  setCategory,
  selectCategory
  
} = productSlice.actions;
export default productSlice.reducer;
