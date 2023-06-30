import styled from "styled-components";
import { useState } from "react";
import { FiGithub } from "react-icons/fi";
import { FaGithub } from "react-icons/fa"
import { useRef } from "react";

const Container = styled.div`
  height: 100vh;
  background-color: var(--iced-white);
  display: flex;
  padding: 10em 10em;
  flex-direction: column;
  align-items: center;
  gap: 10em;
  h1 {
    letter-spacing: 0.4em;
  }

  .projectsWrapper {
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
  }

  /* Large */
  @media (max-width: 1366px) {
    padding: 10em 6em;
    gap: 10em;

    .projectsWrapper {
      justify-content: space-around;
    }
  }
  /* Medium */
  @media (max-width: 840px) {
    height: 100vh;
    background-color: var(--ice-white);
    display: flex;
    padding: 0 2em;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5em;

    h1 {
      letter-spacing: 0.3em;
      font-size: 2.3em;
    }

    .projectsWrapper {
      display: flex;
      justify-content: center;
      gap: 6em;
      width: 100%;
    }
  }
  /* Small */
  @media (max-width: 640px) {
    height: 100vh;
    background-color: var(--ice-white);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5em;

    h1 {
      letter-spacing: .05em;
      font-size: 1.5em;
      text-align: center;
    }

    .projectsWrapper {
      display: flex;
      justify-content: center;
      gap: 3em;
      width: 100%;
    }
  }
`;

const Content = styled.div`
  img {
    width: 20em;
    transition: 200ms all ease-in-out;
  }
  position: relative;

  .projectHover {
    position: absolute;
    bottom: 7em;
    left: 5em;
    height: 1em;
    display: none;
    width: 100%;

    a {
      font-size: 1.3em;
      transition: all 100ms ease-in-out;
      &:hover {
        transform: scale(1.1);
      }
    }

    button {
      background: var(--dark-blue);
      color: var(--ice-white);
      border: 0;
      display: flex;
      cursor: pointer;
      transition: all 100ms ease-in-out;
      height: auto;
      padding: 1em;
      border-radius: 0.3em;

      &:hover {
        transform: scale(1.1);
      }
    }
  }

  &:hover .projectHover {
    display: flex;
    align-items: center;
    gap: 1.5em;
  }
  &:hover img {
    filter: blur(5px) grayscale(30%);
  }

  /* Large */
  @media (max-width: 1366px) {
    img {
      width: 15em;
      transition: 200ms all ease-in-out;
    }
  }
  /* Medium */
  @media (max-width: 840px) {
    display: flex;
    flex-direction: column;
    gap: 3em;
    height: 100%;
    justify-content: space-around;
    align-items: center;

    &:nth-child(2) {
      img {
        width: 15em;
      }
    }
    img {
      width: 8em;
    }
    position: relative;

    .projectHover {
      display: none;
    }

    &:hover .projectHover {
      display: none;
      align-items: none;
      gap: none;
    }
    &:hover img {
      filter: none;
    }

    .description {
      display: flex;
      justify-content: center;
      gap: 2em;
      align-items: center;
      a {
        text-decoration: none;
        font-size: 2em;
        color: var(--dark-blue);
      }
    }
  }
  /* Small */
  @media (max-width: 640px) {
    display: flex;
    flex-direction: column;
    gap: 1em;
    height: 100%;
    justify-content: center;
    align-items: center;

    &:nth-child(2) {
      img {
        width: 6em;
      }
    }
    img {
      width: 3em;
    }
    position: relative;

    .projectHover {
      display: none;
    }

    &:hover .projectHover {
      display: none;
      align-items: none;
      gap: none;
    }
    &:hover img {
      filter: none;
    }

    .description {
      display: flex;
      justify-content: center;
      gap: 2em;
      align-items: center;
      a {
        text-decoration: none;
        font-size: 1.4em;
        color: var(--dark-blue);
      }
    }
  }
`;
const Frame = styled.iframe`
  border: none;
  height: 100%;
  width: 100%;
`;
const FrameModal = styled.div`
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  padding: 10em;
  display: ${(props) => {
    return props.modalOpen ? "block" : "none";
  }};

  button {
    color: var(--dark-blue);
    font-size: 2em;
    width: 1.5em;
    height: 1.5em;
    background-color: transparent;
    border-radius: 2em;
    position: relative;
    left: 50%;
    cursor: pointer;
    transition: all 200ms ease-in;

    &:hover {
      background-color: var(--dark-blue);
      color: var(--ice-white);
      transform: scale(1.1);
    }
  }
`;

function ProjectsMobile() {
  return (
    <Container id="projects">
      <h1>Projetos Recentes</h1>
      <div className="projectsWrapper">
        <Content>
          <img src="/assets/Projects/newsmobile.png" alt="" />
          <div className="description">
            <a href="" className="github">
              < FaGithub />
            </a>
          </div>
        </Content>

        <Content>
          <div />
          <img src="/assets/Projects/agecalcmobile.png" alt="" />
          <div className="description">
            <a href="" className="github">
              < FaGithub />
            </a>

          </div>
        </Content>

        <Content>
          <img src="/assets/Projects/newslettermobile.png" alt="" />
          <div className="description">
            <a href="" className="github">
              < FaGithub />
            </a>

          </div>
        </Content>
      </div>
    </Container>
  );
}

export default function Projects() {
  const windowSize = useRef([window.innerWidth, window.innerHeight]);

  const [link, setLink] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  function handleClick(e) {
    let el = e.currentTarget;
    const frameLink = el.dataset.link;
    setLink(() => {
      setModalOpen(true);
      return frameLink;
    });
  }

  document.addEventListener("keydown", (e) => {
    if (e.key == "Escape") {
      closeModal();
    }
  });

  function closeModal() {
    setLink(null);
    setModalOpen(false);
  }

  console.log(windowSize.current[0]);
  if (windowSize.current[0] <= 840) {
    return <ProjectsMobile />;
  }

  return (
    <Container id="projects">
      <h1>Projetos Recentes</h1>
      <div className="projectsWrapper">
        <Content>
          <img src="/assets/Projects/news.png" alt="" />
          <div className="projectHover">
            <a
              href="https://github.com/victorzix/FrontEndMentor/tree/master/news-homepage-main"
              target="blank"
            >
              <FiGithub />
            </a>
            <button
              data-link="https://studies.victoraphael.com.br/news-homepage-main/index.html"
              onClick={handleClick}
            >
              Ver Projeto
            </button>
          </div>
        </Content>

        <Content>
          <img src="/assets/Projects/agecalc.png" alt="" />
          <div className="projectHover">
            <a
              href="https://github.com/victorzix/FrontEndMentor/tree/master/age-calculator-app-main"
              target="blank"
            >
              <FiGithub />
            </a>
            <button
              data-link="https://studies.victoraphael.com.br/age-calculator-app-main/index.html"
              onClick={handleClick}
            >
              Ver Projeto
            </button>
          </div>
        </Content>

        <Content>
          <img src="/assets/Projects/newsletter.png" alt="" />
          <div className="projectHover">
            <a
              href="https://github.com/victorzix/FrontEndMentor/tree/master/newsletter-sign-up-with-success-message-main"
              target="blank"
            >
              <FiGithub />
            </a>
            <button
              data-link="https://studies.victoraphael.com.br/newsletter-sign-up-with-success-message-main/index.html"
              onClick={handleClick}
            >
              Ver Projeto
            </button>
          </div>
        </Content>
      </div>

      <FrameModal modalOpen={modalOpen}>
        <Frame src={link}></Frame>
        <button onClick={closeModal}>X</button>
      </FrameModal>
    </Container>
  );
}
