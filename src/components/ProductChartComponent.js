//productChartComponent.js
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
    if (products.length > 0) {
      if (chartRef.current) {
        if (chartRef.current.chart) {
          chartRef.current.chart.destroy();
        }

        const chartData = {
          labels: products.map((product) => product.title),
          datasets: [
            {
              label: "Taux de notation",
              data: products.map((product) => product.rating.rate),
              backgroundColor: "rgba(75, 192, 192, 0.2)",
              borderColor: "rgba(75, 192, 192, 1)",
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
              },
            },
          },
        });

        chartRef.current.chart = newChart;
      }
    }
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

  const updateChartWithDataCata = (newData) => {
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

  useEffect(() => {
    updateChartWithData(minRatedProductId);
    updateChartWithData(maxRatedProductId);
    updateChartWithData(mostRatedProductId);
    updateChartWithData(leastRatedProductId);
    choosenCategory && updateChartWithDataCata(choosenCategory);
    //updateChartWithData(choosenCategory);
  }, [
    minRatedProductId,
    maxRatedProductId,
    mostRatedProductId,
    leastRatedProductId,
    choosenCategory,
  ]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return <canvas ref={chartRef} width={800} height={400}></canvas>;
}

export default ProductChartComponent;
