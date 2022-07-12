import React from "react";
import HighchartsReact from "highcharts-react-official";
import HighchartsStock from "highcharts/highstock";

export default function GraphLine({ titulo, series }) {
  const options = {
    chart: {
      height: 500,
      padding: [2, 2, 2, 2],
    },
    xAxis: {
      type: "linear",
      labels: {
        enabled: true,
      },
    },
    yAxis: {
      title: {
        text: "Cantidad de Clases",
      },
    },
    title: {
      text: titulo,
      style: {
        color: "#f5a051",
        fontWeight: "bold",
        fontSize: "1.5rem",
      },
    },
    credits: {
      enabled: false,
    },
    tooltip: {
      headerFormat: '<span style="font-size:10px"></span><table>',
      pointFormat:
        '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b> {point.y:.1f}</b></td></tr>',
      footerFormat: "</table>",
      shared: true,
      useHTML: true,
    },
    legend: {
      layout: "vertical",
      align: "center",
      verticalAlign: "bottom",
    },
    plotOptions: {
      series: {
        color: "#49A099",
        showInLegend: false,
        pointIntervalUnit: "month",
        line: {
          color: "#90C8AC",
          width: 3,
        },
      },
      areaspline: {
        fillOpacity: 0.5,
      },
    },
    series: series,
    rangeSelector: {
      buttons: [
        {
          type: "month",
          count: 1,
          text: "1m",
        },
        {
          type: "month",
          count: 3,
          text: "3m",
        },
        {
          type: "all",
          text: "All",
        },
      ],
    },
    navigator: {
      maskFill: "rgba(109, 196, 189, 0.4)",
      series: {
        type: "line",
        color: "rgba(73,160,153, 1)",
        fillOpacity: 0.4,
        dataGrouping: {
          smoothed: false,
        },
        lineWidth: 2,
        lineColor: "#49A099",
        fillColor: {
          linearGradient: {
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 1,
          },
          stops: [
            [0, "#FF8000"],
            [1, "#FFFF00"],
          ],
        },
        marker: {
          enabled: false,
        },
        shadow: true,
      },
      yAxis: {
        reversed: true,
      },
    },
  };

  return (
    <>
      <HighchartsReact
        highcharts={HighchartsStock}
        options={options}
        constructorType={"stockChart"}
        containerProps={{ style: { width: "100%", height: "100%" } }}
      />
    </>
  );
}
