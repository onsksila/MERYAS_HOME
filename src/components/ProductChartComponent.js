import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/product/productActions";
import Chart from "chart.js/auto";

function ProductChartComponent() {
  const chartRef = useRef(null);
  const dispatch = useDispatch();

  const {
    data: products,
    loading,
    error,
    leastRatedProductId,
    mostRatedProductId,
    maxRatedProductId,
    minRatedProductId,
    choosenCategory,
  } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    initialChart();
  }, [products]);

  const updateChartWithData = (productId) => {
    const productsRates = products.map((product) => product.rating.rate);
    const myChart = chartRef.current.chart;

    if (productId) {
      const updatedData = productsRates.map((rate) =>
        rate === productId.rating.rate ? rate : 0
      );

      myChart.data.datasets[0].data = updatedData;
      myChart.update();
    }
  };

  const updateChartWithCategorialFilter = (newData) => {
    const myChart = chartRef.current?.chart;

    if (myChart) {
      // Get the existing labels and ratings
      const existingLabels = myChart.data.labels;
      const existingRatings = myChart.data.datasets[0].data;

      // Create a mapping of product titles to ratings for faster lookup
      const existingDataMap = existingLabels.reduce((acc, label, index) => {
        acc[label] = existingRatings[index];
        return acc;
      }, {});

      // Update the chart data with the new data
      myChart.data.datasets[0].data = existingLabels.map((label) => {
        return newData.find((item) => item.title === label)?.rating.rate || 0;
      });

      myChart.update();
    }
  };

  const initialChart = () => {
    if (products.length > 0) {
      if (chartRef.current) {
        if (chartRef.current.chart) {
          chartRef.current.chart.destroy();
        }

        const chartData = {
          labels: products.map((product) => product.title),
          datasets: [
            {
              label: "Ratings Rate",
              data: products.map((product) => product.rating.rate),
              backgroundColor: "rgb(199 210 254)",
              borderColor: "rgb(67 56 202)",
              borderWidth: 3,
            },
          ],
        };

        const newChart = new Chart(chartRef.current, {
          type: "bar",
          data: chartData,
          options: {
            scales: {
              y: {
                beginAtZero: true,
                title: {
                  display: true,
                  text: "Rates",
                  color: "rgb(29 78 216)",
                },
              },
              x: {
                title: {
                  display: true,
                  text: "Products",
                  color: "rgb(29 78 216)",
                },
              },
            },
          },
        });
        chartRef.current.chart = newChart;
      }
    }
  };

  useEffect(() => {
    updateChartWithData(minRatedProductId);
    updateChartWithData(maxRatedProductId);
    updateChartWithData(mostRatedProductId);
    updateChartWithData(leastRatedProductId);
    choosenCategory && updateChartWithCategorialFilter(choosenCategory);
  }, [
    minRatedProductId,
    maxRatedProductId,
    mostRatedProductId,
    leastRatedProductId,
    choosenCategory,
  ]);

  if (loading) {
    return (
      <div className="flex items-center justify-center">
        <div className="text-xl font-bold text-blue-700 mb-2">Loading...</div>
      </div>
    );
    
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const handleResetClick = () => {
    initialChart();
  };

  return (
    <div className="p-4 flex flex-col items-center">
    <button className="px-2 py-1 bg-indigo-200 text-indigo-800 rounded-md mb-2" onClick={() => handleResetClick()}>Reset</button>
    <canvas ref={chartRef} ></canvas>
  </div>
  
  );
}

export default ProductChartComponent;
