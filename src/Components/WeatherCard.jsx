import React from "react";
import { Card } from "react-bootstrap";
import WeatherIcon from "./WeatherIcon";

export default function WeatherCard(props) {
  return (
    <Card style={{ width: "18rem", margin: "0.25rem" }}>
      <Card.Body>
        <Card.Title>{props.day}</Card.Title>
        <WeatherIcon weatherCondition={props.weatherCondition} />
        <Card.Text>
          {props.weatherHigh}°{" "}
          <span style={{ color: "grey" }}>{props.weatherLow}°</span>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
