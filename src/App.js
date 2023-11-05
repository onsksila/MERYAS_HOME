import React from "react";
import "./index.css";
import ProductChartComponent from "./components/ProductChartComponent";
import FiltersComponent from "./components/FiltersComponent";
import CategoriesComponent from "./components/CategoriesComponent";

function App() {
  return (
    <div className="m-4 p-2 App min-h-screen flex flex-col justify-center">
  <header className="App-header">
    <h1 className="m-4 p-2 text-center text-2xl font-bold text-indigo-800">Products Ratings</h1>
    <FiltersComponent />

        <div className="p-14 m-10 rounded-2xl bg-gray-100">
            <CategoriesComponent />
            <ProductChartComponent />
         
        </div>
      </header>
    </div>
  );
}

export default App;
