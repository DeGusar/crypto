export type DefaultChartOptionsType = {
  x: number;
  y: number;
};

const useDefaultChartOptions = (
  tickerNames: string[],
  tickers?: DefaultChartOptionsType[][]
) => {
  const seriesData = tickers?.map((ticker, index) => ({
    name: tickerNames.at(index),
    data: ticker,
    marker: {
      enabled: null,
      radius: 3,
      lineWidth: 1,
      lineColor: '#FFFFFF',
    },
    tooltip: {
      valueDecimals: 2,
    },
  }));

  return {
    chart: {
      marginRight: 50,
      marginLeft: 50,
    },
    title: {
      text: `${tickerNames} - USD`,
    },
    series: seriesData,
    yAxis: {
      type: 'logarithmic',
    },
    rangeSelector: {
      allButtonsEnabled: true,
      buttons: [
        {
          type: 'month',
          count: 3,
          text: 'Day',
          dataGrouping: {
            forced: true,
            units: [['day', [1]]],
          },
        },
        {
          type: 'year',
          count: 1,
          text: 'Week',
          dataGrouping: {
            forced: true,
            units: [['week', [1]]],
          },
        },
        {
          type: 'all',
          text: 'Month',
          dataGrouping: {
            forced: true,
            units: [['month', [1]]],
          },
        },
      ],
      buttonTheme: {
        width: 60,
      },
      selected: 2,
    },
  };
};

export default useDefaultChartOptions;
