import React from "react";
import { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import {
  Container,
  Content,
  DataGrid,
  Title,
  Paginacao,
  Arrows,
  PopUp,
  PopUpBotoes,
  DeleteAll,
} from "./styles.js";

import Requests from "../../services/requests.js";

import { FaTrashAlt } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const RepositoriesList = () => {
  const [page, setPage] = useState(0);
  const [repositories, setRepositories] = useState([]);
  const [repositoriesPage, setRepositoriesPage] = useState([]);
  const limit = 7;

  useEffect(() => {
    loadContent();
  }, [repositories, setRepositories, repositoriesPage, setRepositoriesPage]);

  const handlePageAble = (button) => {
    switch (button) {
      case "left":
        if (page === 0) {
          return false;
        } else {
          return true;
        }
      case "right":
        if (page < repositories.length / limit - 1) {
          return true;
        } else {
          return false;
        }

      default:
        break;
    }
  };

  const handleDelete = (item) => {
    Requests.deleteReposId(item.id)
      .then((res) => {
        console.log(res);
        if (res) {
          toast.success("Repositório excluido com sucesso!");
          loadContent();
        } else {
          toast.error("Não foi possível excluir o repositório");
        }
      })
      .catch((err) => {
        toast.error("2 Não foi possível excluir o repositório");
      });
  };

  const handleDeleteAll = () => {
    Requests.deleteRepos()
      .then((res) => {
        console.log(res);
        if (res) {
          toast.success("Repositórios excluidos com sucesso!");
          loadContent();
        } else {
          toast.error("Não foi possível excluir o repositório");
        }
      })
      .catch((err) => {
        toast.error("2 Não foi possível excluir o repositório");
      });
  };

  const loadContent = () => {
    Requests.getRepos()
      .then((res) => {
        if (res) {
          let content = res.sort((a, b) => {
            return a.name.localeCompare(b.name);
          });
          let startContent = [];
          for (let i = limit * page; i < limit * page + limit; i++) {
            if (content[i]) {
              startContent.push(content[i]);
            }
          }
          setRepositories(content);
          setRepositoriesPage(startContent);
        }
      })
      .catch((res, err) => {
        console.log(res, err);
      });
  };

  return (
    <Container>
      <Toaster />
      <Content>
        <Title>Pesquise o repositório</Title>

        {repositoriesPage.map((element, i) => {
          return (
            <DataGrid>
              <p>{element.name}</p>

              <button
                onClick={() => handleDelete(element)}
                className="btnDeletar"
              >
                <FaTrashAlt className="trashIcon" />
              </button>
            </DataGrid>
          );
        })}

        <Arrows>
          {handlePageAble("left") ? (
            <FiChevronLeft
              className="btnPaginar"
              onClick={() => {
                setTimeout(() => {
                  setPage(page - 1);
                }, 200);
              }}
            />
          ) : (
            <FiChevronLeft />
          )}

          <Paginacao>
            {limit * page +
              1 +
              "-" +
              (limit * page + limit) +
              " de " +
              repositories.length}
          </Paginacao>

          {handlePageAble("right") ? (
            <FiChevronRight
              className="btnPaginar"
              onClick={() => {
                setTimeout(() => {
                  setPage(page + 1);
                }, 200);
              }}
            />
          ) : (
            <FiChevronRight />
          )}
        </Arrows>
      </Content>

      <DeleteAll
        onClick={() => {
          handleDeleteAll();
        }}
      >
        Excluir todos os repositórios
      </DeleteAll>
    </Container>
  );
};

export default RepositoriesList;
