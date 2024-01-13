import React from "react";
import {Outlet} from "react-router-dom";

export const GuestLayout =() =>{
  return(
    <>
      <main className="auth">
        <div>
          <Outlet/>
        </div>
      </main>
    </>
  )
}