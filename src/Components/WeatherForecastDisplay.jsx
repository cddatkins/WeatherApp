import React from "react";
import WeatherCard from "./WeatherCard";
import { ConvertKToF, GetUTCDateString } from "../Helpers";

export default function WeatherForecastDisplay(props) {
  return (
    <div style={{ display: "flex", textAlign: "center" }}>
      {props.weatherData.map((weather, index) => {
        
        const utcString = GetUTCDateString(weather.dt);
        const dayText = utcString.slice(0, 3);

        const lowTemp = ConvertKToF(weather.main.temp_min).toFixed(0);
        const highTemp = ConvertKToF(weather.main.temp_max).toFixed(0);

        const [weatherInfo] = weather.weather;
        return (
          props.isFetching? null :
          <WeatherCard
            key={index}
            day={dayText}
            weatherCondition={weatherInfo.main}
            weatherHigh={highTemp}
            weatherLow={lowTemp}
          />
        );
      })}
    </div>
  );
}
