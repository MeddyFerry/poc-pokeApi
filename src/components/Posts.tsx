import React from "react";

const Posts = ({ loading, pokemonList }) => {
  if (loading) {
    return <div className="hover:animate-spin">processing...</div>;
  }

  return (
    <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {pokemonList.map((pokemon) => (
        <li key={pokemon.name} className="flex flex-col items-center">
          <img src={pokemon.image} alt={pokemon.name} className="w-40 h-40" />
          <h2 className="text-xl font-bold">{pokemon.name}</h2>
        </li>
      ))}
    </ul>
  );
};

export default Posts;
