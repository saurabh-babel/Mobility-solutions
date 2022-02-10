// This file contains the code of the sidebar section of the designed web page
// Components included:
// User profile followed by 6 options

// Import Required assets and libraries
import React from "react";

import icon from "./assets/icon.jpeg";
import logo from "./assets/babel-logo.png";
import piechart from "./assets/piechart.png";
import people from "./assets/people.png";
import degrees from "./assets/360-degrees.png";
import thumb from "./assets/like.png";
import diagram from "./assets/diagram.png";
import notepad from "./assets/notepad.png";

// Stateless Functional component of Sidebar.js
const Sidebar = () => {
  return (
    <div className="sidebar">
      {/* babel company logo obtained from assets  */}
      <img src={logo} alt="Not Found" id="logo-id" />

      <div className="info">
        {/* User Profile Photo obtained from assets */}
        <img src={icon} alt="" id="icon-id" />

        {/* User first and last name  */}
        <h4>Saurabh</h4>
        <p>Chidrewar</p>
      </div>

      {/* Horizontal Rule to create a section  */}
      <div className="ruler">
        <hr align="center" />
      </div>

      {/* Contains all the navigating options  */}
      <div className="links">
        {/* Contains the Mobility Dashboard Option alongwith a clickable logo to navigate to the corresponding path  */}
        <div className="dashboard">
          <a href="/">
            <img src={piechart} alt="" />
            <p>Mobility Dashboard</p>
          </a>
        </div>

        {/* Contains the Fleet Hub Option alongwith a clickable logo to navigate to the corresponding path  */}
        <div className="fleet">
          <a href="/fleet">
            <img src={people} alt="" />
            <p>Fleet Hub</p>
          </a>
        </div>

        {/* Contains the Driver 360 Option alongwith a clickable logo to navigate to the corresponding path  */}
        <div className="driver">
          <a href="/degrees">
            <img src={degrees} alt="" />
            <p>
              Driver 360<sup>0</sup>
            </p>
          </a>
        </div>

        {/* Contains the Mobility Insights Option alongwith a clickable logo to navigate to the corresponding path  */}
        <div className="mobility">
          <img src={thumb} alt="" />
          <a href="/mobility">
            <p>Mobility Insights</p>{" "}
          </a>
        </div>

        {/* Contains the OEM insights Option alongwith a clickable logo to navigate to the corresponding path  */}
        <div className="oem">
          <a href="/oem">
            <img src={diagram} alt="" />
            <p>OEM Insights</p>
          </a>
        </div>

        {/* Contains the Incident Reports Option alongwith a clickable logo to navigate to the corresponding path  */}
        <div className="reports">
          <a href="/reports">
            <img src={notepad} alt="" />
            <p>Incident Reports</p>
          </a>
        </div>
      </div>
    </div>
  );
};

// Export the function
export default Sidebar;
