import { Col, Row, Container } from "reactstrap";
import './Bobinfo.css'
import NenoImg from '../app/assets/Neno.jpg'

const Bobinfo = () => {
    return (
    <Container className="bob-container">
        <Row>
            <Col sm='2'>
                <img className="bob" src={NenoImg}/>
            </Col>
        </Row>
        <Row className="row-content align-items-center">
        
            <Col sm= '4'>
                <div className="bob-info-2">
                    <h5>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex beatae
                    magnam sequi corporis labore iusto nesciunt harum assumenda omnis cum
                    nisi quo temporibus, consequuntur porro distinctio exercitationem
                    praesentium sit Lorem ipsum dolor sit amet consectetur, adipisicing
                    elit.
                    lsf;sdlfgkf;lkgsddf;lgk'dzf;lkga'dflkga;dflkg';dlfkg'sdf;lkg'sdf;lkg
                    </h5>
                </div>
            </Col>
        </Row>
    </Container>
    )
}

export default Bobinfo;