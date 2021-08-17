import React from "react";
import { Link } from "react-router-dom";
import CustomButton from "../button/button.component";
import "./card-item.styles.css";

const CardItem = (props: any) => {
  const { name, url } = props.pokemon;
  const id = url.match("/pokemon/(.*)/")[1];
  return (
    <div className="card-container">
      <h1 className="card-title">{name}</h1>
      <Link to={`/details/${id}`} style={{ textDecoration: "none" }}>
        <CustomButton color="blue" backgroundColor="yellow">
          Details
        </CustomButton>
      </Link>
    </div>
  );
};

export default CardItem;
