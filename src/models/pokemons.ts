export interface Pokemon {
  name: string;
  species: string;
  Image: string;
  hp: string;
  attack: string;
  defense: string;
  type: string;
}

export interface PokemonItemList {
  name: string;
  url: string;
}

export interface PostsProps {
  loading: boolean;
  pokemonList: Pokemon[];
  currentPage: number;
}
