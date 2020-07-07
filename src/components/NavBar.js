import React from "react";
import { NavLink } from "react-router-dom";
import "../styling/NavBar.css";

export default function NavBar() {
  return (
    <div className="NavBar">
      <NavLink
        className="NavItem"
        activeStyle={{ fontWeight: "bold" }}
        exact
        to="/"
      >
        Homepage
      </NavLink>
      <NavLink
        className="NavItem"
        activeStyle={{ fontWeight: "bold" }}
        to="/listings"
      >
        Listings
      </NavLink>
      <NavLink
        className="NavItem"
        activeStyle={{ fontWeight: "bold" }}
        to="/scheduleviewing"
      >
        Schedule viewing
      </NavLink>

      <NavLink
        className="NavItem"
        activeStyle={{ fontWeight: "bold" }}
        to="/aboutus"
      >
        About us
      </NavLink>
    </div>
  );
}
