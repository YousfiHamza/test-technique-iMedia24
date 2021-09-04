import { useSelector } from "react-redux";
import Modal from "react-modal";
import "./details-card.styles.css";

import CustomButton from "../button/button.component";
import { RootStore } from "../../redux/store/root.store";

interface DetailsCardProps {
  isOpen: boolean;
  handleToogleModal: () => void;
}

const DetailsCard = ({ isOpen, handleToogleModal }: DetailsCardProps) => {
  const { isLoading, selectedPokemon, errorMsgOne } = useSelector(
    (state: RootStore) => state.pokemons
  );

  const displayDetails = () => {
    return (
      <>
        <div className="details-card">
          <div className="infos">
            <img
              className="image"
              src={selectedPokemon?.sprites.front_default}
              alt={selectedPokemon?.name}
            />
            <h1 className="name">{selectedPokemon?.name}</h1>
          </div>
          <div className="details">
            <div>
              <h3>Type : </h3>
              <div className="types">
                {selectedPokemon?.types.map((type: any) => {
                  return (
                    <CustomButton
                      key={type}
                      color="white"
                      backgroundColor="black"
                    >
                      {type.type.name}{" "}
                    </CustomButton>
                  );
                })}
              </div>
            </div>
            <div>
              <h3>Ability : </h3>
              <ul className="myList">
                {selectedPokemon?.abilities.map((ability: any) => {
                  return (
                    <li key={ability.ability.name}>{ability.ability.name} </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "1rem",
          }}
        >
          <CustomButton
            handleClick={handleToogleModal}
            color="white"
            backgroundColor="Red"
          >
            CLOSE
          </CustomButton>
        </div>
      </>
    );
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleToogleModal}
      style={{
        overlay: {
          backgroundColor: "rgba(0,0,0,0.4)",
        },
        content: {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "auto",
          maxWidth: "66vw",
          maxHeight: "66vh",
          overflow: "hidden",
          borderRadius: "3rem",
        },
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "1rem",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {errorMsgOne && (
          <h1>An Error Occured, can't seem to find this pokemon</h1>
        )}

        {isLoading && <h1>... Loading</h1>}

        {selectedPokemon && displayDetails()}
      </div>
    </Modal>
  );
};

export default DetailsCard;
