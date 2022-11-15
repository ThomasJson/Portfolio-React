import "./baseScreen.scss";
import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../../components/navBar/NavBar";
import LoginNav from "../../components/loginNav/LoginNav";

const BaseScreen = () => {
  return (
    <>
      <NavBar />
      <LoginNav />
      <Outlet />
    </>
  );
};

export default BaseScreen;
