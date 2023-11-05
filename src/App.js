import React from 'react';
import "./App.css";
import ProductChartComponent from './components/ProductChartComponent';
import FiltersComponent from './components/FiltersComponent';
import CategoriesComponent from './components/CategoriesComponent';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h1>Products Ratings</h1>
        <FiltersComponent />
        <ProductChartComponent />
        <CategoriesComponent/>
      </header>
    </div>
  );
}
export default App;
