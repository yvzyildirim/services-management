import React, { useState } from "react";
import logo from "../../Assets/images/logo-white.svg";
import { Link } from "react-router-dom";

export const Login = () => {
  const [error, setError] = useState(false);

  async function onSubmit(e) {
    e.preventDefault();
    let email = document.getElementById("userName").value;
    let password = document.getElementById("password").value;

    console.log("Email: " + email);
    console.log("Password: " + password);
  }

  return (
    <div className="login h-screen">
      <div className="container sm:px-10">
        <div className="block xl:grid grid-cols-2 gap-4">
          <div className="hidden xl:flex flex-col justify-center min-h-screen">
            <div className="-intro-x flex items-center pt-5">
              <img className="w-[200px]" src={logo} alt="" />
            </div>
            <div className="mt-4 ml-6">
              <div className="-intro-x text-white font-medium text-4xl leading-tight ">
                A few more clicks to
                <br />
                sign in to your account.
              </div>
              <div className="-intro-x mt-5 text-lg text-white text-opacity-70 dark:text-slate-400">
                Manage all your e-commerce accounts in one place
              </div>
            </div>
          </div>
          <div className="h-screen flex w-full">
            <form className="h-screen flex w-full" onSubmit={onSubmit}>
              <div className="my-auto mx-auto xl:ml-20 bg-white dark:bg-darkmode-600 xl:bg-transparent px-5 sm:px-8 py-8 xl:p-0 rounded-md shadow-md xl:shadow-none w-full sm:w-3/4 lg:w-2/4 xl:w-auto">
                <h2 className="intro-x font-bold text-2xl xl:text-3xl text-center xl:text-left">
                  Sign In
                </h2>
                {error && (
                  <span className="block text-danger mt-4">
                    Email or password is incorrect
                  </span>
                )}
                <div className="intro-x mt-8">
                  <input
                    id="userName"
                    type="text"
                    className="intro-x login__input form-control py-3 px-4 block"
                    placeholder="Email"
                  />
                  <input
                    id="password"
                    type="password"
                    className="intro-x login__input form-control py-3 px-4 block mt-4"
                    placeholder="Password"
                  />
                </div>
                <div className="intro-x flex text-slate-600 dark:text-slate-500 text-xs sm:text-sm mt-4">
                  <Link to="">Forgot Password?</Link>
                </div>
                <div className="flex flex-col items-center  intro-x mt-5 xl:mt-8 text-center xl:text-left">
                  <button className="btn btn-primary py-3 px-4 w-full xl: mt-3 xl:mt-0 align-top">
                    Sign In
                  </button>
                  <span className="text-sm text-gray-900 mt-4">or</span>
                  <Link to="/auth/register" className="text-blue-500 mt-4 ">
                    Create new account
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
