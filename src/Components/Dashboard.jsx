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

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div>
        <NameDashBoard />
        <Activity />
      </div>
      <div>
        <Objectif />
        <Radar />
        <Kpi />
      </div>
      <div>
        <Card IconCalories={IconCal} NumberCalories="" TextCard={"Calories"} />
        <Card
          IconProteins={IconProt}
          NumberProteines=""
          TextCard={"Proteines"}
        />
        <Card IconGlucides={IconGlu} NumberGlucides="" TextCard={"Glucides"} />
        <Card IconLipides={IconLip} NumberLipides="" TextLipides={"Lipides"} />
      </div>
    </div>
  );
};

export default Dashboard;
