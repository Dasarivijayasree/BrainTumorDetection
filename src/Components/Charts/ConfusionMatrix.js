import React from "react";
import Highcharts from "highcharts";
import HighchartsHeatmap from "highcharts/modules/heatmap";
import HighchartsReact from "highcharts-react-official";

// Initialize the heatmap module
HighchartsHeatmap(Highcharts);

const ConfusionMatrixChart = () => {
  const options = {
    chart: {
      type: "heatmap",
      backgroundColor: "transparent",
    },
    title: {
      text: "Confusion Matrix",
    },
    xAxis: {
      categories: ["glioma", "meningioma", "notumor", "pituitary"],
      title: {
        text: "Predicted Label",
      },
    },
    yAxis: {
      categories: ["glioma", "meningioma", "notumor", "pituitary"],
      title: {
        text: "Truth Label",
      },
      reversed: true, // Make sure the Y-axis is aligned properly
    },
    colorAxis: {
      min: 0,
      max: 100, // Adjust this max value based on your data
      minColor: "#FFFFFF",
      maxColor: "#003366",
      stops: [
        [0, "#ffffff"], // Low value color
        [0.5, "#3498db"], // Medium value color
        [1, "#003366"], // High value color
      ],
    },
    legend: {
      align: "right",
      layout: "vertical",
      verticalAlign: "middle",
      symbolHeight: 200,
    },
    tooltip: {
      formatter: function () {
        return `<b>Actual:</b> ${
          this.series.yAxis.categories[this.point.y]
        }<br/><b>Predicted:</b> ${
          this.series.xAxis.categories[this.point.x]
        }<br/><b>Count:</b> ${this.point.value}`;
      },
    },
    credits: {
      enabled: false,
    },
    series: [
      {
        name: "Confusion Matrix",
        borderWidth: 1,
        data: [
          [0, 0, 74], // [x, y, value]
          [0, 1, 1],
          [0, 2, 0],
          [0, 3, 0],
          [1, 0, 1],
          [1, 1, 75],
          [1, 2, 0],
          [1, 3, 0],
          [2, 0, 0],
          [2, 1, 0],
          [2, 2, 102],
          [2, 3, 0],
          [3, 0, 0],
          [3, 1, 0],
          [3, 2, 0],
          [3, 3, 75],
        ],
        dataLabels: {
          enabled: true,
          color: "#000000",
        },
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default ConfusionMatrixChart;
