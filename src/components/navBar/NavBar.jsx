import "./navBar.scss";
import { Button, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import OffCanvas from "./OffCanvas";

const NavBar = () => {
  return (
    <>
      <Container fluid className="header">

        {/* LEFT */}
        <Container fluid className="nameNav-bloc">
          <Container fluid className="name">
            <h1>Tom pearson</h1>
          </Container>

          <Nav className="navBar">
            <NavLink>Home</NavLink>
            <NavLink>Blog</NavLink>
            <NavLink>Contact</NavLink>
          </Nav>
        </Container>

        {/* RIGHT */}
        <Container fluid className="btn-bloc">
          <Container fluid className="login-bloc">
            <Button>Login</Button>
            <Button>Register</Button>
          </Container>

          <OffCanvas placement={"end"} />
        </Container>
      </Container>
    </>
  );
};

export default NavBar;
