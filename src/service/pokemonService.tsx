import axios from "axios";
import { Pokemon } from "../models/pokemons";
import { PokemonItemList } from "../models/pokemons";

export const getPokemons = async (
  nbrItems: number,
  page: number
): Promise<PokemonItemList[]> => {
  try {
    const offset = (page - 1) * nbrItems;
    console.log(offset);
    const res = await axios.get(
      `https://pokeapi.co/api/v2/pokemon?limit=${nbrItems}&offset=${offset}`
    );

    return res.data.results ?? [];
  } catch (error) {
    console.log("error");
    throw error;
  }
};

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
