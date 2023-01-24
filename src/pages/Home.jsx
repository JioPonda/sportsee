import React from "react";
import { Link } from "react-router-dom";
import userData from "../data/user_main_data.json";

const Home = () => {
  document.tilte = "HOME";
  return (
    <div>
      {userData.map((user) => (
        <Link key={user.id} to={`/user/${user.id}`}>
          <p>user id</p>
        </Link>
      ))}
    </div>
  );
};

export default Home;
