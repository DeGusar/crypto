import React from 'react';
import { RouterProvider } from 'react-router-dom';
import ConfigProvider from './ConfigProvider';
import router from './router';

const App = () => {
  return (
    <ConfigProvider>
      <RouterProvider router={router} />
    </ConfigProvider>
  );
};

export default App;
