import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
  body {
    height: 100vh;
    width: auto;
    background-color: ;
  }

  @media(max-width: 400px){
    body{
        height: 100svh;
        width: auto;
    }
  }
`;

export default GlobalStyle;