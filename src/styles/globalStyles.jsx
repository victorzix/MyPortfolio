import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Montserrat';

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
