import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background-color: var(--color-white);
  width: 100%;
  box-sizing: border-box;
`;

export const Header = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  align-items: center;
  justify-content: flex-end;
  border: none;
  background-color: var(--color-white);
  box-sizing: border-box;
`;

export const Navigate = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  align-items: center;
  justify-content: space-around;
  border: none;
  background-color: var(--color-white);
  box-sizing: border-box;

  button {
    background-color: var(--color-white);
    width: 100%;
    height: 100px;
    border: none;
    cursor: pointer;
    font-size: 24px;
  }
  button:focus,
  button:hover {
    background: var(--gradient-primary-reverse);
  }
`;

export const LogoHeader = styled.img`
  max-height: 100%;
  width: 100px;
  height: auto;
  margin-right: 30px;
  border-radius: 50px;
`;
