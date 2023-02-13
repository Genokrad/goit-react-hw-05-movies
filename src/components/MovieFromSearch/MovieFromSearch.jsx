import { Link, useLocation } from 'react-router-dom';
import worker from '../../images/worker.png';

const MovieFromSearch = ({ moviesFromQuery, query }) => {
  const location = useLocation();
  return (
    <ul className="filmList">
      {moviesFromQuery && moviesFromQuery.length > 0 ? (
        moviesFromQuery.map(movie => (
          <li key={movie.id}>
            <div className="movie-wraper">
              <img
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w300/${movie.poster_path}`
                    : worker
                }
                alt={movie.name || movie.original_name}
                height="400"
                width="300"
                className="castImg"
              />
              <div className="movie-name">
                <Link to={`${movie.id}`} state={{ from: location }}>
                  <span className="movieNameText">{movie.title}</span>
                </Link>
              </div>
            </div>
          </li>
        ))
      ) : (
        <p className="reviewsText">We dont find any films</p>
      )}
    </ul>
  );
};

export { MovieFromSearch };
