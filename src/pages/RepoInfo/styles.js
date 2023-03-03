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

export const DataGrid = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;
  font-family: var(--font-primary);
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 15px;

  p {
    width: 100%;
    font-size: 20px;
    margin-left: 15px;
    align-self: center;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    border-bottom: 1px solid var(--color-grey);
  }
`;

export const IconHeart = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  :hover {
    cursor: pointer;
  }
`;

export const Trash = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  :hover {
    cursor: pointer;
  }
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
