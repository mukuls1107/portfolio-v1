import "./App.css";
import Title from "./components/Title";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas, faFolder, faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import {
  fab,
  faTwitter,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

library.add(fas, fab, faTwitter, faGithub, faLinkedin, faFolder, faExternalLinkAlt);

function App() {
  return (
    <>
      <Title name="Mukul Singh" />
      <About />
      <Projects></Projects>
      <Footer/>

    </>
  );
}

export default App;
