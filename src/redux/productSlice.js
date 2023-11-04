// productSlice.js
import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'products',
  initialState: {
    data: [],
    loading: false,
      error: null,
      maxRatedProduct: null, // Nouveau champ pour stocker le produit avec le rating le plus élevé
      minRatedProduct: null, // Nouveau champ pour stocker le produit avec le rating le plus élevé
      mostRatedProduct: null, // Nouveau champ pour stocker le produit le plus noté
      leastRatedProduct: null, // Nouveau champ pour stocker le produit le moins noté

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
      //added by ons
      setMaxRatedProduct: (state, action) => {
        state.maxRatedProduct = action.payload;
      },
      setMinRatedProduct: (state, action) => {
        state.minRatedProduct = action.payload;
      },
      setMostRatedProduct: (state, action) => {
        state.mostRatedProduct = action.payload;
      },
      setLeastRatedProduct: (state, action) => {
        state.leastRatedProduct = action.payload;
      },
  },
});

export const { setProducts, setLoading, setError, setMaxRatedProduct, setMinRatedProduct, setMostRatedProduct, setLeastRatedProduct  } = productSlice.actions;
export default productSlice.reducer;