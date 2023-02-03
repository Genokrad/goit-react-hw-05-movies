import { useState, useEffect } from 'react';
import { fetchTrending } from '../../services/moviesApi';
import { Link } from 'react-router-dom';
import worker from '../../images/worker.png';

export const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrending().then(setMovies);
    // .catch()
    // .finally();
  }, []);

  return (
    <ul className="filmList">
      {movies.map(movie => (
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
              <Link to={`movies/${movie.id}`}>
                <span className="movieNameText">{movie.title}</span>
              </Link>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};
