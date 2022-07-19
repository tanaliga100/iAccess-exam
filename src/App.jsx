import { useState } from "react";
import Select from "react-select";
import "./App.css";
// IMPORTS
import { countries, languages } from "./constants/data";

function App() {
  const [country, setCountry] = useState();
  const [lang, setLanguage] = useState();

  const countryhandleChange = (selectedOptions) => {
    console.log("data", selectedOptions);
    const { label, value, abv } = selectedOptions;
    setCountry(value);
  };
  const languagehandleChange = (selectedOptions) => {
    console.log("data", selectedOptions);
    const { label, value } = selectedOptions;
    setLanguage(value);
  };

  return (
    <div className="App">
      <h1>Display My Selected Value</h1>
      <h2>
        Country :{" "}
        {!country ? (
          <small style={{ color: "red" }}>
            Please Select from the dropdown
          </small>
        ) : (
          <small style={{ color: "green" }}>{country}</small>
        )}
      </h2>
      <h2>
        Language :
        {!lang ? (
          <small style={{ color: "red" }}>
            Please Select from the dropdown
          </small>
        ) : (
          <small style={{ color: "green" }}>{lang}</small>
        )}
      </h2>
      <main>
        <section>
          <h2>Country</h2>
          <Select
            options={countries?.map((c) => ({
              label: c.name,
              value: c.name,
              abv: c.code,
            }))}
            onChange={countryhandleChange}
          />
        </section>

        <section>
          <h2>Language</h2>
          <Select
            options={languages?.map((c) => ({
              label: c,
              value: c,
            }))}
            onChange={languagehandleChange}
          />
        </section>
      </main>
    </div>
  );
}

export default App;
