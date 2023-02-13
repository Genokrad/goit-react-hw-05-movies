import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { lazy } from 'react';

const HomePage = lazy(() => import('../Pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import('../Pages/MoviesPage/MoviesPage'));
const MovieDetails = lazy(() =>
  import('../components/MovieDetails/MovieDetails')
);
const Cast = lazy(() => import('../components/Cast/Cast'));
const Reviews = lazy(() => import('../components/Reviews/Reviews'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </>
  );
};
