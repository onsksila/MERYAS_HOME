// store.js
import { configureStore } from '@reduxjs/toolkit';
import productReducer from './productSlice';

const store = configureStore({
  reducer: {
    products: productReducer,
    // Ajoutez d'autres tranches si nécessaire
  },
});

export default store;
