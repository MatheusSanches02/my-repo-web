import React, { useState } from "react";
import { Container, Content, DataGrid, IconHeart } from "./styles.js";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import Requests from "../../services/requests.js";
import toast, { Toaster } from "react-hot-toast";
import { isDisabled } from "@testing-library/user-event/dist/utils/index.js";

const RepoInfo = () => {
  const selectedRepositoryJson = sessionStorage.getItem("elemento");

  const selectedRepository = JSON.parse(selectedRepositoryJson);

  const date = new Date(selectedRepository.lastUpdate);

  const lastUpdateDate = date.toLocaleDateString("pt-BR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const handleCreate = () => {
    Requests.addFavorite(selectedRepository.id).then((res) => {
      if (res.id) {
        console.log(res.id);
      }
    });
  };

  const [favorite, setFavorite] = useState(false);
  return (
    <Container>
      <Toaster />
      <Content>
        <DataGrid>
          <IconHeart
            onClick={() => {
              handleCreate();
              setFavorite(!favorite);
            }}
          >
            {favorite ? (
              <AiFillHeart size={24} />
            ) : (
              <AiOutlineHeart size={24} />
            )}
          </IconHeart>
          <p>
            <b>Nome:</b> {selectedRepository.name}
          </p>
          <p>
            <b>Descrição:</b> {selectedRepository.description}
          </p>
          <p>
            <b>Linguagem:</b> {selectedRepository.language}
          </p>
          <p>
            <b>Última atualização:</b> {lastUpdateDate}
          </p>
          <p>
            <b>Dono do repositório:</b> {selectedRepository.repositorieOwner}
          </p>
        </DataGrid>
      </Content>
    </Container>
  );
};

export default RepoInfo;
