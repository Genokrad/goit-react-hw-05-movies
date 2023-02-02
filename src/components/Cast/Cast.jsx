import { useFetchCast } from 'components/Hooks/UseFetchMovies';

export const Cast = () => {
  const casts = useFetchCast();
  // console.log(casts);
  return (
    <ul>
      {casts &&
        casts.map(cast => (
          <li>
            <img
              src={`https://image.tmdb.org/t/p/w300/${cast.profile_path}`}
              alt={cast.name || cast.original_name}
            />
            <p>{cast.name || cast.original_name}</p>
            <p>Character:{cast.character}</p>
          </li>
        ))}
    </ul>
  );
};

// (
//   <li>
//     <img
//       src={`https://image.tmdb.org/t/p/w300/${cast.profile_path}`}
//       alt=""
//     />
//   </li>
// )
