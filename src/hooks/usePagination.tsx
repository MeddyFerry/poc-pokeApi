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
      } catch (error) {}
    }
    fetchData();
  }, [page]);

  const prev = () => {
    setPage((previousValue) => previousValue - 1);
  };

  const next = () => {
    setPage((previousValue) => previousValue + 1);
  };
  // const indexLastPage = page * pokemonslist.length;
  // const indexFirstPage = indexLastPage - pokemonslist.length;
  // const currentPokemons = pokemonslist.slice(indexFirstPage, indexLastPage);

  // for (let i = 1; i <= Math.ceil(page / pokemonslist.length); i++) {
  //   //pokemonslist.push(i);
  // }

  return { pokemonslist, prev, next };
};

/**
 * au lieu d'avoir 2 boutons j'affiche 1.2.3;4;5;6;7;8;9;10
 * et si je clique sur 5 j'atteris sur la pge 5
 *
 * garder les boutons prev et next mais si je suis pas sur la page 1 je peux pas faire précendt
 *
 *
 */

/**
 * quand je clique sur un pokemon, ca  m'ammene sur une page de detail du pokemon
 *
 */
