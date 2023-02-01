import React from "react";

function Card({
  IconCalories,
  IconProteins,
  IconGlucides,
  IconLipides,
  keyData,
  TextCard,
}) {
  return (
    <div className="card">
      <img
        src={IconCalories || IconProteins || IconGlucides || IconLipides}
        alt="icon"
        className="card_icon"
      />
      <div className="card_infos">
        <p className="card_number">{keyData?.calorieCount}</p>
        <p className="card_text">{TextCard}</p>
      </div>
    </div>
  );
}

export default Card;
