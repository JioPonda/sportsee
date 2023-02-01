import React from "react";

import NameDashBoard from "./NameDashBoard";
import Activity from "./Activity";
import Score from "./Score";
import Session from "./Session";
import Performance from "./Performance";
import InfoCard from "./InfosCard";
import useUserActivity from "../Hooks/useUserActivity";
import useUserSession from "../Hooks/useUserSession";
import useUserPerformance from "../Hooks/useUserPerformance";
import useUser from "../Hooks/useUser";

export default function Dashboard({ userId }) {
  const { data: dataUser } = useUser(userId);
  const { data: dataActivity } = useUserActivity(userId);
  const { data: dataSession } = useUserSession(userId);
  const { data: dataPerformance } = useUserPerformance(userId);

  return (
    <>
      <div className="dashboard">
        <div className="dashboard_top">
          <NameDashBoard user={dataUser?.data?.userInfos} />
        </div>
        <div className="dashboard_bottom">
          <div className="dashboard_left">
            <Activity activity={dataActivity?.data} />
            <div className="dashboard_left_bottom">
              <Session sessions={dataSession?.data} />
              <Performance performance={dataPerformance?.data} />
              <Score score={dataUser?.data?.score} />
            </div>
          </div>
          <div className="dashboard_right">
            <InfoCard keyData={dataUser?.data?.keyData} />
          </div>
        </div>
      </div>
    </>
  );
}
