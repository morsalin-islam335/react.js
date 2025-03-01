import React, { useState } from "react";
import Table from "./Table";

function Main() {
  const [value, setValue] = useState("");
  const [flag, setFlag] = useState(false);
  const number = parseFloat(value);

  const errorMessage =
    flag && value === ""
      ? "Amount cannot be empty"
      : number < 0.01
      ? "Amount cannot be less than $0.01"
      : number > 17042.67
      ? "Amount cannot exceed the available balance"
      : false;

  const handelChange = (event) => {
    if (!flag) {
      setFlag(() => true);
    }
    setValue(event.target.value);
  };
  return (
    <div className="layout-column align-items-center mx-auto">
      <h1>CryptoRank Exchange</h1>
      <section>
        <div className="card-text layout-column align-items-center mt-12 px-8 flex text-center">
          <label>
            I want to exchange ${" "}
            <input
              className="w-10"
              data-testid="amount-input"
              required
              type="number"
              placeholder="USD"
              value={value}
              onChange={(event) => handelChange(event)}
            />{" "}
            of my $<span>17042.67</span>:
          </label>
          {errorMessage && (
            <p
              data-testid="error"
              className="form-hint error-text mt-3 pl-0 ml-0"
            >
              {errorMessage}
            </p>
          )}
          {/* The errors can be Amount cannot be empty /be less than $0.01/exceed the available balance */}
        </div>
      </section>
      <Table value={number} inputField={value} />
    </div>
  );
}

export default Main;
