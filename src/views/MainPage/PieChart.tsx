import React, { useEffect, useState } from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import { observer } from 'mobx-react-lite';
import { getPieChartData } from '@/api/tickersApi';
import { TopCoinsStatsResponseDataType } from '@/types/index';
import parseDollarAmount from '@/utils/helpers/parseDollarAmount';
import usePieChartOptions, {
  PieChartOptionsType,
} from './hooks/usePieChartOptions';

const handlePieChartData = ({ Data }: TopCoinsStatsResponseDataType) => {
  return Data.map(({ DISPLAY, CoinInfo }) => ({
    name: CoinInfo.FullName,
    y: parseDollarAmount(DISPLAY.USD.VOLUME24HOURTO),
  }));
};

const PieChart = observer(() => {
  const [pieChartData, setPieChartData] = useState<PieChartOptionsType[]>();
  const options = usePieChartOptions(pieChartData);

  useEffect(() => {
    const getData = async () => {
      const data = await getPieChartData();
      const handledPieChartData = handlePieChartData(await data.json());
      setPieChartData(handledPieChartData);
    };
    getData();
  }, []);

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
});

export default PieChart;
