import React from "react";
import { useState } from "react";
import axios from "axios";
import { searchPokemon } from "../service/pokemonService";
import { Pokemon } from "../models/pokemons";

function PokemonSearch({ setPokemon, pokemon }) {
  const [pokemonName, setPokemonName] = useState("");

  const handleClick = async () => {
    try {
      const res = await searchPokemon(pokemonName);
      if (res) {
        setPokemon({
          name: pokemonName,
          species: res.species.name,
          Image: res.sprites.front_default,
          hp: res.stats[0].base_stat,
          attack: res.stats[1].base_stat,
          defense: res.stats[2].base_stat,
          type: res.types[0].type.name,
        });
      }
    } catch (error) {
      console.log("error");
    }
  };

  return (
    <div>
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-gray-500 dark:text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          ></svg>
        </div>
        <input
          type="search"
          id="default-search"
          onChange={(e) => setPokemonName(e.target.value.toLowerCase())}
          className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 
        rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 
        dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white 
        dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search dogo.."
          required
        ></input>

        <button
          type="submit"
          onClick={handleClick}
          className="text-white absolute right-2.5 bottom-2.5 
        bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none 
        focus:ring-blue-300 font-medium rounded-lg 
        text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 
        dark:focus:ring-blue-800 "
        >
          Search
        </button>
      </div>

      {pokemon.name ? (
        <div
          className="bg-gradient-to-r from-cyan-500 to-blue-500 w-1/2 mx-auto card flex flex-col flex-nowrap justify-center items-center content-center mt-10 
             rounded-lg shadow-md"
        >
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
      ) : (
        <p className="text-red-600 pt-6"> Aucun Pokémon sélectionné</p>
      )}
    </div>
  );
}

export default PokemonSearch;
