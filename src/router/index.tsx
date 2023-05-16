import React, { FC, PropsWithChildren, lazy, Suspense } from 'react';
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from 'react-router-dom';
import routePaths from '@/utils/constants/routePaths';
import MainLayout from '@/layouts/MainLayout';
import Spinner from '@/components/Spinner';

const MainPage = lazy(() => import('../pages/MainPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));

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

export default router;
