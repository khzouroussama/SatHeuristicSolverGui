import React from "react";
import Chart from "chart.js";

export default function LineChart(props) {
  React.useEffect(() => {
    var config = {
      type: "line",
      data: {
        labels: props.Data[0],
        datasets: props.Data[1]
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        title: {
          display: false,
          text: "no",
          fontColor: "white",
        },
        legend: {
          labels: {
            fontColor: "white"
          },
          align: "end",
          position: "bottom"
        },
        tooltips: {
          mode: "index",
          intersect: false
        },
        hover: {
          mode: "nearest",
          intersect: true
        },
        scales: {
          xAxes: [
            {
              ticks: {
                fontColor: "rgba(255,255,255,.7)"
              },
              display: true,
              scaleLabel: {
                display: false,
                labelString: "",
                fontColor: "white"
              },
              gridLines: {
                display: true,
                borderDash: [2],
                borderDashOffset: [2],
                color: "rgba(33, 37, 41, 0.3)",
                zeroLineColor: "rgba(0, 0, 0, 0)",
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2]
              }
            }
          ],
          yAxes: [
            {
              ticks: {
                fontColor: "rgba(255,255,255,.7)"
              },
              display: true,
              scaleLabel: {
                display: false,
                labelString: "Value",
                fontColor: "white"
              },
              gridLines: {
                borderDash: [3],
                borderDashOffset: [3],
                drawBorder: false,
                color: "rgba(255, 255, 255, 0.15)",
                zeroLineColor: "rgba(33, 37, 41, 0)",
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2]
              }
            }
          ]
        }
      }
    };
    if (window.myLine) {
      window.myLine.destroy();
    }
    var ctx = document.getElementById("line-chart").getContext("2d");
    window.myLine = new Chart(ctx, config);
   // window.myLine.update() ;
  },);
  return (
    <>
      <div className="w-full md:w-6/12 mb-12 md:mb-0 px-4">
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-gray-900">
          <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
            <div className="flex flex-wrap items-center">
              <div className="relative w-full max-w-full flex-grow flex-1">
                <h6 className="uppercase text-gray-200 mb-1 text-xs font-semibold">
                  the evolution of each attempt
                </h6>
                <h2 className="text-white text-xl font-semibold">
                  {/*Sales value*/}
                </h2>
              </div>
            </div>
          </div>
          <div className="p-4 flex-auto">
            {/* Chart */}
            <div className="relative h-40 md:h-48 lg:h-56 xl:h-72" >
              <canvas id="line-chart"></canvas>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
