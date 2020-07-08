import React from "react";
import "./styling/App.css";
import NavBar from "./components/NavBar";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import Listings from "./pages/Listings";
import ScheduleViewing from "./pages/ScheduleViewing";
import AboutLanguage from "./components/AboutLanguage";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <Switch>
        <Route exact path="/aboutus" component={AboutUs} />
        <Route path="/aboutus/:languageId" component={AboutLanguage} />
        <Route path="/listings" component={Listings} />
        <Route path="/scheduleviewing" component={ScheduleViewing} />
        <Route exact path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
