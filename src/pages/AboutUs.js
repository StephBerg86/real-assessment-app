import React, { useState, useEffect } from "react";
import axios from "axios";
import Agent from "../components/Agent";
import "../styling/AboutUs.css";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export default function AboutUs() {
  const [agent, setAgent] = useState([]);

  useEffect(() => {
    const url =
      "https://my-json-server.typicode.com/Codaisseur/listings-agents-data/agents";
    const fetchData = async () => {
      const response = await axios.get(url);
      setAgent(response.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <br />
      <h1>About us</h1>
      {agent.map((agent) => {
        return (
          <Agent
            key={agent.id}
            firstName={agent.firstName}
            lastName={agent.lastName}
            image={agent.imageUrl}
            motto={agent.motto}
            email={agent.email}
          />
        );
      })}
      <p>
        <Link to="/listings">
          <Button className="auButton">See listings</Button>
        </Link>
        <Link to="/scheduleviewing">
          <Button className="auButton">Schedule a viewing</Button>
        </Link>
      </p>
    </div>
  );
}
