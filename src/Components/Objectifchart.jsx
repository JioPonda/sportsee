import React, { PureComponent } from "react";
import { LineChart, Line, ResponsiveContainer } from "recharts";
import Objectifdata from "../data/user_average_sessions.json";

export default class Example extends PureComponent {
  static demoUrl = "https://codesandbox.io/s/tiny-line-chart-r5z0f";

  render() {
    return (
      <ResponsiveContainer width="100%" height="80%">
        <LineChart width={300} height={100} data={Objectifdata}>
          <Line type="monotone" dataKey="pv" stroke="#FFF" strokeWidth={4} />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}
