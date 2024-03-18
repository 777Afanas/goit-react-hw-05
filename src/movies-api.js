import axios from "axios";


axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.headers.common["Authorization"] =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNzA3NDRhMWEzYzcyNjM1NTM0NDgyMDNjYzQyZmFjZSIsInN1YiI6IjY1ZWRkNDMzNDE0NjVjMDE2M2ExNzkzYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0n1WnUnLLQlfFAU2W66-QgaUwUfazyzUkfnUl82Zcww";

export const getTrendingMovies = async () => {
  const response = await axios.get("/trending/movie/day");
  return response.data.results;
};

export const getMoviesByQuery = async (query, page) => {
  const response = await axios.get(`/search/movie?query=${query}&page=${page}`);
  return response.data;
};

export const getMovieById = async (movieId) => {
  const response = await axios.get(`/movie/${movieId}`);
  return response.data;
};

// export const getImagePath = async () => {
//   const response = await axios.get("/configuration");
//   return response.data.images;
// }; 

export const getCast = async (movieId) => {
  const response = await axios.get(`/movie/${movieId}/credits`);

  return response.data.cast;
};

export const getReview = async (movieId) => {
  const response = await axios.get(`/movie/${movieId}/reviews`);
  return response.data.results;
};