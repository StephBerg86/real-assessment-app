import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import Listings from "./pages/Listings";
import ScheduleViewing from "./pages/ScheduleViewing";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <Switch>
        <Route path="/aboutus" component={AboutUs} />
        <Route path="/listings" component={Listings} />
        <Route path="/scheduleviewing" component={ScheduleViewing} />
        <Route path="/" exact component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
