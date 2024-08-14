import ImageCard from "./ImageCard";
import css from "./ImageGallery.module.css";
export default function ImageGallery({ photos, onClick }) {
  return (
    <>
      <ul className={css["image-list"]}>
        {photos.map((photo) => (
          <li key={photo.id} className={css["image-list-item"]}>
            <ImageCard
              src={photo.urls.small}
              alt={photo.alt_description}
              largePhoto={photo.urls.regular}
              onClick={onClick}
            />
          </li>
        ))}
      </ul>
    </>
  );
}
