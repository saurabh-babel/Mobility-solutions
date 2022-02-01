import React from "react";
import filter from "./assets/filter.png";
import calendar from "./assets/calendar.png";
import truck from "./assets/truck.gif";
import india from "./assets/india.png";
import { Line, Bar } from "react-chartjs-2";

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
                  position: "bottom",
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
                  position: "bottom",
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
                  text: "Inspection Item Failure Rate",
                  position: "bottom",
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

      <div className="totalCost">
        <div className="totalCostHeading">TOTAL COST OF OWNERSHIP ANALYSIS</div>
        <div className="totalCostContainer">
          <div className="totalCostLeft">
            <table>
              <tr>
                <td rowSpan={3} className="totalCostLeftCell">
                  INDIRECT COSTS
                </td>
                <td className="totalCostSelectedCell">Tyre Performance</td>
              </tr>
              <tr>
                <td className="totalCostRightCell">Uptime</td>
              </tr>
              <tr>
                <td className="totalCostRightCell">Maintenance</td>
              </tr>
            </table>
            <img src={truck} alt="" id="totalCostGif" />
            <table>
              <tr>
                <td rowSpan={3} className="totalCostLeftCell">
                  DIRECT COSTS
                </td>
                <td className="totalCostRightCell">Fuel Costs</td>
              </tr>
              <tr>
                <td className="totalCostRightCell">Insurance Costs</td>
              </tr>
              <tr>
                <td className="totalCostRightCell">Fleet Drivers</td>
              </tr>
            </table>
          </div>
          <div className="vLine"></div>
          <div className="totalCostRight">
            <table className="totalCostRightTable">
              <tr>
                <td
                  className="totalCostRightCell2"
                  style={{
                    "text-decoration": "underline 2.5px solid #f72585",
                    "text-underline-offset": "5px",
                    color: "#f72585",
                  }}
                >
                  By OEM
                </td>
                <td className="totalCostRightCell2">By Vehicle Model</td>
                <td className="totalCostRightCell2">By Fleet Industry</td>
              </tr>
            </table>
            <div id="totalCostRightHorizontalRule">
              <hr />
            </div>
          </div>
        </div>
      </div>

      <div className="audienceInsights">
        <div id="audienceInsightsHeading">AUDIENCE INSIGHTS</div>
        <div className="audienceInsightsContainer">
          <div className="audienceInsightsContainerTop">
            <div className="performanceChart">
              <div>
                <Bar
                  data={{
                    labels: [
                      "IDEAL DRIVERS",
                      "NEW DRIVERS",
                      "RASH DRIVERS",
                      "SAFE DRIVERS",
                      "SUSPICIOUS",
                    ],
                    datasets: [
                      {
                        data: [80, 95, 90, 90, 93],
                        fill: true,
                        pointRadius: 1,
                        backgroundColor: [
                          "#ffafcc",
                          "#ffafcc",
                          "#ffafcc",
                          "#8ecae6",
                          "#219ebc",
                        ],
                        borderWidth: 1,
                        borderRadius: 20,
                      },
                    ],
                  }}
                  height={200}
                  width={200}
                  options={{
                    maintainAspectRatio: true,
                    scales: {
                      yAxes: [
                        {
                          gridLines: {
                            display: true,
                          },
                          ticks: {
                            display: false,
                            suggestedMin: 0,
                          },
                        },
                      ],
                      xAxes: [
                        {
                          gridLines: {
                            display: false,
                          },
                          ticks: {
                            labelOffset: 3,
                            fontSize: 20,
                            suggestedMin: 0,
                            stepSize: 30,
                            display: true,
                            fontSize: 8,
                            fontColor: "black",
                            fontFamily: "Source Sans Pro",
                          },
                        },
                      ],
                    },
                    legend: {
                      display: false,
                    },
                    title: {
                      display: true,
                      text: "Driver Segments Engaged",
                      position: "bottom",
                      fontColor: "#219ebc",
                      fontSize: 10,
                      fontStyle: "normal",
                    },
                  }}
                />
              </div>
            </div>
            <div className="indian-map">
              <img src={india} alt="" style={{ "margin-top": "8%" }} />
            </div>
            <div className="audienceFleets">
              <div>
                <Bar
                  data={{
                    labels: ["XXX", "ABC", "PQR", "LMN", "XYZ"],
                    datasets: [
                      {
                        data: [93, 93, 80, 80, 85],
                        fill: true,
                        pointRadius: 1,
                        backgroundColor: [
                          "#ffafcc",
                          "#ffafcc",
                          "#ffafcc",
                          "#8ecae6",
                          "#219ebc",
                        ],
                        borderWidth: 1,
                        borderRadius: 20,
                      },
                    ],
                  }}
                  height={200}
                  width={200}
                  options={{
                    maintainAspectRatio: true,
                    scales: {
                      yAxes: [
                        {
                          gridLines: {
                            display: true,
                          },
                          ticks: {
                            display: false,
                            suggestedMin: 0,
                          },
                        },
                      ],
                      xAxes: [
                        {
                          gridLines: {
                            display: false,
                          },
                          ticks: {
                            labelOffset: 3,
                            fontSize: 20,
                            suggestedMin: 0,
                            stepSize: 30,
                            display: true,
                            fontSize: 8,
                            fontColor: "black",
                            fontFamily: "Source Sans Pro",
                          },
                        },
                      ],
                    },
                    legend: {
                      display: false,
                    },
                    title: {
                      display: true,
                      text: ["Fleets with", "highest usage"],
                      position: "bottom",
                      fontColor: "#219ebc",
                      fontSize: 10,
                      fontStyle: "normal",
                    },
                  }}
                />
              </div>
            </div>
          </div>
          <div className="audienceInsightsContainerBottom">
            <table id="audienceInsightsTable">
              <thead>
                <td></td>
                <td>Week 1</td>
                <td>Week 2</td>
                <td>Week 3</td>
                <td>Week 4</td>
                <td>Week 5</td>
                <td>Week 6</td>
              </thead>
              <tr>
                <td style={{ backgroundColor: "#dee2e6" }}>Cohort 1</td>
                <td style={{ backgroundColor: "#ffafcc" }}></td>
                <td style={{ backgroundColor: "#ffafcc" }}></td>
                <td style={{ backgroundColor: "#ffafcc" }}></td>
                <td style={{ backgroundColor: "#f72585" }}></td>
                <td style={{ backgroundColor: "#dee2e6" }}></td>
                <td style={{ backgroundColor: "#ffafcc" }}></td>
              </tr>
              <tr>
                <td style={{ backgroundColor: "#dee2e6" }}>Cohort 2</td>
                <td style={{ backgroundColor: "#ffc4d6" }}></td>
                <td style={{ backgroundColor: "#f72585" }}></td>
                <td style={{ backgroundColor: "#f72585" }}></td>
                <td style={{ backgroundColor: "#dee2e6" }}></td>
                <td style={{ backgroundColor: "#ffafcc" }}></td>
                <td style={{ backgroundColor: "#dee2e6" }}></td>
              </tr>
              <tr>
                <td style={{ backgroundColor: "#dee2e6" }}>Cohort 3</td>
                <td style={{ backgroundColor: "#dee2e6" }}></td>
                <td style={{ backgroundColor: "#f72585" }}></td>
                <td style={{ backgroundColor: "#dee2e6" }}></td>
                <td style={{ backgroundColor: "#ffc4d6" }}></td>
                <td style={{ backgroundColor: "#dee2e6" }}></td>
              </tr>
              <tr>
                <td style={{ backgroundColor: "#dee2e6" }}>Cohort 4</td>
                <td style={{ backgroundColor: "#ffc4d6" }}></td>
                <td style={{ backgroundColor: "#dee2e6" }}></td>
                <td style={{ backgroundColor: "#ffc4d6" }}></td>
                <td style={{ backgroundColor: "#dee2e6" }}></td>
              </tr>
              <tr>
                <td style={{ backgroundColor: "#dee2e6" }}>Cohort 5</td>
                <td style={{ backgroundColor: "#dee2e6" }}></td>
                <td style={{ backgroundColor: "#f72585" }}></td>
                <td style={{ backgroundColor: "#dee2e6" }}></td>
              </tr>
              <tr>
                <td style={{ backgroundColor: "#dee2e6" }}>Cohort 6</td>
                <td style={{ backgroundColor: "#ffc4d6" }}></td>
                <td style={{ backgroundColor: "#f72585" }}></td>
              </tr>
            </table>
            <div className="fleetChurnJourney">
              <img src="https://i.ibb.co/hc4fxPS/image.png" alt="" />
            </div>
          </div>
          <div id="cohortAnalysis">Cohort Analysis</div>
        </div>
      </div>

      <div className="topPerformingFleets">
        <div className="topPerformingFleetsHeading">
          TOP PERFORMING FLEETS, VEHICLE MODELS & ROUTES
        </div>
        <div className="topPerformingFleetsContainer">
          <div className="tpfTop">
            <div>
              <img
                src="https://i.ibb.co/7XKNyk6/image.png"
                alt=""
                className="indiaImg"
              />
            </div>
            <div className="tpfTopTable">
              <table>
                <thead>
                  <td>Fleet</td>
                  <td>OD Pair</td>
                  <td>Uptime %</td>
                  <td>Total Vehicles</td>
                  <td>Total Revenue</td>
                </thead>
                <tr>
                  <td>ABC</td>
                  <td>ABC</td>
                  <td>ABC</td>
                  <td>10</td>
                  <td>10</td>
                </tr>
                <tr>
                  <td>ABC</td>
                  <td>ABC</td>
                  <td>ABC</td>
                  <td>{"1 000"}</td>
                  <td>{"1 000"}</td>
                </tr>
                <tr>
                  <td>ABC</td>
                  <td>ABC</td>
                  <td>ABC</td>
                  <td>10</td>
                  <td>10</td>
                </tr>
                <tr>
                  <td>ABC</td>
                  <td>ABC</td>
                  <td>ABC</td>
                  <td>{"1 000"}</td>
                  <td>{"10 000"}</td>
                </tr>
                <tr>
                  <td>ABC</td>
                  <td>ABC</td>
                  <td>ABC</td>
                  <td>{"1 000"}</td>
                  <td>{"10 000"}</td>
                </tr>
              </table>
            </div>
          </div>

          <div className="tpfBottom">
            <div>
              <img
                src="https://i.ibb.co/p2vqhQG/image.png"
                alt=""
                className="routesImg"
              />
            </div>
            <div className="tpfTopTable">
              <table style={{"marginLeft":25}}>
                <thead>
                  <td>OEM/{"\n"}Model</td>
                  <td>Tonnage Capacity</td>
                  <td>Avg. Usage Time</td>
                  <td>Total Vehicles</td>
                  <td>Total Revenue</td>
                </thead>
                <tr>
                  <td>ABC</td>
                  <td>ABC</td>
                  <td>ABC</td>
                  <td>10</td>
                  <td>10</td>
                </tr>
                <tr>
                  <td>ABC</td>
                  <td>ABC</td>
                  <td>ABC</td>
                  <td>{"1 000"}</td>
                  <td>{"1 000"}</td>
                </tr>
                <tr>
                  <td>ABC</td>
                  <td>ABC</td>
                  <td>ABC</td>
                  <td>10</td>
                  <td>10</td>
                </tr>
                <tr>
                  <td>ABC</td>
                  <td>ABC</td>
                  <td>ABC</td>
                  <td>{"1 000"}</td>
                  <td>{"10 000"}</td>
                </tr>
                <tr>
                  <td>ABC</td>
                  <td>ABC</td>
                  <td>ABC</td>
                  <td>{"1 000"}</td>
                  <td>{"10 000"}</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
