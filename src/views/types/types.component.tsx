import React, { useEffect, useState } from "react";
import CardList from "../../components/card-list/card-list.component";
import Pagination from "../../components/pagination/pagination.component";
import useTypes from "../../hooks/useTypes";
import PokemonType from "../../types/PokemonType";
import "./types.styles.css";

const Types = ({ match }: any) => {
  const [page, setPage] = useState(1);
  const type = match.params.type;

  const { status, data } = useTypes(type);

  const [pokemons, setPokemons] = useState<PokemonType[]>([]);

  useEffect(() => {
    if (data) {
      setPokemons(
        data.data.pokemon
          .slice((page - 1) * 20, page * 20)
          .map((pokemon: any) => pokemon.pokemon)
      );
    }
  }, [data, page]);

  return (
    <div className="types-container">
      <h1 className="type-title">- {type} -</h1>
      <Pagination page={page} setPage={setPage} isLast={pokemons.length < 20} />
      <CardList pokemons={pokemons} status={status} />
    </div>
  );
};

export default Types;
