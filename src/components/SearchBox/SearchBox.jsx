import { useState } from "react"; 
import css from "./SearchBox.module.css";

export default function SearchBox({ onHandlerSubmit }) {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    onHandlerSubmit(query);
    setQuery("");
  };

  return (
    <form onSubmit={handlerSubmit} className={css.form}>
      <div className={css.searchBar}>
        {" "}
        <input
          className={css.input}
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="Search movies"
        />
        <button type="submit" className={css.btn}>           
          Search
        </button>
      </div>
    </form>
  );
}
