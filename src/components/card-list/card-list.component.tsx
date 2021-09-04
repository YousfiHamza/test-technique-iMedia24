import React from "react";
import "./card-list.styles.css";

import CardItem from "../card-item/card-item.component";
import PokemonModel from "../../types/PokemonType";

interface CardListProps {
  pokemons: PokemonModel[];
  isLoading: boolean;
  errorMsg: string | null;
}

const CardList = ({ pokemons, isLoading, errorMsg }: CardListProps) => {
  const displayPokemons = () =>
    pokemons.map((pokemon: PokemonModel) => (
      <CardItem key={pokemon.name} pokemon={pokemon} />
    ));

  return (
    <>
      <div className="home-list">
        {errorMsg ? (
          <h1>An Error Occured Please report this Error !</h1>
        ) : (
          displayPokemons()
        )}
      </div>
      {isLoading && (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <h1 style={{ textAlign: "center" }}>... Loading</h1>{" "}
        </div>
      )}
    </>
  );
};

export default CardList;
