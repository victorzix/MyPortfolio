import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
*{
  @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@100;200;300;400;500;600;700&display=swap');
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto Mono', monospace;
}
body{
  padding: 3em 8em 0 8em;
  background-color: #f5f5f5;
  
  min-height: max-content;


    @media(max-width: 500px){
    padding: 0;
    margin: 0;
}
}
`;

export default GlobalStyle;
