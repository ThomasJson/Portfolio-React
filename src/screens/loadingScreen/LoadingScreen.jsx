import "./loadingScreen.scss";
import React from "react";
import { Container } from "react-bootstrap";
import Footer from "../../components/footer/Footer";

const LoadingScreen = () => {
  return (
    <>
      <main>
        <Container fluid className="center-bloc">
          {/* <h2 className="letter-spacing">PHP is thinking ...</h2> */}
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default LoadingScreen;
