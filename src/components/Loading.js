import React from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "../styles/Loading.css";

export default function Loading() {
  return (
    <div className='loading'>
      <div className='loading-container col-md-4 col-sm-8'>
        <div className='row loader-icon text-center'>
          <div className='col-12'>
            <Loader type='Circles' color='#33ee21' height={150} width={150} />
          </div>
        </div>
        <div className='row'>
          <div className='col-12 mt-5'>
            <h1 className='loading-text'>LOADING...</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
