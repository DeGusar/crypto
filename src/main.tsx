import React from 'react';
import ReactDOM from 'react-dom/client';
import { ConfigProvider, theme } from 'antd';
import App from './App';

const { darkAlgorithm } = theme;

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ConfigProvider
    theme={{
      algorithm: darkAlgorithm,
    }}
  >
    <App />
  </ConfigProvider>
);
