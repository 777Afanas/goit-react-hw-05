import { Link, useLocation } from "react-router-dom";
import css from "./MovieList.module.css"; 


export default function MovieList({ movies }) {
    const location = useLocation();


  return (
    <ul className={css.list}>
      {movies.map(({ id, title }) => (
        <li key={id} className={css.item}>
          <Link className={css.link} to={`/movies/${id}`} state={{ from: location }}>             
              <h3 className={css.h3} >{ title }</h3>             
          </Link>
        </li>
      ))}
    </ul>
  );
}
