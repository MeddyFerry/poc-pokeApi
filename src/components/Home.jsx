import React from "react";
export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center content-center">
      <h1 className="text-2xl font-bold text-center text-gray-700">
        Bienvenue sur le site de Pokedex
      </h1>
      <p className="text-center text-gray-700">
        Vous pouvez consulter la liste des pokemons et leurs caractéristiques
      </p>
    </div>
  );
}
