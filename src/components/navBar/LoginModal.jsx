import './loginModal.scss';
import React from 'react';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const LoginModal = (props) => {
    return (
        <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Se connecter</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <form className="coL gap-3">
              <input type="text" placeholder="Adresse e-mail" name="email" />
              <input
                type="password"
                placeholder="Mot de passe"
                name="mp"
              />
              <NavLink to="/home">
                <Button type="submit">Se connecter</Button>
              </NavLink>
            </form>

            <a href="/">Mot de passe oublié ?</a>
      </Modal.Body>
      {/* <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer> */}
    </Modal>
    );
};

export default LoginModal;