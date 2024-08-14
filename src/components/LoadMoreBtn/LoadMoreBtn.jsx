import css from "./LoadMoreBtn.module.css";

export default function LoadMoreBtn({ handleLoadMore }) {
  return (
    <div className={css["button-container"]}>
      <button onClick={handleLoadMore} className={css["load-more-btn"]}>
        Load more
      </button>
    </div>
  );
}
