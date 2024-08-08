import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import { useEffect, useState } from "react";
import axios from "axios";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import { Toaster } from "react-hot-toast";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";

function App() {
  const ID = "06rkUn2HX2qdJaQqG5VvYN60PO6OK3s36ogP-H0bHK4";
  const [articles, setArticles] = useState({
    items: [],
    loading: false,
    error: false,
  });

  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  const onSubmit = async (newQuery) => {
    setQuery(newQuery);
    setPage(1);
    setArticles({ items: [], loading: false, error: false });
  };

  useEffect(() => {
    if (query === "") {
      return;
    }

    async function fetchData() {
      try {
        setArticles({
          items: [],
          loading: true,
          error: false,
        });
        const response = await axios.get(
          `https://api.unsplash.com/search/photos?query=${query}&client_id=${ID}&page=${page}&per_page=20`
        );

        setArticles((prevArticles) => {
          return {
            ...prevArticles,
            items: response.data.results,
          };
        });
      } catch (error) {
        setArticles((prevArticles) => {
          return {
            ...prevArticles,
            error: true,
          };
        });
      } finally {
        setArticles((prevArticles) => {
          return {
            ...prevArticles,
            loading: false,
          };
        });
      }
    }
    fetchData();
  }, [query, page]);
  return (
    <>
      <SearchBar onSubmit={onSubmit} />

      {articles.items.length > 0 && <ImageGallery photos={articles.items} />}
      {articles.loading && <Loader />}
      {articles.error && <ErrorMessage />}
      <Toaster />
      <LoadMoreBtn handleLoadMore={handleLoadMore} />
    </>
  );
}

export default App;
