export async function Service() {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=1000`);
  const data = await res.json();

  const promises = data.results.map(
    async (result: { url: RequestInfo | URL }) => {
      const res = await fetch(result.url);
      const data = await res.json();
      return {
        name: data.name,
        image: data.sprites.front_default,
      };
    }
  );

  const pokemonData = await Promise.all(promises);
  return pokemonData;
}

export async function getPokemonDetails(name: string) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${name}`);
  const data = await res.json();

  const evolvesFrom = data.evolves_from_species
    ? data.evolves_from_species.name
    : null;

  const pokemonDetailsData = {
    name: data.name,
    is_mythical: data.is_mythical,
    is_legendary: data.is_legendary,
    is_baby: data.is_baby,
    generation: data.generation.name,
    habitat: data.habitat.name,
    color: data.color.name,
    shape: data.shape.name,
    evolvesFrom,
    flavorText: data.flavor_text_entries[0].flavor_text,
    pokedexNumbers: data.pokedex_numbers[0].entry_number,
  };

  return pokemonDetailsData;
}
