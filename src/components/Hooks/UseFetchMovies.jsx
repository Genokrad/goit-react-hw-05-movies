import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { fetchMovie } from '../../services/moviesApi';
import { fetchReviews } from '../../services/moviesApi';
import { fetchCast } from '../../services/moviesApi';

export const useFetchMovies = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    fetchMovie(movieId).then(setMovie);
  }, [movieId]);

  return movie;
};

export const useFetchReviews = () => {
  const [reviews, setReviews] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    fetchReviews(movieId).then(setReviews);
  }, [movieId]);

  return reviews;
};

export const useFetchCast = () => {
  const [cast, setCast] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    fetchCast(movieId).then(setCast);
  }, [movieId]);

  return cast;
};
