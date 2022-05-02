// @ts-nocheck
import { Routes, Route } from "react-router-dom";
import "./styles.css";

import Login from "./pages/Auth/Login/Login.tsx";
import Register from "./pages/Auth/Register/Register.tsx";
import ForgetPassword from "./pages/Auth/ForgetPassword/ForgetPassword.tsx";
import HomePage from "./pages/Home/HomePage.tsx";

// themes from prime react
import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { authActions } from "./store/slices/authenticationSlice";

const App = () => {
  // global state of auth
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  const [isLoaded, setIsLoaded] = useState(false)
  useEffect(() => {
    const token: string | boolean = window.sessionStorage.getItem("token");
    // TODO : check if token is valid from backend
    if (token) {
      dispatch(authActions.login(token));
    } else {
      window.sessionStorage.removeItem("token");
    }
    setIsLoaded(true);
  }, []);

  if (!isLoaded) {
    return <React.Fragment>Initializing please wait. . .</React.Fragment>
  }
  return (
    <Routes>
      {isAuth ? (
        <Route path="/" element={<HomePage />} />
      ) : (
        <Route path="/" element={<Login />} />
      )}
      <Route path="/register" element={<Register />} />
      <Route path="/forgetpassword" element={<ForgetPassword />} />
    </Routes>
  );
};

export default App;
