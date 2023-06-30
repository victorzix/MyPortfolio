import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  background-color: var(--ice-white);
  display: flex;
  align-items: center;
  padding: 0 10em;
  gap: 20em;

  .description {
    margin-bottom: 4em;
    h2 {
      font-weight: 700;
      font-size: 2em;
      margin-bottom: 0.7em;
      letter-spacing: 0.4em;
    }
    p {
      line-height: 2em;
      font-weight: 600;
      font-size: 1.2em;
      width: 80%;
    }
  }
  /* Large */
  @media (max-width: 1500px) {
    padding: 0 4em;
    justify-content: space-between;
    gap: 4em;
    align-items: center;

    p {
      width: 100%;
    }
  }

  /* Medium */
  @media (max-width: 1280px) {
    padding: 0 2em;
    gap: 6em;

    .description {
      h2 {
        font-size: 1.5em;
      }
      p {
        font-size: 1em;
      }
    }
  }

  @media (max-width: 840px) {
  height: 100vh;
  background-color: var(--ice-white);
  display: flex;
  align-items: center;
  justify-content: center;

  .char{
    display: none;
  }

  .description {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 4em;
    text-align: center;
    width: 100%;
    h2 {
      font-weight: 900;
      font-size: 2.5em;
      margin-bottom: 0.7em;
      letter-spacing: 0.2em;
    }
    p {
      line-height: 2em;
      font-weight: 600;
      font-size: 1.4em;
    }
  }
  }
  /* Small */
  @media (max-width: 640px) {
  }
`;
export default function AboutMe() {
  return (
    <Container id="about">
      <div className="char">
        <img src="/assets/aboutme.svg" alt="" />
      </div>
      <div className="description">
        <h2>SOBRE MIM</h2>
        <p>
          Eu sou o Victor, tenho 21 anos e sou um desenvolvedor Frontend.
          Graduando em Análise e Desenvolvimento de Sistemas desde fevereiro de
          2023, estou em constante evolução e a procura de novos desafios.
        </p>
      </div>
    </Container>
  );
}
