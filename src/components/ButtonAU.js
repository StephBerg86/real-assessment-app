import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

export default function ButtonAU() {
  return (
    <div>
      <p>
        <Link to="/listings">
          <Button className="auButton">listings</Button>
        </Link>
        <Link to="/scheduleviewing">
          <Button className="auButton">schedule viewing</Button>
        </Link>
      </p>
    </div>
  );
}
