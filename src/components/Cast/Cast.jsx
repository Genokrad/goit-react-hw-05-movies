// import { useFetchCast } from 'components/Hooks/UseFetchMovies';
import worker from '../../images/worker.png';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { fetchCast } from '../../services/moviesApi';
import { Loader } from 'components/Loader/Loader';

const Cast = () => {
  const [cast, setCast] = useState(null);
  const [loading, setLoading] = useState(true);

  const useFetchCast = () => {
    const { movieId } = useParams();

    useEffect(() => {
      fetchCast(movieId)
        .then(setCast)
        .catch(error => console.log('Something went wrong Home Page'))
        .finally(setLoading(false));
    }, [movieId]);

    return cast;
  };

  const casts = useFetchCast();

  return (
    <ul className="castList">
      {loading && <Loader />}
      {casts &&
        casts.map(cast => (
          <li className="castItem" key={cast.id}>
            <img
              src={
                cast.profile_path
                  ? `https://image.tmdb.org/t/p/w300/${cast.profile_path}`
                  : worker
              }
              alt={cast.name || cast.original_name}
              height="400"
              width="300"
              className="castImg"
            />
            <div className="personsName">
              <p>{cast.name || cast.original_name}</p>
              <p>Character:{cast.character}</p>
            </div>
          </li>
        ))}
    </ul>
  );
};

export default Cast;
