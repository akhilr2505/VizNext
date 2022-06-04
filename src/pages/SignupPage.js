import React from 'react'
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import "./SignupPage.css"

const SignupPage = () => {
    const navigate = useNavigate();
    const handleDonorLogin = async () => {
        try {

          navigate("/donorSignup");
        } catch (error) {
          console.log(error.message);
        }
      };
    const handleCoordinatorLogin = async () => {
        try {

          navigate("/coordinatorSignup");
        } catch (error) {
          console.log(error.message);
        }
      };
    const handleManagementLogin = async () => {
        try {

          navigate("/managementSignup");
        } catch (error) {
          console.log(error.message);
        }
      };

      const handleAdminLogin = async () => {
        try {
          
          navigate("/adminSignup");
        } catch (error) {
          console.log(error.message);
        }
      };
  return (
    <div className='signupPage'>
    <h1>Choose Type of Signup</h1>
    <div className='typeButtons'>
    <Button  className='typeButton' variant="primary" onClick={handleDonorLogin}>
          Donor
    </Button>
    <Button  className='typeButton' variant="primary" onClick={handleCoordinatorLogin}>
          Field Coordinator
    </Button>
    <Button  className='typeButton' variant="primary" onClick={handleManagementLogin}>
          Management
    </Button>
    <Button className='typeButton' variant="primary" onClick={handleAdminLogin}>
          Administrator
    </Button>
    </div>
  
    </div>
  )
}

export default SignupPage