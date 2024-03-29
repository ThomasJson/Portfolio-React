import "./App.scss";
import React, { useContext } from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { AuthContext } from "./contexts/AuthContext";

import BaseScreen from "./screens/baseScreen/BaseScreen";
import HomeScreen from "./screens/homeScreen/HomeScreen";
import BlogScreen from "./screens/blogScreen/BlogScreen";
import ContactScreen from "./screens/contactScreen/ContactScreen";
import ArticleScreen from "./screens/articleScreen/ArticleScreen";

import AdminScreen from "./screens/adminScreen/AdminScreen";
import AccountScreen from "./screens/accountScreen/AccountScreen";
import AccountValidateScreen from "./screens/accountValidateScreen/AccountValidateScreen";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import AdminArticle from "./screens/adminScreen/adminArticle/AdminArticle";
import LoginScreen from "./screens/loginScreen/LoginScreen";
import RegisterScreen from "./screens/registerScreen/RegisterScreen";

function App() {
  const { auth } = useContext(AuthContext);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BaseScreen />}>
          
          <Route index element={<HomeScreen />} />
          <Route path="/blog" element={<BlogScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/register" element={<RegisterScreen />} />
          <Route path="/contact" element={<ContactScreen />} />
          <Route path="/article/:id" element={<ArticleScreen />} />

          {auth.role === 4 && <Route path="/admin" element={<AdminScreen />} />}

          {auth.role === 4 && <Route path="/admin/modifArticle" element={<AdminArticle />} />}

          {auth.role > 0 && (
            <Route path="/account" element={<AccountScreen />} />
          )}

          {auth.role === 0 && <Route path="/account/validate/:token" element={<AccountValidateScreen />} />}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
