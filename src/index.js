import React from "react";
import ReactDOM from "react-dom/client";
import "./Style/Main.scss";
import Routes from "./Routes.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>
);
