import { useEffect, useState } from "react";
import { getPokemons } from "../service/pokemonService";
import { PokemonItemList } from "../models/pokemons";

export const usePagination = () => {
  const [page, setPage] = useState<number>(1);
  const [pokemonslist, setpokemonslist] = useState<PokemonItemList[]>([]);

  useEffect(() => {
    async function fetchData(): Promise<void> {
      try {
        const pokemons: PokemonItemList[] = await getPokemons(20, page);
        setpokemonslist(pokemons);
      } catch (error) {
        console.log("error");
      }
    }
    console.log("fetch data for page :", page);
    fetchData();
  }, [page]);

  const prev = () => {
    console.log("prev");
    setPage((previousValue) => previousValue - 1);
  };

  const next = () => {
    console.log("next");
    setPage((previousValue) => previousValue + 1);
  };

  return { pokemonslist, prev, next };
};
