import {
  cryptoCompareApiKey,
  cryptoCompareApiBaseUrl,
} from '@/utils/constants/cryptoCompareApiConstants';

export const getDefaultChartData = async (tickerName: string) => {
  const response = fetch(
    `${cryptoCompareApiBaseUrl}v2/histoday?fsym=${tickerName}&tsym=USD&limit=999&api_key=${cryptoCompareApiKey}`
  );

  return response;
};

export const getPieChartData = async () => {
  const response = fetch(
    `${cryptoCompareApiBaseUrl}top/totalvolfull?limit=10&tsym=USD&api_key=${cryptoCompareApiKey}`
  );

  return response;
};
