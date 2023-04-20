import { Div } from "./styles";
import Top from "../../components/Top";
import Studying from "./Studying";
import RelevantProjects from './RelevantProjects'
export default function MainProjects() {
  return (
    <Div className="reveal">
      <Top />
      <Studying/>
      <RelevantProjects/>
    </Div>
  );
}
