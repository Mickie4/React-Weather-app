import React from "react";
import "./Weather.css";
import sunny from "./media/weather-icon.png";

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
          <div className='col-12'>
            <img src={sunny} alt='weather icon' className='img-fluid' />
          </div>
          <div className='col-12'>
            <h1>22C</h1>
          </div>
        </div>
        <div className='col-12'>
          <ul className='text-center'>
            <li>
              FRI{" "}
              <img
                src={sunny}
                alt='weather-icon'
                className='small-icon img-fluid'
              />{" "}
            </li>
          </ul>
          <span></span>
        </div>
      </div>
    </div>
  );
}
