import React, { FC, PropsWithChildren, lazy, Suspense } from 'react';
import { observer } from 'mobx-react-lite';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from 'react-router-dom';
import { ConfigProvider, theme } from 'antd';
import routePaths from './utils/constants/routePaths';
import Spinner from './components/Spinner';
import MainLayout from './layouts/MainLayout';
import colorTheme from './store/theme';
import './assets/styles/index.scss';

const MainPage = lazy(() => import('./pages/MainPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));
const ChartsPage = lazy(() => import('./pages/ChartsPage'));

const SuspenseRoute: FC<PropsWithChildren> = ({ children }) => {
  return <Suspense fallback={<Spinner />}>{children}</Suspense>;
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<MainLayout />}>
      <Route
        path={routePaths.MAIN_PAGE}
        element={
          <SuspenseRoute>
            <MainPage />
          </SuspenseRoute>
        }
      />
      <Route
        path={routePaths.CHARTS_PAGE}
        element={
          <SuspenseRoute>
            <ChartsPage />
          </SuspenseRoute>
        }
      />
      <Route
        path="*"
        element={
          <SuspenseRoute>
            <NotFoundPage />
          </SuspenseRoute>
        }
      />
    </Route>
  )
);

const { darkAlgorithm, defaultAlgorithm } = theme;

const App = observer(() => {
  return (
    <ConfigProvider
      theme={{
        algorithm:
          colorTheme.theme === 'dark' ? darkAlgorithm : defaultAlgorithm,
        hashed: false,
      }}
    >
      <RouterProvider router={router} />
    </ConfigProvider>
  );
});

export default App;
