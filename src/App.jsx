import "./App.css";
import Title from "./components/Title";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  fas,
  faFolder,
  faExternalLinkAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  fab,
  faTwitter,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

library.add(
  fas,
  fab,
  faTwitter,
  faGithub,
  faLinkedin,
  faFolder,
  faExternalLinkAlt
);

// Hook

import { useRef } from "react";

function App() {
  const titleRef = useRef();
  const aboutRef = useRef();
  const projectsRef = useRef();

  const sectionMap = {
    title: titleRef,
    about: aboutRef,
    projects: projectsRef,
  };

  function handleBackClick(id) {
    console.log(`asking for section ${id}`)
    const sectionRef = sectionMap[id];
    if (sectionRef && sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }
  return (
    <>
      <Title name="Mukul Singh" id="title" ref={titleRef} />
      <About id="about" ref={aboutRef} />
      <Projects id="projects" ref={projectsRef} />
      <Footer onBacklinkClick={handleBackClick} />
    </>
  );
}

export default App;
