import "./loginScreen.scss";
import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import { useNavigate, NavLink } from "react-router-dom";
import { useState } from "react";
import doFetch from "../../helpers/fetchHelper";
import { AuthContext } from "../../contexts/AuthContext";
import { deleteCookie, setCookie } from "../../helpers/cookieHelper";
import { Container } from "react-bootstrap";
import Footer from "../../components/footer/Footer";

const LoginScreen = () => {
  const { setAuth } = useContext(AuthContext);

  const [valid, setValid] = useState({ email: false, password: false });
  console.log("valid:", valid);

  const navigate = useNavigate();

  const validForm = (jsonData) => {
    const isValid = { email: false, password: false };

    const emailInput = document.getElementById("email-input");
    const emailPattern = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (emailPattern.test(emailInput.value)) {
      isValid.email = true;
    }

    const passwordInput = document.getElementById("password-input");
    const passwordPattern = /^(?=.*[A-Z]).{6,}$/;
    if (passwordPattern.test(passwordInput.value)) {
      isValid.password = true;
    }

    setValid(isValid);

    return isValid.email === true && isValid.password === true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const jsonData = Object.fromEntries(formData.entries());
    console.log(jsonData);

    if (!validForm(jsonData)) {
      return;
    }

    const { data } = await doFetch("auth/login", {
      method: "POST",
      body: JSON.stringify(jsonData),
    });
    console.log("data:", data);

    if (data?.data?.result) {
      setAuth({ role: +data.data?.role, id: data.data?.id });
      setCookie("blog", data.data?.token, { "max-age": 60 * 60 * 24 });
      navigate("/account");
    } else {
      setAuth({ role: 0, id: "0" });
      deleteCookie("blog");
    }
  };
  return (
    <>
      <main>
        <Container fluid className="center-bloc">
          <Container fluid className="login-section">
            <h2 className="mb-4">Connexion</h2>
            <form
              onSubmit={handleSubmit}
              className="coL mb-2 gap-3 form-spacing"
              noValidate
            >
              <input
                id="email-input"
                type="email"
                placeholder="Adresse e-mail"
                name="mail"
                autoComplete="off"
                onInput={() => {
                  const input = document.getElementById("email-input");
                  input.classList.add("onInput");
                }}
              />
              <input
                id="password-input"
                type="password"
                placeholder="Mot de passe"
                name="password"
                onInput={() => {
                  const input = document.getElementById("password-input");
                  input.classList.add("onInput");
                }}
              />
              <Button type="submit" className="btn-style no-radius w-100">
                Se connecter
              </Button>
              <NavLink to="/">Mot de passe oublié ?</NavLink>
            </form>
          </Container>
        </Container>
      </main>
      <Footer/>
    </>
  );
};

export default LoginScreen;
