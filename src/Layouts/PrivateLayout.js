import React, { useEffect, useState } from "react";
import { Header } from "../Components/header";
import { Outlet, useNavigate } from "react-router-dom";
import { API_URL } from "../Api/ApiUrls";

export const Authorization = React.createContext([]);
export const WorkSpaceData = React.createContext([]);
export const Loading = React.createContext([]);

export const PrivateLayout = () => {
  const [access, setAccess] = useState(localStorage.getItem("accessToken"));
  const auth = { access, setAccess };
  const [workSpace, setWorkspace] = useState([]);
  const [loading, setLoading] = useState(false);
  const refresh = { loading, setLoading };

  return (
    <Authorization.Provider value={auth}>
      <WorkSpaceData.Provider value={workSpace}>
        <Loading.Provider value={refresh}>
          <div className="mobile-menu md:hidden">...</div>
          <Header />
          <div className="rounded-tl-[60px] m-0 p-0 bg-gray-100 overflow-auto h-[calc(100vh-4rem)]">
            <div className=" flex flex-col flex-1 min-h-full">
              <main className="flex-1 ">
                <Outlet />
              </main>
            </div>
          </div>
        </Loading.Provider>
      </WorkSpaceData.Provider>
    </Authorization.Provider>
  );
};
