import "./registerScreen.scss";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import doFetch from "../../helpers/fetchHelper";
import Footer from "../../components/footer/Footer";

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
    <>
      {" "}
      <main>
        <Container fluid className="center-bloc">
          <Container fluid className="register-section">
            <h2 className="mb-4">Inscription</h2>
            <form
              className="coL form-spacing"
              onSubmit={handleSubmit(formSubmit, formInvalid)}
              noValidate
            >
              <Container className="rOw betWeen">
                <input
                  id="firstName-input"
                  className="input-spacing mb-3"
                  type="text"
                  placeholder="Prénom"
                  name="firstName"
                  autoComplete="off"
                  onInput={() => {
                    const input = document.getElementById("firstName-input");
                    input.classList.add("onInput");
                  }}
                />
                <input
                  id="lastName-input"
                  className="input-spacing mb-3"
                  type="text"
                  placeholder="Nom de famille"
                  name="lastName"
                  autoComplete="off"
                  onInput={() => {
                    const input = document.getElementById("lastName-input");
                    input.classList.add("onInput");
                  }}
                />
              </Container>
              <input
                id="pseudo-input"
                className="mb-3"
                type="text"
                placeholder="Pseudo *"
                name="pseudo"
                autoComplete="off"
                onInput={() => {
                  const input = document.getElementById("pseudo-input");
                  input.classList.add("onInput");
                }}
                {...register("pseudo", { required: true, minLength: 3 })}
              />
              <input
                id="mailAdress-input"
                className="mb-3"
                type="email"
                placeholder="Adresse e-mail *"
                name="mail"
                autoComplete="off"
                onInput={() => {
                  const input = document.getElementById("mailAdress-input");
                  input.classList.add("onInput");
                }}
                {...register("mail", {
                  required: true,
                  pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/i,
                })}
              />
              <label htmlFor="birthday" className="mb-1 white">
                Date de naissance
              </label>
              <input
                className="mb-3 letter-spacing white"
                type="date"
                id="birthday"
                name="birthday"
                autoComplete="off"
                onInput={() => {
                  const input = document.getElementById("birthday");
                  input.classList.add("onInput");
                }}
              ></input>

              <Button type="submit" className="btn-style no-radius w-100">
                S'inscrire
              </Button>
            </form>
          </Container>
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default RegisterScreen;
