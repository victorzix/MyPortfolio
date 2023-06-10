import styled from "styled-components";

const Container = styled.div`
  height: 45em;
  background-color: var(--ice-white);
  display: flex;
  align-items: center;
  padding: 0 10em;
  gap: 20em;

  .description{
    margin-bottom: 4em;
    h2{
        font-weight: 700;
        margin-bottom: .7em;
    }
    p{
        line-height: 1.5em;
        font-weight: 600;
        width: 80%;
    }
  }
`;
export default function AboutMe() {
  return (
    <Container>
      <div className="char">
        <img src="src/assets/aboutme.svg" alt="" />
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
