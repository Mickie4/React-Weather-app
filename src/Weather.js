import React from "react";
import "./Weather.css";
import sunny from "./media/weather-icon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBullseye,
  faCoffee,
  faLocationArrow,
  faPowerOff,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
const powerBtn = <FontAwesomeIcon icon={faPowerOff} size='3x' />;
const locationBtn = <FontAwesomeIcon icon={faLocationArrow} size='lg' />;
const searchBtn = <FontAwesomeIcon icon={faSearch} size='lg' />;

export default function Weather() {
  return (
    <div className='weather'>
      <div className='weather-container col-4'>
        <div className='row'>
          <div className='col-12'>
            <h1 className='city-title'>BERLIN</h1>
          </div>
          <div className='col-12'>
            <h2 className='current-time'>11:00 AM</h2>
            <p className='current-date'>Thu 25 Mar</p>
          </div>
        </div>
        <div className='row'>
          <div className='col-12 temp-display'>
            <img
              src={sunny}
              alt='weather icon'
              className='img-fluid large-icon'
            />
            <h1 className='current-temp ml-2'>22°</h1>
            <button className='temp-btn'>C</button>
            <button className='temp-btn'>F</button>
          </div>
        </div>
        <div className='col-12 m-0 p-0'>
          <ul className='forecast mt-5'>
            <li>
              FRI{" "}
              <img
                src={sunny}
                alt='weather-icon'
                className='small-icon img-fluid'
              />{" "}
              <p className='temps'>23C | 12C</p>
            </li>
            <li>
              FRI{" "}
              <img
                src={sunny}
                alt='weather-icon'
                className='small-icon img-fluid'
              />{" "}
              <p className='temps'>23C / 12C</p>
            </li>
            <li>
              FRI{" "}
              <img
                src={sunny}
                alt='weather-icon'
                className='small-icon img-fluid'
              />{" "}
              <p className='temps'>23C / 12C</p>
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
}
