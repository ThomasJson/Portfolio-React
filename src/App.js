import "./App.scss";
import React, { useContext } from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import BaseScreen from "./screens/baseScreen/BaseScreen";
import HomeScreen from "./screens/homeScreen/HomeScreen";
import BlogScreen from "./screens/blogScreen/BlogScreen";
import ContactScreen from "./screens/contactScreen/ContactScreen";

import AdminScreen from "./screens/adminScreen/AdminScreen";
import AccountScreen from "./screens/accountScreen/AccountScreen";
import UserScreen from "./screens/userScreen/UserScreen";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { AuthContext } from "./contexts/AuthContext";

function App() {
  const { auth } = useContext(AuthContext);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BaseScreen />}>
          
          <Route index element={<HomeScreen />} />
          <Route path="/blog" element={<BlogScreen />} />
          <Route path="/contact" element={<ContactScreen />} />

          {auth.role === 4 && <Route path="/admin" element={<AdminScreen />} />}

          {auth.role > 0 && (
            <Route path="/account" element={<AccountScreen />} />
          )}

          {auth.role > 0 && <Route path="/logged" element={<UserScreen />} />}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
