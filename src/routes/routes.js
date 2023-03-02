import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import Home from "../pages/Home/index";
import Repositories from "../pages/Repositories/index";
import Welcome from "../pages/Welcome";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/" element={<Welcome />}></Route>
          <Route path="/repositories" element={<Repositories />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
