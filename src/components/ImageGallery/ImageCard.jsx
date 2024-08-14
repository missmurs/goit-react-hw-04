import ImageModal from "../ImageModal/ImageModal";
import { useState } from "react";
export default function ImageCard({ src, alt, largePhoto }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const closeModal = () => setModalIsOpen(false);
  const imageStyle = {
    height: "350px",
    width: "100%",
    objectFit: "cover",
    transition: "transform var(--animation-duration) var(--timing-function)",
  };
  return (
    <div>
      <img
        onClick={() => setModalIsOpen(true)}
        src={src}
        alt={alt}
        style={imageStyle}
      />
      {modalIsOpen && (
        <ImageModal
          modalIsOpen={modalIsOpen}
          closeModal={closeModal}
          largePhoto={largePhoto}
        />
      )}
    </div>
  );
}
