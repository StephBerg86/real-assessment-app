import React, { useState, useEffect } from "react";
import axios from "axios";
import Agent from "../components/Agent";

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
    </div>
  );
}
