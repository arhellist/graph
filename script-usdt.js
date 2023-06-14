// Data retrieved from https://www.vikjavev.no/ver/snjomengd

Highcharts.chart("container-usdt", {
  chart: {
    type: "spline",
  },
  title: {
    text: "Сводный показатель доходности по криптовалютным договорам",
  },
  subtitle: {
    text: "Статистические данные по месяцам за весь период работы фонда",
  },
  xAxis: {
    type: "datetime",
    dateTimeLabelFormats: {
      // don't display the year
      month: "%e. %b",
      year: "%b",
    },
    title: {
      text: "Месяц года",
    },
  },
  yAxis: {
    title: {
      text: "Доходность в (%)",
    },
    min: 0,
  },
  tooltip: {
    headerFormat: "<b>{series.name}</b><br>",
    pointFormat: "{point.x:%e. %b}: {point.y:.2f} %",
  },

  plotOptions: {
    series: {
      marker: {
        enabled: true,
        radius: 1.5,
      },
    },
  },

  colors: ["#6CF", "#39F", "#06C", "#036", "#000"],

  // Define the data points. All series have a year of 1970/71 in order
  // to be compared on the same x axis. Note that in JavaScript, months start
  // at 0 for January, 1 for February etc.
  series: [
    {
      name: "2021 год",
      data: [
        [Date.UTC(2019, 6, 1), 3],
        [Date.UTC(2019, 7, 1), 3],
        [Date.UTC(2019, 8, 1), 3],
        [Date.UTC(2019, 9, 1), 3],
        [Date.UTC(2019, 10, 1), 3],
        [Date.UTC(2019, 11, 1), 3],
      ],
    },
    {
      name: "2022 год",
      data: [
        [Date.UTC(2019, 0, 1), 3], //январь
        [Date.UTC(2019, 1, 1), 3], //февраль
        [Date.UTC(2019, 2, 1), 2.5], //март
        [Date.UTC(2019, 3, 1), 2.5], //апрель
        [Date.UTC(2019, 4, 1), 2.5], //май
        [Date.UTC(2019, 5, 1), 2.5], //июнь
        [Date.UTC(2019, 6, 1), 2.5], //июль
        [Date.UTC(2019, 7, 1), 2.5], //август
        [Date.UTC(2019, 8, 1), 2.5], //сентябрь
        [Date.UTC(2019, 9, 1), 2.5], //октябрь
        [Date.UTC(2019, 10, 1), 2.2], //ноябрь
        [Date.UTC(2019, 11, 1), 2.3], //декабрь
      ],
    },
    {
      name: "2023 год",
      data: [
        [Date.UTC(2019, 0, 1), 2.3], //январь
        [Date.UTC(2019, 1, 1), 2.3], //февраль
        [Date.UTC(2019, 2, 1), 2.2], //март
      ],
    }
  ],
});


