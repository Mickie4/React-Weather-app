import React from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "./Loading.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPowerOff,
  faLocationArrow,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

export default function Loading() {
  return (
    <div className='loading'>
      <div className='loading-container col-md-4 col-sm-8'>
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
        <div className='row loader-icon text-center'>
          <div className='col-12'>
            <Loader type='Circles' color='#33ee21' height={150} width={150} />
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
}
