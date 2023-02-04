import { useState, useEffect } from 'react';
import { fetchQuery } from '../../services/moviesApi';
import { useSearchParams } from 'react-router-dom';
import { SearchForm } from 'components/SearchForm/SearchForm';
// import { useFetchMovies } from 'components/Hooks/UseFetchMovies';

const MoviesPage = () => {
  const [inputValue, setInputValue] = useState('');
  // const [query, setQuery] = useState('');
  const [moviesFromQuery, setMoviesFromQuery] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('query');

  const handleChange = event => setInputValue(event.target.value.toLowerCase());

  const handleSubmit = event => {
    event.preventDefault();

    setSearchParams(inputValue ? { query: inputValue } : {});

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
      <SearchForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        moviesFromQuery={moviesFromQuery}
        query={query}
      />
    </>
  );
};

export default MoviesPage;
