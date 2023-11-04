import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts }from '../redux/productActions';
import FiltersComponent from './FiltersComponent';

function ProductChartComponent() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.data);
  const loading = useSelector((state) => state.products.loading);
  const error = useSelector((state) => state.products.error);

  useEffect(() => {
      dispatch(fetchProducts());

  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.title} - {product.rating.rate}</li>
        ))}
          </ul>
          <div>
      <FiltersComponent/> 
    </div>
    </div>
  );
}

export default ProductChartComponent;
