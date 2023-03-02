import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import Home from "../pages/Home/index";
import Repositories from "../pages/Repositories/index";
import Welcome from "../pages/Welcome";
import CreateRepo from "../pages/CreateRepo";
import RepoInfo from "../pages/RepoInfo";
import Favorites from "../pages/Favorites";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/" element={<Welcome />}></Route>
          <Route path="/repositories" element={<Repositories />} />
          <Route path="/create" element={<CreateRepo />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/details" element={<RepoInfo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
