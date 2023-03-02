import React from "react";
import { Container } from "./styles.js";

import RepositoriesList from "../../components/RepositoriesList";

const Repositories = () => {
  return (
    <Container>
      <RepositoriesList></RepositoriesList>
    </Container>
  );
};

export default Repositories;
