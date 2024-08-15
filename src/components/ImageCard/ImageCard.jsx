export default function ImageCard({ src, alt, openModal, largePhoto }) {
  const imageStyle = {
    height: "350px",
    width: "100%",
    objectFit: "cover",
    transition: "transform var(--animation-duration) var(--timing-function)",
  };
  return (
    <div>
      <img
        src={src}
        alt={alt}
        style={imageStyle}
        onClick={() => openModal(largePhoto)}
      />
    </div>
  );
}
