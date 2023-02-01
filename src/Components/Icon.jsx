import React from "react";

function Icon({ IconCalories, IconProteins, IconGlucides, IconLipides }) {
  return (
    <>
      <img
        src={IconCalories || IconProteins || IconGlucides || IconLipides}
        alt="icon"
        className="card_icon"
      />
    </>
  );
}

export default Icon;
