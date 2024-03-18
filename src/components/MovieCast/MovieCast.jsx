import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import { getCast } from "../../movies-api";
import css from "./MovieCast.module.css";



export default function MovieCast() {

  const { movieId } = useParams();
  const [actor, setActor] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getData() {
      try {
        setIsLoading(true);
        const data = await getCast(movieId);
        setActor(data);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getData();
  }, [movieId]);

  return (
    <>
      {isLoading && <Loader />}
      {error && <p>Something is wrong! Reload...</p>}
      {actor.length > 0 && (
        <ul className={css.list}>
          {actor.map(({ id, name, character, profile_path }) => (
            <li key={id} className={css.item}>
              <img
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                    : <p>Unknown...</p>
                }
                alt={name}
                width={120}
              />
              <div>
                <p className={css.p}>
                  {name ? name : "No information available"}{" "}
                </p>
                <p className={css.char}>{character ? character : "No information available"} </p>
              </div>
            </li>
          ))}
        </ul>
      )}
      {!actor.length && <p>This movie has no casts</p>}
      {error && <p>HTTP error!</p>}
    </>
  );
}