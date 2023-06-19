import styled from "styled-components";
import {Link} from 'react-scroll'

const Container = styled.header`
  height: 6em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--ice-white);
  padding: 0 10em;
  position: sticky;
  top: 0;
  width: 100%;


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
`;

export default function Header() {
  return (
    <Container>
      <div>
        <Link to="about" spy={true} smooth={true} offset={-90} duration={500} className="anchor" >Sobre mim</Link>
        <Link to="skills" spy={true} smooth={true} offset={-90} duration={500} className="anchor" >Habilidades</Link>
        <Link to="projects" spy={true} smooth={true} offset={-120} duration={500} className="anchor" >Projetos</Link>
      </div>

      <a className="anchor" href="#">
        CURRICULO
      </a>
    </Container>
  );
}
