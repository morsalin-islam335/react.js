import React from "react";
import "./index.css";

function Dropdown({ options, labelText, onChange }) {
  const handleChange = (event) => {
    onChange(event.target.value);
  };
  return (
    <div className="elementSet">
      <select
        data-testid="dropdown"
        defaultValue={labelText}
        onChange={handleChange}
      >
        {/* Do not remove this default option as this is needed in testing */}
        <option value={labelText} key={labelText} disabled>
          {labelText}
        </option>
        {options.map((option, index) => (
          <option value={option} key={index}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Dropdown;
