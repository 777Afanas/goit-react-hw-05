import { useEffect, useState } from "react";
import Loader from "../components/Loader/Loader";
import MovieList from "../components/MovieList/MovieList";
import { getTrendingMovies } from "../movies-api";



export default function HomePage() {

  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const data = await getTrendingMovies();
        setMovies(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData(); 
  }, []); 

  return (
    <>
      <h2>Trending today</h2>
      {isLoading && <Loader />}
      {error && <p>HTTP error!</p>}
      {movies.length > 0 && <MovieList movies={movies} />}
      
    </>
  );
}