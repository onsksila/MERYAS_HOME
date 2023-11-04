import { useDispatch, useSelector } from "react-redux";
import { findMinRatedProduct } from "../redux/productActions";
import { findMaxRatedProduct } from "../redux/productActions";

function FiltersComponent() {
  const dispatch = useDispatch();
  const minRatedProduct = useSelector(
    (state) => state.products.minRatedProduct
  );
  const maxRatedProduct = useSelector(
    (state) => state.products.maxRatedProduct
  );

  const handleMinButtonClick = () => {
    dispatch(findMinRatedProduct());
  };
  const handleMaxButtonClick = () => {
    dispatch(findMaxRatedProduct());
  };
  return (<>
    <div>
      <button onClick={handleMinButtonClick}>Min</button>
      {minRatedProduct && (
        <p>
          Product with the lowest rating:
          {minRatedProduct.title} - Rating: {minRatedProduct.rating.rate}
        </p>
      )}
    </div>
    <div>
      <button onClick={handleMaxButtonClick}>Max</button>
      {maxRatedProduct && (
        <p>
          Product with the heights rating:
          {maxRatedProduct.title} - Rating: {maxRatedProduct.rating.rate}
        </p>
      )}
    </div>
  </>
  );
}

export default FiltersComponent;
