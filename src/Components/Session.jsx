import { ResponsiveContainer, LineChart, XAxis, Line } from "recharts";
import Ofilter from "../Image/session_filter.png";

//** Component for display the user session */
function Session({ sessions }) {
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

export default Session;
