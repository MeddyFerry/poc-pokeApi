###

### SET UP

# INTRO

- npm install
- npm run dev

## EXPLICATION

- Le hook usePagination qui utilise useEffect et useState de React pour gérer la pagination de la liste des pokemons. Il récupère la liste des pokemons en utilisant la fonction getPokemons fournie dans le fichier service/pokemonService.ts. Il retourne un objet contenant la liste des pokemons, le nombre total de pages, le numéro de la page courante, et des fonctions pour naviguer entre les pages (prev, next, setPage).

- Le composant Home qui utilise le hook usePagination pour afficher la liste des pokemons et les boutons pour naviguer entre les pages.

- Le fichier service/pokemonService.ts qui contient les fonctions pour récupérer la liste des pokemons et pour rechercher un pokemon spécifique en utilisant l'API de PokeAPI.
