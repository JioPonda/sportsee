import React from "react";
import { useParams } from "react-router";
import { CustomTooltipObjectif } from "./Custom";
import {
  LineChart,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  Legend,
} from "recharts";
import Ofilter from "../assets/objectif_filter.png";
import Objectifuser from "../data/user_average_sessions.json";

const Objectif = () => {
  let selectedId = useParams();
  const objectifArray = [];

  Objectifuser.forEach((user) => {
    if (Number.parseInt(selectedId.id) === user.userId) {
      objectifArray.push({
        sessions: user.sessions,
        day: user.sessions.day,
        sessionsLength: user.sessions.sessionLength,
      });
      console.log(objectifArray);
      return objectifArray;
    }
  });

  return (
    <div className="objectif">
      <img src={Ofilter} alt="" className="objectif_filter" />
      <p className="duration">Durée moyenne des sessions</p>
      <ResponsiveContainer
        width="100%"
        height="100%"
        className="objectif-responsive"
      >
        <LineChart
          className="objectif-line"
          width="50%"
          height="50%"
          data={objectifArray}
          margin={{ top: 5, right: 10, left: 10, bottom: 5 }}
          onMouseMove={(e) => {
            const div = document.getElementsByClassName(
              "objectif-responsive"
            )[0];
            if (e.isTooltipActive) {
              const windowWidth = div.clientWidth;
              const mouseXpercentage = Math.round(
                (e.activeCoordinate.x / windowWidth) * 100
              );
              div.style.background = `linear-gradient(90deg, rgba(255,0,0,1) ${mouseXpercentage}%, rgba(175,0,0,1.5) ${mouseXpercentage}%, rgba(175,0,0,1.5) 100%)`;
            }
          }}
        >
          <XAxis
            dataKey="day"
            stroke="#FFFFFF"
            opacity={0.5}
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            padding={{ top: 50 }}
            stroke="#FFFFFF"
            opacity={0.5}
            tickLine={false}
            axisLine={false}
            hide
          />
          <Tooltip content={<CustomTooltipObjectif />} />
          <Legend />
          <Line
            type="basis"
            dataKey="sessionLength"
            stroke="#FFFFFF"
            dot={false}
            strokeWidth={2}
            legendType="none"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Objectif;
