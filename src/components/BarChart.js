import React from "react";
import Chart from "chart.js";

export default function BarChart(props) {


  React.useEffect(() => {

    let config = {
      type: "bar",
      data: {
        labels: props.Data[0],
        datasets: [
          // {
          //   label: new Date().getFullYear(),
          //   backgroundColor: "#ed64a6",
          //   borderColor: "#ed64a6",
          //   data: [30, 78, 56, 34, 100, 45, 13,56, 34, 100, 45, 13.2],
          //   fill: false,
          //   barThickness: 8
          // },
          {
            label: '',
            fill: false,
            backgroundColor: "rgba(48,56,238,0.56)",
            borderColor: "#1218ac",
            data: props.Data[1] ,
            minBlockSize : 1
          }
        ]
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        title: {
          display: false,
          text: "Orders Chart"
        },
        tooltips: {
          mode: "index",
          intersect: false
        },
        hover: {
          mode: "nearest",
          intersect: true
        },
        legend: {
          labels: {
            fontColor: "rgba(0,0,0,.4)"
          },
          align: "end",
          position: "bottom"
        },
        scales: {
          xAxes: [
            {
              display: true,
              scaleLabel: {
              display: false,
              labelString: ""
              },
              gridLines: {
                borderDash: [2],
                borderDashOffset: [2],
                color: "rgba(33, 37, 41, 0.3)",
                zeroLineColor: "rgba(33, 37, 41, 0.3)",
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2]
              }
            }
          ],
          yAxes: [
            {
              display: true,
              scaleLabel: {
              display: false,
              labelString: "Value"
              },
              gridLines: {
                borderDash: [2],
                drawBorder: false,
                borderDashOffset: [2],
                color: "rgba(33, 37, 41, 0.2)",
                zeroLineColor: "rgba(33, 37, 41, 0.15)",
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2]
              }
            }
          ]
        }
      }
    };
    if (window.myBar) {
      window.myBar.destroy();
    }
    let ctx = document.getElementById("bar-chart").getContext("2d");
    window.myBar = new Chart(ctx, config);
  } );
  return (
    <>
      <div className="w-full md:w-6/12 px-4">
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
          <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
            <div className="flex flex-wrap items-center">
              <div className="relative w-full max-w-full flex-grow flex-1">
                <h6 className="uppercase text-gray-500 mb-1 text-xs font-semibold">
                  number of satisfiable clauses for each attempt
                </h6>
                <h2 className="text-gray-800 text-xl font-semibold">
                  {/*Total orders */}
                </h2>
              </div>
            </div>
          </div>
          <div className="p-4 flex-auto">
            {/* Chart */}
            <div className="relative h-40 md:h-48 lg:h-56 xl:h-72" >
              <canvas id="bar-chart"></canvas>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
