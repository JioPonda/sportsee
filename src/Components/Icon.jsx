import React from "react";

/** component for select the good icon for the infoCard component */
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
