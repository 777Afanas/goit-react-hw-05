import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.headers.common["Authorization"] =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNzA3NDRhMWEzYzcyNjM1NTM0NDgyMDNjYzQyZmFjZSIsInN1YiI6IjY1ZWRkNDMzNDE0NjVjMDE2M2ExNzkzYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0n1WnUnLLQlfFAU2W66-QgaUwUfazyzUkfnUl82Zcww";

export const getTrendingMovies = async () => {
  const response = await axios.get("/trending/movie/day");
  return response.data.results;
};

export const getMoviesByQuery = async (query) => {
  const { data } = await axios.get(
    `/search/movie?query=${query}&include_adult=false&language=en-US&page=1`
  );
  return data.results;
};

export const getMovieById = async (movieId) => {
  const {data} = await axios.get(`/movie/${movieId}`);
  return data;
};

export const getCast = async (movieId) => {
  const {data} = await axios.get(`/movie/${movieId}/credits`);
  return data.cast;
};

export const getReview = async (movieId) => {
  const {data} = await axios.get(`/movie/${movieId}/reviews`);
  return data.results;
};
