import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import UserBoard from "./Pages/Userboard";


// App and rooting for change User 
const App = () => {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/user/:id" element={<UserBoard />} />
      </Routes>
    </>
  );
};

export default App;
