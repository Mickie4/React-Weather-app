import React, { useState } from "react";
import "./Weather.css";
import ReactAnimatedWeather from "react-animated-weather";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationArrow,
  faPowerOff,
  faSearch,
  faLongArrowAltUp,
  faLongArrowAltDown,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import Planet from "./Planet";
import { unstable_createPortal } from "react-dom";
const powerBtn = <FontAwesomeIcon icon={faPowerOff} size='3x' />;
const locationBtn = <FontAwesomeIcon icon={faLocationArrow} size='lg' />;
const searchBtn = <FontAwesomeIcon icon={faSearch} size='lg' />;
const tempUpIcon = <FontAwesomeIcon icon={faLongArrowAltUp} size='xs' />;
const tempDownIcon = <FontAwesomeIcon icon={faLongArrowAltDown} size='xs' />;
const rainIcon = <ReactAnimatedWeather icon='RAIN' size='40' color='#EE9945' />;
const clearNight = (
  <ReactAnimatedWeather icon='CLEAR_NIGHT' size='40' color='#EE9945' />
);
const cloudyDay = (
  <ReactAnimatedWeather icon='PARTLY_CLOUDY_DAY' size='170' color='#EE9945' />
);
const windIcon = <ReactAnimatedWeather icon='WIND' size='40' color='#EE9945' />;

export default function Weather() {
  const [temperature, setTemperature] = useState(null);
  const [ready, setReady] = useState(false);
  let city = "Paris";

  //Handle function for the API's Response
  function handleResponse(response) {
    setReady(true);
    console.log(response.data);
    setTemperature(Math.round(response.data.main.temp));
  }

  if (ready) {
    return (
      <div className='weather'>
        <div className='weather-container col-md-4 col-sm-8'>
          <div className='row'>
            <div className='col-12'>
              <h1 className='city-title'>{city}</h1>
            </div>
            <div className='col-12'>
              <h2 className='current-time'>11:00 AM</h2>
              <p className='current-date'>Thu 25 Mar</p>
            </div>
          </div>
          <div className='row'>
            <div className='col-12 temp-display'>
              <div className='large-icon'>{cloudyDay}</div>
              <h1 className='current-temp ml-2'>{temperature}°</h1>
              <button className='temp-btn'>C</button>
              <button className='temp-btn'>F</button>
            </div>
          </div>
          <div className='col-12 m-0 p-0'>
            <ul className='forecast mt-5'>
              <li>
                <p className='temps'>
                  {" "}
                  FRI <span className='small-icon'>{rainIcon}</span>
                  <span>{tempUpIcon} 23°</span>
                  {""} / {""}
                  <span>{tempDownIcon} 12°</span>
                </p>
              </li>
              <li>
                <p className='temps'>
                  {" "}
                  SAT <span className='small-icon'>{clearNight}</span>
                  <span>{tempUpIcon} 17°</span>
                  {""} / {""}
                  <span>{tempDownIcon} 12°</span>
                </p>
              </li>
              <li>
                <p className='temps'>
                  {" "}
                  SAT <span className='small-icon'>{windIcon}</span>
                  <span>{tempUpIcon} 15°</span>
                  {""} / {""}
                  <span>{tempDownIcon} 10°</span>
                </p>
              </li>
            </ul>
          </div>

          <form className='row mt-5'>
            <div className='col-md-10'>
              <input
                type='text'
                placeholder='Enter city'
                className='form-control'
              />
            </div>
            <button className='small-btn'>{searchBtn}</button>
            <button className='small-btn'>{locationBtn}</button>
            <div className='col-12'>
              <button className='search mt-5'>{powerBtn}</button>
            </div>
          </form>
        </div>
      </div>
    );
  } else {
    //Call to the API with AXIOS
    const apiKey = "0603e85b4ce086e6bb52d7cdc7bcffb5";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return (
      <div className='weather'>
        <Planet />
      </div>
    );
  }
}
