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
  console.log("languageID", languageId);

  const filterAgent = agent.filter((agents) => {
    if (agents.languages.includes(languageId)) {
      return agent;
    } else {
      return false;
    }
  });
  console.log("filterAgent", filterAgent);

  if (languageId === "English") {
    return (
      <div>
        About English
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
        <ButtonAU />
      </div>
    );
  } else if (languageId === "Dutch") {
    return (
      <div>
        about dutch
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
        <ButtonAU />
      </div>
    );
  } else if (languageId === "German") {
    return (
      <div>
        about german
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
        <ButtonAU />
      </div>
    );
  } else {
    return (
      <div>
        Spanish
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
        <ButtonAU />
      </div>
    );
  }
}
