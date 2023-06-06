import "./App.css";

import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { changeLanguage } from "i18next";

// const languages = [
//   { value: "", text: "Options" },
//   { value: "en", text: "English" },
//   { value: "hi", text: "Hindi" },
// ];

function App() {
  // It is a hook imported from 'react-i18next'
  const { t } = useTranslation();

  // const [lang, setLang] = useState("en");
  // const handleChange = (e) => {
  //   console.log(e);
  //   setLang(e.target.value);
  //   let loc = "http://localhost:3000/";
  //   // window.location.replace(loc + "?lng=" + e.target.value);
  // };

  return (
    <div className="App">
      <h1>{t("first")}</h1>
      <button type="button" onClick={() => changeLanguage("hi")}>
        hindi
      </button>
      <button type="button" onClick={() => changeLanguage("en")}>
        english
      </button>
    </div>
  );
}

export default App;
