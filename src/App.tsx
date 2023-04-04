import React, { FC, PropsWithChildren, lazy, Suspense } from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from 'react-router-dom';
import { ConfigProvider, theme } from 'antd';
import routePaths from './utils/constants/routePaths';
import './assets/styles/index.scss';
import Spinner from './components/Spinner';
import MainLayout from './layouts/MainLayout';
import { useAppSelector } from './hooks/redux';

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

function App() {
  const chosenTheme = useAppSelector((state) => state.root.theme);

  return (
    <ConfigProvider
      theme={{
        algorithm: chosenTheme === 'dark' ? darkAlgorithm : defaultAlgorithm,
        hashed: false,
      }}
    >
      <RouterProvider router={router} />
    </ConfigProvider>
  );
}

export default App;
