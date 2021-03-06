import React, { useState } from "react";
import axios from "axios";
import "../styles/Weather.css";
import Loading from "./Loading";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationArrow, faSearch } from "@fortawesome/free-solid-svg-icons";

//App starts here:

export default function Weather(props) {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  const [city, setCity] = useState(props.defaultCity);
  const [unit, setUnit] = useState("celsius");
  const apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  //c6457dceef34bc5b29fe61bd0c8168e1, 0603e85b4ce086e6bb52d7cdc7bcffb5, 17f56a92dfdfe63b71c98d96a2a4942a, 5f472b7acba333cd8a035ea85a0d4d4c
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  //Geolocation button
  function currentLocation(response) {
    let latitude = response.coords.latitude;
    let longitude = response.coords.longitude;
    let apilGeolcationEnd = "https://api.openweathermap.org/data/2.5/weather";
    let apiUrl = `${apilGeolcationEnd}?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function getLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(currentLocation);
  }

  //Handle function for the API's Response
  function handleResponse(response) {
    setWeatherData({
      temperature: Math.round(response.data.main.temp),
      maxTemp: Math.round(response.data.main.temp_max),
      minTemp: Math.round(response.data.main.temp_min),
      cityResponse: response.data.name,
      description: response.data.weather[0].description.toUpperCase(),
      icon: response.data.weather[0].icon,
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      date: response.data.dt,
      timezone: response.data.timezone,
      coordinates: response.data.coord,
    });
    setReady(true);
  }

  //Searching the API
  function search() {
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search(city);
    //Search for a city
  }
  //Handling the city input
  function changeCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  //returns
  if (ready) {
    return (
      <div className='weather'>
        <div className='weather-container col-md-6 col-lg-5'>
          <div className='row'>
            <div className='col-md-12 col-lg-12 col-12 text-center'>
              <form className='my-3' onSubmit={handleSubmit}>
                <input
                  type='text'
                  placeholder='Enter a city'
                  className='search-bar'
                  onChange={changeCity}
                />
                <button className='small-btn'>
                  <FontAwesomeIcon icon={faSearch} size='1x' />
                </button>
                <button className='small-btn' onClick={getLocation}>
                  <FontAwesomeIcon icon={faLocationArrow} size='1x' />
                </button>
              </form>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-12'>
              <WeatherInfo data={weatherData} unit={unit} setUnit={setUnit} />
            </div>
            <div className='col-md-12 mt-5'>
              <WeatherForecast
                coordinates={weatherData.coordinates}
                unit={unit}
              />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    //Call to the API
    search();
    return (
      <div className='weather'>
        <Loading />
      </div>
    );
  }
}
