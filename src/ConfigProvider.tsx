import React, { FC, PropsWithChildren } from 'react';
import { ConfigProvider as ConfigProviderAntd, theme } from 'antd';
import { observer } from 'mobx-react-lite';
import colorTheme from './store/theme';
import THEMES from './utils/constants/themes';
import '@/assets/styles/index.scss';

const { darkAlgorithm, defaultAlgorithm } = theme;

const ConfigProvider: FC<PropsWithChildren> = observer(({ children }) => {
  return (
    <ConfigProviderAntd
      theme={{
        algorithm:
          colorTheme.theme === THEMES.DARK ? darkAlgorithm : defaultAlgorithm,
        hashed: false,
      }}
    >
      {children}
    </ConfigProviderAntd>
  );
});

export default ConfigProvider;
