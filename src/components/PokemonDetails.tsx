import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPokemonDetails } from ".././service/pokemonService";
import { Service } from "../service/pokemonService";
import { Card, Icon, Image } from "semantic-ui-react";
import "./Pdetails.css";

type Pokemon = {
  name: string;
  image?: string;
};

function PokemonDetails() {
  const { name } = useParams();
  const [pokemonSpecies, setPokemonSpecies] = useState<null | {
    name: string;
    image?: string;
    is_mythical: boolean;
    is_legendary: boolean;
    is_baby: boolean;
    generation: string;
    habitat: string;
    color: string;
    shape: string;
    evolves_from_species: string;
    flavor_text_entries: string;
    pokedex_numbers: string;
  }>(null);

  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    const fetchPokemonData = async () => {
      const data = await Service();
      setPokemons(data);
    };

    fetchPokemonData();
  }, []);

  useEffect(() => {
    const fetchDetails = async (name: string | undefined) => {
      if (!name) return;

      const matchingPokemon = pokemons.find((pokemon) => pokemon.name === name);

      const result = await getPokemonDetails(name);
      setPokemonSpecies({
        ...result,
        image: matchingPokemon?.image,
        evolves_from_species: result.evolvesFrom,
        flavor_text_entries: result.flavorText,
        pokedex_numbers: result.pokedexNumbers,
      });
    };
    fetchDetails(name);
  }, [name, pokemons]);

  return (
    <div className="flex justify-center items-center wh-screen ">
      {pokemonSpecies && (
        <Card>
          <div className="flex justify-center items-center">
            <Image src={pokemonSpecies.image} wrapped ui={false} />
          </div>{" "}
          <Card.Content>
            <Card.Header>{pokemonSpecies.name}</Card.Header>
            <Card.Meta>
              Légendaire: {pokemonSpecies.is_legendary ? "Yes" : "No"}
            </Card.Meta>
            <Card.Description>
              génération : {pokemonSpecies.generation}
              <br />
              habitat : {pokemonSpecies.habitat}
              <br />
              color : {pokemonSpecies.color}
              <br />
              shape : {pokemonSpecies.shape}
              <br />
              évolution de : {pokemonSpecies.evolves_from_species}
              <br />
              <br />"{pokemonSpecies.flavor_text_entries}"<br />
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name="user" />
              n°pokedex: {pokemonSpecies.pokedex_numbers}
            </a>
          </Card.Content>
        </Card>
      )}
    </div>
  );
}

export default PokemonDetails;
