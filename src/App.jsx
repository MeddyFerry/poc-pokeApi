import React, { useState, useEffect } from "react";
import Posts from "./components/Posts";
import Service from ".././src/service/pokemonService";
import Header from "./components/Header";
import { Pagination } from "./components/Pagination";
import "./App.css";

function App() {
  const [dataPokemon, setDataPokemon] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(100);

  useEffect(() => {
    const fetchData = async () => {
      const result = await Service({ postsPerPage });
      setDataPokemon(result);
    };

    fetchData();
  }, [postsPerPage]);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = dataPokemon.slice(indexOfFirstPost, indexOfLastPost);


  return (
    <div className="app">
      <Header />
      <Posts currentPosts={currentPosts} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={dataPokemon.length}
        paginate={setCurrentPage}
      />
    </div>

  );
}

export default App;
