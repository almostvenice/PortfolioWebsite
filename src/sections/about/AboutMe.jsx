import { Row, Col, Container } from 'reactstrap';
import Hacker from '../../app/assets/hacker.mp4';
import {Player, Controls} from '@lottiefiles/react-lottie-player';

const AboutMe = () => {
    return ( 
        <Container>
            <h2 style={{fontFamily: 'Lobster', paddingTop: '3rem'}} className='text-center'>
                About Me
            </h2>
            <Row>
                <Col>
                <Player
                    autoplay
                    loop
                    src="https://assets5.lottiefiles.com/packages/lf20_tno6cg2w.json"
                    style={{ height: '300px', width: '300px', float: 'left'}}
                >
                    <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
                </Player>
                
                </Col>
            </Row>
        </Container>
     );
}
 
export default AboutMe;