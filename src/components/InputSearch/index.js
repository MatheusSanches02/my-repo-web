import React, { useEffect } from "react";
import { BtnIcon, Container } from "./styles.js";
import { BsSearch } from "react-icons/bs";

const InputSearch = ({
  search,
  setSearch,
  placeholder = "pesquisa...",
  handleSearch,
}) => {
  useEffect(() => {
    handleSearch();
  }, [search]);

  return (
    <Container>
      <input
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSearch();
            e.preventDefault();
            return false;
          }
        }}
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          handleSearch();
        }}
        type="text"
        placeholder={placeholder}
      ></input>
      <BtnIcon
        onClick={() => {
          handleSearch();
        }}
      >
        <BsSearch className="icon-search"></BsSearch>
      </BtnIcon>
    </Container>
  );
};

export default InputSearch;
