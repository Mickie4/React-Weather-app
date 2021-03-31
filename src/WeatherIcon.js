import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherIcon(props) {
  const codeMapping = {
    "01d": "CLEAR_DAY",
    "02d": "PARTLY_CLOUDY_DAY",
    "03d": "CLOUDY",
    "04d": "CLOUDY",
    "09d": "RAIN",
    "10d": "RAIN",
    "11d": "SLEET",
    "13d": "SNOW",
    "50d": "FOG",
    "01n": "CLEAR_DAY",
    "02n": "PARTLY_CLOUDY_DAY",
    "03n": "CLOUDY",
    "04n": "CLOUDY",
    "09n": "RAIN",
    "10n": "RAIN",
    "11n": "SLEET",
    "13n": "SNOW",
    "50n": "FOG",
  };
  return (
    <ReactAnimatedWeather
      icon={codeMapping[props.code]}
      color='#EE9945'
      size={props.size}
    />
  );
}
