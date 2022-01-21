import React from "react";
import filter from "./assets/filter.png";
import calendar from "./assets/calendar.png";
import { Line } from "react-chartjs-2";

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
            <a href="/" id="goId">
              <u>Go</u>
              {" >"}
            </a>
          </div>
        </div>
      </div>

      <div className="keyMetricsHeading">KEY METRICS</div>
      <div className="wrap">
        <div className="cell-wrap-left">
          <table className="leftKeyMetrics">
            <tr>
              <th>Total Tyres Deployed</th>
              <th>Total Fleets Engaged</th>
              <th>Avg Tyre Life Value</th>
              <th>Avg TCO/Km</th>
            </tr>
            <tr>
              <td>243k</td>
              <td>12k</td>
              <td>
                63k <span className="keyMetricsInnerData">kms</span>{" "}
              </td>
              <td>
                {" "}
                <span className="keyMetricsInnerData">₹</span> 2.1
              </td>
            </tr>
          </table>
        </div>
        <div className="cell-wrap-right">
          <table className="rightKeyMetrics">
            <tr>
              <th>% Uptime</th>
              <th>Mean Time Between Failure</th>
              <th>Mean Time To Repair</th>
              <th>Avg Tyre Pressure</th>
            </tr>
            <tr>
              <td>97.7%</td>
              <td>
                42.6<span className="keyMetricsInnerData">days</span>{" "}
              </td>
              <td>
                1.7<span className="keyMetricsInnerData">hrs</span>{" "}
              </td>
              <td>36</td>
            </tr>
          </table>
        </div>
      </div>

      <div className="performanceHeading">PERFORMANCE</div>
      <div className="performance">
        <div className="performanceChart">
          <div>
            <Line
              data={{
                labels: ["Jun", "Jul", "Aug"],
                datasets: [
                  {
                    data: [20, 60, 40],
                    fill: false,
                    borderColor: "#0077b6",
                    borderWidth: 1,
                    pointRadius: 1,
                  },
                ],
              }}
              height={150}
              width={150}
              options={{
                title: {
                  display: true,
                  text: "Active vs Inactive Vehicles",
                  position: 'bottom',
                  fontColor: "#0077b6",
                  fontSize: 10,
                },
                maintainAspectRatio: true,
                scales: {
                  yAxes: [
                    {
                      gridLines: {
                        display: false,
                      },
                      ticks: {
                        beginAtZero: true,
                        stepSize: 20,
                        fontSize: 8,
                        suggestedMax: 100,
                      },
                    },
                  ],
                  xAxes: [
                    {
                      gridLines: {
                        display: false,
                      },
                      ticks: {
                        fontSize: 8,
                      },
                    },
                  ],
                },
                legend: {
                  display: false,
                },
              }}
            />
          </div>
        </div>
        <div className="performanceChart">
          <div>
            <Line
              data={{
                labels: ["Jun", "Jul", "Aug"],
                datasets: [
                  {
                    data: [20, 40, 25],
                    fill: false,
                    borderColor: "#f72585",
                    borderWidth: 1,
                    pointRadius: 1,
                  },
                ],
              }}
              height={150}
              width={150}
              options={{
                title: {
                  display: true,
                  text: "Cost per km vs Total Cost",
                  position: 'bottom',
                  fontColor: "#f72585",
                  fontSize: 10,
                },
                maintainAspectRatio: true,
                scales: {
                  yAxes: [
                    {
                      gridLines: {
                        display: false,
                      },
                      ticks: {
                        suggestedMax: 100,
                        beginAtZero: true,
                        stepSize: 20,
                        fontSize: 8,
                      },
                    },
                  ],
                  xAxes: [
                    {
                      gridLines: {
                        display: false,
                      },
                      ticks: {
                        fontSize: 8,
                      },
                    },
                  ],
                },
                legend: {
                  display: false,
                },
              }}
            />
          </div>
        </div>
        <div className="performanceChart">
          <div>
            <Line
              data={{
                labels: ["Jun", "Jul", "Aug"],
                datasets: [
                  {
                    data: [12, 40, 100],
                    fill: false,
                    borderColor: "#0077b6",
                    borderWidth: 1,
                    pointRadius: 1,
                  },
                ],
              }}
              height={150}
              width={150}
              options={{
                title: {
                  display: true,
                  text: "Active vs Inactive Vehicles",
                  position: 'bottom',
                  fontColor: "#0077b6",
                  fontSize: 10,
                },
                maintainAspectRatio: true,
                scales: {
                  yAxes: [
                    {
                      gridLines: {
                        display: false,
                      },
                      ticks: {
                        suggestedMax: 100,
                        beginAtZero: true,
                        stepSize: 20,
                        fontSize: 8,
                      },
                    },
                  ],
                  xAxes: [
                    {
                      gridLines: {
                        display: false,
                      },
                      ticks: {
                        fontSize: 8,
                      },
                    },
                  ],
                },
                legend: {
                  display: false,
                },
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
