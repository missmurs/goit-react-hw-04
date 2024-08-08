import toast from "react-hot-toast";
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
    <header>
      <form onSubmit={handleSumbit}>
        <input
          type="text"
          name="query"
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
}
