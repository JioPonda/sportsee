import React from "react";
import Icon from "./Icon";
import IconCal from "../Icon/calories_icon.png";
import IconProt from "../Icon/protein_icon.png";
import IconGlu from "../Icon/carbs_icon.png";
import IconLip from "../Icon/fat_icon.png";

// Component for the right side card with icon and information
function InfoCard({ keyData }) {
  return (
    <>
      <div className="card">
        <Icon IconCalories={IconCal} />
        <div className="card_infos">
          <span className="card_number">{keyData?.calorieCount}kCal </span>
          <span className="card_text">Calories</span>
        </div>
      </div>

      <div className="card">
        <Icon IconProteins={IconProt} />
        <div className="card_infos">
          <span className="card_number">{keyData?.proteinCount}g </span>
          <span className="card_text">Poteines</span>
        </div>
      </div>
      <div className="card">
        <Icon IconGlucides={IconGlu} />
        <div className="card_infos">
          <span className="card_number">{keyData?.carbohydrateCount}g </span>
          <span className="card_text">Glucides</span>
        </div>
      </div>
      <div className="card">
        <Icon IconLipides={IconLip} />
        <div className="card_infos">
          <span className="card_number">{keyData?.lipidCount}g </span>
          <span className="card_text">Lipides</span>
        </div>
      </div>
    </>
  );
}

export default InfoCard;
