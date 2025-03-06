// import React, { useState } from "react";

// import "./index.css";

// function ProductValidation() {
//   const [productName, setProductName] = useState("");
//   const [touchNameField, setTouchNameField] = useState(false);
//   const [toutchQuantityField, setQuantityField] = useState(false);

//   const [quantity, setQuantity] = useState(null);

//   const handelNameChange = (event) => {
//     if (!touchNameField) {
//       setTouchNameField(() => true);
//     }
//     setProductName(() => event.target.value);
//   };

//   const handelQuantityChange = (event) => {
//     if (!toutchQuantityField) {
//       setQuantityField(() => true);
//     }
//     setQuantity(() => event.target.value);
//   };

//   return (
//     <div className="layout-column justify-contents-center align-items-center">
//       <section className="card pa-50">
//         <form className="layout-column" noValidate>
//           <label>
//             <input
//               type="text"
//               onInput={(event) => handelNameChange(event)}
//               onBlur={null}
//               data-testid="name-input"
//               className={`white large outlined`}
//               placeholder="Product name"
//             />
//             {touchNameField && productName === "" ? (
//               <p
//                 className="error-text form-hint"
//                 data-testid="name-input-error"
//               >
//                 Product name is required
//               </p>
//             ) : null}
//           </label>
//           <label>
//             <input
//               type="number"
//               data-testid="quantity-input"
//               onInput={(event) => handelQuantityChange(event)}
//               onBlur={null}
//               className={`white large outlined`}
//               placeholder="Quantity"
//             />
//             {toutchQuantityField && quantity === "" ? (
//               <p
//                 className="error-text form-hint"
//                 data-testid="quantity-input-error"
//               >
//                 Quantity is required
//               </p>
//             ) : null}
//           </label>
//           <button
//             className={`mt-50 disabled=${
//               !touchNameField ||
//               !toutchQuantityField ||
//               productName !== "" ||
//               quantity !== null
//             }`}
//             type="submit"
//             data-testid="submit-button"
//           >
//             Submit
//           </button>
//         </form>
//       </section>
//     </div>
//   );
// }

// export default ProductValidation;

import React, { useState } from "react";
import "./index.css";

function ProductValidation() {
  const [productName, setProductName] = useState("");
  const [touchNameField, setTouchNameField] = useState(false);
  const [touchQuantityField, setTouchQuantityField] = useState(false);
  const [quantity, setQuantity] = useState("");

  const handelNameChange = (event) => {
    if (!touchNameField) setTouchNameField(true);
    setProductName(event.target.value);
  };

  const handelQuantityChange = (event) => {
    if (!touchQuantityField) setTouchQuantityField(true);
    setQuantity(event.target.value);
  };

  return (
    <div className="layout-column justify-contents-center align-items-center">
      <section className="card pa-50">
        <form className="layout-column" noValidate>
          <label>
            <input
              type="text"
              onInput={handelNameChange}
              data-testid="name-input"
              className="white large outlined"
              placeholder="Product name"
            />
            {touchNameField && productName === "" ? (
              <p
                className="error-text form-hint"
                data-testid="name-input-error"
              >
                Product name is required
              </p>
            ) : null}
          </label>
          <label>
            <input
              type="number"
              data-testid="quantity-input"
              onInput={handelQuantityChange}
              className="white large outlined"
              placeholder="Quantity"
            />
            {touchQuantityField && quantity === "" ? (
              <p
                className="error-text form-hint"
                data-testid="quantity-input-error"
              >
                Quantity is required
              </p>
            ) : null}
          </label>
          <button
            className="mt-50"
            type="submit"
            data-testid="submit-button"
            disabled={
              !touchNameField ||
              !touchQuantityField ||
              productName === "" ||
              quantity === ""
            }
          >
            Submit
          </button>
        </form>
      </section>
    </div>
  );
}

export default ProductValidation;
