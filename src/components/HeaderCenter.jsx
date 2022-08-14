import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {FiSearch} from 'react-icons/fi';
import {AiOutlineShopping} from 'react-icons/ai';
import {BsPerson,BsArrowLeftRight} from 'react-icons/bs'
import {AiOutlineHeart} from 'react-icons/ai';
import InputGroup from 'react-bootstrap/InputGroup';
import ListGroup from 'react-bootstrap/ListGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import {GrUnorderedList} from 'react-icons/gr';

import "./headerCenter.css";

function OffcanvasExample() {
  return (
    <>
    <Navbar   expand="lg" className="mb-3 navbar">
          <Container fluid  className=' headerCenter'>
            <Row className='toggle'>
                <Col sm className='onSmallScreenleft'>
                    <Navbar.Toggle className='toggler'  aria-controls={`offcanvasNavbar-expand-lg`} />
                    <Navbar.Brand className='brand' href="#">electro<span>.</span> </Navbar.Brand>
                </Col>
                <Col className='onSmallScreenRight'>
                    <ul>
                        <li><FiSearch size="1.6em" /></li>
                        <li><BsPerson size="1.6em" /></li>
                        <li><AiOutlineShopping size="1.6em" /></li>
                    </ul>
                </Col>
            </Row>
            <Row className='fullScreenSearchBox'>
                
                <InputGroup className="search">
                  <Form.Control className='searchInput'
                    placeholder="Search..."
                    aria-describedby="basic-addon2"
                  />
                  <Button  id="button-addon2">
                    <FiSearch size="1.5em"  color ="#333e48"/>
                  </Button>
                </InputGroup>
            </Row>
            <Row className='fullScreenRight'>
                <ul>
                        <li><BsArrowLeftRight size="1.8em" /></li>
                        <li><AiOutlineHeart size="1.8em" /></li>
                        <li><AiOutlineShopping size="1.8em" /></li>
                </ul>
            </Row>
                
          </Container>
        <Container fluid className='headerBottom'>
          <Row className='row'>
            {/* <Col >
            <Dropdown className="d-inline mx-2">
                    <Dropdown.Toggle id="dropdown-autoclose-true">
                      <GrUnorderedList/>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                      <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                      <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                    </Dropdown.Menu>
            </Dropdown>

            </Col> */}
            <Col className='middle'>
              <Navbar.Offcanvas
                    id={`offcanvasNavbar-expand-lg`}
                    aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
                    placement="start"
                    >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                        Offcanvas
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                        <Nav.Link href="#action1">Home</Nav.Link>
                        <Nav.Link href="#action2">Catalog</Nav.Link>
                        <Nav.Link href="#action2">Gift Card</Nav.Link>
                        <NavDropdown
                            title="Pages"
                            id={`offcanvasNavbarDropdown-expand-lg`}
                        >
                            <NavDropdown.Item href="#action3">Pages 1</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">
                            Another action
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                            Something else here
                            </NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown
                            title="Features"
                            id={`offcanvasNavbarDropdown-expand-lg`}
                        >
                            <NavDropdown.Item href="#action3">Pages 1</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">
                            Another action
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                            Something else here
                            </NavDropdown.Item>
                        </NavDropdown>
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>  
            </Col> 
            <Col className='free'>
              <span>Free Shipping on Orders $500+</span>
            </Col>
          </Row>
        </Container>
            
        </Navbar>
      
    </>
  );
}

export default OffcanvasExample;