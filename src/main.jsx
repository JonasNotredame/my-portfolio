import ReactDOM from "react-dom/client";
import "./main.scss";
import Router from "./config/router/Router.jsx";
import React from "react";
import "./i18n.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);
