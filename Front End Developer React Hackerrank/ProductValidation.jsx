import React, { useState } from "react";

import "./index.css";

function ProductValidation() {
  const [productName, setProductName] = useState("");
  const [touchNameField, setTouchNameField] = useState(false);
  const [toutchQuantityField, setQuantityField] = useState(false);

  const [quantity, setQuantity] = useState("");

  const handelNameChange = (event) => {
    if (!touchNameField) {
      setTouchNameField(true);
    }
  };

  const handelQuantityChange = (event) => {};

  return (
    <div className="layout-column justify-contents-center align-items-center">
      <section className="card pa-50">
        <form className="layout-column" noValidate>
          <label>
            <input
              type="text"
              onInput={(event) => handelNameChange(event)}
              onBlur={null}
              data-testid="name-input"
              className={`white large outlined`}
              placeholder="Product name"
            />
            {initialNameField &&
              (productName === "") |
              (
                <p
                  className="error-text form-hint"
                  data-testid="name-input-error"
                >
                  Product name is required
                </p>
              )}
          </label>
          <label>
            <input
              type="number"
              data-testid="quantity-input"
              onInput={(event) => handelQuantityChange(event)}
              onBlur={null}
              className={`white large outlined`}
              placeholder="Quantity"
            />
            {!initialQuantityField &&
              (quantity === "") |
              (
                <p
                  className="error-text form-hint"
                  data-testid="quantity-input-error"
                >
                  Quantity is required
                </p>
              )}
          </label>
          <button className="mt-50" type="submit" data-testid="submit-button">
            Submit
          </button>
        </form>
      </section>
    </div>
  );
}

export default ProductValidation;
