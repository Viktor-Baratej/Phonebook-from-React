import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import UserMenu from "./UserMenu";
import s from "./AppBar.module.css";

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <header className={s.header}>
      <nav className={s.header_nav}>
        <NavLink className={s.header_home} to="/">
          Home
        </NavLink>
        {isLoggedIn ? (
          <UserMenu />
        ) : (
          <div className={s.header_link_content}>
            <NavLink className={s.header_link} to="/register">
              Register
            </NavLink>
            <NavLink className={s.header_link} to="/login">
              Login
            </NavLink>
          </div>
        )}
      </nav>
    </header>
  );
};

export default AppBar;
