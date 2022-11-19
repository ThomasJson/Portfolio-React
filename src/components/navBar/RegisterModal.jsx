import "./registerModal.scss";
import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";
import { useForm } from "react-hook-form";

const RegisterModal = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const formInvalid = () => console.log("Erros", errors);

  const formSubmit = (data) => console.log("Validated Data", data);

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
        <form
          className="coL"
          onSubmit={handleSubmit(formSubmit, formInvalid)}
          noValidate
        >
          <Container className="rOw betWeen">
            <input
              className="input-spacing mb-3"
              type="text"
              placeholder="Prénom"
              name="firstName"
              {...register("Prénom", { required: true, minLength: 3 })}
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
            {...register("email", { required: true, pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/i })}
          />
          {/* <input
            className="mb-3"
            type="password"
            placeholder="Mot de passe"
            name="mp"
          /> */}
          <label htmlFor="birthday">Date de naissance</label>
          <input
            className="mb-3 letter-spacing"
            type="date"
            id="birthday"
            name="birthday"
          ></input>

          <Button type="submit" className="btn-register">
            S'inscrire
          </Button>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default RegisterModal;
