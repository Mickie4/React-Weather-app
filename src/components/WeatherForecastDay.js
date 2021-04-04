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
    let temperature = Math.round(props.data.daily[0].temp.max);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.daily[0].temp.min);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.daily[0].dt * 1000);
    let day = date.getDay();
    let days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    return days[day];
  }

  return (
    <div className='weatherForecastDay'>
      <div className='forecast'>{day()}</div>
      <WeatherIcon code={props.data.daily[0].weather[0].icon} size={40} />
      <div className='forecast'>
        <span className='temp-max'>
          <FontAwesomeIcon icon={faLongArrowAltUp} size='xs' />
          {maxTemperature()}
        </span>
        <span className='temp-min'>
          <FontAwesomeIcon icon={faLongArrowAltDown} size='xs' />
          {minTemperature()}
        </span>
      </div>
    </div>
  );
}
