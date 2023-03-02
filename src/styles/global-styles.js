//inserir estilos que serão usados na aplicação inteira
import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body {
    background-color: var(--color-white);
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }
`;
