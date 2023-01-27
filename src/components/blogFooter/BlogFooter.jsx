import "./blogFooter.scss";
import React from "react";
import { Container } from "react-bootstrap";
import { BsController, BsCurrencyDollar } from "react-icons/bs";
import { MdDeveloperMode } from "react-icons/md";
import { NavLink } from "react-router-dom";

const BlogFooter = () => {
  return (
    <footer>
      <p className="copyright">© 2022 Copyright: Tom Pearson</p>

      <Container fluid className="socials-bloc">
        <NavLink to="/">
          <Container className="socials">
            <BsController className="controller-color"/>
          </Container>
        </NavLink>

        <NavLink to="/">
          <Container className="socials">
            <BsCurrencyDollar className="dollar-color" />
          </Container>
        </NavLink>

        <NavLink to="/">
          <Container className="socials">
            <MdDeveloperMode className="dev-color" />
          </Container>
        </NavLink>

      </Container>

      <p className="inspired">
        Inspired by <span className="jack bold">Jack</span>
      </p>
    </footer>
  );
};

export default BlogFooter;
