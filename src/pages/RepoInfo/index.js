import React, { useState } from "react";
import {
  Container,
  Content,
  DataGrid,
  IconHeart,
  Trash,
  Icons,
} from "./styles.js";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import Requests from "../../services/requests.js";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";

const RepoInfo = () => {
  const navigate = useNavigate();
  const selectedRepositoryJson = sessionStorage.getItem("elemento");

  const selectedRepository = JSON.parse(selectedRepositoryJson);

  const date = new Date(selectedRepository.lastUpdate);

  const lastUpdateDate = date.toLocaleDateString("pt-BR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const handleCreate = () => {
    Requests.addFavorite(selectedRepository).then((res) => {
      if (res) {
        toast.success("Repositório favoritado com sucesso!");
      } else {
        toast.error("Não foi possível favoritar o repositório");
      }
    });
  };

  const handleDelete = (item) => {
    Requests.deleteReposId(item.id)
      .then((res) => {
        if (res) {
          toast.success("Repositório excluido com sucesso!");
          setTimeout(() => {
            navigate("/repositories");
          }, 1000);
        } else {
          toast.error("Não foi possível excluir o repositório");
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error("2 Não foi possível excluir o repositório");
      });
  };

  const [favorite, setFavorite] = useState(false);
  return (
    <Container>
      <Toaster />
      <Content>
        <DataGrid>
          <Icons>
            <Trash onClick={() => handleDelete(selectedRepository)}>
              <FaTrashAlt size={24} />
            </Trash>
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
          </Icons>
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
