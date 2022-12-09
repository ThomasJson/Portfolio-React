import "./contactScreen.scss";
import React from "react";
import Form from "react-bootstrap/Form";
import { Button, Container } from "react-bootstrap";
import doFetch from "../../helpers/fetchHelper";
import DisplayMap from "../../components/displayMap/DisplayMap";

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
      <Container fluid>
        <Container fluid className="contact-bloc">
          <Container fluid className="contact-section">
            <h2>Afin de me contacter</h2>
            {/* <p>
              Pour un premier contact professionel ou pour partager votre avis
              sur un article 😉
            </p> */}
            <Form className="contact-form" onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <input
                  type="text"
                  placeholder="Name"
                  id="name-contact"
                  autoComplete="off"
                  onInput={() => {
                    const input = document.getElementById("name-contact");
                    input.classList.add("onInput");
                  }}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <input
                  type="email"
                  placeholder="Email"
                  id="email-contact"
                  autoComplete="off"
                  onInput={() => {
                    const input = document.getElementById("email-contact");
                    input.classList.add("onInput");
                  }}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <input
                  type="text"
                  placeholder="Subject"
                  id="subject-contact"
                  autoComplete="off"
                  onInput={() => {
                    const input = document.getElementById("subject-contact");
                    input.classList.add("onInput");
                  }}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <textarea
                  placeholder="Message"
                  id="message-contact"
                  autoComplete="off"
                  rows="6"
                  onInput={() => {
                    const input = document.getElementById("message-contact");
                    input.classList.add("onInput");
                  }}
                />
              </Form.Group>
              <Button className="btn-style no-radius" type="submit">
                Envoyer
              </Button>
            </Form>
          </Container>
          <DisplayMap />
        </Container>
      </Container>
    </main>
  );
};

export default ContactScreen;
