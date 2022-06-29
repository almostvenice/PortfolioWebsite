import "./App.css";
import Header from "./components/Header";
import { Parallax } from "react-parallax";
import Laptop from "./app/assets/laptop.jpg";
import Intro from "./components/Intro";

function App() {
  return (
    <div className="App">
      <Parallax strength={300} bgImage={Laptop}>
        <div className="headerCont">
          <Header />
        </div>
        <div className="introCont">
          <Intro />
        </div>
      </Parallax>
      <div className="bodyCont">
        {" "}
        <div className="bob-info text-white">
          <h5>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex beatae
            magnam sequi corporis labore iusto nesciunt harum assumenda omnis
            cum nisi quo temporibus, consequuntur porro distinctio
            exercitationem praesentium sit Lorem ipsum dolor sit amet
            consectetur, adipisicing elit.
            lsf;sdlfgkf;lkgsddf;lgk'dzf;lkga'dflkga;dflkg';dlfkg'sdf;lkg'sdf;lkg
          </h5>
        </div>
      </div>
    </div>
  );
}

export default App;
