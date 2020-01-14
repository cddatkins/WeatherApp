import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloud,
  faSun,
  faCloudRain,
  faSnowflake
} from "@fortawesome/free-solid-svg-icons";

export default function WeatherIcon(props) {
  function getIcon(condition) {
    switch (condition) {
      case "Clouds":
        return faCloud;
      case "Sun":
        return faSun;
      case "Rain":
        return faCloudRain;
      case "Snow":
        return faSnowflake;
      default:
        return faSun;
    }
  }

  return <FontAwesomeIcon icon={getIcon(props.weatherCondition)} size="4x" />;
}
