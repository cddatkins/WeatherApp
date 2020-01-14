import React from "react";
import "./styles.css";
import WeatherForecast from "./Components/WeatherForecast";
import WeatherInput from "./Components/WeatherInput";

export default function App() {
  return (
    <div className="App">
      <WeatherInput />
      <WeatherForecast />
    </div>
  );
}
