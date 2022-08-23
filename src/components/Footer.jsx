import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './footer.css';
import {IoMdPaperPlane} from 'react-icons/io';

import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


export default function CarouselFadeExample() {
    return (
        <div className='footer-container '>
        <Container fluid  className='footer-top' >
            <Row >
                <Col className='ccc'>
                    <div>
                        <p className='newsletter-text'><span><IoMdPaperPlane size="2rem" /></span>Sign Up to Newsletter</p>
                    </div>
                </Col>
                <Col className='ccc'>
                
                    <InputGroup className="search" style={{border:"none"}}>
                    <Form.Control className='searchInput'
                        placeholder="Enter your email"
                        aria-describedby="basic-addon2"
                    />
                    <Button  id="button-addon2" style={{background:"#333e48",border:"None" ,width:"122px"}}>
                    Subscribe
                    </Button>
                    </InputGroup>
                </Col>
            </Row>
        </Container>
        <Container fluid  className='footer-bottom'>
            <Row >
                <Col className='footer-bottom-col' lg={4} md={4} sm={12} xs={12}>
                    <div>
                        <h1>electro.</h1>
                        <p>Got question? Call us 24/7!</p>
                        <h5>(800) 8001-8588, (0600) 874 548</h5>
                        <h6>Conatct info</h6>
                        <p>17 Princess Road, London, Greater London NW1 8JR, UK</p>
                    </div>
                </Col>
                <Col className='footer-bottom-col' lg={2} md={2} sm={12} xs={12}>
                    <div>
                        <h6>Find In Fast</h6>
                        <a href="/"> <p>Accessories</p></a>
                        <a href="/"> <p>Accessories</p></a>
                        <a href="/"> <p>Accessories</p></a>
                        <a href="/"> <p>Accessories</p></a>
                        <a href="/"> <p>Accessories</p></a>
                        <a href="/"> <p>Accessories</p></a>
                    </div>
                </Col>
                <Col className='footer-bottom-col' lg={2} md={2} sm={12} xs={12}>
                    <div>
                        <h6>Information</h6>
                        <a href="/"> <p>Accessories</p></a>
                        <a href="/"> <p>Accessories</p></a>
                        <a href="/"> <p>Accessories</p></a>
                        <a href="/"> <p>Accessories</p></a>
                        <a href="/"> <p>Accessories</p></a>
                        <a href="/"> <p>Accessories</p></a>
                    </div>
                </Col>
                <Col className='footer-bottom-col' lg={2} md={2} sm={12} xs={12}>
                <div>
                        <h6>Customer Care</h6>
                        <a href="/"> <p>Accessories</p></a>
                        <a href="/"> <p>Accessories</p></a>
                        <a href="/"> <p>Accessories</p></a>
                        <a href="/"> <p>Accessories</p></a>
                        <a href="/"> <p>Accessories</p></a>
                        <a href="/"> <p>Accessories</p></a>
                    </div>
                </Col>
                <Col className='footer-bottom-col' lg={2} md={2} sm={12} xs={12}>
                    <div>
                        <h6>In the Spotlight</h6>
                        <a href="/"> <p>Accessories</p></a>
                        <a href="/"> <p>Accessories</p></a>
                        <a href="/"> <p>Accessories</p></a>
                        <a href="/"> <p>Accessories</p></a>
                        <a href="/"> <p>Accessories</p></a>
                        <a href="/"> <p>Accessories</p></a>
                    </div>
                </Col>

            </Row>
        </Container>
        <Container fluid className='copyright' style={{background:"#eaeaea" ,padding:"8px"}}>
            <center>
            <p>
            © 2022 Electro Theme. All Rights Reserved
            </p>
            </center>
            

        </Container>
        </div>
      
    );

}