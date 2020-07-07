import React from "react";

export default function Agent({ firstName, lastName, image, motto, email }) {
  return (
    <div className="agent">
      <h3>
        {firstName} {lastName}
      </h3>
      <br />
      <img src={image} alt="poster" width="250px" />
      <br />
      {motto}
      <br />
      {email}
    </div>
  );
}
