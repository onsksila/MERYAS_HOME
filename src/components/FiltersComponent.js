import { useDispatch, useSelector } from "react-redux";
import { findMinRatedProduct ,findMaxRatedProduct, findMostRatedProduct, findLeastRatedProduct  } from "../redux/productActions";

function FiltersComponent() {
  const dispatch = useDispatch();
  const minRatedProduct = useSelector(
    (state) => state.products.minRatedProduct
  );
  const maxRatedProduct = useSelector(
    (state) => state.products.maxRatedProduct
  );
  const mostRatedProduct = useSelector((state) => state.products.mostRatedProduct);

  const leastRatedProduct = useSelector((state) => state.products.leastRatedProduct);


  const handleMinButtonClick = () => {
    dispatch(findMinRatedProduct());
  };
  const handleMaxButtonClick = () => {
    dispatch(findMaxRatedProduct());
  };

  const handleMostButtonClick = () => {
    dispatch(findMostRatedProduct());
  };


  const handleLeastButtonClick = () => {
    dispatch(findLeastRatedProduct());
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
    <div>
      <button onClick={handleMostButtonClick}>Most Rated</button>
      {mostRatedProduct && (
        <p>
          Product with the most ratings:
          {mostRatedProduct.title} - Rate : {mostRatedProduct.rating.rate} - Ratings: {mostRatedProduct.rating.count}
        </p>
      )}
    </div>
    <div>
      <button onClick={handleLeastButtonClick}>Least Rated</button>
      {leastRatedProduct && (
        <p>
          Product with the least ratings:
          {leastRatedProduct.title} - Rate : {leastRatedProduct.rating.rate} - Ratings: {leastRatedProduct.rating.count}
        </p>
      )}
    </div>
  </>
  );
}

export default FiltersComponent;
