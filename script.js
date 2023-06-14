// Data retrieved from https://www.vikjavev.no/ver/snjomengd

Highcharts.chart("container", {
  chart: {
    type: "spline",
  },
  title: {
    text: "Показатель доходности по валютным (классическим) договорам",
  },
  subtitle: {
    text: "Статистические данные по месяцам",
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
        radius: 6.5,
      },
    },
  },

  colors: ["#6CF", "#39F", "#06C", "#036", "#000"],

  // Define the data points. All series have a year of 1970/71 in order
  // to be compared on the same x axis. Note that in JavaScript, months start
  // at 0 for January, 1 for February etc.
  series: [
    {
      name: "2019 год",
      data: [
        [Date.UTC(2019, 5, 1), 0.99],
        [Date.UTC(2019, 6, 1), 3.86],
        [Date.UTC(2019, 7, 1), 1.68],
        [Date.UTC(2019, 8, 1), 2.66],
        [Date.UTC(2019, 9, 1), 1.76],
        [Date.UTC(2019, 10, 1), 2.02],
        [Date.UTC(2019, 11, 1), 2.72],
      ],
    },
    {
      name: "2020 год",
      data: [
        [Date.UTC(2019, 0, 1), 1.54], //январь
        [Date.UTC(2019, 1, 1), 0.78], //февраль
        [Date.UTC(2019, 2, 1), -0.77], //март
        [Date.UTC(2019, 3, 1), 3.9], //апрель
        [Date.UTC(2019, 4, 1), 5.7], //май
        [Date.UTC(2019, 5, 1), 1.68], //июнь
        [Date.UTC(2019, 6, 1), 1.13], //июль
        [Date.UTC(2019, 7, 1), 1.33], //август
        [Date.UTC(2019, 8, 1), 1.93], //сентябрь
        [Date.UTC(2019, 9, 1), 2.13], //октябрь
        [Date.UTC(2019, 10, 1), 1.93], //ноябрь
        [Date.UTC(2019, 11, 1), 4.6], //декабрь
      ],
    },
    {
      name: "2021 год",
      data: [
        [Date.UTC(2019, 0, 1), 4.47], //январь
        [Date.UTC(2019, 1, 1), 1.07], //февраль
        [Date.UTC(2019, 2, 1), 0.02], //март
        [Date.UTC(2019, 3, 1), 0.02], //апрель
        [Date.UTC(2019, 4, 1), 1.3], //май
        [Date.UTC(2019, 5, 1), 1.4], //июнь
        [Date.UTC(2019, 6, 1), 2.3], //июль
        [Date.UTC(2019, 7, 1), 2.1], //август
        [Date.UTC(2019, 8, 1), 1.9], //сентябрь
        [Date.UTC(2019, 9, 1), 2], //октябрь
        [Date.UTC(2019, 10, 1), 1.4], //ноябрь
        [Date.UTC(2019, 11, 1), 1.6], //декабрь
      ],
    },
    {
      name: "2022 год",
      data: [
        [Date.UTC(2019, 0, 1), 1.45], //январь
        [Date.UTC(2019, 1, 1), 1.9], //февраль
        [Date.UTC(2019, 2, 1), 1.8], //март
        [Date.UTC(2019, 3, 1), 1.8], //апрель
        [Date.UTC(2019, 4, 1), 2.1], //май
        [Date.UTC(2019, 5, 1), 2.2], //июнь
        [Date.UTC(2019, 6, 1), 0.8], //июль
        [Date.UTC(2019, 7, 1), 1.7], //август
        [Date.UTC(2019, 8, 1), 1.4], //сентябрь
        [Date.UTC(2019, 9, 1), 1.9], //октябрь
        [Date.UTC(2019, 10, 1), 2.1], //ноябрь
        [Date.UTC(2019, 11, 1), 2.3], //декабрь
      ],
    },
    {
        name: "2023 год",
        data: [
          [Date.UTC(2019, 0, 1), 2.2], //январь
          [Date.UTC(2019, 1, 1), 2.3], //февраль
          [Date.UTC(2019, 2, 1), 2], //март
         
        ],
      }
  ],
});
