import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import UserBoard from "./Pages/Userboard";
import Error from "./Pages/Error";

const App = () => {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/user/:userId" element={<UserBoard />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </>
  );
};

export default App;
