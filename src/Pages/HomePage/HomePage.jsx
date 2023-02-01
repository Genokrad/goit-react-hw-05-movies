import { useState, useEffect } from 'react';
import { fetchTrending } from '../../services/moviexApi';
import { Link } from 'react-router-dom';

export const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrending().then(setMovies);
    // .catch()
    // .finally();
  }, []);

  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link to={movie.id}>{movie.title}</Link>
        </li>
      ))}
    </ul>
  );
};
