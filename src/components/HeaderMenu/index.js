import React from "react";
import { useNavigate } from "react-router-dom";

import { Container, Header, LogoHeader, Navigate } from "./styles";
import ProfilePicture from "../../assets/logo-perfil.jpg";

const HeaderMenu = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Header>
        <Navigate>
          <button
            onClick={() => {
              navigate("/create");
            }}
          >
            Adicionar
          </button>
          <button
            onClick={() => {
              navigate("/repositories");
            }}
          >
            Repositórios
          </button>
          <button
            onClick={() => {
              navigate("/favorites");
            }}
          >
            Favoritos
          </button>
        </Navigate>

        <LogoHeader src={ProfilePicture} />
      </Header>
    </Container>
  );
};
export default HeaderMenu;
