import React from "react";
import { NavLink } from "react-router-dom";
import s from "./AuthNav.module.css";

const AuthNav = () => {
  return (
    <nav className={s.authNav}>
      <NavLink
        to="/register"
        className={({ isActive }) =>
          isActive ? `${s.authNav_link} ${s.active}` : s.authNav_link
        }
      >
        Register
      </NavLink>
      <NavLink
        to="/login"
        className={({ isActive }) =>
          isActive ? `${s.authNav_link} ${s.active}` : s.authNav_link
        }
      >
        Login
      </NavLink>
    </nav>
  );
};

export default AuthNav;
