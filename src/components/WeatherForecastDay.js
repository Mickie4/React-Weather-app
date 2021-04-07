import React from "react";
import WeatherIcon from "./WeatherIcon";
import "../styles/WeatherForecastDay.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLongArrowAltUp,
  faLongArrowAltDown,
} from "@fortawesome/free-solid-svg-icons";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    if (props.unit !== "celsius") {
      temperature = Math.round((temperature * 9) / 5 + 32);
    }
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    if (props.unit !== "celsius") {
      temperature = Math.round((temperature * 9) / 5 + 32);
    }

    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    return days[day];
  }

  return (
    <div className='weatherForecastDay'>
      <h1 className='forecast'>{day()}</h1>
      <WeatherIcon code={props.data.weather[0].icon} size={40} />
      <p className='forecast'>
        <span className='temp-max'>
          <FontAwesomeIcon icon={faLongArrowAltUp} size='xs' />
          {maxTemperature()}
        </span>
        <span className='temp-min'>
          <FontAwesomeIcon icon={faLongArrowAltDown} size='xs' />
          {minTemperature()}
        </span>
      </p>
    </div>
  );
}
