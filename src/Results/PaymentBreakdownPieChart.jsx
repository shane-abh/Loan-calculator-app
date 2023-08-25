import React, { useContext } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { ThemeContext } from "../App";

ChartJS.register(ArcElement, Tooltip, Legend);

const PaymentBreakdownPieChart = ({
  loanAmount,
  interestRate,
  downPaymentAmount,
}) => {

  const {mode} = useContext(ThemeContext)

  
  const totalInterest = Math.abs(loanAmount * (interestRate / 100));

  let legendColor = mode ? "black" : "white";

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
   plugins:{
    legend: {
      labels: {
        color: legendColor,
        font:{
          size: 15,
        }
      }
    }
   }
  };
  return (
    <div id="chart">
      <h2>Payment Breakdown Pie Chart</h2>
      <div style={{maxWidth:'600px', margin:'10px auto'}}>

      <Doughnut data={data} options={options}/>
      </div>
    </div>
  );
};

export default PaymentBreakdownPieChart;
