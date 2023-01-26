import React, { PureComponent } from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";

import Radardata from "../data/user_performance.json";

export default class Example extends PureComponent {
  static demoUrl = "https://codesandbox.io/s/simple-radar-chart-rjoc6";

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="70%" data={Radardata}>
          <PolarGrid tickCount={0} />
          <PolarAngleAxis dataKey="subject" stroke="#fff" />
          {/* <PolarRadiusAxis /> */}
          <Radar
            name="Mike"
            dataKey="A"
            stroke="#FF0101"
            fill="#FF0101"
            fillOpacity={0.6}
          />
        </RadarChart>
      </ResponsiveContainer>
    );
  }
}
