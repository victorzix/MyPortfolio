import Footer from "./components/Footer";
import AboutMe from "./pages/aboutMe/AboutMe";
import MainProjects from "./pages/mainProjects/MainProjects";
import Projects from "./pages/projects/Projects";
import { scrollSetup } from "./utils/scrollSetup";
import { useEffect } from "react";
import Button from './components/TopBtn'




function App() {

  useEffect(() => {
    scrollSetup();
  });
  return (
    <>
        <AboutMe/>
        <MainProjects/>
        <Projects/>
        <Footer/>

        <Button/>
    </>
  );
}

export default App;
