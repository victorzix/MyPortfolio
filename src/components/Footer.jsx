import styled from "styled-components";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";

const Div = styled.div`
  height: 20em;
  background-color: var(--dark-blue);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 4em;
  gap: 2em;
  color: var(--ice-white);
  letter-spacing: 0.3em;

  h1 {
    color: var(--txt-yellow);
    letter-spacing: 0.3em;
    font-size: 1.5em;
  }
  p{
    font-size: 1.2em;
  }

  .links{
    display: flex;
    gap: 2.4em;
      a{
        text-decoration: none;
        color: var(--ice-white);
        font-size: 2.5em;
        transition: all ease-in-out 200ms;

        &:hover{
            color: var(--txt-yellow);
            transform: scale(1.05);
        }
      }
  }
  .email{
    font-size: .8em;
  }

`;

export default function Footer() {
  return (
    <Div>
      <h1>OBRIGADO POR LER ATÉ AQUI</h1>
      <p>Você pode me encontrar em</p>
      <div className="links" id="links">
        <a href="" className="link"><AiFillLinkedin/></a>
        <a href="" className="link"><AiFillGithub/></a>
        <a href="" className="link"> <FaInstagram/></a>
      </div>
      <span className="email">victoraphaelnev@gmail.com</span>
    </Div>
  );
}
