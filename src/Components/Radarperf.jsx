import React from "react";
import { useParams } from "react-router";
import {
  Legend,
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from "recharts";

import Radarperfdata from "../data/user_performance.json";

const Radarperf = () => {
  let selectedId = useParams();
  const performanceArray = [];

  Radarperfdata.forEach((user) => {
    if (Number.parseInt(selectedId.id) === user.userId) {
      performanceArray.push({
        kind: user.kind,
        data: user.data,
        dataValue: user.data.value,
        dataKind: user.data.kind,
      });
      console.log(performanceArray);
      return performanceArray;
    }
  });

  return (
    <div className="radar">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart
          outerRadius={50}
          width="50%"
          height="50%"
          data={performanceArray}
        >
          <PolarGrid />
          <PolarAngleAxis
            dataKey="kind"
            stroke="#FFFFFF"
            fontSize={14}
            tickLine={false}
          />
          <Radar
            dataKey="value"
            stroke="#E60000"
            fill="#E60000"
            fillOpacity={0.7}
            legendType="none"
          />
          <Legend />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Radarperf;
