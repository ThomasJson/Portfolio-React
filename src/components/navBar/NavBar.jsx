import "./navBar.scss";
import { Button, Container, Nav } from "react-bootstrap";
import { BiLogInCircle, BiUserPlus } from "react-icons/bi";
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
        </Container>

        {/* RIGHT */}
        <Container fluid className="btn-bloc">

          <Nav className="navBar gap-2">
            <NavLink>Home</NavLink>
            <NavLink>Blog</NavLink>
            <NavLink>Contact</NavLink>
          </Nav>

          <Container fluid className="login-bloc">
            <Button className="btn-spacing">
              <BiLogInCircle />
            </Button>

            <Button className="btn-spacing">
              <BiUserPlus />
            </Button>
          </Container>

          <OffCanvas placement={"end"} />
        </Container>
      </Container>
    </>
  );
};

export default NavBar;
