import "./baseScreen.scss";
import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../../components/navBar/NavBar";

const BaseScreen = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

export default BaseScreen;
