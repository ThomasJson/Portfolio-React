import "./accountScreen.scss";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { deleteCookie, getCookie } from "../../helpers/cookieHelper";
import { Button, Container } from "react-bootstrap";
import doFetch from "../../helpers/fetchHelper";
import Footer from "../../components/footer/Footer";


function AccountScreen() {
  const [appUser, setAppUser] = useState(null);
  const [newPseudo, setNewPseudo] = useState(false);
  const [newMail, setNewMail] = useState(false);

  const { auth, setAuth } = useContext(AuthContext);

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
        setAppUser(json);
      });
  }, [auth]);

  const handlePseudoSubmit = async (e) => {
    e.preventDefault();
    const value = document.getElementById("nouveau-pseudo").value;

    const { data } = await doFetch("account", {
      method: "PUT",
      body: JSON.stringify({
        items: [
          {
            Id_account: appUser?.data[0]?.with[0]?.Id_account,
            pseudo: value,
          },
        ],
      }),
    });
  };

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    const value = document.getElementById("nouveau-mail").value;

    const { data } = await doFetch("app_user", {
      method: "PUT",
      body: JSON.stringify({
        items: [
          {
            Id_app_user: auth.id,
            mail: value,
          },
        ],
      }),
    });
  };

  return (
    <>
      <main>
        <Container fluid className="center-bloc">
          <Container fluid className="params-section">
            <h2 className="letter-spacing mb-4">Paramètres du compte</h2>

            {/* ///////////// CHANGE PSEUDO ///////////////// */}
            <Container fluid className="parametres-bloc mt-2">
              <p className="white letter-spacing mb-2 text-align-center">Pseudo</p>
              <Container fluid className="infos-bloc">
                <Container fluid className="infos-data">
                  <p className="letter-spacing">
                    {appUser?.data[0]?.with[0].pseudo}
                  </p>
                </Container>
                <Button
                  className="btn-style no-radius btn-modif"
                  onClick={() => setNewPseudo(!newPseudo)}
                >
                  Modif
                </Button>
              </Container>
              {newPseudo && (
                <form onSubmit={handlePseudoSubmit} className="modif-data-bloc">
                  <input
                    type="text"
                    placeholder="Nouveau Pseudo"
                    id="nouveau-pseudo"
                    className="account-input"
                    autoComplete="off"
                    onInput={() => {
                      const input = document.getElementById("nouveau-pseudo");
                      input.classList.add("onInput");
                    }}
                  />
                  <Container fluid className="cancel-validate">
                    <Button
                      className="btn-style2 no-radius btn-xv"
                      onClick={() => setNewPseudo(!newPseudo)}
                    >
                      X
                    </Button>
                    <Button
                      className="btn-style no-radius btn-xv"
                      type="submit"
                    >
                      V
                    </Button>
                  </Container>
                </form>
              )}
            </Container>

            {/* ///////////// CHANGE EMAIL ///////////////// */}
            <Container fluid className="parametres-bloc mt-2">
              <p className="white letter-spacing mb-2 text-align-center">Mail</p>
              <Container fluid className="infos-bloc">
                <Container fluid className="infos-data">
                  <p className="letter-spacing">{appUser?.data[0]?.mail}</p>
                </Container>
                <Button
                  className="btn-style no-radius btn-modif"
                  onClick={() => setNewMail(!newMail)}
                >
                  Modif
                </Button>
              </Container>

              {newMail && (
                <form onSubmit={handleEmailSubmit} className="modif-data-bloc">
                  <input
                    type="text"
                    placeholder="Nouveau Mail"
                    id="nouveau-mail"
                    className="account-input"
                    autoComplete="off"
                    onInput={() => {
                      const input = document.getElementById("nouveau-mail");
                      input.classList.add("onInput");
                    }}
                  />
                  <Container fluid className="cancel-validate">
                    <Button
                      className="btn-style2 no-radius btn-xv"
                      onClick={() => setNewMail(!newMail)}
                    >
                      X
                    </Button>
                    <Button
                      className="btn-style no-radius btn-xv"
                      type="submit"
                    >
                      V
                    </Button>
                  </Container>
                </form>
              )}
            </Container>

            {auth.role > 0 && (
              <Button
                className="btn btn-primary btn-style2 no-radius mt-2 btn-deco"
                onClick={(e) => {
                  setAuth({ role: 0, id: 0 });
                  deleteCookie("blog");
                  window.location.href = "/login";
                }}
              >
                Déconnexion
              </Button>
            )}
          </Container>
        </Container>
      </main>
      <Footer />
    </>
  );
}
export default AccountScreen;
