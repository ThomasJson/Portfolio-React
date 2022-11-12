import "./offCanvas.scss";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { AiOutlineMenu } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";

const OffCanvas = ({ name, ...props }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button id="burger-menu" className="btn-spacing" onClick={handleShow}>
        <AiOutlineMenu />
      </Button>
      <Offcanvas className="gap-3" show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Navigation</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="burger-nav gap-3">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/blog">Blog</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default OffCanvas;
