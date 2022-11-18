import "./loginModal.scss";
import React, { useContext } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useNavigate, NavLink } from "react-router-dom";
import { useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { deleteCookie, setCookie } from "../../helpers/cookieHelper";
import doFetch from "../../helpers/fetchHelper";

const LoginModal = (props) => {

  // const [show, setShow] = useState(true);
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  const { setAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const [valid, setValid] = useState({ email: false, password: false });

  const validForm = (jsonData) => {
    const isValid = { email: false, password: false };

    const emailInput = document.getElementById("email-input");
    const emailPattern = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;

    if (emailPattern.test(emailInput.value)) {
      isValid.email = true;
    }

    // if (!emailPattern.test(emailInput.value)) {
    //   const infos = document.getElementById('infoWarning');
    //   infos.classList.add('d-flex');
    // }

    const passwordInput = document.getElementById("password-input");
    const passwordPattern = /^(?=.*[A-Z]).{6,}$/;
    if (passwordPattern.test(passwordInput.value)) {
      isValid.password = true;
    }

    setValid(isValid);

    return isValid.email === true && isValid.password === true;
  };

  // const btn = document.querySelector('.btn-login');
  // btn.addEventListener('click', () => {
  //   const infos = document.getElementById('infoWarning');
  //   infos.classList.add('d-flex');
  // })

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
      setCookie("blog", data.data?.token, { "max-age": 60 * 60 * 1 });
      navigate("/account");
    } else {
      setAuth({ role: 0, id: "0" }); // "0" ???
      deleteCookie("blog");
    }
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      // show={show}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Se connecter
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmit} className="coL gap-3 mb-2" noValidate>
          <input
            id="email-input"
            type="email"
            placeholder="Adresse e-mail"
            name="mail"
          />
          {/* <i id="infoWarning" className={"text-danger d-none" + (valid.email ? " d-none" : "")}>
            * Must be a valid email address
          </i> */}
          <input
            id="password-input"
            type="password"
            placeholder="Mot de passe"
            name="password"
          />
          {/* <i className={"text-danger" + (valid.password ? " d-none" : "")}>
            * 6 characters including a capital letter
          </i> */}
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
