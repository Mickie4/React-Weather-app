import React from "react";
import FormattedDate from "./FormattedDate";
import FormattedTime from "./FormattedTime";
import ReactAnimatedWeather from "react-animated-weather";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLongArrowAltUp,
  faLongArrowAltDown,
} from "@fortawesome/free-solid-svg-icons";

export default function WeatherInfo(props) {
  return (
    <div className='WeatherInfo'>
      <div className='row'>
        <div className='col-md-6 col-12 text-left'>
          <h1 className='city-title'>
            {props.data.cityResponse.toUpperCase()}
          </h1>
          <ul className='date-list'>
            <li className='current-date'>
              <FormattedDate date={props.data.date} />
            </li>
            <li className='current-time'>
              <FormattedTime date={props.data.date} />
            </li>
          </ul>
        </div>
        <div className='col-md-6 col-12 text-center'>
          <div className='large-icon'>
            {
              <ReactAnimatedWeather
                icon='PARTLY_CLOUDY_DAY'
                color='#EE9945'
                size={120}
              />
            }
          </div>
          <h1 className='current-temp'>{props.data.temperature}°</h1>
          <button className='temp-btn'>C</button>
          <button className='temp-btn'>F</button>
        </div>
      </div>
      <div className='row mt-4'>
        <div className='col-md-12 text-center'>
          <p className='description'>"{props.data.description}"</p>
          <ul className='forecast'>
            <li>Humidity:{props.data.humidity}%</li>
            <li>Wind:{props.data.wind}Km/h</li>
            <li>
              <p>
                <span>
                  <FontAwesomeIcon icon={faLongArrowAltUp} size='xs' />{" "}
                  {props.data.maxTemp}°
                </span>
                {""} | {""}
                <span>
                  <FontAwesomeIcon icon={faLongArrowAltDown} size='xs' />{" "}
                  {props.data.minTemp}°
                </span>
              </p>
            </li>
          </ul>
        </div>
      </div>{" "}
    </div>
  );
}
