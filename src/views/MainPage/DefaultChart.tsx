import React, { useEffect, useState } from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import { observer } from 'mobx-react-lite';
import { getDefaultChartData } from '@/api/tickersApi';
import tickers from '@/store/tickers';
import useDefaultChartOptions, {
  DefaultChartOptionsType,
} from './hooks/useDefaultChartOptions';
import handleDefaultChartData from './helpers/handleDefaultChartData';

const DefaultChart = observer(() => {
  const chosenTickersNames = tickers.chosenTickers;
  const [defaultChartData, setDefaultChartData] =
    useState<DefaultChartOptionsType[][]>();
  const options = useDefaultChartOptions(chosenTickersNames, defaultChartData);

  useEffect(() => {
    const getData = async () => {
      const promises = chosenTickersNames.map(getDefaultChartData);
      const responses = await Promise.all(promises);
      const results = await Promise.all(
        responses.map((response) => response.json())
      );
      setDefaultChartData(results.map(handleDefaultChartData));
    };
    getData();
  }, [chosenTickersNames]);

  return (
    <div>
      {defaultChartData ? (
        <HighchartsReact
          highcharts={Highcharts}
          constructorType="stockChart"
          options={options}
        />
      ) : null}
    </div>
  );
});

export default DefaultChart;
