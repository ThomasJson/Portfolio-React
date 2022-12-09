import "./footer.scss";
import React from "react";
import { Container } from "react-bootstrap";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { SiTiktok } from "react-icons/si";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <p className="copyright">© 2022 Copyright: PY Thomas</p>

      <Container fluid className="socials-bloc">
        <NavLink to="/">
          <Container className="socials">
            <BsFacebook />
          </Container>
        </NavLink>

        <NavLink to="/">
          <Container className="socials">
            <BsInstagram />
          </Container>
        </NavLink>

        <NavLink to="/">
          <Container className="socials">
            <SiTiktok />
          </Container>
        </NavLink>
      </Container>

      <p className="inspired">Inspiration from ...</p>
    </footer>
  );
};

export default Footer;
