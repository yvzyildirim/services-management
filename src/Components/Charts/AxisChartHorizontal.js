import React from "react";
import ReactEcharts from "echarts-for-react";

export const AxisChartHorizontal = ({ data, type, smooth, style }) => {
  const option = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    legend: {
      type: "scroll",
      left: "left",
      data: ["Brazil", "Indonesia", "USA", "India", "China", "World"],
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: {
      type: "value",
      boundaryGap: [0, 0.01],
    },
    yAxis: {
      type: "category",
      data: ["Brazil", "Indonesia", "USA", "India", "China", "World"],
    },
    series: [
      {
        name: "2011",
        type: "bar",
        data: [230000, 200000, 180000, 150000, 130000, 100000],
      },
    ],
  };
  return <ReactEcharts style={style} option={option} />;
};
