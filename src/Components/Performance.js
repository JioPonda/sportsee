import React from "react";
import {
  PolarGrid,
  ResponsiveContainer,
  RadarChart,
  PolarAngleAxis,
  Radar,
} from "recharts";
import PropTypes from "prop-types";

/**
 * Component for display the user performance
 * 
 * @param {objet} performance
 * @example
 * const performance = {
      userId: 18,
      kind: {
          1: 'cardio',
          2: 'energy',
          3: 'endurance',
          4: 'strength',
          5: 'speed',
          6: 'intensity'
      },
      data: [
          {
              value: 200,
              kind: 1
          },
          {
              value: 240,
              kind: 2
          },
          {
              value: 80,
              kind: 3
          },
          {
              value: 80,
              kind: 4
          },
          {
              value: 220,
              kind: 5
          },
          {
              value: 110,
              kind: 6
          }
      ]
  }
 * return (
 *   <Performance performance={performance} /> 
 * )
 */

export default function Performance(perf) {
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

Performance.propTypes = {
  performance: PropTypes.object,
};
