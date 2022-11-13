import "./contactScreen.scss";
import React from "react";
import Form from "react-bootstrap/Form";
import { Button, Container } from "react-bootstrap";

const ContactScreen = () => {
  return (
    <main>
     <Container className="contact-bloc">
      <Form className="contact-form" >
        <Form.Group className="mb-3">
          {/* <Form.Label>Name</Form.Label> */}
          <Form.Control type="text" placeholder="Name" />
        </Form.Group>
        <Form.Group className="mb-3">
          {/* <Form.Label>Email address</Form.Label> */}
          <Form.Control type="email" placeholder="Email" />
        </Form.Group>
        <Form.Group className="mb-3">
          {/* <Form.Label>Subject</Form.Label> */}
          <Form.Control type="text" placeholder="Subject" />
        </Form.Group>
        <Form.Group className="mb-3">
          {/* <Form.Label>Message</Form.Label> */}
          <Form.Control as="textarea" placeholder="Message" rows={6} />
        </Form.Group>
        <Button>Envoyer</Button>
      </Form>
      </Container> 
    </main>
  );
};

export default ContactScreen;
