import React from "react";
import DetailsCard from "../../components/details-card/details-card.component";
import "./details.styles.css";

const Details = ({ match }: any) => {
  const id = match.params.id;
  return (
    <div className="details-container">
      <DetailsCard id={id} />
    </div>
  );
};

export default Details;
