import styled from "styled-components";

const PreviewInfo = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  color: black;
  text-align: center;
  opacity: 0;
  transition: all 500ms ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
`;
const PreviewContent = styled.div`
  position: relative;
  h2 {
    text-align: center;
  }

  img {
    height: 100%;
    width: 100%;
    display: block;
    transition: all 500ms ease-in-out;
    border-radius: 1em;
  }

  &:hover {
    ${PreviewInfo} {
      opacity: 1;
    }
    img {
      filter: blur(8px);
      opacity: 0.6;
    }
  }
  @media(max-width: 500px){
     &:hover{
      ${PreviewInfo}{
        opacity: 0;
      }
      img{
        filter: none;
        opacity: 1;
      }
     }
    }
`;

const Preview = styled.div`
  width: 25em;
  border-radius: 2em;

  @media(max-width: 500px){
     width: 100%;
    }
`;

const Projects = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  gap: 1em;

  @media(max-width: 500px){
     display: flex;
     flex-direction: column;

     h2{
      font-weight: 600;      
      font-size: 1.3em;
     }
    }
`;

export default function RelevantProjects() {
  return (
    <div className="relevantProjects">
      <h1>💻 Here is some of my main projects</h1>
      <Projects>
        <Preview>
          <PreviewContent>
            <h2>Summary</h2>
            <img src="/assets/IMG/Summary.png" className="previewContent" />
            <PreviewInfo>
              A simple challenge from the site Front-end Mentor, using JS, CSS
              and HTML.
            </PreviewInfo>
          </PreviewContent>
        </Preview>
        <Preview>
          <PreviewContent>
            <h2>Timer</h2>
            <img src="/assets/IMG/Timer.png" className="previewContent" />
            <PreviewInfo>
              A simple Timer made out of JS, HTML and CSS
            </PreviewInfo>
          </PreviewContent>
        </Preview>
        <Preview>
          <PreviewContent>
            <h2>Social Tree</h2>
            <img
              src="/assets/IMG/SocialTree.png"
              className="previewContent"
            />
            <PreviewInfo>
              SocialTree challenge from the site RocketSeat, using HTML, CSS and
              JS to change themes
            </PreviewInfo>
          </PreviewContent>
        </Preview>
      </Projects>
    </div>
  );
}
