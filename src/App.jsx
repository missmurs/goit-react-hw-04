import "./App.css";
import axios from "axios";
import { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";
import Loader from "./components/Loader/Loader";
import SearchBar from "./components/SearchBar/SearchBar";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";

import ImageModal from "./components/ImageModal/ImageModal";

const ID = "06rkUn2HX2qdJaQqG5VvYN60PO6OK3s36ogP-H0bHK4";

function App() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [modalImageSrc, setModalImageSrc] = useState("");
  const handleLoadMore = () => {
    setPage(page + 1);
  };

  const onSubmit = async (newQuery) => {
    setQuery(newQuery);
    setPage(1);
    setArticles([]);
    setLoading(true);
    setError(false);
  };

  useEffect(() => {
    if (query === "") {
      return;
    }
    console.log(query);

    async function fetchData() {
      try {
        setLoading(true);
        setError(false);
        const response = await axios.get(
          `https://api.unsplash.com/search/photos?query=${query}&client_id=${ID}&page=${page}&per_page=20`
        );

        setArticles((prevArticles) => [
          ...prevArticles,
          ...response.data.results,
        ]);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [query, page]);

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal(largePhoto) {
    setModalImageSrc(largePhoto);
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <SearchBar onSubmit={onSubmit} />
      {articles.length > 0 && (
        <ImageGallery photos={articles} openModal={openModal} />
      )}
      {loading && <Loader />}

      {error && <ErrorMessage />}
      <Toaster />
      {articles.length > 0 && !articles.loading && articles.length != 0 && (
        <LoadMoreBtn handleLoadMore={handleLoadMore} />
      )}

      <ImageModal
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        largePhoto={modalImageSrc}
      />
    </>
  );
}

export default App;
