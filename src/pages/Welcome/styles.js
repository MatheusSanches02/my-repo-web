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

export const Message = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 80%;
  justify-content: center;

  p:first-child {
    font-size: 5em;
  }
  p:last-child {
    font-size: 2em;
  }
`;
