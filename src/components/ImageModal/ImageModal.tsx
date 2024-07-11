import Modal from "react-modal";
import { ImageForModal } from "../App/App.types";
Modal.setAppElement("#root");
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "auto",

    padding: "0",
  },
  overlay: {
    backgroundColor: "rgba(40, 40, 40, 0.75)",
  },
};

type ImageModal = {
  modalIsOpen: boolean;
  selectImg: ImageForModal | null;
  closeModal: () => void;
};

export const ImageModal = ({
  modalIsOpen,
  closeModal,
  selectImg,
}: ImageModal) => {
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <img className="h-screen " src={selectImg?.src} alt={selectImg?.alt} />
      </Modal>
    </div>
  );
};
