import React, { useContext } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Line } from "react-chartjs-2";
import { ThemeContext } from "../App";

const AmortizationScheduleChart = ({ data, labels }) => {
  //Function to add data and display line chart

  const { mode } = useContext(ThemeContext);

  const remainingAmount = data.map((item) => item.remainingAmount);
  const monthlyPayment = data.map((item) => item.principal);
  const interestPayment = data.map((item) => item.interest);

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  const graphColor = mode ? "blue" : "#D8326D";
  let legendColor = mode ? "black" : "white";

  //adding data

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: "Monthly Payment",
        data: monthlyPayment,
        borderColor: graphColor,
        fill: false,
      },
      {
        label: "Remaining Amount",
        data: remainingAmount,
        borderColor: mode ? "green" : "#2BAB51",
        fill: false,
        // borderDash: [5, 5],
      },
      {
        label: "Interest Amount",
        data: interestPayment,
        borderColor: mode ? "violet" : "#D98B44",
        fill: false,
        // borderDash: [5, 5],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color: legendColor,
        },
      },
    },
    scales: {
      x: {
        display: true,

        title: {
          display: true,
          text: "Months",
          color: legendColor,
          font: {
            size: 20,
          },
        },
        ticks: { color: legendColor },
      },
      y: {
        display: true,
        title: {
          display: true,
          text: "Payment Amount ($)",
          color: legendColor,
          font: {
            size: 20,
          },
        },
        ticks: { color: legendColor },
      },
    },
  };

  return (
    <div id="chart" className={` ${mode ? "light" : "dark"}`}>
      <h2>Amortization Schedule Graph</h2>
      <Line options={options} data={chartData} />
    </div>
  );
};

export default AmortizationScheduleChart;
