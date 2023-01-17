import React from "react";
import WeigthChart from "./Weigth_Chart";

const Activity = () => {
  const Dot = <i className="fa-solid fa-circle Dot"></i>;

  return (
    <div>
      <h2>Activité quotidienne</h2>
      <div>
        {Dot}
        <p>Poids(kg)</p>
      </div>
      <div>
        {Dot}
        <p>Calories brûlées(Kcal)</p>
      </div>
      <WeigthChart />
    </div>
  );
};

export default Activity;
