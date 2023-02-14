import React, { FC, PropsWithChildren, lazy, Suspense } from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from 'react-router-dom';
import routePaths from './utils/constants/routePaths';
import './assets/styles/index.scss';
import Spinner from './components/Spinner';
import MainLayout from './layouts/MainLayout';

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

function App() {
  return <RouterProvider router={router} />;
}

export default App;
