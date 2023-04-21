import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
*{
  @font-face {
    font-family: 'Montserrat';
    src: url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap');
  }
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
