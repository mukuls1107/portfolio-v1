import "./App.css";
import Title from "./components/Title";
import Nav from "./components/Nav";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab, faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

library.add(fas, fab, faTwitter, faGithub, faLinkedin)

function App() {
  return (
    <>
      <Title name="Mukul Singh" age="20" classname="test" />
    </>
  );
}

export default App;
