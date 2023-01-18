import React from "react";

const Card = ({
  IconCalories,
  NumberCalories,
  IconProteins,
  NumberProteines,
  IconGlucides,
  NumberGlucides,
  IconLipides,
  NumberLipides,
  TextCard,
}) => {
  return (
    <div className="card">
      <img
        src={IconCalories || IconProteins || IconGlucides || IconLipides}
        alt="icon"
        className="card_icon"
      />
      <div className="card_infos">
        <p className="card_number">
          {NumberCalories || NumberProteines || NumberGlucides || NumberLipides}
        </p>
        <p className="card_text">{TextCard}</p>
      </div>
    </div>
  );
};

export default Card;
