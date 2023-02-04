import { Navigation } from '../Navigation/Navigation';
import { Outlet } from 'react-router';
import { Suspense } from 'react';

export const Layout = () => {
  return (
    <>
      <header className="Header">
        <Navigation />
      </header>
      <main className="main">
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
