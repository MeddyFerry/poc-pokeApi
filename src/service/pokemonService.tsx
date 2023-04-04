import axios from "axios";
import { PokemonItemList } from "../models/pokemons";

// export const getPokemons = async (
//   postsPerPage: number,
//   currentPage: number
// ): Promise<PokemonItemList[]> => {
//   try {
//
//     const res = await axios.get(await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${postsPerPage}`);
//      const data = await res.json();

//     );

//     return res.data.results ?? [];
//   } catch (error) {
//     console.log("error");
//     throw error;
//   }
// };

export const searchPokemon = async (pokemonName) => {
  try {
    const res = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );
    return res.data ?? null;
  } catch (error) {
    console.log("error");
    throw error;
  }
};
