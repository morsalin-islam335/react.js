import React from "react";
import { cryptocurrencyList } from "../cryptocurrency-list";

function Table({ value, inputField }) {
  const coinStatus = (rate) => {
    if (value > 17042.67 || value < 0.01) {
      return "n/a";
    } else if (inputField !== "") {
      return `${(rate * value).toFixed(8)}`;
    } else {
      return "0.00000000";
    }
  };

  const allData = cryptocurrencyList.map((currency, index) => (
    <tr key={index}>
      <td>{currency.name}</td>
      <td>1 USD = {currency.rate}</td>
      {/* <td>{ inputField !== "" ? (currency.rate * value).toFixed(8): value > 17042.67? "n/a": "0.00000000"}</td> */}

      <td>{coinStatus(currency.rate)}</td>
    </tr>
  ));

  // console.log(inputField);

  // console.log(cryptocurrencyList);
  // console.log(cryptocurrencyList)

  return (
    <div className="card card-text mt-10 mx-4">
      <table className="mb-0">
        <thead>
          <tr>
            <th>Cryptocurrency</th>
            <th>Exchange Rate</th>
            <th>Number of Coins</th>
          </tr>
        </thead>
        <tbody data-testid="exchange-data">{allData}</tbody>
      </table>
    </div>
  );
}

export default Table;
