import React from "react";
import Kpichart from "./Kpichart";

const Kpi = () => {
  return (
    <div className="kpi">
      <p className="score">Score</p>
      <p className="percent">12%</p>
      <p className="text"> de votre objectif</p>
      <Kpichart />
    </div>
  );
};

export default Kpi;
