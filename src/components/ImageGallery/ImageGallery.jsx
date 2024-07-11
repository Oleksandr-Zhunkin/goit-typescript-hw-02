import { ImageCard } from "./ImageCard";

export const ImageGallery = ({ images, openModal }) => {
  return (
    <ul className="grid grid-cols-3 gap-5 p-6 bg-black rounded-2xl sm:grid-cols-1">
      {images?.map((image) => (
        <li key={image.id}>
          <ImageCard image={image} openModal={openModal} />
        </li>
      ))}
    </ul>
  );
};
