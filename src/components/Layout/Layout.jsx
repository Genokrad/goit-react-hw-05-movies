import { Navigation } from '../Navigation/Navigation';
import { Outlet } from 'react-router';

export const Layout = () => {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};
