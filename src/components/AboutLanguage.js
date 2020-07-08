import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Agent from "./Agent";
import ButtonAU from "../components/ButtonAU";

export default function AboutLanguage() {
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

  const { languageId } = useParams();

  const filterAgent = agent.filter((agents) => {
    if (agents.languages.includes(languageId)) {
      return agent;
    } else {
      return false;
    }
  });

  const listingsButton = () => {
    if (languageId === "English") {
      return "See listings";
    } else if (languageId === "Dutch") {
      return "Bekijk woningen";
    } else if (languageId === "German") {
      return "Immobilienangebote";
    } else if (languageId === "Spanish") {
      return "Venta viviendas";
    } else {
      return "See listings";
    }
  };

  const svButton = () => {
    if (languageId === "English") {
      return "Schedule a viewing";
    } else if (languageId === "Dutch") {
      return "Bezichtiging aanvragen";
    } else if (languageId === "German") {
      return "Exposé anforden";
    } else if (languageId === "Spanish") {
      return "Programe una cita";
    } else {
      return "Schedule a viewing";
    }
  };

  const [firstButton, setFirstButton] = useState(listingsButton);
  const [secondButton, setSecondButton] = useState(svButton);

  if (languageId === "English") {
    return (
      <div>
        <br />
        <h1>About us</h1>
        {filterAgent.map((agent) => {
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
        <ButtonAU first={firstButton} second={secondButton} />
      </div>
    );
  } else if (languageId === "Dutch") {
    return (
      <div>
        <br />
        <h1>About us</h1>
        {filterAgent.map((agent) => {
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
        <ButtonAU first={firstButton} second={secondButton} />
      </div>
    );
  } else if (languageId === "German") {
    return (
      <div>
        <br />
        <h1>About us</h1>
        {filterAgent.map((agent) => {
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
        <ButtonAU first={firstButton} second={secondButton} />
      </div>
    );
  } else if (languageId === "Spanish") {
    return (
      <div>
        <br />
        <h1>About us</h1>
        {filterAgent.map((agent) => {
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
        <ButtonAU first={firstButton} second={secondButton} />
      </div>
    );
  }
}
