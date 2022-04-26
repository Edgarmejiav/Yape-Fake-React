import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../components/Home";
import { Login } from "../components/Login";
import { Yapear } from "../components/Yapear";

export const RouteApp = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />}>
        <Route path="Yapear" element={<Yapear />} />
        <Route path="home" element={<Home />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};
