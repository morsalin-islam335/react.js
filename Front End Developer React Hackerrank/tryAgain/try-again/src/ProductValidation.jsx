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

// import { useState } from "react";
// // import "./index.css";

// function ProductValidation() {
//   const [productName, setProductName] = useState("");
//   const [touchNameField, setTouchNameField] = useState(false);
//   const [touchQuantityField, setTouchQuantityField] = useState(false);
//   const [quantity, setQuantity] = useState("");
//   console.log(
//     "touch name field",
//     touchNameField,
//     "touch quantity field",
//     touchQuantityField
//   );

//   const handelNameChange = (event) => {
//     if (!touchNameField) {
//       setTouchNameField(() => true);
//     }
//     setProductName(() => event.target.value);
//     console.log("trigered  name filed");
//   };

//   const handelQuantityChange = (event) => {
//     if (!touchQuantityField) {
//       setTouchQuantityField(() => true);
//     }
//     console.log("trigered  quantity filed");
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
//               data-testid="name-input"
//               className="white large outlined"
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
//               className="white large outlined"
//               placeholder="Quantity"
//             />
//             {touchQuantityField && quantity === "" ? (
//               <p
//                 className="error-text form-hint"
//                 data-testid="quantity-input-error"
//               >
//                 Quantity is required
//               </p>
//             ) : null}
//           </label>
//           <button
//             className="mt-50"
//             type="submit"
//             data-testid="submit-button"
//             disabled={
//               !touchNameField ||
//               !touchQuantityField ||
//               productName === "" ||
//               quantity === ""
//             }
//           >
//             Submit
//           </button>
//         </form>
//       </section>
//     </div>
//   );
// }

// export default ProductValidation;

import { useState } from "react";

function ProductValidation() {
  const [productName, setProductName] = useState("");
  const [touchNameField, setTouchNameField] = useState(false);
  const [touchQuantityField, setTouchQuantityField] = useState(false);
  const [quantity, setQuantity] = useState("");

  const handleNameChange = (event) => {
    setProductName(event.target.value);
  };

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const isSubmitDisabled = productName.trim() === "" || quantity.trim() === "";

  return (
    <div className="layout-column justify-content-center align-items-center">
      <section className="card pa-50">
        <form className="layout-column" noValidate>
          <label>
            <input
              type="text"
              onInput={handleNameChange}
              data-testid="name-input"
              className="white large outlined"
              placeholder="Product name"
              onClick={() => setTouchNameField(true)}
            />
            {touchNameField && productName.trim() === "" && (
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
              onInput={handleQuantityChange}
              className="white large outlined"
              placeholder="Quantity"
              onClick={() => setTouchQuantityField(true)}
            />
            {touchQuantityField && quantity.trim() === "" && (
              <p
                className="error-text form-hint"
                data-testid="quantity-input-error"
              >
                Quantity is required
              </p>
            )}
          </label>
          <button
            className="mt-50"
            type="submit"
            data-testid="submit-button"
            disabled={isSubmitDisabled}
          >
            Submit
          </button>
        </form>
      </section>
    </div>
  );
}

export default ProductValidation;
