import toast from "react-hot-toast";
import css from "./SearchBar.module.css";
import { IoSearch } from "react-icons/io5";
export default function SearchBar({ onSubmit }) {
  const handleSumbit = (e) => {
    e.preventDefault();
    if (e.target.elements.query.value.trim() === "") {
      toast.error("EMPTY STRING!");

      return;
    }
    onSubmit(e.target.elements.query.value);
    e.target.reset();
  };
  return (
    <header className={css.header}>
      <form onSubmit={handleSumbit} className={css["search-form"]}>
        <button type="submit" className={css["search-form-btn"]}>
          {" "}
          <IoSearch type="submit" className={css["search-form-icon"]} />
        </button>
        <input
          type="text"
          name="query"
          placeholder="Search images and photos"
          className={css["search-form-text"]}
        />
      </form>
    </header>
  );
}
