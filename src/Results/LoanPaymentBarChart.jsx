import React,  { useContext } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { ThemeContext } from "../App";

const LoanPaymentBarChart = ({data, labels}) => {

  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const { mode } = useContext(ThemeContext);


  const monthlyPayment = data.map(item => item.principal);
  const interestPayment = data.map(item => item.interest);


  let legendColor = mode ? "black" : "white";

  const chartData =  {
    labels: labels,
    datasets: [
      {
        label: "Monthly Payment",
        data: monthlyPayment,
        backgroundColor: "blue",
      },
      {
        label: "Interest Amount",
        data: interestPayment,
        backgroundColor: "red",
      },
    ],
  }

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
  }
  return (
    <div id="chart">
      <h2>Loan Payment Bar Chart</h2>
      <Bar options={options} data={chartData} />
    </div>
  );
};

export default LoanPaymentBarChart;
