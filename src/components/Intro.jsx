import styled from "styled-components";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { DiJsBadge, DiReact, DiNodejsSmall } from "react-icons/di";

const Container = styled.div`
  background-color: var(--dark-blue);
  height: 52em;
  color: var(--ice-white);
  font-weight: 900;
  display: flex;
  align-items: center;
  padding: 0 10em;
  justify-content: space-between;

  .greet {
    display: flex;
    align-items: center;
    font-size: 1.5em;
    a {
      text-decoration: none;
      color: var(--ice-white);
      align-items: center;
      display: flex;
      margin-right: 0.5em;
      transition: all ease-in-out 200ms;
    }
    a:hover{
        transform: scale(1.05);
    }
    .name {
      color: var(--txt-yellow);
      margin-right: 0.5em;
    }
  }

  .occupation {
    .firstLine,
    .secondLine {
      font-size: 3em;
      line-height: 1em;


      .icon {
        font-size: .6em;
        display: flex;
        align-items: center;
        margin-left: .4em;
      }
    }
    .secondLine{
        display: flex;
        align-items: center;
    }
  }
  img {
    margin-right: 5em;
  }
`;

export default function Intro() {
  return (
    <Container>
      <div className="greetings">
        <div className="greet">
          <span>OI 👋</span>
          <span className="name">EU SOU O VICTOR</span>
          <a
            className="github"
            href="http://github.com/victorzix"
            target="blank"
          >
            <AiFillGithub />
          </a>
          <a
            className="linkedin"
            href="https://www.linkedin.com/in/victorphael/"
            target="blank"
          >
            <AiFillLinkedin />
          </a>
        </div>
        <div className="occupation">
          <span className="firstLine">DESENVOLVEDOR</span>
          <br/>
          <span className="secondLine">
            FRONTEND
            <span className="icon">
              <DiJsBadge />
            </span>
            <span className="icon">
              <DiReact />
            </span>
            <span className="icon"><DiNodejsSmall/></span>
          </span>
        </div>
      </div>

      <div>
        <img src="src\assets\intronotebook.svg" alt="" />
      </div>
    </Container>
  );
}
