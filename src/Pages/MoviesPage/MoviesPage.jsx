import { useState, useEffect } from 'react';
import { fetchQuery } from '../../services/moviesApi';
import { Link } from 'react-router-dom';
// import { useFetchMovies } from 'components/Hooks/UseFetchMovies';

export const MoviesPage = () => {
  const [inputValue, setInputValue] = useState('');
  const [query, setQuery] = useState('');
  const [moviesFromQuery, setMoviesFromQuery] = useState(null);

  const handleChange = event => setInputValue(event.target.value.toLowerCase());

  const handleSubmit = event => {
    event.preventDefault();

    setQuery(inputValue);

    setInputValue('');
  };

  useEffect(() => {
    if (query === '') {
      return;
    }
    fetchQuery(query).then(response => setMoviesFromQuery(response));
  }, [query]);

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        {console.log(moviesFromQuery)}
        <button type="submit">Search</button>
        <input type="text" value={inputValue} onChange={handleChange} />
      </form>
      {query && (
        <ul>
          {moviesFromQuery &&
            moviesFromQuery.map(movie => (
              <li key={movie.id}>
                <Link to={movie.id}>{movie.title}</Link>
              </li>
            ))}
        </ul>
      )}
    </>
  );
};

// fetchTrending().then(data => setMovies(data));
