import React from "react";
import { Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import Posts from "./components/Posts";

import "./App.css";

function App({ loading, pokemonList, currentPosts, currentPage, postsPerPage }) {


  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts Posts={currentPosts} loading={loading} pokemonList={pokemonList} />} />
      </Routes>
    </div>
  );
}

export default App;

