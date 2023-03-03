import React, { useState, useEffect } from "react";
import { Container, Content, DataGrid, Paginacao, Arrows } from "./styles.js";

import Requests from "../../services/requests.js";

import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const FavoritesList = () => {
  const [page, setPage] = useState(0);
  const [favorites, setFavorites] = useState([]);
  const [favoritesPage, setFavoritesPage] = useState([]);
  const limit = 7;

  useEffect(() => {
    loadContent();
  }, []);

  const handlePageAble = (button) => {
    switch (button) {
      case "left":
        if (page === 0) {
          return false;
        } else {
          return true;
        }
      case "right":
        if (page < favorites.length / limit - 1) {
          return true;
        } else {
          return false;
        }

      default:
        break;
    }
  };

  const loadContent = () => {
    Requests.getFavorites()
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
          setFavorites(content);
          setFavoritesPage(startContent);
        }
      })
      .catch((res, err) => {
        console.log(res, err);
      });
  };

  return (
    <Container>
      <Content>
        {favoritesPage.map((element, i) => {
          return (
            <DataGrid>
              <p>{element.name}</p>
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
              favorites.length}
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
    </Container>
  );
};

export default FavoritesList;
