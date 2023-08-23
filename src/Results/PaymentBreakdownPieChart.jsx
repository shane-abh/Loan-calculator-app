import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const PaymentBreakdownPieChart = ({
  loanAmount,
  interestRate,
  downPaymentAmount,
}) => {

  
  const totalInterest = Math.abs(loanAmount * (interestRate / 100));

  const data = {
    labels: ["Principal Amount", "Total Interest", "Down Payment"],
    datasets: [
      {
        data: [
          loanAmount.toFixed(2),
          totalInterest.toFixed(2),
          downPaymentAmount,
        ],
        backgroundColor: ["#36A2EB", "#FF6384", "#22CFCF"],
      },
    ],
  };

  const options = {
    responsive: true,
  };
  return (
    <div id="chart">
      <h3>Payment Breakdown Pie Chart</h3>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default PaymentBreakdownPieChart;
