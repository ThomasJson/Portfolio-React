import "./navBar.scss";
import React, { useContext } from "react";
import { Button, Container, Nav } from "react-bootstrap";
import { BiLogInCircle, BiUserPlus } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import OffCanvas from "./OffCanvas";
import RegisterModal from "./RegisterModal";
import LoginModal from "./LoginModal";
import useFetch from "../../hooks/useFetch";

const NavBar = () => {
  const [modalRegister, setModalRegister] = React.useState(false);
  const [modalLogin, setModalLogin] = React.useState(false);

  const { auth } = useContext(AuthContext);
  
  const { data } = useFetch("app_user/" + auth.id, {
    method: "POST",
    body: JSON.stringify({ with: ["account"] }),
  });
  
  console.log('auth:', auth);
  console.log("data:", data);

  return (
    <>
      <Container fluid className="header">
        <Container className="name-nav gap-4">
          <h2 className="name">Tom pearson</h2>

          <Nav className="navBar gap-4">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/blog">Blog</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </Nav>
        </Container>

        <Container fluid className="btn-bloc">
          <Container fluid className="login-bloc">

            {auth.role > 0 && (
              <Button className="btn-spacing">
                {data?.data[0]?.with[0]?.pseudo}
              </Button>
            )}

            {auth.role < 1 && (
              <Button
                className="btn-spacing btn-login"
                onClick={() => setModalLogin(true)}
              >
                <BiLogInCircle />
              </Button>
            )}

            <LoginModal show={modalLogin} onHide={() => setModalLogin(false)} />

            {auth.role < 1 && (
              <Button
                className="btn-spacing btn-register"
                onClick={() => setModalRegister(true)}
              >
                <BiUserPlus />
              </Button>
            )}

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
