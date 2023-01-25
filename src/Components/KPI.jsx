import React from "react";
import { useParams } from "react-router";
import { RadialBar, RadialBarChart, ResponsiveContainer } from "recharts";
import Scoredata from "../data/user_main_data.json";

const Kpi = () => {
  let selectedId = useParams();
  const scoreArray = [];

  Scoredata.forEach((user) => {
    if (Number.parseInt(selectedId.id) === user.userId) {
      scoreArray.push({
        score: user.todayScore,
      });
      console.log(scoreArray);
      return scoreArray;
    }
  });

  return (
    <div className="kpi">
      <p className="score">Score</p>
      <p className="percent">{scoreArray}%</p>
      <p className="text"> de votre objectif</p>
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          startAngle={140}
          endAngle={500}
          cx="50%"
          cy="50%"
          innerRadius={70}
          barSize={10}
          outerRadius={120}
          // data={data}
        >
          <RadialBar cornerRadius="50%" dataKey="todayScore" fill="#E60000" />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Kpi;
