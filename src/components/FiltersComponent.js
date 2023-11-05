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
    <div className="flex flex-row justify-center space-x-4">
      <div>
        <button className="px-2 py-1 bg-indigo-200 text-indigo-800 rounded-md" onClick={handleMinButtonClick}>
          Minimum Rated Product
        </button>
      </div>
      <div>
        <button className="px-2 py-1 bg-indigo-200 text-indigo-800 rounded-md" onClick={handleMaxButtonClick}>
          Maximum Rate Product
        </button>
      </div>
      <div>
        <button className="px-2 py-1 bg-indigo-200 text-indigo-800 rounded-md" onClick={handleMostButtonClick}>
          Most Rated Product
        </button>
      </div>
      <div>
        <button className="px-2 py-1 bg-indigo-200 text-indigo-800 rounded-md" onClick={handleLeastButtonClick}>
          Least Rated Product
        </button>
      </div>
    </div>
  );
}

export default FiltersComponent;
