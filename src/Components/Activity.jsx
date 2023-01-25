import React from "react";
import { useParams } from "react-router";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { CustomTooltipActivity } from "./Custom";
import Activitydata from "../data/user_activity.json";

const Activity = () => {
  const Dot = <i className="fa-solid fa-circle Dot"></i>;
  const Dot2 = <i className="fa-solid fa-circle Dot2"></i>;

  let selectedId = useParams();
  const activityAray = [];

  Activitydata.forEach((user) => {
    if (Number.parseInt(selectedId.id) === user.userId) {
      activityAray.push({
        sessions: user.sessions,
        day: user.sessions.day,
        kilogram: user.sessions.kilogram,
        calories: user.sessions.calories,
      });
      console.log(activityAray);
      return activityAray;
    }
  });

  return (
    <div className="activity">
      <div className="activity_text">
        <h2>Activité quotidienne</h2>
        {Dot}
        <p className="kg">Poids(kg)</p>
        {Dot2}
        <p className="cal">Calories brûlées(Kcal)</p>
      </div>
      <div className="weigth_chart">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart width={500} height={300} data={activityAray}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="day" tickLine={false} axisLine={false} />
            <XAxis
              dataKey="calories"
              type="number"
              tickLine={false}
              axisLine={false}
            />
            <XAxis
              dataKey="kilogram"
              orientation="right"
              axisLine={false}
              domain={["dataMin -1", "dataMax +1"]}
            />
            <YAxis dataKey="calories" type="number" yAxisId="calorie" hide />
            <Tooltip content={<CustomTooltipActivity />} />
            <Legend
              verticalAlign="top"
              align="right"
              iconType="circle"
              wrapperStyle={{ marginTop: "-23px" }}
              formatter={(value, entry, index) => (
                <span className="text-color">{value}</span>
              )}
            />
            <Bar
              name="Poids (kg)"
              dataKey="kilogram"
              radius={[10, 10, 0, 0]}
              barSize={7}
              fill="#282D30"
            />
            <Bar
              name="Calories brûlées (kCal)"
              dataKey="calories"
              radius={[10, 10, 0, 0]}
              barSize={7}
              yAxisId="calorie"
              fill="#E60000"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Activity;
