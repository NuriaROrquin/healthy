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
        color: "#95c89a",
        showInLegend: false,
        pointIntervalUnit: "month",
        line: {
          color: "#90C8AC",
          width: 3,
        },
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
