import { Project, ProjectWrapper, ProjectInfo } from "./styles";

export default function ProjectsContainer() {
  return (
    <ProjectWrapper>
      <Project>
        <div className="projectContent">
          <img src="/assets/IMG/ColorGenerator.png" alt="" />
          <ProjectInfo>
            <b>Technologies: &nbsp;</b> JS, HTML, CSS
          </ProjectInfo>
        </div>
        <div className="description">
          <h2>Color Generator</h2>
          <p>
            A site that will generate hexadecimal colors and change the
            background
          </p>
        </div>
      </Project>
      <Project>
        <div className="projectContent">
          <img src="/assets/IMG/LoginForm.png" alt="" />
          <ProjectInfo>
            <b>Technologies: &nbsp;</b> JS, HTML, CSS
          </ProjectInfo>
        </div>
        <div className="description">
          <h2>Login Form</h2>
          <p>
            My first login form, it was my first time trying to use a Database
            too
          </p>
        </div>
      </Project>
    </ProjectWrapper>
  );
}
