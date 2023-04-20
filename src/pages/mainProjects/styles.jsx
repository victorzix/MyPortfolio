import styled from "styled-components";

export const Div = styled.div`
  min-height: 90vh;
  padding: 2em;
  margin: 5em;
  display: flex;
  flex-direction: column;
  gap: 3em;

  .studying,
  .relevantProjects {
    background-color: rgba(175, 210, 245, 0.227);
    padding: 2em;
    line-height: 2em;
    h1 {
      margin-bottom: 1em;
      font-size: 2.5em;
    }

    @media (max-width: 500px) {
      padding: 1em;
      margin: 0;
      background: transparent;
      text-align: center;
      width: 100%;

      h1 {
        font-size: 1.5em;
        letter-spacing: -0.1rem;
      }
    }
  }
  .relevantProjects h1 {
    margin-bottom: 2em;
  }

  @media (max-width: 500px) {
    padding: 0;
    margin: 0;
  }
`;
