import React from "react";
import Logo from "../Image/logo_sportsee.png";
//** Component for display the nav bar and the logo on top */
const NavbarTop = () => {
  return (
    <header className="navbar_top">
      <img src={Logo} alt="logo SportSee" className="logo" />
      <nav>
        <ul>
          <li className="acceuil_navbar">Acceuil</li>
          <li className="profil_navbar">Profil</li>
          <li className="setup_navbar">Réglage</li>
          <li className="community_navbar">Communauté</li>
        </ul>
      </nav>
    </header>
  );
};

export default NavbarTop;
