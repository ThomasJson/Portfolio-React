import "./homeScreen.scss";
import React from "react";
import Footer from "../../components/footer/Footer";
import image from "./3D2.png";
import { Button } from "react-bootstrap";

const HomeScreen = () => {
  return (
    <>
      <main>
        <div className="home-section">
          <div className="presentation">
            <div className="presentation-col">
              <div>
                <h1>Hi,</h1>
                <h1>its Tom Pearson</h1>
                <h4 className="mt-1">Web Developper</h4>
              </div>
              <Button className="btn-spacing btn-primary btn-style btn-width">Contact Me</Button>
            </div>
          </div>
          <div className="three-js-bloc">
            <img className="img-dimension" src={image} alt="Three-Js" />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default HomeScreen;
