import { Suspense, useEffect, useRef, useState } from "react";
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from "react-router-dom";
import { getMovieById } from "../../movies-api";
import Loader from "../../components/Loader/Loader";
import css from "./MovieDetailsPage.module.css";
import clsx from "clsx";
// import unknown from
// import { FaArrowLeft } from "react-icons/fa6";

const linkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.isActive);
};

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const location = useLocation();
  const goBack = useRef(location?.state?.from ?? "/");

  useEffect(() => {
    async function getData() {
      try {
        setIsLoading(true);
        const data = await getMovieById(movieId);
        setMovie(data);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getData();
  }, [movieId]);

  return (
    <div>
      <Link to={goBack.current}>
        {/* <button className={css.btn}>
          <FaArrowLeft />
          Go back
        </button> */}
        Go back
      </Link>
      {isLoading && <Loader />}
      {error && <p>Something is wrong! Reload...</p>}
      {movie && (
        <div className={css.div}>
          <img
            src={
              movie.poster_path ? (
                `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
              ) : (
                <p>Unknown...</p>
              )
            }
            alt={movie.title || "Default title"}
            width={300}
          />
          <div className={css.divDetails}>
            <h2 className={css.details}>
              {movie.title || movie.original_title} (
              {movie.release_date.slice(0, 4)})
            </h2>
            <p className={css.details}>
              User score: {Math.round(movie.vote_average * 10)}%
            </p>
            <h3 className={css.details}>Overwiev</h3>
            <p className={css.details}>{movie.overview}</p>
            <h3 className={css.details}>Genres</h3>
            <p className={css.details}>
              {movie.genres.map((genre) => genre.name).join(" ")}
            </p>
          </div>
        </div>
      )}
      <hr style={{ width: "100%" }} />
      <p>Additional information</p>
      <ul>
        <li>
          <NavLink to="cast" className={linkClass}>
            Casts
          </NavLink>
        </li>
        <li>
          <NavLink to="reviews" className={linkClass}>
            Reviews
          </NavLink>
        </li>
      </ul>
      <Suspense fallback={<div>LOADING SUB COMPONENT...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
}
