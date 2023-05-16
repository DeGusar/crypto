import React from 'react';
import { Col, Row } from 'antd';
import { observer } from 'mobx-react-lite';
import tickers from '@/store/tickers';
import DefaultChart from './DefaultChart';
import PieChart from './PieChart';

const TickerDetails = observer(() => {
  return (
    <div>
      {tickers.chosenTickers.length ? (
        <Row gutter={[20, 20]}>
          <Col span={24}>
            <DefaultChart />
          </Col>
          <Col span={24}>
            <PieChart />
          </Col>
        </Row>
      ) : null}
    </div>
  );
});

export default TickerDetails;
