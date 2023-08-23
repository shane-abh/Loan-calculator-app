import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

import { Line } from 'react-chartjs-2';


const AmortizationScheduleChart = ({data, labels}) => {
  //Function to add data and display line chart
  
  const remainingAmount = data.map(item => item.remainingAmount);
  const monthlyPayment = data.map(item => item.principal);
  const interestPayment = data.map(item => item.interest);


  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  
  const graphColor = "blue";

 

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
        borderColor: "green",
        fill: false,
        borderDash: [5, 5],
      },
      {
        label: "Interest Amount",
        data: interestPayment,
        borderColor: "violet",
        fill: false,
        borderDash: [5, 5],
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
          <h3>Amortization Schedule Graph</h3>
          <Line options={options} data={chartData} />
        </div>
  )
}

export default AmortizationScheduleChart