import React from "react";
import { Container } from "./styles.js";

import FavoritesList from "../../components/FavoritesList/index.js";

const Favorites = () => {
  return (
    <Container>
      <FavoritesList></FavoritesList>
    </Container>
  );
};

export default Favorites;
