import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";


import "bootstrap/dist/css/bootstrap.min.css";

const rootElement = document.getElementById("root");

ReactDOM.createRoot(rootElement).render(
  <Router>
    <App />
  </Router>
);
