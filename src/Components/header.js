import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { WorkflowSwitch } from "./WorkflowSwitch";
import logo from "../Assets/images/scologo.svg";
import { RiDashboardLine } from "react-icons/ri";
import { FaProjectDiagram } from "react-icons/fa";
import { MdSearch } from "react-icons/md";
import { WorkSpaceData } from "../Layouts/PrivateLayout";

export const Header = () => {
  const navigate = useNavigate();
  const workSpace = useContext(WorkSpaceData);
  function handleLogout() {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("email");
    navigate("/auth/login");
  }
  return (
    <header className=" flex justify-between items-stretch bg-transparent h-16 ">
      <div className="flex items-stretch h-full">
        <div className="pl-4 pr-8 flex justify-center items-center border-r border-white/20 ">
          <img className="h-8" src={logo} alt="logo" />
        </div>
        <div id="platform-nav" className=" flex items-center">
          <WorkflowSwitch workspace={workSpace} project="PMonitoring api" />
          <Link
            className="text-white text-md px-4 flex items-center h-full"
            to="/ "
          >
            <RiDashboardLine className="mr-2 text-xl" />
            Dashboard
          </Link>
          <Link
            className="text-white text-md px-4 flex items-center h-full"
            to="/project/dashboard "
          >
            <FaProjectDiagram className="mr-2 text-xl" />
            Projects
          </Link>
        </div>
      </div>
      <div className="flex justify-end items-center pr-6">
        <div className="search hidden sm:block ">
          <input
            type="text"
            className="text-white search__input form-control border-transparent "
            placeholder="Search..."
          />
          <MdSearch className="search__icon " />
        </div>
        <button onClick={handleLogout} className="ml-6 btn btn-warning-soft">
          Logout
        </button>
      </div>
    </header>
  );
};
