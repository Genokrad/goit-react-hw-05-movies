import { useFetchCast } from 'components/Hooks/UseFetchMovies';
import worker from '../../images/worker.png';

export const Cast = () => {
  const casts = useFetchCast();
  // console.log(casts);
  return (
    <ul className="castList">
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
