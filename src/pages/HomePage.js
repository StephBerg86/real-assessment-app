import React from "react";
import Button from "react-bootstrap/Button";

export default function HomePage() {
  return (
    <div>
      <h1> Welcome to Reel Estate</h1>
      <img
        src="https://blog.hubspot.com/hubfs/Sales_Blog/real-estate-business-compressor.jpg"
        alt="house"
      />
      <p>
        <Button>See Listings</Button>
        <Button>About us</Button>
      </p>

      <select>
        <option value="english">English</option>
        <option value="dutch">Dutch</option>
        <option value="German">German</option>
        <option value="Spanish">Spanish</option>
      </select>
    </div>
  );
}
