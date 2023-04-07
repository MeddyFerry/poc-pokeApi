import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPokemonDetails } from ".././service/pokemonService";

function PokemonDetails() {
  const { name } = useParams();
  const [pokemonSpecies, setPokemonSpecies] = useState<null | {
    name: string;
    is_mythical: boolean;
    is_legendary: boolean;
    is_baby: boolean;
  }>(null);

  useEffect(() => {
    const fetchDetails = async (name: string | undefined) => {
      if (!name) return;
      const result = await getPokemonDetails(name);
      setPokemonSpecies(result);
    };
    fetchDetails(name);
  }, [name]);

  return (
    <div>
      {pokemonSpecies && (
        <div>
          <h1>{pokemonSpecies.name}</h1>
          <h2>Is Mythical: {pokemonSpecies.is_mythical ? "Yes" : "No"}</h2>
          <h2>Is Legendary: {pokemonSpecies.is_legendary ? "Yes" : "No"}</h2>
          <h2>Is Baby: {pokemonSpecies.is_baby ? "Yes" : "No"}</h2>
        </div>
      )}
    </div>
  );
}

export default PokemonDetails;
