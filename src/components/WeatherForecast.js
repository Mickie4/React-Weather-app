import React from "react";
import "../styles/WeatherForecast.css";
import WeatherIcon from "./WeatherIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLongArrowAltUp,
  faLongArrowAltDown,
} from "@fortawesome/free-solid-svg-icons";

export default function WeatherForecast() {
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
}
