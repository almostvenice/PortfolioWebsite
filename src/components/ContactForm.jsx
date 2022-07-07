
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FormGroup, Label, Input, Button, Form, FormText, Row, Col } from "reactstrap";
import "./contactForm.css";
import {Player, Controls} from '@lottiefiles/react-lottie-player';
function ContactForm() {
  return (


    <div style={{
      display: "block",
      width: 550,
      height: 610,
      padding: 30
    }} 
    className="bor"
    >
        
   
      <Player 
       id='lottiePlayer'
       autoplay
       loop
       src="https://assets1.lottiefiles.com/packages/lf20_gaplvsns.json"
       style={{ height: '150px', width: '150px', float: '', }}
>
    <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
</Player>
  <h5 className="text-white text-center">Contact Me For An Interview</h5>
        <Form >
          <FormGroup>
            <Label htmlFor="name" className="text-white">
              
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
             
            </Label>
            <Input
              type="email"
              name="email"
              id="emailField"
              placeholder="Enter your email"
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="message" className="text-white"></Label>
            <Input type="textarea" name="text" id="message" rows="5" cols='40' placeholder="Tell Me About The Opportunity" />
          </FormGroup>
         <Row className="rb">
          
          <Button className="fb" style={{ }}>Submit</Button>
        
          </Row>
        </Form>
      </div>
  );
}

export default ContactForm;
