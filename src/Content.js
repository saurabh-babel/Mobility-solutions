import filter from "./assets/filter.png";
import React from "react";
import calendar from "./assets/calendar.png";

const Content = () => {
  return (
    <div className="content">
      <div className="filters">
        <img src={filter} alt="" id="icon-id" />
        <p>FILTERS</p>
      </div>
      <div className="filters-container">
        <div className="col">
          Geographic Location
          <div className="innerCol">
            Location 1
            <select>
              <option value=""></option>
            </select>
          </div>
          <div className="innerCol">
            Location 2
            <select>
              <option value=""></option>
            </select>
          </div>
        </div>
        <div className="col">
          Powertrain Type
          <div className="innerCol">
            Vocation 1
            <select>
              <option value=""></option>
            </select>
          </div>
          <div className="innerCol">
            Vocation 2
            <select>
              <option value=""></option>
            </select>
          </div>
        </div>
        <div className="col">
          Fleet Size
          <div className="innerCol">
            Category 1
            <select>
              <option value=""></option>
            </select>
          </div>
          <div className="innerCol">
            Category 2
            <select>
              <option value=""></option>
            </select>
          </div>
        </div>
        <div className="DateCol">
          Date
          <br />
          <div>
            <img className="calendarImg" src={calendar} alt="" id="icon-id-2" />
          </div>
          <br />
          <br />
          <div>
            <a href="" id="goId">
              <u>Go</u>
              {" >"}
            </a>
          </div>
        </div>
      </div>

      <div className="keyMatrics">
        <div className="keyMatricsContainer"></div>
        <div className="keyMatricsContainer"></div>
      </div>
    </div>
  );
};

export default Content;
