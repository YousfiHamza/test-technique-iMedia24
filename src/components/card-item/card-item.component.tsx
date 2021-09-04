import { useState } from "react";
import "./card-item.styles.css";
import { useDispatch } from "react-redux";

import CustomButton from "../button/button.component";
import PokemonModel from "../../types/PokemonType";
import DetailsCard from "../details-card/details-card.component";
import { getOnePokemonAction } from "../../redux/actions/pokemon.actions";

interface CardItemProps {
  pokemon: PokemonModel;
}

const CardItem = ({ pokemon }: CardItemProps) => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const { name, url }: PokemonModel = pokemon || {};
  const id: string = url.match("/pokemon/(.*)/")![1];

  const handleToogleModal = () => {
    setIsOpen((prev) => !prev);
    dispatch(getOnePokemonAction(id));
  };

  return (
    <div className="card-container">
      <h1 className="card-title">{name}</h1>
      <CustomButton
        handleClick={handleToogleModal}
        color="blue"
        backgroundColor="yellow"
      >
        Details
      </CustomButton>
      <DetailsCard handleToogleModal={handleToogleModal} isOpen={isOpen} />
    </div>
  );
};

export default CardItem;
