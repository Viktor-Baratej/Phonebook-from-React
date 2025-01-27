import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filters/slice";
import s from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={s.SearchBox_content}>
      <input
        className={s.input_body}
        placeholder="Search contacts"
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBox;
