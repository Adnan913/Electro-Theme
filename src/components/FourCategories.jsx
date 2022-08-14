import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ResponsiveAutoExample() {
  return (
    <Container>
      <Row>
        <Col sm={6} xs={6} lg={3}>sm=8</Col>
        <Col sm={6} xs={6} lg={3}>sm=4</Col>
        <Col sm={6} xs={6} lg={3}>sm=8</Col>
        <Col sm={6} xs={6} lg={3}>sm=4</Col>
    
      </Row>
    </Container>
  );
}

export default ResponsiveAutoExample;