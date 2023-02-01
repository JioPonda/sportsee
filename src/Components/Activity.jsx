import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Bar,
} from "recharts";

function Activity({ activity }) {
  const Dot = <i className="fa-solid fa-circle Dot"></i>;
  const Dot2 = <i className="fa-solid fa-circle Dot2"></i>;

  const formatXAxis = (item, i) => {
    return i + 1;
  };

  return (
    <div className="activity">
      <div className="activity_text">
        <h2>Activité quotidienne</h2>
        {Dot}
        <p className="kg">Poids(kg)</p>
        {Dot2}
        <p className="cal">Calories brûlées(Kcal)</p>
      </div>
      {/* <div className="weigth_chart"> */}
      <ResponsiveContainer>
        <BarChart data={activity}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis
            dataKey="day"
            tickFormatter={formatXAxis}
            axisLine={false}
            tickLine={false}
            domain={["dataMin", "dataMax"]}
            tick={{ stroke: "#9B9EAC" }}
          />

          <YAxis
            orientation="right"
            tickCount={3}
            domain={["dataMin - 1", "dataMax"]}
            dataKey="kilogram"
            axisLine={false}
            tickLine={false}
            tickMargin={30}
            tick={{ stroke: "#9B9EAC" }}
          />
          <YAxis
            tickCount={6}
            domain={[0, 600]}
            dataKey="calories"
            axisLine={false}
            tickLine={false}
            tick={false}
            hide={true}
            yAxisId="cl"
          />

          <Bar
            dataKey="kilogram"
            fill="#282D30"
            radius={[10, 10, 0, 0]}
            unit="kg"
            barSize={10}
          />
          <Bar
            dataKey="calories"
            fill="#E60000"
            radius={[10, 10, 0, 0]}
            unit="kCal"
            yAxisId="cl"
            barSize={10}
          />
        </BarChart>
      </ResponsiveContainer>
      {/* </div> */}
    </div>
  );
}

export default Activity;
