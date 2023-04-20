import styled from "styled-components";

export const Main = styled.main`
  margin: 5em;
  padding: 2em;
  line-height: 2em;
  display: flex;
  flex-direction: column;
  gap: 3em;

  .knowledges,
  .aboutMe {
    padding: 2em;
    background-color: rgba(175, 210, 245, 0.227);

    @media(max-width: 500px){
      background-color: transparent;
      text-align: center;
      padding: 1em;
    }
  }
  h1,
  h2 {
    margin-bottom: 1em;
    font-size: 2.5em;

    @media(max-width: 500px){
      font-size: 1.8em;
    }
  }
  .knowledges h2{
    margin-bottom: 2em;
  }

  .technologies {
    
    display: flex;
    justify-content: space-evenly;
    gap: 2em;

    @media(max-width: 500px){
      display: grid;
      grid-template-columns: 2fr 2fr;
    }

    div {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      text-align: center;
      flex: 1;
      height: 80%;
      gap: 1.5em;

      span{
        font-size: 4em;
      }

      p{
        font-size: 1em;
        text-align: center;
      }

      @media(max-width: 500px){
      span{
        font-size: 4em;
      }
    }
    }

    

  }

  @media(max-width: 500px){
    padding: 0;
    margin: 0;
  }
`;
export const Div = styled.div`
  min-height: 90vh;

  @media(max-width: 500px){
    min-height: 100svh;
    margin-bottom: 5em;
  }
`;
