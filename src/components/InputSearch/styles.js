import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--color-white);
  border: 1px solid var(--color-text);
  border-radius: 50px;
  flex-direction: row;
  display: flex;
  width: 50%;
  padding: 2px;
  overflow: hidden;
  height: 35px;
  align-items: center;

  input {
    padding: 20px;
    font-family: var(--font-primary);
    width: 75%;
    border-width: 0;
    align-items: center;
  }
  input:focus {
    outline: none;
  }
`;

export const BtnIcon = styled.div`
  background-color: var(--color-primary);
  color: var(--color-white);
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: fit-content;
  padding: 10px;
  width: fit-content;
  margin-right: 0px;
  margin-left: auto;

  :hover {
    cursor: pointer;
  }

  .icon-search {
    width: 100%;
    height: 100%;
  }
`;
