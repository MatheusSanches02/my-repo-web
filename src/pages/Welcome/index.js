import React from "react";
import { Container, Message } from "./styles.js";

const Welcome = () => {
  return (
    <Container>
      <Message>
        <p>Bem Vindo(a)!</p>
        <p>Projeto MyRepo por Matheus Sanches Barreiros</p>
      </Message>
    </Container>
  );
};

export default Welcome;
