import React from "react";

const AmortizationScheduleTable = ({ data }) => {
  let totalPrincipal = 0;
  let totalInterest = 0;
  

  data.map((item) => {
    totalPrincipal += parseFloat(item.principal.replace("$", ""));
    totalInterest += parseFloat(item.interest.replace("$", ""));
  });

  console.log(totalPrincipal);

  return (
    <div id="amortization-schedule">
      <h2>Amortization Schedule</h2>

      <table>
        <thead>
          <tr>
            <th>Month</th>
            <th>Principal Payment</th>
            <th>Interest Payment</th>
            <th>Remaining Amount</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, key) => {
            return (
              <tr key={key}>
                <td>{item.month}</td>
                <td>{item.principal}</td>
                <td>{item.interest}</td>
                <td>{item.remainingAmount}</td>
              </tr>
            );
          })}

          <tr>
            <td>Total</td>
            <td style={{fontWeight: 'bold'}}>{'$' + totalPrincipal.toFixed(2)}</td>
            <td style={{fontWeight: 'bold'}}>{'$' + totalInterest.toFixed(2)}</td>
           
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AmortizationScheduleTable;
