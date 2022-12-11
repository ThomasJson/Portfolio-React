import "./footer.scss";
import React from "react";
import { Container } from "react-bootstrap";
import { BsFacebook, BsInstagram, BsGithub } from "react-icons/bs";
import { SiTiktok, SiDiscord } from "react-icons/si";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <p className="copyright">© 2022 Copyright: Tom Pearson</p>

      <Container fluid className="socials-bloc">
        <NavLink to="/">
          <Container className="socials">
            <BsFacebook />
          </Container>
        </NavLink>

        <NavLink to="/">
          <Container className="socials">
            <SiDiscord />
          </Container>
        </NavLink>

        <NavLink to="/">
          <Container className="socials">
            <BsInstagram />
          </Container>
        </NavLink>

        <NavLink to="/">
          <Container className="socials">
            <BsGithub />
          </Container>
        </NavLink>

        <NavLink to="/">
          <Container className="socials">
            <SiTiktok />
          </Container>
        </NavLink>
      </Container>

      <p className="inspired">Inspired by <span className="jack bold">Jack</span></p>
    </footer>
  );
};

export default Footer;
