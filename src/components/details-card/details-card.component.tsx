import React from "react";
import "./details-card.styles.css";

import useDetails from "../../hooks/useDetails";
import CustomButton from "../button/button.component";
import { Link } from "react-router-dom";

const DetailsCard = (props: any) => {
  const { status, data } = useDetails(props.id);

  const displayDetails = () => {
    return (
      <div className="details-card">
        <div className="infos">
          <img
            className="image"
            src={data?.data.sprites.front_default}
            alt={data?.data.name}
          />
          <h1 className="name">{data?.data.name}</h1>
        </div>
        <div className="details">
          <div>
            <h3>Type : </h3>
            <div className="types">
              {data?.data.types.map((type: any) => {
                return (
                  <Link
                    to={`/types/${type.type.name}`}
                    style={{ textDecoration: "none" }}
                  >
                    <CustomButton color="white" backgroundColor="black">
                      {type.type.name}{" "}
                    </CustomButton>
                  </Link>
                );
              })}
            </div>
          </div>
          <div>
            <h3>Ability : </h3>
            <ul className="myList">
              {data?.data.abilities.map((ability: any) => {
                return (
                  <li key={ability.ability.name}>{ability.ability.name} </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      {status === "error" && (
        <h1>An Error Occured, can't seem to find this pokemon</h1>
      )}

      {status === "loading" && <h1>... Loading</h1>}

      {status === "success" && displayDetails()}
    </div>
  );
};

export default DetailsCard;
