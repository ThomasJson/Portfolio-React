import "./loginNav.scss";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const LoginNav = () => {
  return (
    <div className="login-nav pt-4">
      <Link to="/admin" className="me-2">
        <Button className="btn btn-primary">Admin</Button>
      </Link>
      <Link to="/account" className="me-2">
        <Button className="btn btn-primary">Account</Button>
      </Link>
      <Link to="/logged" className="me-2">
        <Button className="btn btn-primary">Logged</Button>
      </Link>
    </div>
  );
};

export default LoginNav;
