import React, { FC } from 'react';
import { Divider, Row, Col } from 'antd';
import { observer } from 'mobx-react-lite';
import tickers from '@/store/tickers';
import TickerCard from './TickerCard';

type TickerCardsListPropsType = {
  tickersList: string[];
};

const TickerCardsList: FC<TickerCardsListPropsType> = observer(
  ({ tickersList }) => {
    return (
      <div>
        {tickersList.length ? (
          <>
            <Divider />
            <Row gutter={[16, 16]}>
              {tickersList.map((ticker) => (
                <Col key={ticker} span={6}>
                  <TickerCard
                    tickerName={ticker}
                    chosenTicker={tickers.chosenTickers.includes(ticker)}
                  />
                </Col>
              ))}
            </Row>
            <Divider />
          </>
        ) : null}
      </div>
    );
  }
);

export default TickerCardsList;
