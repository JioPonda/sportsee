import React, { PureComponent } from "react";
import { PieChart, Pie, Cell } from "recharts";

const data = [
  { name: "Group A", value: 500 },
  { name: "Group B", value: 100 },
];
const COLORS = ["#ff0000", "#FFF"];

export default class Example extends PureComponent {
  render() {
    return (
      <PieChart width={250} height={263} onMouseEnter={this.onPieEnter}>
        <Pie
          data={data}
          cx={100}
          cy={100}
          innerRadius={60}
          outerRadius={80}
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    );
  }
}
