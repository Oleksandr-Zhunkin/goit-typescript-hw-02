import { Image, ImageForModal } from "../App/App.types";
import { ImageCard } from "./ImageCard";

type ImageGallery = {
  images: Image[];
  openModal: (image: ImageForModal) => void;
};

export const ImageGallery = ({ images, openModal }: ImageGallery) => {
  return (
    <ul className="grid grid-cols-3 gap-5 p-6 bg-black rounded-2xl">
      {images?.map((image) => (
        <li key={image.id}>
          <ImageCard image={image} openModal={openModal} />
        </li>
      ))}
    </ul>
  );
};
