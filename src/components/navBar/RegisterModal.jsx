import "./registerModal.scss";
import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";

const RegisterModal = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">S'inscrire</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form className="coL">
          <Container className="rOw betWeen">
            <input
              className="input-spacing mb-3"
              type="text"
              placeholder="Prénom"
              name="firstName"
            />
            <input
              className="input-spacing mb-3"
              type="text"
              placeholder="Nom de famille"
              name="lastName"
            />
          </Container>
          <input
            className="mb-3"
            type="text"
            placeholder="Adresse e-mail"
            name="email"
          />
          <input
            className="mb-3"
            type="password"
            placeholder="Mot de passe"
            name="mp"
          />
          <label htmlFor="birthday">Date de naissance</label>
          <input
            className="mb-3 letter-spacing"
            type="date"
            id="birthday"
            name="birthday"
          ></input>

          {/* <label htmlFor="sexe">Sexe</label>
          <Container className="rOw betWeen margin-bottom">
            <Container className="rOw align-center input-spacing border">
              <label htmlFor="">Homme</label>
              <input type="radio" name="sexe" value="Homme" />
            </Container>
            <Container className="rOw align-center input-spacing border">
              <label htmlFor="">Femme</label>
              <input type="radio" name="sexe" value="Femme" />
            </Container>
          </Container> */}

          <Button type="submit">S'inscrire</Button>
        </form>
      </Modal.Body>
      {/* <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer> */}
    </Modal>
  );
};

export default RegisterModal;