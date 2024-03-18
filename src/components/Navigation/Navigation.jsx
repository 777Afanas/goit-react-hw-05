import { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";
import Loader from "../Loader/Loader";
import clsx from "clsx";
import css from "./Navigation.module.css";

const makeLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.isActive);
};


export default function Navigation() {
  return (
    <header>
      <nav className={css.nav}>
        <NavLink to="/" className={makeLinkClass}>
          Home
        </NavLink>
        <NavLink to="/movies" className={makeLinkClass}>
          Movies
        </NavLink>
          </nav>
          <hr style={{ width: "100%" }} />
    </header>
  );
}
