import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const EpochMetricsChart = () => {
  const options = {
    chart: {
      type: "column",
      backgroundColor: "transparent",
    },
    title: {
      text: "Model Training Metrics per Epoch",
    },
    xAxis: {
      categories: ["Epoch 1", "Epoch 2", "Epoch 3", "Epoch 4", "Epoch 5"],
      title: {
        text: "Epochs",
      },
    },
    yAxis: {
      min: 0,
      title: {
        text: "Metric Values",
      },
      labels: {
        overflow: "justify",
      },
    },
    plotOptions: {
      column: {
        stacking: "normal", // Enables stacked bars
        dataLabels: {
          enabled: false,
          formatter: function () {
            return this.y.toFixed(2);
          },
        },
      },
    },
    tooltip: {
      shared: false,
      pointFormat: "<b>{series.name}</b>: {point.y}<br/>",
    },
    legend: {
      layout: "horizontal",
      align: "center",
      verticalAlign: "bottom",
      backgroundColor: "#FFFFFF",
      shadow: false,
    },
    credits: {
      enabled: false,
    },
    series: [
      {
        name: "Accuracy",
        data: [0.7668, 0.973, 0.9896, 0.9949, 0.9953],
        color: "#3498db",
      },
      {
        name: "Loss",
        data: [0.7294, 0.0783, 0.0272, 0.0128, 0.014],
        color: "#e74c3c",
      },
      {
        name: "Precision",
        data: [0.8483, 0.9759, 0.9902, 0.996, 0.9972],
        color: "#2ecc71",
      },
      {
        name: "Recall",
        data: [0.6618, 0.9723, 0.9888, 0.9949, 0.9884],
        color: "#f1c40f",
      },
      {
        name: "Validation Accuracy",
        data: [0.9482, 0.9756, 0.9756, 0.9817, 0.9848],
        color: "#9b59b6",
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default EpochMetricsChart;
