import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import s from "./Navigation.module.css";

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav className={s.navigation}>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? `${s.navigation_link} ${s.active}` : s.navigation_link
        }
      >
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink
          to="/contacts"
          className={({ isActive }) =>
            isActive ? `${s.navigation_link} ${s.active}` : s.navigation_link
          }
        >
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
