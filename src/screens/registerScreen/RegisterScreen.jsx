import "./registerScreen.scss";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import doFetch from "../../helpers/fetchHelper";

const RegisterScreen = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const formInvalid = () => console.log("Erros", errors);

  const [msg, setMsg] = useState("");

  const formSubmit = async (formData) => {
    const { data } = await doFetch("auth/register", {
      method: "POST",
      body: JSON.stringify(formData),
    });
    console.log(data);
    setMsg(data?.data?.message);
  };

  return (
    <main>
      <Container fluid className="center-bloc">
        <Container fluid className="register-section">
        <h2>Inscription</h2>
          <form
            className="coL form-spacing"
            onSubmit={handleSubmit(formSubmit, formInvalid)}
            noValidate
          >
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
              placeholder="Pseudo *"
              name="pseudo"
              {...register("pseudo", { required: true, minLength: 3 })}
            />
            <input
              className="mb-3"
              type="email"
              placeholder="Adresse e-mail *"
              name="mail"
              {...register("mail", {
                required: true,
                pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/i,
              })}
            />
            <label htmlFor="birthday" className="mb-1 white">Date de naissance</label>
            <input
              className="mb-3 letter-spacing white"
              type="date"
              id="birthday"
              name="birthday"
            ></input>

            <Button type="submit" className="btn-style no-radius w-100">
              S'inscrire
            </Button>
          </form>
        </Container>
      </Container>
    </main>
  );
};

export default RegisterScreen;
