import { useFetchMovies } from 'components/Hooks/UseFetchMovies';

import { Link, Outlet } from 'react-router-dom';

export const MovieDetails = () => {
  const movie = useFetchMovies();

  return (
    <>
      {movie && (
        <>
          <div>
            <img
              src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
              alt={movie.name}
            />
          </div>
          <div>
            <h2>{movie.title || movie.name}</h2>
            <p>User score:{movie.vote_average}</p>
            <p>
              <b>Overview</b>
            </p>
            <p>{movie.overview}</p>
            <p>
              <b>Genres</b>
            </p>
            <p>
              {(Array.isArray(movie.genres) &&
                movie.genres.map(({ id, name }) => (
                  <span key={id}>{name}</span>
                ))) || <span key={movie.genres}>{movie.genres}</span>}
            </p>
          </div>
        </>
      )}
      <Link to="cast">Cast</Link>
      <Link to="reviews">Rewiews</Link>
      <Outlet />
    </>
  );
};
