// import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { HomePage } from 'Pages/HomePage/HomePage';
import { MoviesPage } from 'Pages/MoviesPage/MoviesPage';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route to="movies" element={<MoviesPage />}>
            {/* <Route path=":movieId" element={<MovieSubPage />} /> */}
          </Route>
        </Route>
      </Routes>
    </>
  );
};
