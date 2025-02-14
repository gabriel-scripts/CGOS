import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { Header } from "./components/header/page";
import { LeftBar } from "./components/sidebar/page";
import "./App.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>

    <div className="main">
      <App />
      <Header />
      <LeftBar />
    </div>

  </React.StrictMode>,
);
