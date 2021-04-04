import React from "react";
import "../styles/WeatherTemperature.css";

export default function WeatherTemperature(props) {
  return (
    <div className='weather-temperature'>
      <h1 className='current-temp'>{props.celsius}°</h1>
      <button className='temp-btn-active'>C</button>
    </div>
  );
}
