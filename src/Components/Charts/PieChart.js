import React from "react";
import ReactEcharts from "echarts-for-react";

export const ChartPie = ({data}) =>{
  const option = {
    tooltip: {
      trigger: 'item'
    },
    legend: {
      type: 'scroll',
      top: '5%',
      left: 'center'
    },
    series: [
      {
        top:'10%',
        height:'100%',
        name: 'Access From',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: '#fff',
          borderWidth: 2
        },
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: '20',
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        data: data
      }
    ]
  };
  return(
    <ReactEcharts style={{'height':'100%'}} option={option} />
      );
}