import React from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";

export default function PieGraph({ data, title }) {
  var pieColors = (function () {
    var colors = [],
      base = Highcharts.getOptions().colors[9],
      i;

    for (i = 0; i < 10; i += 1) {
      // Start out with a darkened base color (negative brighten), and end
      // up with a much brighter color
      colors.push(
        Highcharts.color(base)
          .brighten((i - 3) / 7)
          .get()
      );
    }
    return colors;
  })();

  const options = {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: "pie",
    },
    title: {
      text: title,
      style: {
        color: "#95c89a",
        fontWeight: "bold",
        fontSize: "1.5rem",
      },
    },
    tooltip: {
      pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
    },
    plotOptions: {
      pie: {
        colors: pieColors,
        allowPointSelect: true,
        cursor: "pointer",
        dataLabels: {
          enabled: true,
          format: "<b>{point.name}</b>: {point.percentage:.1f} %",
        },
      },
    },
    series: data,
    credits: {
      enabled: false,
    },
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
}
