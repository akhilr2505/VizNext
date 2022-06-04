import React from 'react'
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import "./LandingPage.css"

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
    <h1>Landing Page</h1>
    <div className='loginSignupButtons'>
    <Button className="authButtons" variant="primary" onClick={handleLogin}>
          Login
    </Button>
    <Button className="authButtons" variant="primary" onClick={handleSignup}>
          Signup
    </Button>
    </div>
   
    </div>
  )
}

export default LandingPage