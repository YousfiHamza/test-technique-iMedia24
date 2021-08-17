import axios from "axios";
import { useQuery } from "react-query";

const useTypes = (type: string) => {
  return useQuery(["types", type], () =>
    axios.get(`https://pokeapi.co/api/v2/type/${type}`)
  );
};

export default useTypes;
