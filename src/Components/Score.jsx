import React from "react";
import {
  ResponsiveContainer,
  RadialBarChart,
  RadialBar,
  PolarAngleAxis,
  Legend,
} from "recharts";
import PropTypes from "prop-types";
//** Const to create a custom legend to display the score and value of these */
const CustomizedLegend = ({ payload }) => {
  if (payload && payload.length) {
    return (
      <div className="custom-legend">
        <div className="score">Score</div>
        <h2 className="percent">{payload[0].value + "%"}</h2>
        <span className="text">de votre objectif</span>
      </div>
    );
  }
  return null;
};

//** Component for display the user Score */

function Score({ score }) {
  const scorePercent = score * 100;
  const value = [{ value: scorePercent }];

  return (
    <div className="kpi">
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
          <Legend
            iconSize={10}
            width={20}
            height={20}
            layout="vertical"
            verticalAlign="top"
            align="center"
            payload={value}
            content={<CustomizedLegend />}
          />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
}

Score.propTypes = {
  score: PropTypes.number,
};

export default Score;
