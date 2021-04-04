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
  const apiKey = "0603e85b4ce086e6bb52d7cdc7bcffb5";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  function handleResponse(response) {
    setForecast(response.data);
    setLoaded(true);
  }
  if (loaded && forecast.lat === latitude && forecast.lon === longitude) {
    return (
      <div className='weatherForecast'>
        <div className='container-fluid'>
          <ul className='forecast'>
            <li className='p-1'>
              <p>16:00</p>
              <WeatherIcon code='01d' size={40} />
              <p>
                <FontAwesomeIcon icon={faLongArrowAltUp} size='xs' /> 18°{" "}
                <FontAwesomeIcon icon={faLongArrowAltDown} size='xs' /> 10°
              </p>
            </li>
            <li className='p-1'>
              <p>16:00</p>
              <WeatherIcon code='01d' size={40} />
              <p>
                <FontAwesomeIcon icon={faLongArrowAltUp} size='xs' /> 18°{" "}
                <FontAwesomeIcon icon={faLongArrowAltDown} size='xs' /> 10°
              </p>
            </li>
            <li className='p-1'>
              <p>16:00</p>
              <WeatherIcon code='01d' size={40} />
              <p>
                <FontAwesomeIcon icon={faLongArrowAltUp} size='xs' /> 18°{" "}
                <FontAwesomeIcon icon={faLongArrowAltDown} size='xs' /> 10°
              </p>
            </li>
            <li className='p-1'>
              <p>16:00</p>
              <WeatherIcon code='01d' size={40} />
              <p>
                <FontAwesomeIcon icon={faLongArrowAltUp} size='xs' /> 18°{" "}
                <FontAwesomeIcon icon={faLongArrowAltDown} size='xs' /> 10°
              </p>
            </li>
            <li className='p-1'>
              <p>16:00</p>
              <WeatherIcon code='01d' size={40} />
              <p>
                <FontAwesomeIcon icon={faLongArrowAltUp} size='xs' /> 18°{" "}
                <FontAwesomeIcon icon={faLongArrowAltDown} size='xs' /> 10°
              </p>
            </li>
            <li className='p-1'>
              <p>16:00</p>
              <WeatherIcon code='01d' size={40} />
              <p>
                <FontAwesomeIcon icon={faLongArrowAltUp} size='xs' /> 18°{" "}
                <FontAwesomeIcon icon={faLongArrowAltDown} size='xs' /> 10°
              </p>
            </li>
          </ul>
        </div>
      </div>
    );
  } else {
    axios.get(apiUrl).then(handleResponse);
    return "Loading";
  }
}
