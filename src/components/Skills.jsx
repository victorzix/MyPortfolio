import styled from "styled-components";
import { FaReact, FaJs, FaNodeJs } from "react-icons/fa";

const Container = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;
  padding: 10em 0;
  align-items: center;
  height: 100vh;
  background-color: var(--dark-blue);
  color: var(--ice-white);
  gap: 8em;

  h1 {
    color: var(--txt-yellow);
  }

  @media (max-width: 840px) {
    justify-content: center;
    padding: 0;
  }
  @media (max-width: 640px) {
    gap: 0;
    align-items: center;

    h1{
      font-size: 1em;
    }
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
  /* Large */
  @media (max-width: 1366px) {
    padding: 0 6em;
    .skillContent {
      height: 16em;
      width: 14em;
    }
  }
  /* Medium */
  @media (max-width: 1150px) {
    padding: 0 2em;
    .skillContent {
      height: 15em;
      width: 13em;
    }

    .skillContent {
      border-radius: 1em;
      background-color: var(--ice-white);
      display: flex;
      align-items: center;
      padding: 2em 1em;
      flex-direction: column;
      gap: 0.4em;

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
  }

  @media (max-width: 840px) {
    display: flex;
    width: 100%;
    padding: 0 1em;
    align-items: center;

    .skillContent {
      border-radius: 1em;
      background-color: transparent;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 0.7em;

      .description {
        color: var(--ice-white);
        p {
          display: none;
        }
      }
    }

    .react {
      .icon {
        color: #00d8ff;
        font-size: 6rem;
      }
    }
    .javascript {
      .icon {
        color: #f7df1e;
        border: 0;
        font-size: 6rem;
      }
    }
    .node {
      .icon {
        color: #83cd29;
        font-size: 6rem;
      }
    }
    .styledComponents {
      .icon {
        font-size: 6rem;
      }
    }
  }
  /* Small */
  @media (max-width: 640px) {
    display: flex;
    width: 100%;
    padding: 0 1em;
    align-items: center;

    .skillContent {
      border-radius: 1em;
      background-color: transparent;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 0em;

      .description {
        color: var(--ice-white);
        font-size: .5em;
        p {
          display: none;
        }
      }
    }

    .react {
      .icon {
        color: #00d8ff;
        font-size: 2rem;
      }
    }
    .javascript {
      .icon {
        color: #f7df1e;
        border: 0;
        font-size: 2rem;
      }
    }
    .node {
      .icon {
        color: #83cd29;
        font-size: 2rem;
      }
    }
    .styledComponents {

      img{
        width: 1em;
      }
      .icon {
        font-size: 2rem;
      }
    }
  }
`;
export default function Skills() {
  return (
    <Container id="skills">
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
          <div></div>
          <div className="icon">
            <img src="/assets/styled-components.svg" />
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
