import "./navBar.scss";
import React, { useContext, useState, useEffect } from "react";
import { Button, Container, Nav } from "react-bootstrap";
import { BiLogInCircle, BiUserPlus } from "react-icons/bi";
// import { FcElectroDevices } from "react-icons/fc";
import { AiOutlineHome } from "react-icons/ai";
import { BiPlanet, BiPaperPlane, BiCrown } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import OffCanvas from "./OffCanvas";
import { getCookie } from "../../helpers/cookieHelper";
// import video from "./T_glitch.flv";

const NavBar = () => {
  const [pseudo, setPseudo] = useState(null);
  console.log("pseudo:", pseudo);

  const { auth } = useContext(AuthContext);

  useEffect(() => {
    fetch("http://portfolio-api/app_user/" + auth.id, {
      method: "POST",
      headers: {
        Authorization: getCookie("blog")
      },
      body: JSON.stringify({
        with: ["account"],
      }),
    })
      .then((resp) => {
        return resp.json();
      })

      .then((json) => {
        setPseudo(json);
      });
  }, [auth]);

  return (
    <>
      <Container fluid className="header">
        <Container className="name-nav">
          <h2 className="name">T</h2>

          {/* <div>
            <video controls>
              <source src={video} type="video/mp4" />
            </video>
          </div> */}

          <Nav className="navBar">
            {auth.role === 4 && (
              <NavLink to="/admin" className="menu-Itemz">
                <BiCrown />
              </NavLink>
            )}
            <NavLink to="/" className="menu-Itemz">
              <AiOutlineHome />
            </NavLink>
            <NavLink to="/blog" className="menu-Itemz">
              <BiPlanet />
            </NavLink>
            <NavLink to="/contact" className="menu-Itemz">
              <BiPaperPlane />
            </NavLink>
          </Nav>
        </Container>

        <Container fluid className="btn-bloc">
          <Container fluid className="login-bloc">
            {auth.role > 0 && (
              <NavLink to="/account">
                <Button className="btn-spacing btn-style bold">
                  {pseudo?.data[0]?.with[0].pseudo}
                </Button>
              </NavLink>
            )}

            {auth.role < 1 && (
              <NavLink to="/login">
                <Button className="btn-spacing btn-style">
                  <BiLogInCircle />
                </Button>
              </NavLink>
            )}

            {auth.role < 1 && (
              <NavLink to="/register">
                <Button className="btn-spacing btn-style">
                  <BiUserPlus />
                </Button>
              </NavLink>
            )}
          </Container>
          <OffCanvas placement={"end"} />
        </Container>
      </Container>
    </>
  );
};

export default NavBar;
