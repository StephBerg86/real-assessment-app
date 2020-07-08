import React, { useState, useEffect } from "react";
import axios from "axios";
import Sliders from "../components/Sliders";
import ListingDetails from "../components/ListingDetails";
import "../styling/Listings.css";

export default function Listings() {
  const [houses, setHouses] = useState([]);

  function sortByPrice(houses_a, houses_b) {
    return houses_a.priceEuro - houses_b.priceEuro;
  }

  let sortedHouses = [...houses].sort(sortByPrice);

  useEffect(() => {
    const url =
      "https://my-json-server.typicode.com/Codaisseur/listings-agents-data/listings";
    const fetchData = async () => {
      const response = await axios.get(url);
      setHouses(response.data);
    };
    fetchData();
  }, []);

  const priceHouses = houses.map((houses) => {
    return houses.priceEuro;
  });
  const minPrice = Math.min.apply(Math, priceHouses);
  const maxPrice = Math.max.apply(Math, priceHouses);

  const squareM = houses.map((houses) => {
    return houses.m2;
  });
  const minSquareM = Math.min.apply(Math, squareM);
  const maxSquareM = Math.max.apply(Math, squareM);

  const [value, setValue] = useState();

  function handleChange(event) {
    setValue(event.target.value);
  }

  const filterPrice = sortedHouses.filter((house) => {
    if (house.priceEuro <= value || house.m2 >= value) {
      return sortedHouses;
    }
  });

  return (
    <div>
      <br />
      <h1>Listings</h1>
      <Sliders
        minP={minPrice}
        maxP={maxPrice}
        minM={minSquareM}
        maxM={maxSquareM}
        onChange={handleChange}
      />

      {filterPrice.map((houses) => {
        return (
          <ListingDetails
            className="Listing"
            key={houses.id}
            street={houses.address.street}
            nr={houses.address.number}
            city={houses.address.city}
            price={houses.priceEuro}
            m2={houses.m2}
            rooms={houses.bedRooms}
          />
        );
      })}
    </div>
  );
}
