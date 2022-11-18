import "./navBar.scss";
import React from "react";
import { Button, Container, Nav } from "react-bootstrap";
import { BiLogInCircle, BiUserPlus } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import OffCanvas from "./OffCanvas";
import RegisterModal from "./RegisterModal";
import LoginModal from "./LoginModal";

const NavBar = () => {
  const [modalRegister, setModalRegister] = React.useState(false);
  const [modalLogin, setModalLogin] = React.useState(false);

  return (
    <>
      <Container fluid className="header">

        <h1 className="name">Tom pearson</h1>

        <Nav className="navBar gap-2">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/blog">Blog</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </Nav>

        <Container fluid className="btn-bloc">
          <Container fluid className="login-bloc">
            <Button
              className="btn-spacing btn-login"
              onClick={() => setModalLogin(true)}
            >
              <BiLogInCircle />
            </Button>
            <LoginModal show={modalLogin} onHide={() => setModalLogin(false)} />

            <Button
              className="btn-spacing btn-register"
              onClick={() => setModalRegister(true)}
            >
              <BiUserPlus />
            </Button>
            <RegisterModal
              show={modalRegister}
              onHide={() => setModalRegister(false)}
            />
          </Container>

          <OffCanvas placement={"end"} />
        </Container>
      </Container>
    </>
  );
};

export default NavBar;
