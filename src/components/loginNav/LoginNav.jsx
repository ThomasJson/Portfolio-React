import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { AuthContext } from "../../contexts/AuthContext";
import { deleteCookie } from "../../helpers/cookieHelper";

const LoginNav = () => {
  const { auth } = useContext(AuthContext);
  const { setAuth } = useContext(AuthContext);

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

      {auth.role > 0 && (
        <Button
          className="btn btn-primary"
          onClick={(e) => {
            setAuth({ role: 0, id: 0 });
            deleteCookie("blog");
            window.location.href = "/";
          }}
        >
          Log out
        </Button>
      )}
    </div>
  );
};

export default LoginNav;
