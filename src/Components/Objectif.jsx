import { React, useState, useEffect } from "react";
import { useParams } from "react-router";
import { LineChart, Line, ResponsiveContainer } from "recharts";
import Ofilter from "../assets/objectif_filter.png";
import Objectifuser from "../data/user_average_sessions.json";

const Objectif = (data) => {
  let idUser = useParams();
  const [objectifArray, setObjectifArray] = useState([]);

  Objectifuser.forEach((user) => {
    if (Number.parseInt(idUser.id === user.userId))
      objectifArray.push(user.sessions);
    console.log(objectifArray);
    return objectifArray;
  });

  return (
    <div className="objectif">
      <img src={Ofilter} alt="" className="objectif_filter" />
      <p className="duration">Durée moyenne des sessions</p>
      <ResponsiveContainer width="100%" height="80%">
        <LineChart width={300} height={100} data={objectifArray}>
          <Line
            type="monotone"
            dataKey="sesisonsLength"
            stroke="#FFF"
            strokeWidth={4}
          />
        </LineChart>
      </ResponsiveContainer>
      <p className="days">L M M J V S D</p>
    </div>
  );
};

export default Objectif;
