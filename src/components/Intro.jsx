import './intro.css';
import {Col, Row, Container } from 'reactstrap';


const Intro = () => {
    return ( 
        <Container>
            <Row className='row-content align-items-center'>
                <Col sm="8">
                    <div className="left-wrapper">
                        <h2 className='introGreet'>Hi,</h2>
                        <h1 className='introName'>I'm Bob,</h1>
                        <div className="intro-title">
                            <div className="title-wrapper">
                                <div className="title-item">React Developer</div>
                                <div className="title-item">Java Developer</div>
                                <div className="title-item">Web3 Enthusiast</div>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col sm='4'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque sit ex fugiat magnam quas at harum inventore facere praesentium nulla!
                </Col>
            </Row>
        </Container>
     );
}
 
export default Intro;