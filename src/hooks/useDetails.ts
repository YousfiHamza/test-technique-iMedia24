import axios from "axios";
import { useQuery } from "react-query";

const useDetails = (id: number) => {
  return useQuery(["details", id], () =>
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
  );
};

export default useDetails;
