import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NameDashBoard from "./NameDashBoard";
import Activity from "./Activity";
import Score from "./Score";
import Session from "./Session";
import Performance from "./Performance";
import InfoCard from "./InfosCard";
import { getData } from "../Data/getData";

export default function Dashboard() {
  const [dataMain, setDataMain] = useState([]);
  const [averageSessions, setAverageSessions] = useState([]);
  const [performance, setPerformance] = useState({});
  const [activity, setActivity] = useState([]);
  const { id } = useParams();

  // Get the main user data
  useEffect(() => {
    const data = async () => {
      const request = await getData("USER_MAIN_DATA", id);
      setDataMain(request.data);
    };
    data();
  }, [id]);

  // Get the activity user data
  useEffect(() => {
    const data = async () => {
      const request = await getData("USER_ACTIVITY", id);
      setActivity(request.data);
    };
    data();
  }, [id]);

  // Get the average sessions user data
  useEffect(() => {
    const data = async () => {
      const request = await getData("USER_AVERAGE_SESSIONS", id);
      request.data.sessions.forEach((session) => {
        if (session.day === 1) {
          session.day = "L";
        } else if (session.day === 2) {
          session.day = "M";
        } else if (session.day === 3) {
          session.day = "M";
        } else if (session.day === 4) {
          session.day = "J";
        } else if (session.day === 5) {
          session.day = "V";
        } else if (session.day === 6) {
          session.day = "S";
        } else if (session.day === 7) {
          session.day = "D";
        }
      });
      setAverageSessions(request.data);
    };
    data();
  }, [id]);

  // Get the performance user data
  useEffect(() => {
    const data = async () => {
      const request = await getData("USER_PERFORMANCE", id);
      // if (!request) return alert("data error");
      request.data.data.forEach((data) => {
        data.kind = request.data.kind[data.kind];
      });
      setPerformance(request.data);
    };
    data();
  }, [id]);
  if (dataMain.length === 0) return null;

  return (
    <>
      <div className="dashboard">
        <div className="dashboard_top">
          <NameDashBoard user={dataMain.userInfos.firstName} />
        </div>
        <div className="dashboard_bottom">
          <div className="dashboard_left">
            <Activity activity={activity.sessions} />
            <div className="dashboard_left_bottom">
              <Session sessions={averageSessions.sessions} />
              <Performance performance={performance} />
              <Score score={dataMain.score} />
            </div>
          </div>
          <div className="dashboard_right">
            <InfoCard keyData={dataMain.keyData} />
          </div>
        </div>
      </div>
    </>
  );
}
