import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import Loading from "./Loading";
import FormattedDate from "./FormattedDate";
import FormattedTime from "./FormattedTime";
import ReactAnimatedWeather from "react-animated-weather";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationArrow,
  faPowerOff,
  faSearch,
  faLongArrowAltUp,
  faLongArrowAltDown,
} from "@fortawesome/free-solid-svg-icons";

const rainIcon = <ReactAnimatedWeather icon='RAIN' size={40} color='#EE9945' />;
const clearNight = (
  <ReactAnimatedWeather icon='CLEAR_NIGHT' size={40} color='#EE9945' />
);
const cloudyDay = (
  <ReactAnimatedWeather icon='PARTLY_CLOUDY_DAY' size={90} color='#EE9945' />
);
const windIcon = <ReactAnimatedWeather icon='WIND' size={40} color='#EE9945' />;

//App starts here:

export default function Weather(props) {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});

  //Handle function for the API's Response
  function handleResponse(response) {
    setWeatherData({
      temperature: Math.round(response.data.main.temp),
      maxTemp: Math.round(response.data.main.temp_max),
      minTemp: Math.round(response.data.main.temp_min),
      cityResponse: response.data.name,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      date: new Date(response.data.dt * 1000),
    });
    setReady(true);
  }

  //returns
  if (ready) {
    return (
      <div className='weather'>
        <div className='weather-container col-md-5 col-sm-8'>
          <div className='row'>
            <div className='col-12 mt-4 p-2'>
              <form>
                <input
                  type='text'
                  placeholder='Enter a terrestrial destination HERE'
                  className='search-bar'
                />
                <button className='small-btn'>
                  <FontAwesomeIcon icon={faSearch} size='1x' />
                </button>
                <button className='small-btn'>
                  <FontAwesomeIcon icon={faLocationArrow} size='1x' />
                </button>
              </form>
            </div>
          </div>
          <div className='row'>
            <div className='col-12'>
              <h1 className='city-title'>{weatherData.cityResponse}</h1>
            </div>
            <div className='col-12 mb-5'>
              <div className='current-date'>
                <FormattedDate date={weatherData.date} />
              </div>
              <h2 className='current-time mt-2'>
                <FormattedTime date={weatherData.date} />
              </h2>
            </div>
          </div>
          <div className='row'>
            <div className='col-6 temp-display'>
              <div className='large-icon'>{cloudyDay}</div>
              <h1 className='current-temp ml-2'>{weatherData.temperature}°</h1>
              <button className='temp-btn'>C</button>
              <button className='temp-btn'>F</button>
            </div>
            <div className='col-6 text-left'>
              <p className='description'>{weatherData.description}</p>
              <ul className='forecast'>
                <li>Humidity:{weatherData.humidity}%</li>
                <li>Wind:{weatherData.wind}Km/h</li>
              </ul>
            </div>
            <div className='col-12 m-0 p-0 list-wrapper'>
              <ul className='forecast mt-5'>
                <li>
                  <p className='temps'>
                    {" "}
                    16:00 <span className='small-icon'>{rainIcon}</span>
                    <span>
                      <FontAwesomeIcon icon={faLongArrowAltUp} size='xs' />{" "}
                      {weatherData.maxTemp}°
                    </span>
                    {""} / {""}
                    <span>
                      <FontAwesomeIcon icon={faLongArrowAltDown} size='xs' />{" "}
                      {weatherData.minTemp}°
                    </span>
                  </p>
                </li>
                <li>
                  <p className='temps'>
                    {" "}
                    19:00 <span className='small-icon'>{clearNight}</span>
                    <span>
                      <FontAwesomeIcon icon={faLongArrowAltUp} size='xs' /> 17°
                    </span>
                    {""} / {""}
                    <span>
                      <FontAwesomeIcon icon={faLongArrowAltDown} size='xs' />{" "}
                      12°
                    </span>
                  </p>
                </li>
                <li>
                  <p className='temps'>
                    {" "}
                    22:00 <span className='small-icon'>{windIcon}</span>
                    <span>
                      <FontAwesomeIcon icon={faLongArrowAltUp} size='xs' /> 15°
                    </span>
                    {""} / {""}
                    <span>
                      <FontAwesomeIcon icon={faLongArrowAltDown} size='xs' />{" "}
                      10°
                    </span>
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className='row'>
            <div className='col-12 mt-5'>
              <button className='lightBtn mt-5'>
                <FontAwesomeIcon icon={faPowerOff} size='3x' />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    //Call to the API with AXIOS
    const apiKey = "0603e85b4ce086e6bb52d7cdc7bcffb5";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric&cnt=3`;
    axios.get(apiUrl).then(handleResponse);

    //Returns
    return (
      <div className='weather'>
        <Loading />
      </div>
    );
  }
}
