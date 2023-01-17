import "./styles.css";
import React from "react";
import { PieChart, Pie, Sector, Cell } from "recharts";

const data = [{ name: "Group A", value: 400 }];
const COLORS = ["#0088FE"];

export default function App() {
  return (
    <PieChart width={800} height={400}>
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
