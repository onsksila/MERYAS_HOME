// productActions.js
import { setProducts, setLoading, setError, setMaxRatedProduct, setMinRatedProduct, setMostRatedProduct, setLeastRatedProduct } from './productSlice';

export const fetchProducts = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await fetch('https://fakestoreapi.com/products');
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await response.json();
    dispatch(setProducts(data));
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading(false));
  }
};

export const findMaxRatedProduct = () => (dispatch, getState) => {
    const products = getState().products.data;
    if (products.length === 0) {
      return;
    }
  
    const maxRatedProduct = products.reduce((max, product) => {
      return product.rating.rate > max.rating.rate ? product : max;
    }, products[0]);
  
    dispatch(setMaxRatedProduct(maxRatedProduct));
};
  
export const findMinRatedProduct = () => (dispatch, getState) => {
    const products = getState().products.data;
    if (products.length === 0) {
      return;
    }
  
    const minRatedProduct = products.reduce((min, product) => {
      return product.rating.rate < min.rating.rate ? product : min;
    }, products[0]);
  
    dispatch(setMinRatedProduct(minRatedProduct));
};
  

export const findMostRatedProduct = () => (dispatch, getState) => {
    const products = getState().products.data;
    if (products.length === 0) {
      return;
    }
  
    const mostRatedProduct = products.reduce((mostRated, product) => {
      return product.rating.count > mostRated.rating.count ? product : mostRated;
    }, products[0]);
  
    dispatch(setMostRatedProduct(mostRatedProduct));
};
  
export const findLeastRatedProduct = () => (dispatch, getState) => {
    const products = getState().products.data;
    if (products.length === 0) {
      return;
    }
  
    const leastRatedProduct = products.reduce((leastRated, product) => {
      return product.rating.count < leastRated.rating.count ? product : leastRated;
    }, products[0]);
  
    dispatch(setLeastRatedProduct(leastRatedProduct));
  };