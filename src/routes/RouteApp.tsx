import React from "react";
import { Route, Routes } from "react-router-dom";
import { Camara } from "../components/Camara";
import { Home } from "../components/Home";
import { Login } from "../components/Login";
import { Yapeado } from "../components/Yapeado";
import { Yapear } from "../components/Yapear";

export const RouteApp = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/yapear" element={<Yapear />} />
      <Route path="/home" element={<Home />} />
      <Route path="/camara" element={<Camara />} />
      <Route path="/yapeado" element={<Yapeado />} />
      <Route path="*" element={<Login />} />
    </Routes>
  );
};
