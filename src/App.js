import React, {useState} from "react";
import "./styles.css";
import WeatherForecast from "./Components/WeatherForecast";
import WeatherInput from "./Components/WeatherInput";

export default function App() {
  const [location, setLocation] = useState("");

  function updateLocation(input) {
    setLocation(input);
  }

  return (
    <div className="App" style={{width: "80%", margin: "1rem auto"}}>
      <WeatherInput onClick={updateLocation}/>
      <WeatherForecast forecastLocation={location}/>
    </div>
  );
}
