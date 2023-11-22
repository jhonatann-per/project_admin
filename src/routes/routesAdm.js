import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Context } from "../Context/AuthContext";

import Login from "../pages/Login";
import Home from "../pages/Home";
import Listar from "../pages/Listar";
import Editar from "../Components/Editar";
import Visualizar from "../Components/Visualizar";
import Cadastrar from "../Components/Cadastrar";

const RoutesAdm = () => {
  const { authenticated } = useContext(Context);

  return (
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route
        exact
        path="/home"
        element={authenticated ? <Home /> : <Navigate to="/" />}
      />
      <Route
        exact
        path="/listar"
        element={authenticated ? <Listar /> : <Navigate to="/" />}
      />
      <Route
        exact
        path="/editar/:id"
        element={authenticated ? <Editar /> : <Navigate to="/" />}
      />
      <Route
        exact
        path="/visualizar/:id"
        element={authenticated ? <Visualizar /> : <Navigate to="/" />}
      />
      <Route
        exact
        path="/cadastrar"
        element={authenticated ? <Cadastrar /> : <Navigate to="/" />}
      />
    </Routes>
  );
};

export default RoutesAdm;