import React, { useState, useEffect } from "react";

import Axios from "axios";
import WeatherForecastDisplay from "./WeatherForecastDisplay";

export default function WeatherForecast() {
  const [forecast, setForecast] = useState([]);
  const [isFeteching, setIsFetching] = useState(true);
  useEffect(() => {
    async function getData() {
      const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
      try {
        setIsFetching(true);
        const response = await Axios.get(
          "https://api.openweathermap.org/data/2.5/forecast?q=Detroit&APPID=" +
            apiKey
        );
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
        console.log(output);
      } catch (e) {
        setIsFetching(false);
      }
    }
    getData();
  }, []);

  return (
    <div>
      <WeatherForecastDisplay
        weatherData={forecast}
        isFeteching={isFeteching}
      />
    </div>
  );
}
