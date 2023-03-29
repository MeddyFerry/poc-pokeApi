import "./PokemonList.css";
import React from "react";

const PokemonList = ({ pokemon }) => {
  if (!pokemon.name) {
    return <p className="text-red-600	"> Aucun pokemon séléctionné</p>;
  }

  return (
    <div className="card flex flex-col content-center">
      <h2>{pokemon.name}</h2>
      <img
        className="w-32 h-32 object-cover object-center"
        src={pokemon.Image}
        alt={pokemon.name}
      />
      <p>Espèce : {pokemon.species}</p>
      <p>HP : {pokemon.hp}</p>
      <p>Attaque : {pokemon.attack}</p>
      <p>Défense : {pokemon.defense}</p>
      <p>Type : {pokemon.type}</p>
    </div>
  );
};

export default PokemonList;
