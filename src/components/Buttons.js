import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export default function Buttons() {
  const [firstButton, setFirstButton] = useState("See listings");
  const [secondButton, setSecondButton] = useState("About us");

  const changeLanguage = (event) => {
    if (event.target.value === "english") {
      setFirstButton("See listings");
      setSecondButton("About us ");
    } else if (event.target.value === "dutch") {
      setFirstButton("Bekijk woningen");
      setSecondButton("Over ons");
    } else if (event.target.value === "german") {
      setFirstButton("Immobilienangebote");
      setSecondButton("Über uns");
    } else {
      setFirstButton("Venta propiedades");
      setSecondButton("Sobre nosotras");
    }
  };

  // const linkTo = () => {}

  return (
    <div>
      <p>
        <Link to="/listings">
          <Button className="hpButton">{firstButton}</Button>
        </Link>
        <Link to="aboutus">
          <Button className="hpButton">{secondButton}</Button>
        </Link>
      </p>

      <select onChange={changeLanguage} className="languagebutton">
        <option value="english">English</option>
        <option value="dutch">Dutch</option>
        <option value="german">German</option>
        <option value="spanish">Spanish</option>
      </select>
    </div>
  );
}
