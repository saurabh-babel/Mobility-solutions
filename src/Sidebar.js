import React from "react";

import icon from "./assets/icon.jpeg";
import logo from "./assets/babel-logo.png";
import piechart from "./assets/piechart.png";
import people from "./assets/people.png";
import degrees from "./assets/360-degrees.png";
import thumb from "./assets/like.png";
import diagram from "./assets/diagram.png";
import notepad from "./assets/notepad.png";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <img src={logo} alt="Not Found" id="logo-id" />
      <div className="info">
        <img src={icon} alt="" id="icon-id" />
        <h4>Saurabh</h4>
        <p>Chidrewar</p>
      </div>
      <div className="ruler">
        <hr align="center" />
      </div>
      <div className="links">
        <div className="dashboard">
          <a href="/">
            <img src={piechart} alt="" />
            <p>Mobility Dashboard</p>
          </a>
        </div>
        <div className="fleet">
          <a href="/fleet">
            <img src={people} alt="" />
            <p>Fleet Hub</p>
          </a>
        </div>
        <div className="driver">
          <a href="/degrees">
            <img src={degrees} alt="" />
            <p>
              Driver 360<sup>0</sup>
            </p>
          </a>
        </div>
        <div className="mobility">
          <img src={thumb} alt="" />
          <a href="/mobility">
            <p>Mobility Insights</p>{" "}
          </a>
        </div>
        <div className="oem">
          <a href="/oem">
            <img src={diagram} alt="" />
            <p>OEM Insights</p>
          </a>
        </div>
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

export default Sidebar;
