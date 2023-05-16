export type PieChartOptionsType = {
  name: string;
  y: number;
};

const usePieChartOptions = (data?: PieChartOptionsType[]) => {
  return {
    title: {
      text: 'Top 10 coins 24hours stats',
    },
    chart: {
      type: 'pie',
    },
    tooltip: {
      valueSuffix: '$',
    },
    series: [
      {
        name: 'Total volume',
        data,
      },
    ],
  };
};

export default usePieChartOptions;
