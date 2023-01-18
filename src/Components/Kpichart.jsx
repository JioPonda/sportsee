import React, { PureComponent } from "react";
import { PieChart, Pie, Cell } from "recharts";

const data = [
  { name: "Group A", value: 500 },
  { name: "Group B", value: 100 },
];
const COLORS = ["#0088FE", "#FFF"];

export default class Example extends PureComponent {
  render() {
    return (
      <PieChart width={800} height={400} onMouseEnter={this.onPieEnter}>
        <Pie
          data={data}
          cx={120}
          cy={200}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
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
