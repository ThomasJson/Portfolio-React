import "./offCanvas.scss";
import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { AiOutlineMenu } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";
import { AuthContext } from "../../contexts/AuthContext";

const OffCanvas = ({ name, ...props }) => {
  const [show, setShow] = useState(false);
  const { auth } = useContext(AuthContext);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button id="burger-menu" className="btn-spacing" onClick={handleShow}>
        <AiOutlineMenu />
      </Button>
      <Offcanvas className="gap-3" show={show} onHide={handleClose} {...props}>
        <Offcanvas.Body>
          <Nav className="burger-nav gap-3">
            {auth.role === 4 && (
              <NavLink to="/admin" className="me-2">
                Admin
              </NavLink>
            )}
            <NavLink to="/" onClick={handleClose}>
              Home
            </NavLink>
            <NavLink to="/blog" onClick={handleClose}>
              Blog
            </NavLink>
            <NavLink to="/contact" onClick={handleClose}>
              Contact
            </NavLink>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default OffCanvas;
