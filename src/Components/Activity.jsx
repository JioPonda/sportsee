import React from "react";
import WeigthChart from "./Weigthchart";

const Activity = () => {
  const Dot = <i className="fa-solid fa-circle Dot"></i>;

  return (
    <div className="activity">
      <h2>Activité quotidienne</h2>
      <div className="activity_weight">
        {Dot}
        <p>Poids(kg)</p>
      </div>
      <div className="activity_calories">
        {Dot}
        <p>Calories brûlées(Kcal)</p>
      </div>
      <WeigthChart />
    </div>
  );
};

export default Activity;
