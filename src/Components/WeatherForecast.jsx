import React, { useState, useEffect } from "react";

import Axios from "axios";
import WeatherForecastDisplay from "./WeatherForecastDisplay";
import {IsUSZipCode} from "../Helpers";

export default function WeatherForecast(props) {
  const [forecast, setForecast] = useState([]);
  const [isFeteching, setIsFetching] = useState(true);
  useEffect(() => {
    async function getData() {

      console.log("GETTING DATA");
      if(props.forecastLocation === "" || props.forecastLocation === undefined) return;

      const isZipCode = IsUSZipCode(props.forecastLocation);
      let quertyString = "q=" + props.forecastLocation;
      if(isZipCode)
        quertyString ="zip=" + props.forecastLocation;

      const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
      const apiIdStr = "&APPID=" + apiKey;
      try {
        setIsFetching(true);
        const response = await Axios.get(
          "https://api.openweathermap.org/data/2.5/forecast?" + quertyString + apiIdStr
        );
        console.log(response);
        if(response.data === undefined) return;

        setIsFetching(true);
        const list = response.data.list;
        let flags = [],
          output = [];
        for (let i = 0; i < list.length; i++) {
          let date = list[i].dt_txt.slice(1, 10);
          if (flags.includes(date)) continue;
          flags.push(date);
          output.push(list[i]);
        }

        setForecast(output);
      } catch (e) {
        setIsFetching(false);
        setForecast([]);
      }
    }
    getData();
  }, [props.forecastLocation]);

  return (
    <div>
      <WeatherForecastDisplay
        weatherData={forecast}
        isFeteching={isFeteching}
      />
    </div>
  );
}
