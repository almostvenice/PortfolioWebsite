import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import { Parallax } from "react-parallax";
import Laptop from "./app/assets/laptop.jpg";
import Intro from "./components/Intro";
import ProjectsSection from "./sections/projects/ProjectsSection";
import AboutMe from "./sections/about/AboutMe";
import ContactForm from "./components/ContactForm.jsx";
import Footer from "./components/Footer";

function App() {
  const [stylePath] = useState("//fonts.googleapis.com/css?family=Lobster");
  return (
    <div className="App">
      <div>
        <link rel="stylesheet" type="text/css" href={stylePath} />
        <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
      </div>
      <Parallax strength={300} bgImage={Laptop}>
        <div className="headerCont">
          <Header />
        </div>
        <div className="introCont" id="home">
          <Intro />
        </div>
      </Parallax>
      <div>
        <div className="bodyCont" id="about">
          <AboutMe />
        </div>
      </div>
      <div className="projectsSection" id="projects">
        <ProjectsSection title="projects" />
      </div>
      <div id="contactForm">
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
}

export default App;
