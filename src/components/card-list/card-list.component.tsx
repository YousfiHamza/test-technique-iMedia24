import React from "react";
import "./card-list.styles.css";

import PokemonType from "../../types/PokemonType";
import CardItem from "../card-item/card-item.component";

const CardList = (props: any) => {
  const displayPokemons = () =>
    props.pokemons.map((pokemon: PokemonType) => (
      <CardItem key={pokemon.name} pokemon={pokemon} />
    ));
  return (
    <div className="home-list">
      {props.status === "error" && (
        <h1>An Error Occured Please report this Error !</h1>
      )}

      {props.status === "loading" && <h1>... Loading</h1>}
      {props.status === "success" && displayPokemons()}
    </div>
  );
};

export default CardList;
