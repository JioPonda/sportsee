import { ResponsiveContainer, LineChart, XAxis, Line } from "recharts";
import Ofilter from "../Image/session_filter.png";
import PropTypes from "prop-types";

/**
 * Component for display the user session.
 *
 * @param {aray} sessions
 * 
 * @example
 * const sessions = [
          {
              day: 1,
              sessionLength: 30
          },
          {
              day: 2,
              sessionLength: 23
          },
          {
              day: 3,
              sessionLength: 45
          },
          {
              day: 4,
              sessionLength: 50
          },
          {
              day: 5,
              sessionLength: 0
          },
          {
              day: 6,
              sessionLength: 0
          },
          {
              day: 7,
              sessionLength: 60
          }
      ]
 * return (
 *   <Session sessions={sessions} />
 * )
 */

export default function Session({ sessions }) {
  return (
    <div className="objectif">
      <img src={Ofilter} alt="" className="objectif_filter" />
      <p className="duration">Durée moyenne des sessions</p>
      <ResponsiveContainer>
        <LineChart
          width={730}
          height={250}
          data={sessions}
          margin={{ top: 20, right: 30, left: 20, bottom: 40 }}
        >
          <XAxis
            dataKey="day"
            tickLine={false}
            axisLine={false}
            stroke="#FFFFFF"
            type="category"
            tickMargin={40}
          />
          <Line
            type="natural"
            dataKey="sessionLength"
            stroke="#FFFFFF"
            dot={false}
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

Session.propTypes = {
  sessions: PropTypes.array,
};
