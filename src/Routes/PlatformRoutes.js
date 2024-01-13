import React, { useState } from "react";
import { Dashboard } from "../Pages/Dashboard";
import { Projects } from "../Pages/Projects/Projects";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "../Pages/Auth/Login";
import { WorkSpaceCreate } from "../Components/Screen/dashboard/workspace-create-modal/WorkSpaceCreate";
import { Register } from "../Pages/Auth/Register";
import { GuestLayout } from "../Layouts/GuestLayout";
import { PrivateLayout } from "../Layouts/PrivateLayout";
import { Loading } from "../Components/Loading";
import { ProductOverview } from "../Pages/Projects/Pages/ProductOverview";
import { ProductSecurity } from "../Pages/Projects/Pages/ProductSecurity";
import { ProductBestPractices } from "../Pages/Projects/Pages/ProductBestPractices";

export const LoadingContex = React.createContext();

export const PlatformRoutes = (callback, deps) => {
  const [load, setLoad] = useState(false);
  const loading = { load, setLoad };

  return (
    <LoadingContex.Provider value={loading}>
      {load && <Loading />}
      <Router>
        <Routes>
          <Route path="/auth" element={<GuestLayout />}>
            <Route path="/auth/login" element={<Login />} />
            <Route path="/auth/register" element={<Register />} />
          </Route>
          <Route path="/" element={<PrivateLayout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/workspace-create" element={<WorkSpaceCreate />} />
            <Route path="/project" element={<Projects />}>
              <Route path="/project/dashboard" element={<ProductOverview />} />
              <Route
                path="/project/security-issues"
                element={<ProductSecurity />}
              />
              <Route
                path="/project/best-practices"
                element={<ProductBestPractices />}
              />
            </Route>
          </Route>
        </Routes>
      </Router>
    </LoadingContex.Provider>
  );
};
