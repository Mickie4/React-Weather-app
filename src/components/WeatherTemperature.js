import React from "react";
import "../styles/WeatherTemperature.css";

export default function WeatherTemperature(props) {
  function showCelsius(event) {
    event.preventDefault();
    props.setUnit("celsius");
  }

  function showFahrenheit(event) {
    event.preventDefault();
    props.setUnit("fahrenheit");
  }

  if (props.unit === "celsius") {
    return (
      <div className='weather-temperature'>
        <h1 className='current-temp'>{props.celsius}°</h1>
        <button className='temp-btn-active' onClick={showCelsius}>
          C
        </button>
        <button className='temp-btn' onClick={showFahrenheit}>
          F
        </button>
      </div>
    );
  } else {
    let fahrenheit = Math.round((props.celsius * 9) / 5 + 32);
    return (
      <div className='weather-temperature'>
        <h1 className='current-temp'>{fahrenheit}°</h1>
        <button className='temp-btn' onClick={showCelsius}>
          C
        </button>
        <button className='temp-btn-active' onClick={showFahrenheit}>
          F
        </button>
      </div>
    );
  }
}
