import ImageCard from "./ImageCard";
export default function ImageGallery({ photos }) {
  return (
    <>
      <ul>
        {photos.map((photo) => (
          <li key={photo.id}>
            <ImageCard src={photo.urls.small} alt={photo.alt_description} />
          </li>
        ))}
      </ul>
    </>
  );
}
