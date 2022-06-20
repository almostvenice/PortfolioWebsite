import Mountain from '../app/assets/mountain2.png';
import Hill from '../app/assets/hill2.png';
import Space from '../app/assets/space.jpg';
import Hiker from '../app/assets/hiker3.png';
import { Parallax } from 'react-scroll-parallax';

const Header = () => {
    return ( 
        <div>
            <img src={Space} alt="" className='background' />
            

            <Parallax translateY={[-20, 20]}>
                <img src={Mountain} alt="" className='middleground' style={{zIndex:1}}/>
            </Parallax>

            <Parallax translateY={[-10, 10]}>
            <img src={Hill} alt="" className='foreground' />
            </Parallax>


            <Parallax translateY={[-3, 3]}>
            <img src={Hiker} alt="" className='frontground'/>
            </Parallax>

            <h1 className='title'>Welcome!</h1>
        </div> 
    );
}
 
export default Header;