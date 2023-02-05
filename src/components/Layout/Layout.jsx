import { Navigation } from '../Navigation/Navigation';
import { Outlet } from 'react-router';
import { Suspense } from 'react';
import { Loader } from 'components/Loader/Loader';

export const Layout = () => {
  return (
    <>
      <header className="Header">
        <Navigation />
      </header>
      <main className="main">
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
