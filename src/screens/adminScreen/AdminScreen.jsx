import "./adminScreen.scss";
import React from "react";
import { Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Footer from "../../components/footer/Footer";

function AdminScreen() {
  return (
    <>
      <main>
        <Container fluid className="center-bloc">
          {/* <div className="align-center"> */}
          <div fluid className="admin-bloc">
            <h2 className="admin-title">God Mode</h2>

            <Container fluid className="admin-nav gap-3">
              <button className="btn-spacing btn btn-primary">
                Gestion des Utilisateurs
              </button>

              {/* <NavLink to="/admin/modifArticle"> */}
                <button className="btn-spacing btn btn-primary">
                  Gestion des Articles
                </button>
              {/* </NavLink> */}

              <button className="btn-spacing btn btn-primary">
                Modération des Coms
              </button>
            </Container>
          </div>
        </Container>
        {/* </div> */}
      </main>
      <Footer />
    </>
  );
}
export default AdminScreen;
