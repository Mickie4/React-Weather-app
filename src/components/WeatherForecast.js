import React, { useState } from "react";
import axios from "axios";
import "../styles/WeatherForecast.css";
import WeatherIcon from "./WeatherIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLongArrowAltUp,
  faLongArrowAltDown,
} from "@fortawesome/free-solid-svg-icons";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);
  const apiKey = "17f56a92dfdfe63b71c98d96a2a4942a";
  //c6457dceef34bc5b29fe61bd0c8168e1, 0603e85b4ce086e6bb52d7cdc7bcffb5, 17f56a92dfdfe63b71c98d96a2a4942a, 5f472b7acba333cd8a035ea85a0d4d4c
  let lon = props.coordinates.lon;
  let lat = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }
  if (loaded && forecast.lat === lat && forecast.lon === lon) {
    return (
      <div className='weatherForecast'>
        <div className='row'>
          <div className='col'>
            <div className='weatherForecast-day'>{forecast[0].dt}</div>
            <WeatherIcon code={forecast[0].weather[0].icon} size={40} />
            <div className='weatherForecast-temps'>
              <span className='temp-max'>
                <FontAwesomeIcon icon={faLongArrowAltUp} size='xs' />
                {forecast[0].temp.max}°
              </span>
              <span className='temp-min'>
                <FontAwesomeIcon icon={faLongArrowAltDown} size='xs' />
                {forecast[0].temp.min}°
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    axios.get(apiUrl).then(handleResponse);
    return "Loading";
  }
}
