import { Image, ImageForModal } from "../App/App.types";

interface OpenModal {
  image: Image;
  openModal: (image: ImageForModal) => void;
}

export const ImageCard = ({ image, openModal }: OpenModal) => {
  return (
    <div className="flex justify-center items-center rounded-md overflow-hidden">
      <img
        className="block h-60 w-full object-cover"
        src={image.urls.small}
        alt={image.alt_description}
        onClick={() =>
          openModal({ alt: image.alt_description, src: image.urls.full })
        }
      />
    </div>
  );
};
