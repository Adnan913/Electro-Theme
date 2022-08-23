import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './bestDeals.css';
import ProductCard from './ProductCard.jsx';

function BestDeals() {
  return (
    <Container fluid className='deal'>
      <Row >
            <div className='deal-title-wrap'>
                <center className="title-text">
                    <p>Best Deals</p>
                </center>
            </div>
        <Col className='column' lg={4} md={12} sm={12} xs={12}>
            <Row className='row'>
                <Col className="inner-column" off  lg={6} md={3} sm={6} xs={6}>
                  <div>
                    <ProductCard/>
                  </div>
                    
                </Col>
                <Col className="inner-column" lg={6} md={3} sm={6} xs={6}>
                  <div>
                    <ProductCard/>
                  </div>
                </Col>
                <Col className="inner-column" lg={6} md={3} sm={6} xs={6}>
                  <div>
                    <ProductCard/>
                  </div>
                </Col>
                <Col className="inner-column" lg={6} md={3} sm={6} xs={6}>
                  <div>
                    <ProductCard/>
                  </div>
                </Col>
            </Row>
        </Col>
        <Col className="column" lg={4} md={12} sm={12} xs={12}>
          <Row >
            <Col className='wrap'>
              <div className='main-deal'>
                  <ProductCard/>
              </div>
            </Col>
          
          </Row>
          
        </Col>
        <Col className='column' lg={4} md={12} sm={12} xs={12}>
            <Row className='row'>
                <Col className="inner-column" lg={6} md={3} sm={6} xs={6}>
                  <div>
                    <ProductCard/>
                  </div>
                </Col>
                <Col className="inner-column" lg={6} md={3} sm={6} xs={6}>
                  <div>
                    <ProductCard/>
                  </div>
                </Col>
                <Col className="inner-column" lg={6} md={3} sm={6} xs={6}>
                  <div>
                    <ProductCard/>
                  </div>
                </Col>
                <Col className="inner-column" lg={6} md={3} sm={6} xs={6}>
                  <div>
                    <ProductCard/>
                  </div>
                </Col>
            </Row>
        </Col>
       </Row>
    </Container>
  );
}

export default BestDeals;