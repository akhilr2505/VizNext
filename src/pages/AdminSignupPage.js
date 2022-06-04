import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useUserAuth } from "../context/UserAuthContext";
import {db} from "../firebase"
import {collection, getDocs, addDoc, setDoc, doc} from "firebase/firestore"
import "./SignupPage.css"

const AdminSignupPage = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const { signUp } = useUserAuth();
  const userCollectionRef = collection(db, "users")

  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password);
      // await addDoc(userCollectionRef, {id: email, role: "student"})
      // db.collection("users").doc(email).set({
      //   role: "student",
      //   hours: 10
      // })
      await setDoc(doc(db, "users", email), {
        role: "admin"
      })
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    < div className="signupPage">
      
        <h2 className="mb-3">Admin Signup</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit} className="form">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

            <Button variant="primary" type="Submit" className="signupButton">
              Sign up
            </Button>
          
        </Form>
      
      <div>
        Already have an account? <Link to="/login">Log In</Link>
      </div>
    </div>
  );
};

export default AdminSignupPage;