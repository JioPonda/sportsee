import React from "react";
import Card from "./Card";
import NameDashBoard from "./NameDashBoard";
import IconCal from "../assets/calories_icon.png";
import IconProt from "../assets/protein_icon.png";
import IconGlu from "../assets/carbs_icon.png";
import IconLip from "../assets/fat_icon.png";
import Activity from "./Activity";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <NameDashBoard />
      <Activity />
      <Card
        IconCalories={IconCal}
        NumberCalories=""
        TextCalories={"Calories"}
      />
      <Card
        IconProteins={IconProt}
        NumberProteines=""
        TextProteines={"Proteines"}
      />
      <Card
        IconGlucides={IconGlu}
        NumberGlucides=""
        TextGlucides={"Glucides"}
      />
      <Card IconLipides={IconLip} NumberLipides="" TextLipides={"Lipides"} />
    </div>
  );
};

export default Dashboard;
