import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Link to={`/user/id=12`}>
        <p> id 12</p>
      </Link>
      <Link to={`/user/id=18`}>
        <p> id 18</p>
      </Link>
    </div>
  );
};

export default Home;
