import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPokemonDetails } from ".././service/pokemonService";
import { Card, Icon, Image } from "semantic-ui-react";
import "./Pdetails.css";

function PokemonDetails() {
  const { name } = useParams();
  const [pokemonSpecies, setPokemonSpecies] = useState<null | {
    name: string;
    is_mythical: boolean;
    is_legendary: boolean;
    is_baby: boolean;
    generation: string;
    habitat: string;
    color: string;
    shape: string;
    evolves_from_species: string;
    evolvesTo: string;
    flavor_text_entries: string;
    pokedex_numbers: string;
  }>(null);

  useEffect(() => {
    const fetchDetails = async (name: string | undefined) => {
      if (!name) return;
      const result = await getPokemonDetails(name);
      setPokemonSpecies({
        ...result,
        evolves_from_species: result.evolvesFrom,
        evolvesTo: result.evolvesTo,
        flavor_text_entries: result.flavorText,
        pokedex_numbers: result.pokedexNumbers,
      });
    };
    fetchDetails(name);
  }, [name]);

  return (
    <div className="flex justify-center items-center h-screen">
      {pokemonSpecies && (
        <Card className="flex flex-col items-center">
          <Card.Header>{pokemonSpecies.name}</Card.Header>
          <Image
            src={`https://img.pokemondb.net/artwork/${pokemonSpecies.name.toLowerCase()}.jpg`}
            wrapped
            ui={false}
            centered
            style={{ marginTop: "20px" }}
          />
          <Card.Content>
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
              évolue en : {pokemonSpecies.evolvesTo}
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
