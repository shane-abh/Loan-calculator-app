import React, { useContext } from "react";
import "../css/Results.css";
import "../css/background.css"
import AmortizationScheduleChart from "./AmortizationScheduleChart";
import LoanPaymentBarChart from "./LoanPaymentBarChart";
import PaymentBreakdownPieChart from "./PaymentBreakdownPieChart";
import AmortizationScheduleTable from "./AmortizationScheduleTable";
import { ThemeContext } from "../App";

const Results = (data) => {

  const {mode} = useContext(ThemeContext)

  const amortizationData = [];

  const labels = [];

  const dataForGraph = [];

  let totalInterestAmount = 0;

  const loanInfo = data.data;

  const loanAmount = loanInfo.loanAmount;
  const interestRate = loanInfo.interestRate;
  const loanDuration = loanInfo.loanDuration;

  // Get the loan date from the input field
  const loanDate = loanInfo.loanDate;

  const downPaymentPercentage = loanInfo.downPaymentPercent;

  function getMonthYear(startDate, monthOffset) {
    const date = new Date(startDate);
    date.setMonth(date.getMonth() + monthOffset);
    const month = date.toLocaleString("default", { month: "long" });
    const year = date.getFullYear();
    return month + " " + year;
  }

  //Calculations
  const downPaymentAmount = (downPaymentPercentage / 100) * loanAmount;
  let remaining = loanAmount - downPaymentAmount;

  let monthlyInterestRate = interestRate / (12 * 100);
  let totalPayments = loanDuration * 12;

  let monthlyPayment =
    (remaining * monthlyInterestRate) /
    (1 - Math.pow(1 + monthlyInterestRate, -totalPayments));

  for (let i = 1; i <= totalPayments; i++) {
    const interestPayment = remaining * monthlyInterestRate;
    const principalPayment = monthlyPayment - interestPayment;
    remaining -= principalPayment;
    const monthYear = getMonthYear(loanDate, i);
    labels.push(monthYear);

    totalInterestAmount += interestPayment;

    amortizationData.push({
      month: monthYear,
      principal: "$" + principalPayment.toFixed(2),
      interest: "$" + interestPayment.toFixed(2),
      remainingAmount: "$" + Math.abs(remaining.toFixed(2)),
    });

    dataForGraph.push({
      principal: principalPayment.toFixed(2),
      interest: interestPayment.toFixed(2),
      remainingAmount: remaining.toFixed(2),
    });
  }

  console.log(mode)

  return (
    <div>
      <div id="result" className={` ${mode? 'light' : 'dark'}`}>
        <h2>Results</h2>
        <p>Monthly Payment: {monthlyPayment.toFixed(2) || 0}</p>
        <p>Total Payment: {totalPayments}</p>
        <p>Down Payment: {downPaymentAmount}</p>
        <p>
          Total Payment after down payment: {(loanAmount - downPaymentAmount).toFixed(2)}
        </p>
        <p>
          Total interest after down payment: {totalInterestAmount.toFixed(2)}
        </p>

        <AmortizationScheduleChart data={dataForGraph} labels={labels} />

        <LoanPaymentBarChart data={dataForGraph} labels={labels} />

        <PaymentBreakdownPieChart
          loanAmount={loanAmount}
          interestRate={interestRate}
          downPaymentAmount={downPaymentAmount}
        />

        <AmortizationScheduleTable data={amortizationData}/>
      </div>
    </div>
  );
};

export default Results;
