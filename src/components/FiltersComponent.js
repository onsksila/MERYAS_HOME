import { useDispatch } from "react-redux";
import {
  findMinRatedProduct,
  findMaxRatedProduct,
  findMostRatedProduct,
  findLeastRatedProduct,
} from "../redux/product/productActions";

function FiltersComponent() {
  const dispatch = useDispatch();

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
  return (
    <>
      <div>
        <button onClick={handleMinButtonClick}>Minimum Rated Product</button>
      </div>
      <div>
        <button onClick={handleMaxButtonClick}>Maximum Rate Product</button>
      </div>
      <div>
        <button onClick={handleMostButtonClick}>Most Rated Product</button>
      </div>
      <div>
        <button onClick={handleLeastButtonClick}>Least Rated Product</button>
      </div>
    </>
  );
}

export default FiltersComponent;
