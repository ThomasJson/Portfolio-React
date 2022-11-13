import "./loginModal.scss";
import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
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
        <Modal.Title id="contained-modal-title-vcenter">
          Se connecter
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>

        <form className="coL gap-3 mb-2">
          <input type="text" placeholder="Adresse e-mail" name="email" />
          <input type="password" placeholder="Mot de passe" name="mp" />
          <Button type="submit">Se connecter</Button>
        </form>
        <NavLink to="/">Mot de passe oublié ?</NavLink>

      </Modal.Body>
    </Modal>
  );
};

export default LoginModal;
