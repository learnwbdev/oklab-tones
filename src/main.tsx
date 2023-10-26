import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/app/App";
import "./index.css";

// для отображения сайта на разных языках
import "./assets/i18n/i18n";

const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
