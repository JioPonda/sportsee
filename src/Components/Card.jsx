import React from "react";

const Card = ({
  IconCalories,
  NumberCalories,
  TextCalories,
  IconProteins,
  NumberProteines,
  TextProteines,
  IconGlucides,
  NumberGlucides,
  TextGlucides,
  IconLipides,
  NumberLipides,
  TextLipides,
}) => {
  return (
    <div className="card">
      <img
        src={IconCalories || IconProteins || IconGlucides || IconLipides}
        alt="icon"
        className="card_icon"
      />
      <p className="card_number">
        {NumberCalories || NumberProteines || NumberGlucides || NumberLipides}
      </p>
      <p className="card_text">
        {TextCalories || TextProteines || TextGlucides || TextLipides}
      </p>
    </div>
  );
};

export default Card;
