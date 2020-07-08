import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export default function ButtonsHP() {
  const [firstButton, setFirstButton] = useState("See listings");
  const [secondButton, setSecondButton] = useState("About us");
  const [language, setLanguage] = useState("");

  const changeLanguage = (event) => {
    if (event.target.value === "English") {
      setFirstButton("See listings");
      setSecondButton("About us ");
      setLanguage("English");
    } else if (event.target.value === "Dutch") {
      setFirstButton("Bekijk woningen");
      setSecondButton("Over ons");
      setLanguage("Dutch");
    } else if (event.target.value === "German") {
      setFirstButton("Immobilienangebote");
      setSecondButton("Über uns");
      setLanguage("German");
    } else {
      setFirstButton("Venta propiedades");
      setSecondButton("Sobre nosotras");
      setLanguage("Spanish");
    }
  };

  return (
    <div>
      <p>
        <Link to="/listings">
          <Button className="hpButton">{firstButton}</Button>
        </Link>
        <Link to={`/aboutus/${language}`}>
          <Button className="hpButton">{secondButton}</Button>
        </Link>
      </p>

      <select onChange={changeLanguage} className="languagebutton">
        <option value="English">English</option>
        <option value="Dutch">Dutch</option>
        <option value="German">German</option>
        <option value="Spanish">Spanish</option>
      </select>
    </div>
  );
}
