import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--color-lightgrey);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const Content = styled.div`
  background-color: var(--color-white);
  box-shadow: var(--shadow-box);
  height: 80%;
  width: 55%;
  border-radius: 25px;
  padding: 30px;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.p`
  color: var(--color-primary);
  font-weight: bold;
  font-size: var(--font-size-xx-large);
  margin: 0;
  text-align: center;
`;

export const DataGrid = styled.div`
  display: flex;
  flex-direction: row;
  padding: 5px;
  border-bottom: 1px solid var(--color-grey);
  color: var(--color-mediumgrey);
  font-family: var(--font-primary);
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 15px;
  :hover {
    cursor: pointer;
    padding: 6px;
    transition: 0.2s;
  }
  p {
    width: 100%;
    color: var(--color-text);
    font-weight: bold;
    font-size: 16px;
    margin-left: 15px;
    align-self: center;
  }
  .btnDeletar {
    cursor: pointer;
    align-items: center;
    background-color: var(--color-red);
    color: var(--color-white);
    width: 40px;
    height: 22px;
    padding: 5px;
    border: none;
    border-radius: 50px;
  }
  .trashIcon {
    font-size: 12px;
  }
`;

export const Paginacao = styled.p`
  text-align: center;
  color: var(--color-text);
  font-weight: bold;
`;

export const Arrows = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  .btnPaginar {
    cursor: pointer;
    color: var(--color-red);
  }
`;
