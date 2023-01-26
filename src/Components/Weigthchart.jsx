import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import Data from "../data/user_activity.json";

const monthTickFormatter = (tick) => {
  const date = new Date(tick);

  return date.getMonth() + 1;
};

const renderQuarterTick = (tickProps) => {
  const { x, y, payload } = tickProps;
  const { value, offset } = payload;
  const date = new Date(value);
  const month = date.getMonth();
  const quarterNo = Math.floor(month / 3) + 1;
  // const isMidMonth = month % 3 === 1;

  if (month % 3 === 1) {
    return <text x={x} y={y - 4} textAnchor="middle">{`Q${quarterNo}`}</text>;
  }

  const isLast = month === 11;

  if (month % 3 === 0 || isLast) {
    const pathX = Math.floor(isLast ? x + offset : x - offset) + 0.5;

    return <path d={`M${pathX},${y - 4}v${-35}`} stroke="red" />;
  }
  return null;
};

export default class Example extends PureComponent {
  static demoUrl = "https://codesandbox.io/s/bar-chart-with-double-xaxis-dfug7";

  render() {
    return (
      <ResponsiveContainer width="100%" aspect={4}>
        <BarChart
          width={500}
          height={300}
          data={Data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 1" />
          <XAxis dataKey="date" tickFormatter={monthTickFormatter} />
          <XAxis
            dataKey="date"
            axisLine={false}
            tickLine={false}
            // interval={0}
            tick={renderQuarterTick}
            height={1}
            // scale="band"
            // xAxisId="quarter"
          />
          <YAxis />
          <Tooltip />
          <Bar dataKey="Kcal" fill="#E60000" className="kcal_bar" />
          <Bar dataKey="Kg" fill="#282D30" className="kg_bar" />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
