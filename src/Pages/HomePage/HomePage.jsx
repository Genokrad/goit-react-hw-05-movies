import { useState, useEffect } from 'react';
import { fetchTrending } from '../../services/moviesApi';
import { Link } from 'react-router-dom';
import worker from '../../images/worker.png';
import { Loader } from 'components/Loader/Loader';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTrending()
      .then(setMovies)
      .catch(error => console.log('Something went wrong Home Page'))
      .finally(setLoading(false));
  }, []);

  return (
    <ul className="filmList">
      {loading && <Loader />}
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

export default HomePage;
