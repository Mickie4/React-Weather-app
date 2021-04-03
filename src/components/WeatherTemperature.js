import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("metric");

  function fahrenheit() {
    return Math.round((props.celsius * 9) / 5 + 32);
  }

  function showMetric(event) {
    event.preventDefault();
    setUnit("metric");
  }

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  if (unit === "metric") {
    return (
      <div className='weather-temperature'>
        <h1 className='current-temp'>{props.celsius}°</h1>
        <button className='temp-btn-active'>C</button>
        <button className='temp-btn ' onClick={showFahrenheit}>
          F
        </button>
      </div>
    );
  } else {
    return (
      <div className='weather-temperature'>
        <h1 className='current-temp'>{fahrenheit()}°</h1>
        <button className='temp-btn' onClick={showMetric}>
          C
        </button>
        <button className='temp-btn-active'>F</button>
      </div>
    );
  }
}
