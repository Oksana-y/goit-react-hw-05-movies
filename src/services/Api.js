import axios from 'axios';

const API_KEY = `ca0bc941de48c2ff206be5206128b701`;
const getMovieService = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
});

export const getTrendingMovies = async () => {
  const { data } = await getMovieService.get(
    `trending/movie/day?api_key=${API_KEY}`
  );
  return data;
};

export const getMovie = async id => {
  const { data } = await getMovieService.get(`movie/${id}?api_key=${API_KEY}`);
  return data;
};

export const getQuery = async query => {
  const { data } = await getMovieService.get(
    `search/movie?query=${query}&include_adult=false&language=en-US&page=1&api_key=${API_KEY}`
  );
  return data.results;
};

export const getCredits = async id => {
  const { data } = await getMovieService.get(
    `movie/${id}/credits?api_key=${API_KEY}&language=en-US`
  );
  return data.cast;
};

export const getReviews = async id => {
  const { data } = await getMovieService.get(
    `movie/${id}/reviews?api_key=${API_KEY}&language=en-US`
  );
  return data.results;
};
