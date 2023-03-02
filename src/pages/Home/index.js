import React from "react";
import { Container, DivHeader } from "./styles.js";

//components
import HeaderMenu from "../../components/HeaderMenu/index.js";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <Container>
      <DivHeader>
        <HeaderMenu></HeaderMenu>
        <Outlet />
      </DivHeader>
    </Container>
  );
};

export default Home;
