import React from "react";

export default function ListingDetails({ street, nr, city, price, m2, rooms }) {
  return (
    <div className="ListingDetails">
      address: {street} {nr} {city}
      <br />
      price: €{price}
      <br />
      m2: {m2}
      <br />
      bedrooms: {rooms}
    </div>
  );
}
