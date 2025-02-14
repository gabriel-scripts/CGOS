//import { useState } from "react";
//import reactLogo from "./assets/react.svg";
//import { invoke } from "@tauri-apps/api/core";
import "./App.css";
import { CommandButton } from "./components/commandBlock/page";

function App() {
  return (
    <section className="mainAppSection">
    <main className="mainApp">
        <div>
          <p>cgOS-inicial-configuration</p>
          <p>concept</p>
        </div>

        <CommandButton/>

      </main>
    </section>

  );
}

export default App;
