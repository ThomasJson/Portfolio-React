import "./adminScreen.scss";
import React from "react";
import { Container } from "react-bootstrap";
// import { NavLink } from "react-router-dom";
import Footer from "../../components/footer/Footer";

function AdminScreen() {
  return (
    <>
      <main>
        <Container fluid className="center-bloc">
          <div fluid className="admin-bloc">
            <h2 className="admin-title mb-4">God Mode</h2>

            <Container fluid className="admin-nav gap-3">
              <button className="btn-spacing btn btn-primary btn-style">
                Gestion des Utilisateurs
              </button>

                <button className="btn-spacing btn btn-primary btn-style">
                  Gestion des Articles
                </button>

              <button className="btn-spacing btn btn-primary btn-style">
                Modération des Coms
              </button>
            </Container>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
export default AdminScreen;
