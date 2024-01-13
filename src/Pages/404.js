import React, {useEffect} from "react";
import errorImage from '../Assets/images/error-illustration.svg'
import {Link} from "react-router-dom";

export const NotFound = () =>{

  return(
    <div className="h-[calc(100vh-70px)] flex items-center justify-center  ">
      <div
        className="error-page flex flex-col lg:flex-row items-center justify-center  text-center lg:text-left">
        <div className=" mt-10 lg:mt-0">
          <div className="intro-x text-8xl font-medium">404</div>
          <div className="intro-x text-xl lg:text-3xl font-medium mt-5">Oops. This page has gone missing.</div>
          <div className="intro-x text-lg mt-3">You may have mistyped the address or the page may have moved.</div>
          <Link to="/"
            className="intro-x btn btn-primary mt-4 py-3 px-4">
            Back
            to Home
          </Link>
        </div>
      </div>
    </div>
  )
}