import "./baseScreen.scss";
import React from "react";
import { Outlet } from "react-router-dom";

const BaseScreen = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default BaseScreen;
