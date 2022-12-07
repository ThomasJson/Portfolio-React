import "./navBar.scss";
import React, { useContext, useState, useEffect } from "react";
import { Button, Container, Nav } from "react-bootstrap";
import { BiLogInCircle, BiUserPlus } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import OffCanvas from "./OffCanvas";

const NavBar = () => {
  const [pseudo, setPseudo] = useState(null);
  console.log("pseudo:", pseudo);

  const { auth } = useContext(AuthContext);

  useEffect(() => {
    fetch("http://portfolio-api/app_user/" + auth.id, {
      method: "POST",
      body: JSON.stringify({
        with: ["account"],
      }),
    })
      .then((resp) => {
        return resp.json();
      })

      .then((json) => {
        setPseudo(json);
      });
  }, [auth]);

  return (
    <>
      <Container fluid className="header">
        <Container className="name-nav gap-4">
          <h2 className="name">Tom pearson</h2>

          <Nav className="navBar gap-4">
            {auth.role === 4 && <NavLink to="/admin">Admin</NavLink>}
            <NavLink to="/">Home</NavLink>
            <NavLink to="/blog">Blog</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </Nav>
        </Container>

        <Container fluid className="btn-bloc">
          <Container fluid className="login-bloc">
            {auth.role > 0 && (
              <NavLink to="/account">
                <Button className="btn-spacing">
                  {pseudo?.data[0]?.with[0].pseudo}
                </Button>
              </NavLink>
            )}

            {auth.role < 1 && (
              <NavLink to="/login">
                <Button className="btn-spacing btn-style">
                  <BiLogInCircle />
                </Button>
              </NavLink>
            )}

            {auth.role < 1 && (
              <NavLink to="/register">
                <Button className="btn-spacing btn-style2">
                  <BiUserPlus />
                </Button>
              </NavLink>
            )}
          </Container>
          <OffCanvas placement={"end"} />
        </Container>
      </Container>
    </>
  );
};

export default NavBar;
