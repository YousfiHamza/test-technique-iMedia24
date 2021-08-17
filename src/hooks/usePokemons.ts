import axios from "axios";
import { useQuery } from "react-query";

const usePokemons = (page: number) => {
  return useQuery(["pokemons", page], () =>
    axios.get(
      `https://pokeapi.co/api/v2/pokemon?limit=20&offset=${20 * (page - 1)}`
    )
  );
};

export default usePokemons;
