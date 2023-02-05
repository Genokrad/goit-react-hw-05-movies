import { useFetchMovies } from 'components/Hooks/UseFetchMovies';

import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Suspense } from 'react';
import { Loader } from 'components/Loader/Loader';

const MovieDetails = () => {
  const movie = useFetchMovies();
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      <button
        onClick={() => {
          navigate(location?.state?.from ?? '/');
        }}
      >
        Back
      </button>
      {movie && (
        <>
          <div className="movieContainet">
            <div className="movie-wraper">
              <img
                src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                alt={movie.name}
              />

              <p className="score">
                User score: {Math.round(movie.vote_average * 10)}%
              </p>
            </div>
            <div className="descriptioPart">
              <h2 className="movieTitle">{movie.title || movie.name}</h2>
              <p>
                <b className="subTitle">Overview</b>
              </p>
              <p className="description">{movie.overview}</p>
              <p>
                <b className="subTitle">Genres</b>
              </p>
              <p className="description genres">
                {(Array.isArray(movie.genres) &&
                  movie.genres.map(({ id, name }) => (
                    <span className="genre" key={id}>
                      {name}
                    </span>
                  ))) || (
                  <span className="genres" key={movie.genres}>
                    {movie.genres}
                  </span>
                )}
              </p>
            </div>
          </div>
        </>
      )}
      <div>
        <div className="linkWraper">
          <Link to="cast" state={{ from: location?.state?.from }}>
            Cast
          </Link>
          <Link to="reviews" state={{ from: location?.state?.from }}>
            Rewiews
          </Link>
        </div>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};

export default MovieDetails;
