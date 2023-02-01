import React from "react";
import {
  ResponsiveContainer,
  RadialBarChart,
  RadialBar,
  PolarAngleAxis,
} from "recharts";

function Score({ score }) {
  const scorePercent = score * 100;
  const value = [{ value: scorePercent }];

  return (
    <div className="kpi">
      <p className="score">Score</p>
      <p className="percent">{score}%</p>
      <p className="text"> de votre objectif</p>
      <ResponsiveContainer>
        <RadialBarChart
          innerRadius={800}
          outerRadius={100}
          barSize={8}
          data={value}
          startAngle={180}
          endAngle={-180}
          margin={{ top: 20 }}
        >
          <PolarAngleAxis
            type="number"
            domain={[0, 100]}
            angleAxisId={0}
            tick={false}
          />
          <RadialBar
            position="center"
            dataKey="value"
            fill="#ff0000"
            cornerRadius={10}
            background={{ fill: "#fff" }}
          />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Score;
