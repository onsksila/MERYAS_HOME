import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories, getProductByCategory } from "../redux/product/productActions";

function CategoriesComponent() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.products.categories);
  const products = useSelector((state) => state.products.data);

  useEffect(() => {
    if (products.length > 0) {
      dispatch(getAllCategories());
    }
  }, [dispatch, products]);

  const handleCategoryClick = (category) => {
    dispatch(getProductByCategory(category));
  };

  return (
    <div className="p-4 rounded-2xl  text-center">
      <h2 className="text-xl font-bold text-blue-700 mb-2">Filter with Categories:</h2>
      <div className="flex justify-center">
        {categories.map((cat, index) => (
          <div key={index} className="mr-2">
            <button onClick={() => handleCategoryClick(cat)} className="px-2 py-1 bg-indigo-200 text-indigo-800 rounded-md">
              {cat}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoriesComponent;
