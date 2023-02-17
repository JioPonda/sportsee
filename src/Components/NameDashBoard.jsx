import React from "react";

//** Component for display the user name */
const NameDashBoard = ({ user }) => {
  return (
    <div className="name_dashboard">
      <div>
        <div className="hello_user">
          <p className="hello">Bonjour</p>
          <p className="user">{user}</p>
        </div>
        <p>Félicitations ! Vous avez explosé vos objectifs hier 👏 </p>
      </div>
    </div>
  );
};

export default NameDashBoard;
