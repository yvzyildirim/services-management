import React, { useEffect, useState } from "react";
import logo from "../../Assets/images/logo-white.svg";
import { Link, useNavigate } from "react-router-dom";
import { API_URL } from "../../Api/ApiUrls";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

export const Register = () => {
  const [error, setError] = useState();
  const navigate = useNavigate();

  const [password, setPassword] = useState();
  const [meterUpper, setMeterUpper] = useState();
  const [meterNumeric, setMeterNumeric] = useState();
  const passwordInput = document.getElementById("password");
  const [showPass, setShowPass] = useState(false);

  function onSubmit(e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const surName = document.getElementById("surName").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    console.log("Name :" + name);
    console.log("Surname :" + surName);
    console.log("Email :" + email);
    console.log("Password :" + password);
  }

  function onChange() {
    const passVal = document.getElementById("password").value;

    setPassword(passVal);
  }

  function showPassword(e) {
    e.preventDefault();
    setShowPass(!showPass);
    console.log(showPass);
  }

  useEffect(() => {
    setMeterUpper(
      () => password?.length - password?.replace(/[A-Z]/g, "").length
    );
    setMeterNumeric(
      () => password?.length - password?.replace(/[1-9]/g, "").length
    );
  }, [password]);

  return (
    <div className="login h-screen">
      <div className="container sm:px-10">
        <div className="block xl:grid grid-cols-2 gap-4">
          <div className="hidden xl:flex flex-col justify-center min-h-screen">
            <div className="-intro-x flex items-center pt-5">
              <img className="w-[200px]" src={logo} alt="logo" />
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
                  Register
                </h2>
                {error && (
                  <span className="block text-danger mt-4">{error}</span>
                )}
                <div className="intro-x mt-8">
                  <input
                    id="name"
                    type="text"
                    className="intro-x login__input form-control py-3 px-4 block"
                    placeholder="Name"
                  />
                  <input
                    id="surName"
                    type="text"
                    className="intro-x login__input form-control py-3 px-4 block mt-4"
                    placeholder="Last Name"
                  />
                  <input
                    id="email"
                    type="text"
                    className="intro-x login__input form-control py-3 px-4 block mt-4"
                    placeholder="Email"
                  />
                  <div className="flex justify-between items-stretch mt-4">
                    <input
                      id="password"
                      onChange={onChange}
                      type={showPass ? "text" : "password"}
                      className="intro-x login__input form-control py-3 px-4 block rounded-r-none "
                      placeholder="Create Password"
                      autoComplete="new-password"
                    />
                    <button
                      onClick={showPassword}
                      className="border border-l-0 rounded-r-md w-12 flex justify-center items-center "
                    >
                      {showPass ? (
                        <AiFillEye className="text-xl text-gray-400" />
                      ) : (
                        <AiFillEyeInvisible className="text-xl text-gray-400" />
                      )}
                    </button>
                  </div>
                  <div className="w-full grid grid-cols-3 mt-4  ">
                    <span
                      className={
                        meterUpper > 0
                          ? "border-green-700 text-green-700 border-t-4 pt-2 text-center"
                          : "text-gray-500 border-t-4 pt-2 text-center"
                      }
                    >
                      Use uppercase
                    </span>
                    <span
                      className={
                        meterNumeric > 0
                          ? "border-green-700 text-green-700 border-t-4 pt-2 text-center"
                          : "text-gray-500 border-t-4 pt-2 text-center"
                      }
                    >
                      Use numeric
                    </span>
                    <span
                      className={
                        password?.length > 6
                          ? "border-green-700 text-green-700 border-t-4 pt-2 text-center"
                          : "text-gray-500 border-t-4 pt-2 text-center "
                      }
                    >
                      Min 6 character
                    </span>
                  </div>
                </div>
                <div className="flex flex-col items-center  intro-x mt-5 xl:mt-8 text-center xl:text-left">
                  <button
                    disabled={
                      meterUpper > 0 && meterNumeric > 0 && password?.length > 6
                        ? false
                        : true
                    }
                    className="btn btn-primary py-3 px-4 w-full xl: mt-3 xl:mt-0 align-top"
                  >
                    Create Account
                  </button>
                  <span className="text-sm text-gray-900 mt-4">or</span>
                  <Link to="/auth/login" className="text-blue-500 mt-4 ">
                    I already have an account
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
