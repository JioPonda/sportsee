import React from "react";
import NameDashBoard from "./NameDashBoard";
import Activity from "./Activity";
import Objectif from "./Objectif";
import Kpi from "./Kpi";
import Card from "./Card";
import IconCal from "../assets/calories_icon.png";
import IconProt from "../assets/protein_icon.png";
import IconGlu from "../assets/carbs_icon.png";
import IconLip from "../assets/fat_icon.png";
import Radar from "./Radar";
// import Username from "../data/user_main_data.json";

const Dashboard = () => {
  return (
    <div className="dashboard">
      {/* <div className="dashboard_top">
        {Username.map((username) => (
          <NameDashBoard
            key={username.id}
            firstName={username.userInfos.firstName}
          />
        ))}
      </div> */}
      <div className="dashboard_top">
        <NameDashBoard />
      </div>
      <div className="dashboard_bottom">
        <div className="dashboard_left">
          <Activity />
          <div className="dashboard_left_bottom">
            <Objectif />
            <Radar />
            <Kpi />
          </div>
        </div>
        <div className="dashboard_right">
          <div className="dashboard_card">
            <Card
              IconCalories={IconCal}
              NumberCalories="1,930Kcal"
              TextCard={"Calories"}
            />
            <Card
              IconProteins={IconProt}
              NumberProteines="155g"
              TextCard={"Proteines"}
            />
            <Card
              IconGlucides={IconGlu}
              NumberGlucides="290g"
              TextCard={"Glucides"}
            />
            <Card
              IconLipides={IconLip}
              NumberLipides="50g"
              TextCard={"Lipides"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
