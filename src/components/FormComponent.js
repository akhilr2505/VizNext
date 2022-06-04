import { React } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./FormComponent.css";
export const FormComponent = () => {
  return (
    <div
      style={{
        display: "block",
        width: 700,
        padding: 30,
        margin: "10px auto",
      }}
    >
      <h4 style={{ margin: "20px auto" }}>Donation Form</h4>
      <Form>
        <Form.Group className="formInput">
          <Form.Label>Enter your full name:</Form.Label>
          <Form.Control type="text" placeholder="Enter your full name" />
        </Form.Group>
        <Form.Group className="formInput">
          <Form.Label>Enter your email address:</Form.Label>
          <Form.Control type="email" placeholder="Enter your email address" />
        </Form.Group>
        <Form.Group className="formInput">
          <Form.Label>Phone Number:</Form.Label>
          <Form.Control type="number" placeholder="Enter your Phone Number" />
        </Form.Group>
        <Form.Group className="formInput">
          <Form.Label>Enter your donation amount:</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter your donation amount"
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="form-button">
          Submit Donation
        </Button>
      </Form>
    </div>
  );
};
