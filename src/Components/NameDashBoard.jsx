import React from "react";

const NameDashBoard = ({ firstName }) => {
  return (
    <div className="name_dashboard">
      <div>
        <p className="hello">Bonjour Utilisateur{firstName}</p>
        <p>Félicitations ! Vous avez explosé vos objectifs hier 👏 </p>
      </div>
    </div>
  );
};

export default NameDashBoard;
