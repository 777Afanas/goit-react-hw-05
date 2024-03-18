import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { getMoviesByQuery } from "../movies-api";
import SearchBox from "../components/SearchBox/SearchBox";
import Loader from "../components/Loader/Loader";
import MovieList from "../components/MovieList/MovieList";



export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const handlerSubmit = (value) => {
    setSearchParams({ q: value });
  };

  const searchQuery = searchParams.get("q");

  useEffect(() => {
    if (!searchQuery) return;
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const data = await getMoviesByQuery(searchQuery);
        setMovies(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [searchQuery]);

  return (
    <>
      <SearchBox onHandlerSubmit={handlerSubmit} />
      {isLoading && <Loader />}
      {error && <p>Something is wrong! Reload...</p>}
      {movies.length > 0 && <MovieList movies={movies} />}
    </>
  );
}
