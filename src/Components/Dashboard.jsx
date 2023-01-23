import React from "react";
import IconCal from "../assets/calories_icon.png";
import IconProt from "../assets/protein_icon.png";
import IconGlu from "../assets/carbs_icon.png";
import IconLip from "../assets/fat_icon.png";

import NameDashBoard from "./NameDashBoard";
import Activity from "./Activity";
import Kpi from "./Kpi";
import Radar from "./Radar";
import Objectif from "./Objectif";
import Card from "./Card";

import Userdata from "../data/user_main_data.json";

document.title = "Tableau de bord";

const User = () => {
  // let userID;
  let userFirstName;
  // let userLastName;
  // let userAge;
  let userScore;
  let userCalorieCount;
  let userProteinCount;
  let userCarboCount;
  let userLipidCount;

  Userdata.forEach((user) => {
    // userID = user.id;
    userFirstName = user.userInfos.firstName;
    // userLastName = user.userInfos.lastName;
    // userAge = user.userInfos.age;
    userScore = user.todayScore;
    userCalorieCount = user.keyData.calorieCount;
    userProteinCount = user.keyData.proteinCount;
    userCarboCount = user.keyData.carbohydrateCount;
    userLipidCount = user.keyData.lipidCount;
  });

  return (
    <main className="dashboard">
      <div className="dashboard_top">
        <NameDashBoard firstName={userFirstName} />
      </div>
      <div className="dashboard_bottom">
        <div className="dashboard_left">
          <Activity />
          <div className="dashboard_left_bottom">
            <Objectif />
            <Radar />
            <Kpi score={userScore} />
          </div>
        </div>
        <div className="dashboard_right">
          <div className="dashboard_card">
            <Card
              IconCalories={IconCal}
              NumberCalories={userCalorieCount}
              TextCard={"Calories"}
            />
            <Card
              IconProteins={IconProt}
              NumberProteines={userProteinCount}
              TextCard={"Proteines"}
            />
            <Card
              IconGlucides={IconGlu}
              NumberGlucides={userCarboCount}
              TextCard={"Glucides"}
            />
            <Card
              IconLipides={IconLip}
              NumberLipides={userLipidCount}
              TextCard={"Lipides"}
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default User;
