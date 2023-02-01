import React from "react";

const NameDashBoard = ({ user }) => {
  return (
    <div className="name_dashboard">
      <div>
        <div className="hello_user">
          <p className="hello">Bonjour</p>
          <p className="user">{user?.firstName}</p>
        </div>
        <p>Félicitations ! Vous avez explosé vos objectifs hier 👏 </p>
      </div>
    </div>
  );
};

export default NameDashBoard;
