import "h8k-components";
import React, { useState } from "react";
import "./App.css";
import Dropdown from "./components/dropdown";

const title = "Employee Information";

const countryOptions = [
  "USA",
  "Germany",
  "France",
  "Canada",
  "India",
  "Poland",
  "Japan",
  "Spain",
  "Australia",
];

const languageOptions = ["English", "Spanish", "French", "German"];

function App() {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("");
  return (
    <div>
      <h8k-navbar header={title}></h8k-navbar>
      <div className="layout-row align-items-centre justify-content-center mt-50">
        <section className="layout-column">
          <div data-testid="country-options">
            <Dropdown
              options={countryOptions}
              labelText={"Select Country"}
              onChange={setSelectedCountry}
            />
          </div>
          <div data-testid="language-options">
            <Dropdown
              options={languageOptions}
              labelText={"Select Language"}
              onChange={setSelectedLanguage}
            />
          </div>
          <label className="mt-50 text-align-center">Final Selections:</label>
          <label className="mt-10 finalText" data-testid="country-selected">
            Country Selected: {selectedCountry}
          </label>
          <label className="mt-10 finalText" data-testid="language-selected">
            Language Selected: {selectedLanguage}
          </label>
        </section>
      </div>
    </div>
  );
}

export default App;
