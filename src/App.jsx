import React from "react";
import { useState } from "react";
import SearchBar from "./components/SearchBar"
import PokemonList from "./components/PokemonList"
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
      <SearchBar setPokemon={setPokemon} />
      <PokemonList pokemon={pokemon} />
    </div>
  );
};

export default App;
