import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  const apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  //c6457dceef34bc5b29fe61bd0c8168e1, 0603e85b4ce086e6bb52d7cdc7bcffb5, 17f56a92dfdfe63b71c98d96a2a4942a, 5f472b7acba333cd8a035ea85a0d4d4c
  let lon = props.coordinates.lon;
  let lat = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

  function handleResponse(response) {
    setForecast(response.data);
    setLoaded(true);
  }
  if (loaded && forecast.lat === lat && forecast.lon === lon) {
    return (
      <div className='weatherForecast row'>
        {forecast.daily.map(function (dailyForecast, index) {
          if (index < 6) {
            return (
              <div className='col forecast' key={index}>
                <WeatherForecastDay data={dailyForecast} />
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    );
  } else {
    axios.get(apiUrl).then(handleResponse);
    return "Loading";
  }
}
