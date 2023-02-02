import axios from 'axios';

const apiKEY = '3cc1352acc3f9742a9cfb3f54e0b60a0';

export const fetchTrending = async () => {
  const trending = await axios.get(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKEY}`
  );

  // console.log(trending.data.results);
  return trending.data.results;
};

export const fetchMovie = async movieId => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKEY}`
  );
  // console.log(response);
  return response.data;
};

export const fetchQuery = async query => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${apiKEY}`
  );
  return response.data.results;
};

export const fetchCast = async id => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKEY}`
  );
  return response.data.cast;
};

export const fetchReviews = async id => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${apiKEY}`
  );
  return response.data.results;
};
