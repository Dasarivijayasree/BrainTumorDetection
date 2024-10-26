import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const OverallPerformanceChart = () => {
  const options = {
    chart: {
      type: "pie",
      backgroundColor: "transparent",
    },
    title: {
      text: "Overall Model Performance",
    },
    tooltip: {
      pointFormat:
        "<b>{point.name}</b>: {point.y:.2f} ({point.percentage:.1f}%)",
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: "pointer",
        dataLabels: {
          enabled: true,
          format: "<b>{point.name}</b>: {point.percentage:.1f} %",
        },
      },
    },
    series: [
      {
        name: "Performance",
        colorByPoint: true,
        data: [
          {
            name: "Accuracy",
            y: parseFloat(0.99), // Ensure values are properly parsed
            color: "#3498db",
          },
          {
            name: "Average Precision (Macro)",
            y: parseFloat(0.99), // Ensure values are properly parsed
            color: "#2ecc71",
          },
          {
            name: "Average Recall (Macro)",
            y: parseFloat(0.99), // Ensure values are properly parsed
            color: "#e74c3c",
          },
          {
            name: "Average F1-Score (Macro)",
            y: parseFloat(0.99), // Ensure values are properly parsed
            color: "#f1c40f",
          },
        ],
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default OverallPerformanceChart;
