import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Context } from "../Context/AuthContext";

import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";

const RoutesAdm = () => {
  const { authenticated } = useContext(Context);

  return (
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route
        exact
        path="/dashboard"
        element={authenticated ? <Dashboard /> : <Navigate to="/" />}
      />
    </Routes>
  );
};

export default RoutesAdm;