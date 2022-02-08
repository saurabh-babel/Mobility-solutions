import React from "react";
import { Bar, Line } from "react-chartjs-2";

const Insights = () => {
  return (
    <div className="insights">
      <div id="insight-heading">INSIGHTS OVERVIEW</div>

      <div className="chart1">
        <div id="chart-heads">
          <p>
            <h3>₹100k</h3>
            <h6>Assisted Revenue</h6>
          </p>
          <p style={{ color: "#f72585" }}>
            <h3>₹70k</h3>
            <h6>Direct Revenue</h6>
          </p>
        </div>

        <div>
          <Line
            data={{
              labels: ["Jun", "Jul", "Aug"],
              datasets: [
                {
                  data: [14, 40, 100],
                  fill: false,
                  borderColor: ["rgba(181, 51, 55, 1)"],
                  borderWidth: 1,
                  pointRadius: 0,
                },
                {
                  data: [10, 20, 60],
                  fill: false,
                  borderColor: "#0077b6",
                  borderWidth: 1,
                  pointRadius: 0,
                },
              ],
            }}
            height={80}
            width={130}
            options={{
              maintainAspectRatio: true,
              scales: {
                yAxes: [
                  {
                    ticks: {
                      beginAtZero: true,
                      stepSize: 20,
                      fontSize: 8,
                    },
                  },
                ],
                xAxes: [
                  {
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

      <div className="chart1">
        <div id="chart-heads">
          <p>
            <h3>64%</h3>
            <h6>CTR</h6>
          </p>
        </div>
        <div>
          <Bar
            data={{
              labels: ["Home", "Product", "Cart"],
              datasets: [
                {
                  data: [30, 70, 25],
                  backgroundColor: "#0077b6",
                  borderWidth: 1,
                  pointRadius: 0,
                },
                {
                  data: [80, 60, 40],
                  backgroundColor: "#f72585",
                  borderWidth: 1,
                  pointRadius: 0,
                },
              ],
            }}
            height={80}
            width={130}
            options={{
              responsive: false,
              maintainAspectRatio: true,
              scales: {
                yAxes: [
                  {
                    ticks: {
                      beginAtZero: true,
                      stepSize: 20,
                      fontSize: 8,
                    },
                  },
                ],
                xAxes: [
                  {
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

      <div className="chart1">
        <div id="chart-heads">
          <p>
            <h3>72k</h3>
            <h6>Total Activities</h6>
          </p>
        </div>
        <div>
          <Line
            data={{
              labels: ["Jun", "Jul", "Aug"],
              datasets: [
                {
                  data: [14, 40, 100],
                  fill: false,
                  borderColor: "#0077b6",
                  borderWidth: 1,
                  pointRadius: 0,
                },
              ],
            }}
            height={80}
            width={130}
            options={{
              maintainAspectRatio: true,
              scales: {
                yAxes: [
                  {
                    ticks: {
                      beginAtZero: true,
                      stepSize: 20,
                      fontSize: 8,
                    },
                  },
                ],
                xAxes: [
                  {
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

      <div className="chart1">
        <div id="chart-heads">
          <p>
            <h3>32%</h3>
            <h6>Engaged Drivers</h6>
          </p>
        </div>
        <div>
          <Bar
            data={{
              labels: ["Jun", "Jul", "Aug"],
              datasets: [
                {
                  data: [20, 40, 30],
                  backgroundColor: "#0077b6",
                },
              ],
            }}
            height={80}
            width={130}
            options={{
              maintainAspectRatio: true,
              scales: {
                yAxes: [
                  {
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

      <div className="chart1">
        <div id="chart-heads">
          <p>
            <h3>100k</h3>
            <h6>Total Impressions</h6>
          </p>
        </div>
        <div>
          <Line
            data={{
              labels: ["Tex", "Tex", "Tex"],
              datasets: [
                {
                  data: [14, 20, 100],
                  fill: false,
                  borderColor: "#0077b6",
                  borderWidth: 1,
                  pointRadius: 0,
                },
              ],
            }}
            height={80}
            width={130}
            options={{
              maintainAspectRatio: true,
              scales: {
                yAxes: [
                  {
                    ticks: {
                      beginAtZero: true,
                      stepSize: 20,
                      fontSize: 8,
                    },
                  },
                ],
                xAxes: [
                  {
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
  );
};

export default Insights;
