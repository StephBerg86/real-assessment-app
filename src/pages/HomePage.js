import React from "react";
import "../styling/HomePage.css";
import ButtonsHP from "../components/ButtonsHP";

export default function HomePage() {
  return (
    <div>
      <br />
      <h1> Welcome to Reel Estate</h1>
      <img
        className="hpImage"
        src="https://blog.hubspot.com/hubfs/Sales_Blog/real-estate-business-compressor.jpg"
        alt="house"
      />
      <ButtonsHP />
    </div>
  );
}
