import CRYPTOCOMPARE from '@/utils/constants/cryptoCompare';

export const getDefaultChartData = async (tickerName: string) => {
  const response = fetch(
    `${CRYPTOCOMPARE.BASE_URL}v2/histoday?fsym=${tickerName}&tsym=USD&limit=999&api_key=${CRYPTOCOMPARE.API_KEY}`
  );

  return response;
};

export const getPieChartData = async () => {
  const response = fetch(
    `${CRYPTOCOMPARE.BASE_URL}top/totalvolfull?limit=10&tsym=USD&api_key=${CRYPTOCOMPARE.API_KEY}`
  );

  return response;
};
