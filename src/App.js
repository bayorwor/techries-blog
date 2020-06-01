import React from "react";
import "./App.css";
import Navigator from "./components/Navigator";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigator />
      </BrowserRouter>
    </>
  );
}

export default App;
