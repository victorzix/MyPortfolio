import { Div } from "./styles";
import Top from "../../components/Top";
import ProjectsContainer from "./ProjectsContainer";

export default function Projects() {
  return (
    <Div className="reveal">
      <Top />
      <h1>Projects</h1>
      <ProjectsContainer/>
     
    </Div>
  );
}
