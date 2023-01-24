import React from "react";
import ReactDOM from "react-dom/client";
import "./Style/Main.scss";
import Routes from "./Routes.jsx";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes />
    </React.StrictMode>
  </BrowserRouter>
);
