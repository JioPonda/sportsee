import React, { PureComponent } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Group A", value: 150 },
  { name: "Group B", value: 100 },
];
const COLORS = ["#ff0000", "#FFF"];

export default class Example extends PureComponent {
  render() {
    return (
      <ResponsiveContainer>
        <PieChart width={250} height={263} onMouseEnter={this.onPieEnter}>
          <Pie
            data={data}
            cx={135}
            cy={145}
            innerRadius={80}
            outerRadius={100}
            paddingAngle={0}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    );
  }
}
