
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FormGroup, Label, Input, Button, Form, FormText } from "reactstrap";
function ContactForm() {
  return (
    <div
      style={{
        display: "block",
        width: 550,
        padding: 30,
      }}
    >
      <h5 className="text-white">Contact Me For An Interview</h5>
      <Form>
        <FormGroup>
          <Label htmlFor="name" className="text-white">
            NAME:
          </Label>
          <Input
            name="name"
            type="text"
            id="name"
            placeholder="Name of employer"
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="emailField" className="text-white">
            EMAIL:
          </Label>
          <Input
            type="email"
            name="email"
            id="emailField"
            placeholder="Enter your email"
          />
        </FormGroup>
        <FormGroup>
        <Label htmlFor="message" className="text-white">Message:</Label>
          <Input type="textarea" name="text" id="message" rows="5" cols='40' placeholder="Tell Me About The Oppertunity" />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    </div>
  );
}

export default ContactForm;
