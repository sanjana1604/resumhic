import React from 'react';
import faker from 'faker';
import carousel_1 from '../images/carousle_1.jfif';
import carousel_2 from '../images/carousel_2.jfif';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import step1 from '../images/step1.png';
import step2 from '../images/step2.png';
import step3 from '../images/step3.jfif';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import '../CSS/Home.css';
const Home=()=>{
 return (
   <div>
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={carousel_1} alt="First slide" />
        <Carousel.Caption>
          <h3 style={{color : 'black',fontWeight : 'bold' }}>Resume</h3>
          <p style={{color : 'black',fontWeight : 'bold' }}>Build the way you wanted from scratch with various theme.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={carousel_2} alt="second slide" />
        <Carousel.Caption>
          <h3 style={{color : 'black',fontWeight : 'bold' }}>Interview</h3>
          <p style={{color : 'black',fontWeight : 'bold' }}>Outshine in your interview with effective and interesting resume.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <br/>
    <Container fluid>
      <Row style={{backgroundColor: 'slateblue'}}>
        <Col xs={12}>
          <p className="heading">Create your resume with small steps</p>  
        </Col> 
      </Row>
      <Row className="row_1" style={{backgroundColor: 'lavender'}}>
        <Col id="first_col" xs={12} md={7}>
          <p className="steps"><u>Step 1:</u> Select the template</p>
        </Col>
        <Col id="second_col" xs={12} md={{ span: 4, offset: 1 }}>
          <img className="img-thumbnail" src={step1} alt="Loading"/>
        </Col>
      </Row>
      <br/>
      <Row className="row_1" style={{backgroundColor: 'lavender'}}>
        <Col id="second_col" xs={12} md={{ span: 4, offset: 1,order:"first" }}>
          <img className="img-thumbnail" src={step2} alt="Loading"/>
        </Col>
        <Col id="first_col" xs={{span:12, order:"first"}} md={{span:7}}>
          <p className="steps"><u>Step 2:</u>Fill the details about yourself in the corresponding order.</p>
        </Col>
      </Row>
      <br/>
      <Row className="row_1" style={{backgroundColor: 'lavender'}}>
        <Col id="first_col" xs={12} md={7}>
          <p className="steps"><u>Step 3:</u> your resume is ready to email or print.</p>
        </Col>
        <Col id="second_col" xs={12} md={{ span: 4, offset: 1 }}>
          <img className="img-thumbnail" src={step3} alt="Loading"/>
        </Col>
      </Row>

    </Container>
    <br/>
    <h2 className="line_through"><span>Feedback</span></h2>

    <Container fluid style={{paddingTop:'1rem'}}>
      <Row>
      <Col xs={12} md={4} >
      <Card>
        <Card.Img variant="top" src= {faker.image.avatar()} alt="avatar" />
          <Card.Body>
            <Card.Title>{faker.name.findName()}</Card.Title>
            <Card.Text>
              {faker.lorem.sentence()}
            </Card.Text>
          </Card.Body>
      </Card>
      </Col> 
      <Col xs={12} md={4} >
      <Card>
        <Card.Img variant="top" src= {faker.image.avatar()} alt="avatar" />
          <Card.Body>
            <Card.Title>{faker.name.findName()}</Card.Title>
            <Card.Text>
              {faker.lorem.sentence()}
            </Card.Text>
          </Card.Body>
      </Card>
      </Col> 
      <Col xs={12} md={4}>
      <Card>
        <Card.Img variant="top" src= {faker.image.avatar()} alt="avatar" />
          <Card.Body>
            <Card.Title>{faker.name.findName()}</Card.Title>
            <Card.Text>
              {faker.lorem.sentence()}
            </Card.Text>
          </Card.Body>
      </Card>
      </Col> 
      </Row> 
    </Container>
    <br/>
    <br/>
  </div>
  ); 
};

export default Home;