import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Insights from "./Insights";
import Content from "./Content";
import React from "react";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Sidebar></Sidebar>
      <Insights></Insights>
      <Content></Content>
      <div className="content"></div>
    </div>
  );
}

export default App;
