import React from "react";
import { Routes, Route } from "react-router-dom";

import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";

const RoutesAdm = () =>{
    return(
        <Routes>
            <Route path="/" Component={Login} />
            <Route path="/dashboard" Component={Dashboard} />
        </Routes>
    )
}

export default RoutesAdm;