export default function ImageCard({ src, alt }) {
  return (
    <div>
      <img src={src} alt={alt} style={{ width: "10%", height: "10%" }} />
    </div>
  );
}
