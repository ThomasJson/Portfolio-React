import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { AuthContext } from "../../contexts/AuthContext";

const LoginNav = () => {
  const { auth } = useContext(AuthContext);

  return (
    <div className="login-nav pt-4 pb-4">
      {auth.role === 4 && (
        <Link to="/admin" className="me-2">
          <Button className="btn btn-primary">Admin</Button>
        </Link>
      )}

      {auth.role > 0 && (
        <Link to="/account" className="me-2">
          <Button className="btn btn-primary">Account</Button>
        </Link>
      )}

      {auth.role > 0 && (
        <Link to="/logged" className="me-2">
          <Button className="btn btn-primary">Logged</Button>
        </Link>
      )}
    </div>
  );
};

export default LoginNav;
