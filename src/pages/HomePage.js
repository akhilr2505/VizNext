import React, {useState, useEffect} from "react";
import { useUserAuth } from "../context/UserAuthContext";
import {db} from "../firebase"
import { getDoc, doc} from "firebase/firestore"
import NavbarComponent from "../components/NavbarComponent";
import "./HomePage.css"
import undraw_Investing_re_bov7 from "../images/undraw_Investing_re_bov7.png"
import undraw_Data_trends_re_2cdy from "../images/undraw_Data_trends_re_2cdy.png"
import undraw_Work_from_anywhere_re_s2i6 from "../images/undraw_Work_from_anywhere_re_s2i6.png"
import undraw_Website_builder_re_ii6e from "../images/undraw_Website_builder_re_ii6e.png"
import { FaEnvelope,FaPhoneAlt } from "react-icons/fa";
import "./LandingPage.css"
import { Button,Card } from "react-bootstrap";
import image1 from '../images/image1.jpg';

const HomePage = () => {
  const { user } = useUserAuth();
  const [userDetails, setUserDetails] = useState([]);

  useEffect(() => {
    const getUserDetails = async () => {
              const snap = await getDoc(doc(db, 'users', user.email))
              setUserDetails(snap.data())
            }
    getUserDetails()
    console.log(userDetails)
  }, [])

 
  
    return (
      <>
        <NavbarComponent />
        <div className='landingPage'>
        
        
      
   
          
        <div className='startDiv'>
        <div className='secondDiv'>
        <div className='allText'>
        <p className='welcomeText'>Welcome to .........!</p>
          <p className='otherText'>An application that can accurately measure progress of each program, visualise impact metrics and provide means of recording field data through specifically catered forms.</p>
        </div>
        
          <img src={image1} className='startImage' alt="" />
        </div>
      
         
        </div>
        
          
           
            
  
  
  
  
  
      
      
      <div className=''>
  
      <div className='cardList'>
      <Card className='card' >
      <Card.Body className='cardBody'>
            <Card.Title className='cardTitle'>Donation Tracking</Card.Title>
          <Card.Text>
            Track exactly where your donations are being utilised and monitor the impact being made through your donations.
          </Card.Text>
        </Card.Body>
        <Card.Img variant="top" src={undraw_Investing_re_bov7} className='cardImage'/>
        
      </Card>
  
      <Card className='card'>
        <Card.Img variant="top" src={undraw_Website_builder_re_ii6e} className='cardImage'/>
        <Card.Body className='cardBody'>
            <Card.Title className='cardTitle'>Program Template Creation</Card.Title>
          <Card.Text>
            Create templates specifically catered to each program by choosing the desired indicators and creating milestones to effectively measure the progress of each program. 
          </Card.Text>
        </Card.Body>
      </Card>
  
      <Card className='card'>
      <Card.Body className='cardBody'>
            <Card.Title className='cardTitle'>Visualisations</Card.Title>
          <Card.Text>
            Get a deep understanding of the impact made by each program through various graphs and visualisations. Understand the data in depth through these graphical representations.
          </Card.Text>
        </Card.Body>
        <Card.Img variant="top" src={undraw_Data_trends_re_2cdy} className='cardImage'/>
        
      </Card>
      <Card className='card'>
        <Card.Img variant="top" src={undraw_Work_from_anywhere_re_s2i6} className='cardImage'/>
        <Card.Body className='cardBody'>
            <Card.Title className='cardTitle'>Field Coordinator Provisions</Card.Title>
          <Card.Text>
              Provisions for the field coordinator to enter data on a regular basis through forms that have been specifically created for the given
          </Card.Text>
        </Card.Body>
      </Card>
  
      </div>
      
      </div>
  
      
      
      
  
      </div>
      </>
    );
  
  
};

export default HomePage;