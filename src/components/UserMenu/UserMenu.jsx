import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../redux/auth/operations";
import { selectUser } from "../../redux/auth/selectors";
import s from "./UserMenu.module.css";

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div>
      <span className={s.welcome}>Welcome:</span>
      <span className={s.welcome_user_name}>{user.name}</span>

      <button className={s.logout_btn} onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
