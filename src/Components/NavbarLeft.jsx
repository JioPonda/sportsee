import React from "react";
import MeditationIcon from "../Icon/meditation_icon.png";
import SwimmingIcon from "../Icon/swimming_icon.png";
import BikeIcon from "../Icon/bike_icon.png";
import DumbbellIcon from "../Icon/dumbbell_icon.png";

// Component for the left bar with the sports icon
const NavbarLeft = () => {
  return (
    <div className="navbar_left">
      <div className="navbar_left_icon">
        <img
          src={MeditationIcon}
          alt="Meditation icon"
          className="meditation_icon"
        />
        <img src={SwimmingIcon} alt="Swimming icon" className="swimming_icon" />
        <img src={BikeIcon} alt="Bike icon" className="bike_icon" />
        <img src={DumbbellIcon} alt="Dumbbell icon" className="dumbbell_icon" />
      </div>
      <p>Copiryght, SportSee 2020</p>
    </div>
  );
};

export default NavbarLeft;
