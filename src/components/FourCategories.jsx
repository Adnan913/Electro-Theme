import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import collection from './images/collection.jpg'
import './fourCategories.css';
function ResponsiveAutoExample() {
  return (
    <Container>
      <Row className='row'>
        <Col className='col' sm={6} xs={12} lg={3}>
          <a href='/'>
           <img src={collection} alt='collection' className='collection'/>
          </a>
          </Col>
        <Col className='col' sm={6} xs={12} lg={3}>
          <a href='/'>
            <img src={collection} alt='collection' className='collection'/>
          </a>
       </Col>
        <Col  className='col'sm={6} xs={12} lg={3}>
          <a href='/'>
           <img src={collection} alt='collection' className='collection'/>
          </a>
        </Col>
        <Col className='col' sm={6} xs={12} lg={3}>
          <a href='/'>
           <img src={collection} alt='collection' className='collection'/>
          </a>
        </Col>
    
      </Row>
    </Container>
  );
}

export default ResponsiveAutoExample;