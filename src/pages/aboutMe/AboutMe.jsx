import AboutMeHeader from "./Header";
import { Main, Div } from "./styles";
import Knowledges from './Knowledges'

export default function AboutMe() {
  return (
    <Div className="reveal">
      <AboutMeHeader />
      <Main>
        <div className="aboutMe">
          <h1>👋 Hello, I'm Victor! </h1>
          <p>
            I'm a Front-end development student from {" "}
            <b>Rio de Janeiro - Brazil</b>. I started my studies in november
            2022 and now I am graduating in "Análise e Desenvolvimento de
            Sistemas" for the brazilian university "Estácio". I've always loved
            technology, computers and such. In the future I expect and will be a
            Full-stack developer, for now I hope I can show my talents and
            efforts, I will gladly accept knowledge
          </p>
        </div>

        <Knowledges/>


      </Main>
    </Div>
  );
}
