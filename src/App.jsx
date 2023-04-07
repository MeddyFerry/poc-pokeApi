import React, { useState, useEffect } from "react";

import Posts from "./components/Posts";
import { Service } from ".././src/service/pokemonService";
import Header from "./components/Header";
import { Pagination } from "./components/Pagination";
import PokemonDetails from "./components/PokemonDetails";

import "./App.css";
import { Route, Routes } from "react-router-dom";

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
      <Routes>
        <Route path="/pokemon/:name" element={<PokemonDetails />} />
        <Route
          path="/"
          element={
            <>
              <Posts currentPosts={currentPosts} />
              <Pagination
                postsPerPage={postsPerPage}
                totalPosts={dataPokemon.length}
                paginate={paginate}
              />
            </>
          }
        />
        <Route path="*" element={<h1>404: Not Found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
