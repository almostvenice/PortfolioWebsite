import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import { Parallax } from 'react-parallax';
import Laptop from './app/assets/laptop.jpg';
import Intro from './components/Intro';
import ProjectsSection from './sections/projects/ProjectsSection';

function App() {
  const [stylePath] = useState(
    "//fonts.googleapis.com/css?family=Lobster"
  );
  return (
    <div className="App">
        <div>
          <link rel="stylesheet" type="text/css" href={stylePath} />
        </div>
        <Parallax strength={300} bgImage={Laptop} >
          <div className='headerCont'>
            <Header/>
          </div>
          <div  className='introCont'>
            <Intro/>
          </div>
        </Parallax>
        <div className='bodyCont'>
          About Me
        </div>
        <div className="projectsSection">
          <ProjectsSection/>
        </div>
    </div>
  );
}

export default App;
