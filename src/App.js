import './App.css';
import Header from './components/Header';
import { Parallax } from 'react-parallax';
import Laptop from './app/assets/laptop.jpg';

function App() {
  return (
    <div className="App">
        <Parallax strength={300} bgImage={Laptop} >
          <div className='headerCont'>
            <Header/>
          </div>
        </Parallax>
        <div className='bodyCont'></div>
    </div>
  );
}

export default App;
