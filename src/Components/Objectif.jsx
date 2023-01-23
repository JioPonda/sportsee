import React from "react";
import Objectifchart from "./Objectifchart";
import Ofilter from "../assets/objectif_filter.png";

const Objectif = () => {
  return (
    <div className="objectif">
      <img src={Ofilter} alt="" className="objectif_filter" />
      <p className="duration">Durée moyenne des sessions</p>
      <Objectifchart />
      <p className="days">L M M J V S D</p>
    </div>
  );
};

export default Objectif;
