//CategoriesComponent.js
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
      dispatch(getProductByCategory(category))
  };
  
  
    return (
        <>
          <h2>Filter with Categories:</h2>
          <div>
            {categories.map((cat, index) => (
              <div key={index}>
                <button onClick={() => handleCategoryClick(cat)}>{cat}</button>
           
              </div>
            ))}
          {/* <ul>
                  {categoryy && categoryy.map((product, index) => (
                    <li key={index}>{product.title} - {product.rate}</li>
                  ))}
                </ul> */}
          </div>
        </>
      );
      
}

export default CategoriesComponent;
