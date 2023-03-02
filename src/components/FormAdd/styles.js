import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--color-lightgrey);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  form {
    background-color: var(--color-white);
    box-shadow: var(--shadow-box);
    background-color: var(--color-white);
    height: 80%;
    width: 55%;
    border-radius: 25px;
    padding: 30px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
  p {
    color: var(--color-primary);
    font-weight: bold;
    font-size: var(--font-size-xx-large);
    margin: 0;
    text-align: center;
  }
`;

export const CreateForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  label {
    font-size: var(--font-size-small);
    color: var(--color-black);
    display: flex;
    flex-direction: column;
    margin-bottom: 5%;
  }
`;

export const InputText = styled.input`
  padding: 2%;
  padding-left: 2%;
  padding-top: 3%;
  border: 0;
  border-bottom: 3px solid var(--color-details);
  border-radius: 3px;
  color: var(--color-black);
  font-family: var(--font-primary);
  &:focus {
    outline: none;
  }
  &:hover {
    cursor: pointer;
  }
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  button {
    width: 100%;
    margin: 10px;
    padding: 15px 30px;
    text-align: center;
    text-transform: uppercase;
    transition: 0.5s;
    background-size: 200% auto;
    color: white;
    border-radius: 10px;
    border: none;
    background-image: linear-gradient(
      45deg,
      #00544d 0%,
      #30978f 51%,
      #30978f 100%
    );
    cursor: pointer;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
  }
  button:hover {
    background-position: right center;
    color: #fff;
    text-decoration: none;
  }
  button:active {
    transform: scale(0.95);
  }
`;
