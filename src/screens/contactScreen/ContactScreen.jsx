import "./contactScreen.scss";
import React from "react";
import Form from "react-bootstrap/Form";
import { Button, Container } from "react-bootstrap";
import doFetch from "../../helpers/fetchHelper";

const ContactScreen = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const nameValue = document.getElementById("name-contact").value;
    const emailValue = document.getElementById("email-contact").value;
    const subjectValue = document.getElementById("subject-contact").value;
    const messageValue = document.getElementById("message-contact").value;

    const { data } = await doFetch("test", {
      method: "POST",
      body: JSON.stringify({
        name: nameValue,
        email: emailValue,
        subject: subjectValue,
        message: messageValue,
      }),
    });

    console.log("data:", data);
  };

  return (
    <main>
      <Container fluid className="contact-bloc">
        <Form className="contact-form" onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Control type="text" placeholder="Name" id="name-contact" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control type="email" placeholder="Email" id="email-contact" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="Subject"
              id="subject-contact"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              as="textarea"
              placeholder="Message"
              rows={6}
              id="message-contact"
            />
          </Form.Group>
          <Button type="submit">Envoyer</Button>
        </Form>
      </Container>
    </main>
  );
};

export default ContactScreen;
