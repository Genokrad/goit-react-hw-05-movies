import { Navigation } from '../Navigation/Navigation';
import { Outlet } from 'react-router';

export const Layout = () => {
  return (
    <>
      <header className="Header">
        <Navigation />
      </header>
      <main className="main">
        <Outlet />
      </main>
    </>
  );
};
