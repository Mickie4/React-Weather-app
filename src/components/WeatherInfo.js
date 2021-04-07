import React from "react";
import "../styles/WeatherInfo.css";
import FormattedDate from "./FormattedDate";
import FormattedTime from "./FormattedTime";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

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
              {/* <FormattedDate date={props.data.date} /> */}
            </li>
            <li className='current-time'>
              <FormattedTime data={props.data} />
            </li>
          </ul>
        </div>
        <div className='col-md-6 col-12 text-center'>
          <div className='large-icon mb-3'>
            <WeatherIcon code={props.data.icon} size={120} />
          </div>
          <WeatherTemperature celsius={props.data.temperature} />
        </div>
      </div>
      <div className='row mt-4'>
        <div className='col-md-12 text-center'>
          <p className='description'>"{props.data.description}"</p>
          <ul className='description2'>
            <li>Humidity:{props.data.humidity}%</li>
            <li>Wind:{props.data.wind}Km/h</li>
          </ul>
        </div>
      </div>{" "}
    </div>
  );
}
