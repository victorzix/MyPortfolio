import styled from "styled-components";
import { useState } from "react";
import { FiGithub } from "react-icons/fi";

const Container = styled.div`
  height: 50em;
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

export default function Projects() {
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
  return (
    <Container id="projects">
      <h1>Projetos Recentes</h1>
      <div className="projectsWrapper">
        <Content>
          <img src="src/assets/Projects/news.png" alt="" />
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
          <img src="src/assets/Projects/agecalc.png" alt="" />
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
          <img src="src/assets/Projects/newsletter.png" alt="" />
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
