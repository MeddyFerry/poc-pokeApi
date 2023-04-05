const Service = async () => {
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
};

export default Service;
