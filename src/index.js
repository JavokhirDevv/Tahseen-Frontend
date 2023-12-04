import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Root from "./Root/Root.jsx";
import { BrowserRouter } from "react-router-dom";
import Context from "./utils/Context.jsx";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Context>
      <Root />
    </Context>
  </BrowserRouter>
);
