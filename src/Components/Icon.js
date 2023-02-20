import React from "react";
import PropTypes from "prop-types";

/** component for select the good icon for the infoCard component */
export default function Icon({
  IconCalories,
  IconProteins,
  IconGlucides,
  IconLipides,
}) {
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

Icon.propTypes = {
  Icon: PropTypes.string,
};
