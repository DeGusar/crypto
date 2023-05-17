import { TickerHistoryResponseDataType } from '@/types/index';

const handleDefaultChartData = ({ Data }: TickerHistoryResponseDataType) => {
  const millisecondsPerSecond = 1000;

  return Data.Data.map((dailyData) => ({
    x: dailyData.time * millisecondsPerSecond,
    y: dailyData.close,
  })).concat();
};

export default handleDefaultChartData;
