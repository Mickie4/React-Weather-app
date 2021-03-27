import React from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "./Planet.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPowerOff } from "@fortawesome/free-solid-svg-icons";

export default function Planet() {
  const powerBtn = <FontAwesomeIcon icon={faPowerOff} size='3x' />;
  return (
    <div className='planet'>
      <div className='planet-container col-md-4 col-sm-8'>
        <div className='row'>
          <div className='col-12'>
            <h1 className='loading-title'>LOADING</h1>
          </div>
          <div className='col-12 pt-5 loader-icon'>
            <Loader type='Circles' color='#2c1148' height={200} width={200} />
          </div>
          <div className='col-12'>
            <button className='search'>{powerBtn}</button>
          </div>
        </div>
      </div>
    </div>
  );
}
