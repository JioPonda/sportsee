import React from "react";
import {
  PolarGrid,
  ResponsiveContainer,
  RadarChart,
  PolarAngleAxis,
  Radar,
} from "recharts";

// Component for performance user
function Performance({ performance }) {
  return (
    <div className="radar">
      <ResponsiveContainer>
        <RadarChart>
          <PolarGrid radialLines={false} />
          <PolarAngleAxis
            dataKey="kind"
            tickLine={false}
            data={performance}
            tick={{ fill: "#FFF", fontSize: 12, angle: 0 }}
          />

          <Radar
            dataKey="value"
            data={performance}
            stroke="#FF0101"
            fill="#FF0101"
            fillOpacity={0.5}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Performance;
