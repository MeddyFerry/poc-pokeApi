import React, { useEffect, useState } from "react";
import Posts from "./Posts";
interface Pokemon {
  name: string;
  image: string;
}

const Home = ({ postsPerPage, currentPage }) => {
  const [loading, setLoading] = React.useState(false);
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);

  useEffect(() => {
    const fetchPokemonList = async () => {
      setLoading(true);
      const res = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=${postsPerPage}`
      );
      const data = await res.json();

      const promises = data.results.map(async (result) => {
        const res = await fetch(result.url);
        const data = await res.json();
        return {
          name: data.name,
          image: data.sprites.front_default,
        };
      });

      const pokemonData = await Promise.all(promises);
      setPokemonList(pokemonData);
      setLoading(false);
    };

    fetchPokemonList();
  }, [postsPerPage]);

  return (
    <div className="flex flex-col justify-center items-center content-center">
      <h1 className="text-2xl font-bold text-center text-gray-700 ">
        Bienvenue sur le site de Pokedex
      </h1>
      <p className=" text-center text-gray-700 ">
        Vous pouvez consulter la liste des pokemons et leurs caractéristiques
      </p>
      <Posts
        currentPosts={currentPage}
        loading={loading}
        pokemonList={pokemonList}
      />
    </div>
  );
};

export default Home;
