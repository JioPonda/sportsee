import React from "react";
import WeigthChart from "./Weigthchart";

const Activity = () => {
  const Dot = <i className="fa-solid fa-circle Dot"></i>;
  const Dot2 = <i className="fa-solid fa-circle Dot2"></i>;

  return (
    <div className="activity">
      <div className="activity_text">
        <h2>Activité quotidienne</h2>
        {Dot}
        <p className="kg">Poids(kg)</p>
        {Dot2}
        <p className="cal">Calories brûlées(Kcal)</p>
      </div>
      <div className="weigth_chart">
        <WeigthChart />
      </div>
    </div>
  );
};

export default Activity;
