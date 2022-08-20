import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import featured from './images/fea.png'
import featured1 from './images/fea2.png'
import ProgressBar from 'react-bootstrap/ProgressBar';
import Timer from './Timer.jsx';
import './featured.css';



function ResponsiveAutoExample() {
  return (
    <Container fluid>
      <Row >
        <Col lg={4} md={6} sm={12} xs={12} className="featuredLeft">
            <div className='leftOffer-product-card'>
                <span className='special_offer-text'>Special<br/>Offer</span>
                <a href="/">
                    <span className='img-style'>
                         <img src={featured}  alt="featured"/>
                    </span>
                </a>
                <div className='save30'>
                    <span> Save</span> <span>30%</span>
                </div>
            </div>
            <footer>
                <p className='product-title'>Faxtex Product Sample</p>
                <p className='product-price'>$110.00<span>$199.00</span></p>
                <div className='stock'>
                    <p>Already Sold : <span>6</span></p>
                    <p>Available: <span>30</span></p>
                </div>
                <ProgressBar variant="warning" now={10} />
                <Timer deadline={'Aug 21, 2022 11:46:25 AM'}/>
            </footer>
        </Col>
        <Col lg ={8} md={6} sm={12} xs={12}>
            <div className='title_cover'>
                <center className="title">
                    <h4>Featured</h4>
                </center>
            </div>
            <Row className="right">
                <Col lg={3} md={4} sm={6} xs={6} className="featuredRight ">
                    <p className='product-vendor'>Bulgari</p>
                    <p className='product-title'>Faxtex Product Sample</p>
                    <img src={featured1} alt="featured"/>
                    <p className='product-price'>$110.00<span>$199.00</span></p>

                </Col>
                <Col lg={3} md={4} sm={6} xs={6} className="featuredRight">
                    <p className='product-vendor'>Bulgari</p>
                    <p className='product-title'>Faxtex Product Sample</p>
                    <img src={featured1} alt="featured"/>
                    <p className='product-price'>$110.00<span>$199.00</span></p>

                </Col>
                <Col lg={3} md={4} sm={6} xs={6} className="featuredRight">
                    <p className='product-vendor'>Bulgari</p>
                    <p className='product-title'>Faxtex Product Sample</p>
                    <img src={featured1} alt="featured"/>
                    <p className='product-price'>$110.00<span>$199.00</span></p>

                </Col>
                <Col lg={3} md={4} sm={6} xs={6} className="featuredRight">
                    <p className='product-vendor'>Bulgari</p>
                    <p className='product-title'>Faxtex Product Sample</p>
                    <img src={featured1} alt="featured"/>
                    <p className='product-price'>$110.00<span>$199.00</span></p>

                </Col>
            {/* </Row>
            <Row> */}
                <Col lg={3} md={4} sm={6} xs={6} className="featuredRight">
                    <p className='product-vendor'>Bulgari</p>
                    <p className='product-title'>Faxtex Product Sample</p>
                    <img src={featured1} alt="featured"/>
                    <p className='product-price'>$110.00<span>$199.00</span></p>

                </Col>
                <Col lg={3} md={4} sm={6} xs={6} className="featuredRight">
                    <p className='product-vendor'>Bulgari</p>
                    <p className='product-title'>Faxtex Product Sample</p>
                    <img src={featured1} alt="featured"/>
                    <p className='product-price'>$110.00<span>$199.00</span></p>

                </Col>
                <Col lg={3} md={4} sm={6} xs={6} className="featuredRight">
                    <p className='product-vendor'>Bulgari</p>
                    <p className='product-title'>Faxtex Product Sample</p>
                    <img src={featured1} alt="featured"/>
                    <p className='product-price'>$110.00<span>$199.00</span></p>

                </Col>
                <Col lg={3} md={4} sm={6} xs={6} className="featuredRight">
                    <p className='product-vendor'>Bulgari</p>
                    <p className='product-title'>Faxtex Product Sample</p>
                    <img src={featured1} alt="featured"/>
                    <p className='product-price'>$110.00<span>$199.00</span></p>

                </Col>
            </Row>
        </Col>
        
      </Row>
      
    </Container>
  );
}

export default ResponsiveAutoExample;