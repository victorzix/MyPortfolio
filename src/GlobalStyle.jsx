import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;

    ::-webkit-scrollbar{
      width: .6em;
    }

    ::-webkit-scrollbar-track{
      background-color: var(--dark-blue);
    }

    ::-webkit-scrollbar-thumb{
     background-color: var(--ice-white);
     border-radius: 2em;
     border: .20em solid var(--dark-blue);

     &:hover{
      background-color: var(--txt-yellow);
     }
    }

    ::-webkit-scrollbar-thumb:hover{
      

    }

    
}
  body {
    height: 100vh;
    width: auto;
  }

  @media(max-width: 400px){
    body{
        height: 100svh;
        width: auto;
    }
  }
`;

export default GlobalStyle;