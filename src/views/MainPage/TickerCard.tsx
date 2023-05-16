import React, { FC, useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Button, Typography } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import classNames from 'classnames';
import tickers from '@/store/tickers';
import classes from './TickerCard.module.scss';

type TickerCardProps = {
  tickerName: string;
  chosenTicker: boolean;
};

const formatPrice = (price?: string) =>
  price ? Number(price).toFixed(2) : '-';

const TickerCard: FC<TickerCardProps> = observer(
  ({ tickerName, chosenTicker }) => {
    const [price, setPrice] = useState<string>();
    const coinToUsd = `${tickerName?.toUpperCase()}-USD`;

    const deleteTicker = () => tickers.deleteTickers(tickerName);

    useEffect(() => {
      const ccStreamer = new WebSocket(
        'wss://ws.eodhistoricaldata.com/ws/crypto?api_token=demo'
      );
      ccStreamer.onopen = function onStreamOpen() {
        const subRequest = {
          action: 'subscribe',
          symbols: `${coinToUsd}`,
        };
        ccStreamer.send(JSON.stringify(subRequest));
      };

      ccStreamer.onmessage = function onStreamMessage(message) {
        if (JSON.parse(message.data)?.p) setPrice(JSON.parse(message.data)?.p);
      };

      return () => ccStreamer.close();
    }, [coinToUsd]);

    const onKeyPressHandler = () => {};

    return (
      <div
        className={classNames(
          classes.tickerCard,
          chosenTicker && classes.tickerCard__chosen
        )}
        role="button"
        onKeyPress={onKeyPressHandler}
        tabIndex={0}
        onClick={() => tickers.toggleChosenTicker(tickerName)}
      >
        <Typography.Text className={classes.tickerCardTitle} type="secondary">
          {coinToUsd}
        </Typography.Text>
        <Typography.Title level={3}>{formatPrice(price)}</Typography.Title>
        <Button
          className={classes.tickerCardDelete}
          onClick={deleteTicker}
          icon={<DeleteOutlined />}
        >
          Delete
        </Button>
      </div>
    );
  }
);

export default TickerCard;
