import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectQuery } from "../../redux/contacts/selectors";
import { setQuery } from "../../redux/contacts/slice";
import s from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();
  const query = useSelector(selectQuery);

  const handleQueryChange = (e) => {
    dispatch(setQuery(e.target.value));
  };

  return (
    <div className={s.input_placeholder}>
      <input
        className={s.input_body}
        type="text"
        value={query}
        onChange={handleQueryChange}
        placeholder="Search contacts..."
      />
    </div>
  );
};

export default SearchBox;
