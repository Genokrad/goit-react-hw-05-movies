import { useFetchReviews } from 'components/Hooks/UseFetchMovies';

export const Reviews = () => {
  const reviews = useFetchReviews();
  console.log(reviews);
  return (
    <ul>
      {(Array.isArray(reviews) &&
        reviews.length > 0 &&
        reviews.map(({ author, content, id }) => (
          <li key={id}>
            <p>{author}</p>
            <p>{content}</p>
          </li>
        ))) || <p>We don't have any reviews for this movie</p>}
    </ul>
  );
};
