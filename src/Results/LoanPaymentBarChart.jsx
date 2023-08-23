import React from "react";
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

const LoanPaymentBarChart = ({data, labels}) => {

  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );


  const monthlyPayment = data.map(item => item.principal);
  const interestPayment = data.map(item => item.interest);

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
      scales: {
        x: {
          display: true,
          title: {
            display: true,
            text: "Months",
          },
        },
        y: {
          display: true,
          title: {
            display: true,
            text: "Payment Amount ($)",
          },
        },
      },
  }
  return (
    <div id="chart">
      <h3>Loan Payment Bar Chart</h3>
      <Bar options={options} data={chartData} />
    </div>
  );
};

export default LoanPaymentBarChart;
