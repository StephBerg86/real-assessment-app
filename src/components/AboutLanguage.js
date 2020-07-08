import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Agent from "./Agent";
import ButtonAU from "../components/ButtonAU";

export default function AboutLanguage() {
  // const thisLanguage = languages.filter(
  //   (language) => language.lang === languageId
  // );

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

  const filterLanguage = agent.filter((agents) => {
    console.log("agents.lang", agents.languages);
    if (agents.languages === languageId) {
      return true;
    } else {
      return false;
    }
  });
  console.log("filterlanguage", filterLanguage);

  if (languageId === "English") {
    return (
      <div>
        About English
        <br />
        <h1>About</h1>
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
        <ButtonAU />;
      </div>
    );
  } else if (languageId === "Dutch") {
    return (
      <div>
        about dutch
        <br />
        <h1>About</h1>
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
        <ButtonAU />;
      </div>
    );
  } else if (languageId === "German") {
    return (
      <div>
        about german
        <br />
        <h1>About</h1>
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
        <ButtonAU />;
      </div>
    );
  } else {
    return (
      <div>
        Spanish
        <br />
        <h1>About</h1>
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
        <ButtonAU />;
      </div>
    );
  }
}
