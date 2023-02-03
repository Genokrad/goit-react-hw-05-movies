import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import worker from '../../images/worker.png';

export const SearchForm = ({
  handleSubmit,
  inputValue,
  handleChange,
  moviesFromQuery,
  query,
}) => {
  const location = useLocation();

  return (
    <>
      <form className="form" action="" onSubmit={handleSubmit}>
        <button className="submitButton" type="submit">
          Search
        </button>

        <input
          className="input"
          type="text"
          value={inputValue}
          onChange={handleChange}
        />
      </form>
      {query && (
        <ul className="filmList">
          {moviesFromQuery &&
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
            ))}
        </ul>
      )}
    </>
  );
};
