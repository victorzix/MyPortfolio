import styled from "styled-components";

export const Div = styled.div`
  padding: 2em;
  margin: 5em;
  display: flex;
  flex-direction: column;
  gap: 3em;
  min-height: 80vh;

  h1{
    text-align: center;
  }

  @media screen and(max-width: 500){
    margin: 0;
    padding: 0;
  }
`;

export const ProjectInfo = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  color: black;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: all 500ms ease-in-out;

`;

export const ProjectWrapper = styled.div`
  background-color: rgba(175, 210, 245, 0.227);
  padding: 2em;
  line-height: 2em;
  display: flex;
  flex-direction: column;
  gap: 4em;

  @media(max-width: 500px){
     padding: 0;
     background: transparent;
     display: flex;
     flex-direction: column;
     gap: 2em;
    }
`;
export const Project = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  text-align: center;

  @media(max-width: 500px){
     display: flex;
     flex-direction: column;
     width: 100%;
     justify-content: center;
     align-items: center;
    
    }

  h2 {
    margin-bottom: 1em;
    font-size: 1.5em;
  }
  .description{
    width: 22em;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

  }

  .projectContent {
    position: relative;
    img {
      border-radius: 1em;
      width: 25em;
      transition: all 500ms ease-in-out;
    }
    &:hover {
      ${ProjectInfo} {
        opacity: 1;
      }
      img {
        filter: blur(8px);
        opacity: 0.6;
      }
    }

    @media(max-width: 500px){
     img{
      width: 20em;
     }

     &:hover{
      ${ProjectInfo}{
        opacity: 0;
      }
      img{
        filter: none;
        opacity: 1;
      }
     }
    }
  }
`;
