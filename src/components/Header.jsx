import styled from "styled-components";
import { Link } from "react-scroll";
import { useRef } from "react";

const Container = styled.header`
  height: 6em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--ice-white);
  padding: 0 10em;
  position: fixed;
  width: 100%;
  z-index: 99;

  @keyframes fillHover {
    from {
      width: 0%;
    }

    to {
      width: 100%;
    }
  }

  div {
    display: flex;
    gap: 6em;
  }

  .anchor {
    text-decoration: none;
    color: var(--dark-blue);
    font-weight: 600;
    height: auto;

    &::after {
      content: "";
      height: 0.1em;
      width: 0;
      background-color: black;
      display: block;
    }

    &:hover::after {
      animation: fillHover 200ms linear forwards;
    }

    &:hover {
      cursor: pointer;
    }
  }
  /* Large */
  @media (max-width: 1366px) {
    padding: 0 6em;
  }

  /* Medium */
  @media (max-width: 840px) {
    height: 6em;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--ice-white);
    position: fixed;
    bottom: 0;
    width: 100%;
    z-index: 99;

    div {
      display: flex;
      justify-content: space-between;
      width: 100%;
    }
    
    .anchor {
      text-decoration: none;
      color: var(--dark-blue);
      font-weight: 600;
      height: auto;
    }

    .resume{
      display: none;
    }


  }


  /* Small */
  @media (max-width: 640px) {
  }
`;

export default function Header() {
  const windowSize = useRef([window.innerWidth, window.innerHeight]);
  
  const width = windowSize.current[0];
  const offSet = width <= 840? 0 : -90;

  return (
    <Container>
      <div>
        <Link
          to="about"
          spy={true}
          smooth={true}
          offset={offSet}
          duration={500}
          className="anchor"
        >
          Sobre mim
        </Link>
        <Link
          to="skills"
          spy={true}
          smooth={true}
          offset={offSet}
          duration={500}
          className="anchor"
        >
          Habilidades
        </Link>
        <Link
          to="projects"
          spy={true}
          smooth={true}
          offset={offSet}
          duration={500}
          className="anchor"
        >
          Projetos
        </Link>
      </div>

      <a className="anchor resume" href="#">
        CURRICULO
      </a>
    </Container>
  );
}
