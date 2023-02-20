import React from "react";
import PropTypes from "prop-types";

//** Component for display the user name */
export default function NameDashBoard({ user }) {
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
}

NameDashBoard.propTypes = {
  name: PropTypes.string,
};
