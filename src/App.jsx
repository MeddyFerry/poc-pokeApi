import React from "react";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/home";
import SearchBar from "./components/SearchBar"

import "./App.css";

function App() {
  const [pokemon, setPokemon] = useState({
    name: '',
    species: '',
    Image: '',
    hp: '',
    attack: '',
    defense: '',
    type: '',
  });
  return (

    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchBar pokemon={pokemon} setPokemon={setPokemon} />} />
      </Routes>

    </div>
  );
};

export default App;
