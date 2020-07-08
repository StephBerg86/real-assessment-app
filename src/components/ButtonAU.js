import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

export default function ButtonAU({ first, second }) {
  return (
    <div>
      <p>
        <Link to="/listings">
          <Button className="auButton">{first}</Button>
        </Link>
        <Link to="/scheduleviewing">
          <Button className="auButton">{second}</Button>
        </Link>
      </p>
    </div>
  );
}
