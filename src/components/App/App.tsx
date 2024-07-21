import React, { FormEvent, useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import "./App.css";
import Section from "../Section/Section";
import Container from "../Container/Container";
import { ImageGallery } from "../ImageGallery/ImageGallery";
import { SearchBar } from "../SearchBar/SearchBar";
import { getImage } from "../../api/getImage";
import { LoadMoreBtn } from "../LoadMoreBtn/LoadMoreBtn";
import { Loader } from "../Loader/Loader";
import { ErrorMessage } from "../ErrorMessage/ErrorMessage";
import { ImageModal } from "../ImageModal/ImageModal";
import { Image, ImageForModal } from "./App.types";
import { AxiosError } from "axios";

function App() {
  const [images, setImages] = useState<Image[]>([]);
  const [searchValue, setSearchValue] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [loadMore, setLoadMore] = useState<boolean>(false);
  const [selectImg, setSelectImg] = useState<ImageForModal | null>(null);
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  useEffect(() => {
    if (!searchValue) return;

    const fetchImage = async () => {
      try {
        setError(null);
        setIsLoading(true);
        setLoadMore(false);
        const { results, total_pages } = await getImage(page, searchValue);

        if (!total_pages) return;

        setImages((prev) => [...prev, ...results]);
        setLoadMore(page < total_pages);
      } catch (error) {
        if (error instanceof AxiosError) {
          setError(error.message);
        } else {
          setError("Unexpected error");
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchImage();
  }, [page, searchValue]);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    const searchInput = form.elements.namedItem("search") as HTMLInputElement;
    const searchValue = searchInput.value;

    if (!searchValue.length) {
      return toast("Field cannot be empty");
    }

    setSearchValue(searchValue);

    setImages([]);
    setPage(1);
    setLoadMore(false);

    form.reset();
  };

  const openModal = (image: ImageForModal) => {
    setIsOpenModal(true);
    setSelectImg(image);
  };

  const closeModal = () => {
    setIsOpenModal(false);
    setSelectImg(null);
  };

  const handleMoreClick = () => {
    setPage((prev) => (prev += 1));
  };

  return (
    <Section>
      <Container>
        <SearchBar onSubmit={onSubmit} />
        {searchValue && <ImageGallery images={images} openModal={openModal} />}
        {loadMore && <LoadMoreBtn handleMoreClick={handleMoreClick} />}
        {isLoading && <Loader />}
        {error && <ErrorMessage error={error} />}
        <ImageModal
          modalIsOpen={isOpenModal}
          closeModal={closeModal}
          selectImg={selectImg}
        />
        <Toaster
          position="bottom-right"
          toastOptions={{
            className: "bg-lime-400 text-black",
            duration: 3000,
          }}
        />
      </Container>
    </Section>
  );
}

export default App;
