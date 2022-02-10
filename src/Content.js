// This file contains the code of the central section of the designed web page
// Components included:
// Filters
// Key Metrics
// Performance
// Total Cost of ownership analysis
// Audience Insights
// TOP PERFORMING FLEETS, VEHICLE MODELS & ROUTES

// Import Required assets and libraries
import React from "react";
import filter from "./assets/filter.png";
import calendar from "./assets/calendar.png";
import truck from "./assets/truck.gif";
import india from "./assets/india.png";
import { Line, Bar } from "react-chartjs-2";

// Plugin for data label (to be used to disply labels on top of bar charts)
// Available in v3 ChartJS

// import ChartDataLabels from "chartjs-plugin-datalabels";
// Bar.register(ChartDataLabels);

// Stateless Functional Component - Content
// To be rendered by App.js
const Content = () => {
  return (
    <div className="content">
      {/* Contains Filter Heading */}
      <div className="filters">
        <img src={filter} alt="" id="icon-id" />
        <p>FILTERS</p>
      </div>

      {/* Contains Different Filter Categories */}
      <div className="filters-container">
        <div className="col">
          Geographic Location
          {/* innerCol used to provide options to the user */}
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
        {/* Used to select the date field */}
        <div className="DateCol">
          Date
          <br />
          <div>
            <img className="calendarImg" src={calendar} alt="" id="icon-id-2" />
          </div>
          <br />
          <br />
          <div>
            {/* Submit button to register the data */}
            <a href="/" id="goId">
              <u>Go</u>
              {" >"}
            </a>
          </div>
        </div>
      </div>

      {/* Contains the heading Key Metrics */}
      <div className="keyMetricsHeading">KEY METRICS</div>

      {/* Wrap contains both the containers - Left and Right */}
      {/* The Data in both the containers is stored in the form of a table */}
      <div className="wrap">
        {/* cell-wrap-left contains the left container */}
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
                <span className="keyMetricsInnerData">₹</span>2.1
              </td>
            </tr>
          </table>
        </div>

        {/* cell-wrap-right contains the right container */}
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

      {/* Performance Section Heading */}
      {/* Contains three charts with similar styling but different attributes */}
      <div className="performanceHeading">PERFORMANCE</div>
      <div className="performance">
        <div className="performanceChart">
          <div>
            {/* This Chart is a line chart for Active vs Inactive Vechicles */}
            <Line
              data={{
                // Contains the labels to be displayed on the x-axis
                labels: ["Jun", "Jul", "Aug"],

                // Contains the dataset and the corresponding values to be displayed on the y-axis
                datasets: [
                  {
                    data: [20, 60, 40],
                    fill: false,
                    borderColor: "#0077b6",
                    // Adjusting the line pattern of the plot
                    borderWidth: 1,
                    pointRadius: 1,
                  },
                ],
              }}
              // Height and Width can be varied according to the page desing and styling
              height={150}
              width={150}
              // Provides additonal options to style the line chart
              options={{
                title: {
                  display: true,
                  text: "Active vs Inactive Vehicles",
                  position: "bottom",
                  fontColor: "#0077b6",
                  fontSize: 10,
                },
                maintainAspectRatio: true,
                // Helps to modify the styles of the axes of the plot
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
                // Legend helps when there are multiple graphs within the same plot
                legend: {
                  display: false,
                },
              }}
            />
          </div>
        </div>

        {/* Chart 2 from the Performance Section */}
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

        {/* Chart 3 from the Performance Chart */}
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

      {/* Total Cost of ownership analysis Section */}
      <div className="totalCost">
        {/* Heading of the section  */}
        <div className="totalCostHeading">TOTAL COST OF OWNERSHIP ANALYSIS</div>
        <div className="totalCostContainer">
          {/* This Container Contains to sections - Left and Right  */}
          <div className="totalCostLeft">
            {/* Table to implement Indirect Costs section  */}
            <table>
              <tr>
                {/* Rowspan helps in adjusting the heading for the given 3 rows */}
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

            {/* Gif to be displayed in the container obtained from assets (local) */}
            <img src={truck} alt="" id="totalCostGif" />

            {/* Contains the section for the below container  */}
            <table>
              <tr>
                {/* RowSpan of 3 helps in adjusting the heading with the content */}
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

          {/* vertical line to be displayed to distinguish the sections  */}
          <div className="vLine"></div>

          {/* Right Container in the Total Cost of ownership analysis section  */}
          <div className="totalCostRight">
            <table className="totalCostRightTable">
              {/* Contains table to display the 3 heading along with data when available */}
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

            {/* Horizontal Rule added using HR tag */}
            <div id="totalCostRightHorizontalRule">
              <hr />
            </div>
          </div>
        </div>
      </div>

      <div className="audienceInsights">
        {/* Contains 3 divs in row1 & 2 divs in row 2 */}
        <div id="audienceInsightsHeading">AUDIENCE INSIGHTS</div>
        <div className="audienceInsightsContainer">
          {/* 3 divs in top row */}
          <div className="audienceInsightsContainerTop">
            {/* Div 1 from row 1 contains a bar chart of Driver Segments Engaged */}
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
                  // plugins = {[ChartDataLabels]} (Not supported by current ChartJS Version)
                  // Define the dimensions of the chart
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
                            // display: false,
                            stepSize: 20,
                            fontSize: 8,
                            suggestedMin: 0,
                          },
                        },
                      ],
                      xAxes: [
                        {
                          gridLines: {
                            display: false,
                          },
                          // Modify the ticks and it's styling
                          ticks: {
                            labelOffset: 3,
                            suggestedMin: 0,
                            stepSize: 30,
                            display: true,
                            fontSize: 8,
                            fontColor: "#14213d",
                            fontFamily: "Source Sans Pro",
                          },
                        },
                      ],
                    },
                    legend: {
                      display: false,
                    },
                    // Displaying and styling the title of the bar plot
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

            {/* Div 2 of row 1 Contains the Indian Map (Pasted as an image here) */}
            <div className="indian-map">
              {/* image loaded from assets */}
              <img src={india} alt="" style={{ "margin-top": "8%" }} />
            </div>

            {/* Div 3 from row 1 (Another bar Chart named Fleets with highest usage) */}
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
                        // Define different background colors in the form of an array
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
                            stepSize: 20,
                            fontSize: 8,
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
                            suggestedMin: 0,
                            stepSize: 30,
                            display: true,
                            fontSize: 8,
                            fontColor: "#14213d",
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

          {/* Row 2 (Contains two divs containing Cohort analysis and Fleet Churn Journey) */}
          <div className="audienceInsightsContainerBottom">
            {/* div 1 from row 2 (contains a table for Cohort Analysis) */}
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
              {/* Table background color and styling given using inline css */}
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

            {/* Div 2 from Row 2 (Fleet Churn Journey image obtained from online hosting) */}
            <div className="fleetChurnJourney">
              {/* This image is hosted online using free hosting website  */}
              <img src="https://i.ibb.co/hc4fxPS/image.png" alt="" />
            </div>
          </div>
          <div id="cohortAnalysis">Cohort Analysis</div>
        </div>
      </div>

      {/* Top Performing fleets section (Contains 2 rows with 2 divs each)*/}
      <div className="topPerformingFleets">
        {/* heading */}
        <div className="topPerformingFleetsHeading">
          TOP PERFORMING FLEETS, VEHICLE MODELS & ROUTES
        </div>

        {/* The main container containing the 2 divs */}
        <div className="topPerformingFleetsContainer">
          {/* Top Div */}
          <div className="tpfTop">
            {/* The first div from the top container contains an image obtained from online hosting */}
            <div>
              <img
                src="https://i.ibb.co/7XKNyk6/image.png"
                alt=""
                className="indiaImg"
              />
            </div>

            {/* The second div from the top container contains a table */}
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
          
          {/* Bottom Div (Contains another 2 divs) */}
          <div className="tpfBottom">
            {/* The first div from the bottom container contains an image obtained from online hosting */}
            <div>
              <img
                src="https://i.ibb.co/p2vqhQG/image.png"
                alt=""
                className="routesImg"
              />
            </div>

            {/* The second div from the bottom container contains a table */}
            <div className="tpfTopTable">
              <table style={{ marginLeft: 25 }}>
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

// Exporting the component
export default Content;
