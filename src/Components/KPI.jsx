import React from "react";
import Kpichart from "./Kpichart";

const Kpi = ({ score }) => {
  return (
    <div className="kpi">
      <p className="score">Score</p>
      <p className="percent">{score}</p>
      <p className="text"> de votre objectif</p>
      <Kpichart />
    </div>
  );
};

export default Kpi;
