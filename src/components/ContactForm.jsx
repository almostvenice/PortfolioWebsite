
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FormGroup, Label, Input, Button, Form, FormText } from "reactstrap";
import "./contactForm.css";
function ContactForm() {
  return (
      <div style={{
            display: "block",
            width: 550,
            height: 475,
            padding: 30
          }} 
          className="bor"
      >
        <h5 className="text-white text-center">Contact Me For An Interview</h5>
        <Form >
          <FormGroup>
            <Label htmlFor="name" className="text-white">
              NAME
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
              EMAIL
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
            <Input type="textarea" name="text" id="message" rows="5" cols='40' placeholder="Tell Me About The Opportunity" />
          </FormGroup>
          <Button style={{float: 'right'}}>Submit</Button>
        </Form>
      </div>
  );
}

export default ContactForm;
