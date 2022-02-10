/*
 *
 * Code Contributed by - Saurabh Chidrewar
 * Babel Intern - Oct 2021 - Feb 2022
 * Mobility Solutions
 *
 * This Code is also available on GitHub at
 * https://github.com/saurabh-babel/Mobility-solutions
 *
 */

// Import All the JS Component Files
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Insights from "./Insights";
import Content from "./Content";
import React from "react";

// App function to be rendered by the server
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Sidebar></Sidebar>
      <Insights></Insights>
      <Content></Content>
    </div>
  );
}

export default App;
