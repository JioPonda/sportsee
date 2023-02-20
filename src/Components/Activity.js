import React from "react";
import {
  Tooltip,
  ResponsiveContainer,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Bar,
} from "recharts";
import PropTypes from "prop-types";

/**
 * Component for display the user activity.
 * 
 * @param {array} activity
 *
 * @example
 * const activity =  [
          {
              day: '2020-07-01',
              kilogram: 70,
              calories: 240
          },
          {
              day: '2020-07-02',
              kilogram: 69,
              calories: 220
          },
          {
              day: '2020-07-03',
              kilogram: 70,
              calories: 280
          },
          {
              day: '2020-07-04',
              kilogram: 70,
              calories: 500
          },
          {
              day: '2020-07-05',
              kilogram: 69,
              calories: 160
          },
          {
              day: '2020-07-06',
              kilogram: 69,
              calories: 162
          },
          {
              day: '2020-07-07',
              kilogram: 69,
              calories: 390
          }
      ]
 * return (
 *   <Activity activity={activity} />
 * )
 */

// ** const for creat a Custom tooltip and display the data on mouse hover */
const CustomTooltip = ({ payload, active }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip-line">
        <p className="desc">{payload[0].value + "kg"}</p>
        <p className="desc">{payload[1].value + "Kcal"}</p>
      </div>
    );
  }
  return null;
};

export default function Activity({ activity }) {
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
          <Tooltip
            cursor={{ fill: "#C4C4C4", opacity: "0.5" }}
            wrapperStyle={{ outline: "none" }}
            content={<CustomTooltip />}
            offset={35}
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

Activity.propTypes = {
  activity: PropTypes.array,
};
