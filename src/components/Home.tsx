import React from "react";
import { usePagination } from "../hooks/usePagination";

const Home = () => {
    const { pokemonslist, prev, next } = usePagination();

    if (pokemonslist.length <= 0) {
        return (
            <div className="flex justify-center items-center content-center">
                Loading...{" "}
            </div>
        );
    } else {
        return (
            <div className="flex flex-col justify-center items-center content-center">
                <h1 className="text-2xl font-bold text-center text-gray-700">
                    Bienvenue sur le site de Pokedex
                </h1>
                <p className="text-center text-gray-700">
                    Vous pouvez consulter la liste des pokemons et leurs caractéristiques
                </p>
                <div>
                    <button onClick={() => prev()}>Prev</button>
                    <button onClick={() => next()}>Next</button>
                    {pokemonslist.map((pokemon) => (
                        <div key={pokemon.name}> {pokemon.name} </div>
                    ))}
                </div>
            </div>
        );
    }
};

export default Home;
