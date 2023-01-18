import React from "react";
import MeditationIcon from "../assets/meditation_icon.png";
import SwimmingIcon from "../assets/swimming_icon.png";
import BikeIcon from "../assets/bike_icon.png";
import DumbbellIcon from "../assets/dumbbell_icon.png";

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
