import './index.css';
import { Row, Col, Container } from 'react-bootstrap';
import { Layout } from './Component/Layout/Layout';
import { HomePage } from './Component/HomePage/HomePage';

function App() {
  return (
   
      <Row>
        <Col md={2} className='fixed-navbar'>
          <Layout />
        </Col>
        <Col md={10}>
          <HomePage />
        </Col>
      </Row>
    
  );
}

export default App;
