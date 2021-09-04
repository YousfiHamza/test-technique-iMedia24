import axios from "axios";

export const fetchAllPokemons = (page: number) => {
  return axios.get(
    `https://pokeapi.co/api/v2/pokemon?limit=24&offset=${24 * (page - 1)}`
  );
};

export const fetchPokemon = (id: string) => {
  return axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`);
};
