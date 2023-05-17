import React, { useState } from 'react';
import { Col, Input, Row } from 'antd';
import { observer } from 'mobx-react-lite';
import tickers from '@/store/tickers';
import TickerCardsList from '@/views/MainPage/TickerCardsList';
import TickerDetails from '@/views/MainPage/TickerDetails';

const MainPage = observer(() => {
  const [inputValue, setInputValue] = useState('');

  const onSearch = (value: string) => {
    tickers.addTickers(value?.toUpperCase().trim());
    setInputValue('');
  };

  return (
    <>
      <Row>
        <Col span={8}>
          <Input.Search
            placeholder="Add ticker"
            allowClear
            enterButton="Add"
            size="large"
            onSearch={onSearch}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </Col>
      </Row>
      <TickerCardsList tickersList={tickers.monitoredTickers} />
      <TickerDetails />
    </>
  );
});

export default MainPage;
