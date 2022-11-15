import "./loginModal.scss";
import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";

const LoginModal = (props) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const jsonData = Object.fromEntries(formData.entries());
    console.log(jsonData);
  };

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
        <form onSubmit={handleSubmit} className="coL gap-3 mb-2">
          <input
            id="email-input"
            type="email"
            placeholder="Adresse e-mail"
            name="login"
          />
          <input
            id="pass-input"
            type="password"
            placeholder="Mot de passe"
            name="password"
          />
          <Button type="submit" className="btn-login">
            Se connecter
          </Button>
        </form>
        <NavLink to="/">Mot de passe oublié ?</NavLink>
      </Modal.Body>
    </Modal>
  );
};

export default LoginModal;
