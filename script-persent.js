Highcharts.chart("container-persent", {
  chart: {
    type: "column",
  },
  title: {
    text: "Показатели фактической доходности",
  },
  xAxis: {
    categories: ["2019", "2020", "2021", "2022", "2023 (прогноз)"],
  },
  yAxis: [
    {
      min: 0,
      max: 40,
      title: {
        text: "Доходность в %",
      },
    },
    {
      title: {
        text: "",
      },
      opposite: true,
    },
  ],
  legend: {
    shadow: false,
  },
  tooltip: {
    shared: true,
  },
  plotOptions: {
    column: {
      grouping: false,
      shadow: false,
      borderWidth: 0,
    },
  },
  series: [
    {
      name: "Классические договора. Доходность с простым процентом",
      color: "rgba(165,170,217,1)",
      data: [15.69, 25.88, 19.58, 21.45, 26.0],
      tooltip: {
        valueSuffix: " %",
      },
      pointPadding: 0.3,
      pointPlacement: -0.2,
    },
    {
      name: "Классические договора. Доходность фактическая",
      color: "rgba(126,86,134,.9)",
      data: [16.76, 28.97, 21.35, 23.68, 29.4],
      tooltip: {
        valueSuffix: " %",
      },
      pointPadding: 0.4,
      pointPlacement: -0.2,
    },
    {
      name: "Криптовалютные договора. Доходность с простым процентом",
      color: "rgba(248,161,63,1)",
      data: [0, 0, 18, 30.5, 27.2],
      tooltip: {
        valueSuffix: " %",
      },
      pointPadding: 0.3,
      pointPlacement: 0.2,
      yAxis: 1,
    },
    {
      name: "Криптовалютные договора. Доходность фактическая",
      color: "rgba(186,60,61,.9)",
      data: [0, 0, 19.41, 35.14, 30.9],
      tooltip: {
        valueSuffix: " %",
      },
      pointPadding: 0.4,
      pointPlacement: 0.2,
      yAxis: 1,
    },
  ],
});
