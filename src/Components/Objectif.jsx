import React from "react";
import Objectifchart from "./Objectifchart";

const Objectif = () => {
  return (
    <div className="objectif">
      <p className="duration">Durée moyenne des sessions</p>
      <Objectifchart />
      <p className="days">L M M J V S D</p>
    </div>
  );
};

export default Objectif;
