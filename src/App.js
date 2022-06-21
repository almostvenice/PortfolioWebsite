import './App.css';
import Header from './components/Header';
import { Parallax } from 'react-parallax';
import Laptop from './app/assets/laptop.jpg';
import Intro from './components/Intro';

function App() {
  return (
    <div className="App">
        <Parallax strength={300} bgImage={Laptop} >
          <div className='headerCont'>
            <Header/>
          </div>
          <div  className='introCont'>
            <Intro/>
          </div>
        </Parallax>
        <div className='bodyCont'></div>
    </div>
  );
}

export default App;
