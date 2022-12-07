import "./loadingScreen.scss";
import React from "react";
import { Container } from "react-bootstrap";

const LoadingScreen = () => {
  return (
    <main>
      <Container fluid className="center-bloc">
        <p className="white">LOADING</p>
      </Container>
    </main>
  );
};

export default LoadingScreen;
