import React, { useRef, useState, useContext } from "react";
import "./css/LoanForm.css";
import "./css/background.css"
import Results from "./Results/Results";

import { ThemeContext } from "./App";


const LoanForm = ({loanInfo}) => {
 
  const [data, setData] = useState({
    loanAmount: 1000,
    interestRate: 2,
    loanDuration: 5,
    downPaymentPercent: 20,
    loanDate: "",
  });

  const {mode, toggleMode} = useContext(ThemeContext)

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    loanInfo(data)
    
  };
  return (
    <div className="container">
      <form id="loan-form" onSubmit={handleSubmit} className={` ${mode? 'light' : 'dark'}`}>
        <div>
          <label htmlFor="loan-amount">Loan Amount ($):</label>
          <input
            type="number"
            id="loan-amount"
            name="loanAmount"
            value={data.loanAmount}
            onChange={handleChange}
            required
          />
        </div>
        <span className="hidden" id="interest-rate-errMsg"></span>
        <div>
          <label htmlFor="interest-rate">Interest Rate (%):</label>
          <input
            type="number"
            id="interest-rate"
            step="0.1"
            name="interestRate"
            value={data.interestRate}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="loan-duration">Loan Duration (years):</label>
          <input
            type="number"
            id="loan-duration"
            placeholder="5"
            name="loanDuration"
            value={data.loanDuration}
            onChange={handleChange}
            required
          />
        </div>
        <span className="hidden" id="down-payment-errMsg"></span>
        <div>
          <label htmlFor="down-payment-percentage">
            Down Payment Percentage (%):
          </label>
          <input
            type="number"
            id="down-payment-percentage"
            step="0.1"
            name="downPaymentPercent"
            onChange={handleChange}
            value={data.downPaymentPercent}
            required
          />
        </div>
        <div>
          <label htmlFor="loan-date">Loan Date:</label>
          <input
            type="date"
            id="loan-date"
            name="loanDate"
            value={data.loanDate }
            onChange={handleChange}
            required
          />
        </div>

        <div id="buttons">
          <button id="clearContents">Clear</button>
          <button type="submit">Calculate</button>
        </div>
      </form>
    </div>
  );
};

export default LoanForm;
