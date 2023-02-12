import { useFetchReviews } from 'components/Hooks/UseFetchMovies';

const Reviews = () => {
  const reviews = useFetchReviews();

  return (
    <ul className="reviewsList">
      {(Array.isArray(reviews) &&
        reviews.length > 0 &&
        reviews.map(({ author, content, id }) => (
          <li key={id}>
            <p className="reviewsAuthor">{author}</p>
            <p className="reviewsText">{content}</p>
          </li>
        ))) || (
        <p className="reviewsText">We don't have any reviews for this movie</p>
      )}
    </ul>
  );
};

export default Reviews;
