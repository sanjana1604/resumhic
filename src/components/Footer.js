import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Link from './Link';
import '../CSS/Footer.css';

const Footer=()=>{
  return(
    <div className="Footer">
      <Container fluid className="container">
        <Row className="row">
          <Col xs={12} md={6}>
            <ul>
            <h3 className="title brand">Resumhic</h3>
              <li className="list-unstyled">
              <p>Make your Resume/CV in easy and effective steps.</p>                
              </li>
            </ul>
          </Col>
          <Col xs={6} md={3}>
            <ul>
            <h4 className="title">Links</h4>
              <li className="list-unstyled">
              <Link href="/">
                Home
              </Link>
              </li>
              <li className="list-unstyled">
              <Link href="/resume">
                Resume
              </Link>
              </li>
              <li className="list-unstyled">
              <Link href="/cv">
                CV
              </Link>
              </li>
              <li className="list-unstyled">
              <Link href="/blog">
                Blog
              </Link>
              </li>
            </ul>
          </Col>
          <Col xs={6} md={3}>
            <ul>
            <h4 className="title">Contact us:</h4>

              <li className="list-unstyled"><i className="fab fa-instagram fa-lg"></i></li>
              <li className="list-unstyled"><i className="fab fa-facebook fa-lg"></i></li>
              <li className="list-unstyled"><i className="fab fa-pinterest-square fa-lg"></i></li>
              <li className="list-unstyled"><i className="fab fa-twitter fa-lg"></i></li>
            </ul>
          </Col>
        </Row>
      </Container>
      <div className="copyright">
      <Container fluid>
        <Row>
          <Col>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.resumhic.com"> resumhic.com </a>
          </Col>
        </Row>
      </Container>
      </div>
    </div>
  )
}

export default Footer;