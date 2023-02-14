import React from "react";
import {
  PolarGrid,
  ResponsiveContainer,
  RadarChart,
  PolarAngleAxis,
  Radar,
} from "recharts";

// Component for performance user
// function Performance({ performance }) {
//   return (
//     <div className="radar">
//       <ResponsiveContainer>
//         <RadarChart>
//           <PolarGrid radialLines={false} />
//           <PolarAngleAxis
//             dataKey="kind"
//             tickLine={false}
//             data={performance.kind}
//             tick={{ fill: "#FFF", fontSize: 12, angle: 0 }}
//           />

//           <Radar
//             dataKey="value"
//             data={performance}
//             stroke="#FF0101"
//             fill="#FF0101"
//             fillOpacity={0.5}
//           />
//         </RadarChart>
//       </ResponsiveContainer>
//     </div>
//   );
// }

function Performance(perf) {
  const performance = perf.performance;
  return (
    <div className="radar">
      <ResponsiveContainer>
        <RadarChart outerRadius="80%" data={performance.data}>
          <PolarGrid radialLines={false} />
          <PolarAngleAxis
            dataKey="kind"
            stroke="white"
            tickLine={false}
            dy={3}
            tick={{
              fontSize: 12,
              fontWeight: 500,
            }}
          />
          <Radar
            // name="Mike"
            dataKey="value"
            stroke="transparent"
            fill="rgb(255, 1, 1)"
            fillOpacity={0.6}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Performance;
