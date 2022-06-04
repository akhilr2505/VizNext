import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Card } from "react-bootstrap";
import { useNavigate } from "react-router";
import {Navbar,Container,Nav} from "react-bootstrap"
import image1 from '../images/image1.jpg';
import {Routes , Route} from 'react-router-dom';
import {Link} from 'react-router-dom';
import "./LandingPage.css"
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';
import donations from '../images/donations.jpg';
import visualize from '../images/visualize.png';
import tracking from '../images/tracking.png';
import donations1 from '../images/donations1.png';
import { FaEnvelope,FaPhoneAlt } from "react-icons/fa";
import visualize1 from '../images/visualize1.png';
import eventman from '../images/eventman.png';
import cfglogo from '../images/cfglogo.png';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleLogin = async () => {
      try {

        navigate("/login");
      } catch (error) {
        console.log(error.message);
      }
    };

    const handleSignup = async () => {
      try {
        
        navigate("/signup");
      } catch (error) {
        console.log(error.message);
      }
    };
  return (
    <div className='landingPage'>
        
        
      
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">#Name</Navbar.Brand>
  
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      
      
    </Nav>
    <Nav>
      <Nav.Link >
            <Button className="authButtons" variant="primary" onClick={handleLogin} id='btn'>
              Login
            </Button>
      </Nav.Link>
      <Nav.Link >
            <Button className="authButtons" variant="primary" onClick={handleSignup} id='btn'>
              Signup
            </Button>
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
      
        <div 
          className="site-layout-background"
          style={{ padding: 24, textAlign: "center" }}
        >
          <div style={{ float: "right", marginRight: "2rem" }}>
            <img
              src={cfglogo}
              alt=""
            /></div>
          </div>
          <h1 
            style={{
              fontSize: "4rem",
              fontFamily: "Montserrat",
              fontWeight: "bold",
              marginTop: "0px",
              position: "relative",
            }}
          >
           United Way Bengaluru 
          </h1>
         
          





    <div>
      <img src={image1} className='w-100' alt="" />
    </div>


    <div className='about'>
      <h2 className='ahead'>ABOUT US</h2>
        <div>
          <p>The Process of Tracking the progress of the programs is difficult and time takeing.</p>
          <div>
            <h3>We for United Way Bengaluru will the answer to this.</h3>
            <p>So we innovate by VISUALIZE THE DATA FOR EASE AND CONSUPTION.
              <br></br>This automate solution which would track the progress tracking for the management term to visulaze the data and track it.</p>
          </div>
        </div>
    </div>
    
    <div className='cards1 '>

    <div className='container d-flex mx-auto '>
    <Card style={{ width: '18rem' }} className='c1' >
      <Card.Img variant="top" src={donations1} />
      <Card.Body>
          <Card.Title>DONATIONS</Card.Title>
        <Card.Text>
          Your donation might change to a cause.
        </Card.Text>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }} className='c1'>
      <Card.Img variant="top" src={tracking} />
      <Card.Body>
          <Card.Title>TRACKING</Card.Title>
        <Card.Text>
          Tracking the products and understand the status of the program!!
        </Card.Text>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }} className='c1'>
      <Card.Img variant="top" src={visualize1} />
      <Card.Body>
          <Card.Title>VISUALIZE</Card.Title>
        <Card.Text>
          visulazing the progress achieved in the particular tasks.
        </Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }} className='c1'>
      <Card.Img variant="top" src={eventman} />
      <Card.Body>
          <Card.Title>Event Coordinator</Card.Title>
        <Card.Text>
            Managing the programs and including identifiers.
        </Card.Text>
      </Card.Body>
    </Card>

    </div>
    </div>

    <footer className='f1 '>
      <div className='canter'>
        <div className="">
        <FaEnvelope />
          <p>Admin@gmail.com</p>
        </div>
        <div className="">
          <FaPhoneAlt />
          <p>9767797133</p>
        </div>
        <div className="">
            <h5>Address</h5>
            <p>Building No. 5, 3rd Floor,
            Crimson Court,<br></br>
            Jeevan Bima Nagar Main Road,<br></br>
            HAL 3rd Stage, Bengaluru,<br></br>
              Karnataka 560075</p>
        </div>
        </div>
      </footer>
    
    

    </div>
  )
}

export default LandingPage;