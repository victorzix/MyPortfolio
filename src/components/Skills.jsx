import styled from "styled-components";
import { FaReact, FaJs, FaNodeJs } from "react-icons/fa";

const Container = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;
  padding: 10em 0;
  align-items: center;
  height: 55em;
  background-color: var(--dark-blue);
  color: var(--ice-white);
  gap: 8em;

  h1 {
    color: var(--txt-yellow);
  }
`;

const SkillWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 10em;

  .skillContent {
    height: 18em;
    width: 16em;
    border-radius: 1em;
    background-color: var(--ice-white);
    display: flex;
    align-items: center;
    padding: 3em 2em;
    flex-direction: column;
    gap: 0.7em;

    .description {
      color: var(--dark-blue);
      display: flex;
      flex-direction: column;
      text-align: center;
      gap: 0.5em;

      p {
        line-height: 1.6em;
      }
    }
  }

  .react {
    .icon {
      color: #00d8ff;
      font-size: 2.5em;
    }
  }
  .javascript {
    .icon {
      color: #f7df1e;
      border: 0;
      font-size: 2.5em;
    }
  }
  .node {
    .icon {
      color: #83cd29;
      font-size: 2.5em;
    }
  }
  .styledComponents {
    .icon {
      font-size: 2.5em;
    }
  }
`;
export default function Skills() {
  return (
    <Container>
      <h1>TECNOLOGIAS E CONHECIMENTOS</h1>
      <SkillWrapper>
        <div className="skillContent react">
          <div className="icon">
            <FaReact />
          </div>
          <div className="description">
            <h3>React.js</h3>
            <p>Biblioteca usada para construir interface de usuário (UI)</p>
          </div>
        </div>
        <div className="skillContent javascript">
          <div className="icon">
            <FaJs />
          </div>
          <div className="description">
            <h3>JavaScript</h3>
            <p>
              Uma das linguagens de programação mais utilizadas hoje em dia.
            </p>
          </div>
        </div>
        <div className="skillContent node">
          <div className="icon">
            <FaNodeJs />
          </div>
          <div className="description">
            <h3>Node.js</h3>
            <p>Com essa tecnologia podemos criar desde sites até API&apos;s.</p>
          </div>
        </div>
        <div className="skillContent styledComponents">
          <div className="icon">
            <img src="src/assets/styled-components.svg" />
          </div>
          <div className="description">
            <h3>Styled-Components</h3>
            <p>Biblioteca React que te permite escrever css no Javascript.</p>
          </div>
        </div>
      </SkillWrapper>
    </Container>
  );
}
