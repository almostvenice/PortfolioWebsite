import { Container, Row, Col } from "reactstrap";
import './footer.css'
import { FaTwitterSquare, FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
    return ( 
        <footer className="site-footer">
            <Container>
                <Row>
                    <Col style={{textAlign: 'center'}}>
                        <a
                            className='btn btn-social-icon btn-instagram'
                            href='http://instagram.com/'
                        >
                            <FaInstagramSquare size={60}/>
                        </a>{' '}
                        <a
                            className='btn btn-social-icon btn-facebook'
                            href='http://www.facebook.com/'
                        >
                            <FaFacebookSquare size={60}/>
                        </a>{' '}
                        <a
                            className='btn btn-social-icon btn-twitter'
                            href='http://twitter.com/'
                        >
                            <FaTwitterSquare size={60}/>
                        </a>{' '}
                        <br />
                        <a
                            role='button'
                            className='btn btn-link'
                            href='tel:+12065551234'
                        >
                            1-310-333-1234
                        </a>
                        <br />
                        <a
                            role='button'
                            className='btn btn-link'
                            href='mailto:notreal@notreal.co'
                            style={{paddingBottom: '50px'}}
                        >
                             bob@bob.co
                        </a>
                    </Col>
                </Row>
            </Container>
        </footer>
     );
}
 
export default Footer;