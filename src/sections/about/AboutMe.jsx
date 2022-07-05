import { Row, Col, Container } from 'reactstrap';
import {Player, Controls} from '@lottiefiles/react-lottie-player';
import './about.css'

const AboutMe = () => {
    return ( 
        <Container>
            <h2 style={{fontFamily: 'Lobster', paddingTop: '3rem'}} className='text-center'>
                About Me
            </h2>
            <Row>
                <Col>
                    <Player 
                        id='lottiePlayer'
                        autoplay
                        loop
                        src="https://assets5.lottiefiles.com/packages/lf20_tno6cg2w.json"
                        style={{ height: '300px', width: '300px', float: 'left', marginRight: '50px'}}
                    >
                        <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
                    </Player>
                    <div>
                        <p id='aboutMe' style={{marginTop: '3rem'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium numquam error nihil quo adipisci possimus rerum itaque doloribus, architecto ut ratione, unde blanditiis iusto quam placeat ipsam natus, quod vel aliquid eum magnam labore perferendis expedita! Maiores nesciunt sequi, doloremque iure iusto necessitatibus itaque enim ad qui reiciendis similique distinctio aliquid ullam quos sed esse consectetur culpa quia quasi sapiente! Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </Col>
            </Row>
        </Container>
     );
}
 
export default AboutMe;