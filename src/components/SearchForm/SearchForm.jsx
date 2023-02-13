import { Form } from 'components/Form/Form';
import { MovieFromSearch } from 'components/MovieFromSearch/MovieFromSearch';

export const SearchForm = ({
  handleSubmit,
  inputValue,
  handleChange,
  moviesFromQuery,
  query,
}) => {
  return (
    <>
      <Form
        handleSubmit={handleSubmit}
        inputValue={inputValue}
        handleChange={handleChange}
      />
      {moviesFromQuery && (
        <MovieFromSearch query={query} moviesFromQuery={moviesFromQuery} />
      )}
    </>
  );
};
