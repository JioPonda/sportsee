import React from "react";
import IconCal from "../assets/calories_icon.png";
import IconProt from "../assets/protein_icon.png";
import IconGlu from "../assets/carbs_icon.png";
import IconLip from "../assets/fat_icon.png";

import NavbarTop from "../Components/NavbarTop";
import NavbarLeft from "../Components/NavbarLeft";
import NameDashBoard from "../Components/NameDashBoard";
import Activity from "../Components/Activity";
import Kpi from "../Components/Kpi";
import Radar from "../Components/Radar";
import Objectif from "../Components/Objectif";
import Card from "../Components/Card";

import Userdata from "../data/user_main_data.json";
import { useParams } from "react-router";

export default function Dashboard() {
  document.title = "Tableau de bord";
  let selectedId = useParams();
  let userFirstName;
  let userScore;
  let userCalorieCount;
  let userProteinCount;
  let userCarboCount;
  let userLipidCount;

  Userdata.forEach((user) => {
    if (Number.parseInt(selectedId.id) === user.id) {
      userFirstName = user.userInfos.firstName;
      userScore = user.todayScore;
      userCalorieCount = user.keyData.calorieCount;
      userProteinCount = user.keyData.proteinCount;
      userCarboCount = user.keyData.carbohydrateCount;
      userLipidCount = user.keyData.lipidCount;
    }
  });

  return (
    <>
      <div className="layout">
        <NavbarTop />
        <div className="layout_bottom">
          <NavbarLeft />
          <div className="dashboard">
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
          </div>
        </div>
      </div>
    </>
  );
}
