import './intro.css';
import {Col, Row, Container } from 'reactstrap';
import NenoImg from "../../src/app/assets/Neno.jpg";


const Intro = () => {
    return ( 
        <Container>
            <Row className='row-content align-items-center'>
                <Col sm="4">
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
                <Col sm='8'>
                <img className='bob' src={NenoImg}/>
                </Col>
            </Row>
            <Row >
            
           <Col sm='8'>
                  <div className='bob-info-2 '><h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex beatae magnam sequi corporis labore iusto nesciunt harum assumenda omnis cum nisi quo temporibus, consequuntur porro distinctio exercitationem praesentium sit Lorem ipsum dolor sit amet consectetur, adipisicing elit. lsf;sdlfgkf;lkgsddf;lgk'dzf;lkga'dflkga;dflkg';dlfkg'sdf;lkg'sdf;lkg</h5></div>
            </Col>
            </Row>
        </Container>
     );
}
 
export default Intro;