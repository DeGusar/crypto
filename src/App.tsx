import React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from 'router';
import ConfigProvider from './ConfigProvider';

const App = () => {
  return (
    <ConfigProvider>
      <RouterProvider router={router} />
    </ConfigProvider>
  );
};

export default App;
