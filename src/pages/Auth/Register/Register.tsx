// @ts-nocheck
import "bootstrap/dist/css/bootstrap.min.css";
// import "./css/authStyles.css";
import { useNavigate } from "react-router-dom";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "./Register.actions";
import {
  CONTACT_NUMBER,
  EMAIL,
  NAME,
  PASSWORD,
  USERNAME,
} from "../../../constants/authConstants";
import { authActions } from "../../../store/slices/authenticationSlice";

const Register = () => {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const nameRef: any = useRef();
  const usernameRef: any = useRef();
  const emailRef: any = useRef();
  const contactNumberRef: any = useRef();
  const passwordRef: any = useRef();

  const redirectToMainPage = () => {
    navigate("/");
  };

  const resetInput = () => {
    document.getElementById("name").style.backgroundColor = "white";
    document.getElementById("username").style.backgroundColor = "white";
    document.getElementById("email").style.backgroundColor = "white";
    document.getElementById("contact").style.backgroundColor = "white";
    document.getElementById("password").style.backgroundColor = "white";
    setErrorMessage("");
  };

  const registerHandler = () => {
    const name = nameRef.current.value;
    const username = usernameRef.current.value;
    const email = emailRef.current.value;
    const contactNumber = contactNumberRef.current.value;
    const password = passwordRef.current.value;
    let res: boolean = false;
    try {
      res = register(name, username, email, contactNumber, password);
    } catch (err) {
      setErrorMessage(err.message);
      switch (err.remarks) {
        case NAME:
          document.getElementById("name").style.backgroundColor = "#FBE9E9";
          document.getElementById("name").focus();
          break;
        case USERNAME:
          document.getElementById("username").style.backgroundColor = "#FBE9E9";
          document.getElementById("username").focus();
          break;
        case EMAIL:
          document.getElementById("email").style.backgroundColor = "#FBE9E9";
          document.getElementById("email").focus();
          break;
        case PASSWORD:
          document.getElementById("password").style.backgroundColor = "#FBE9E9";
          document.getElementById("password").focus();
          break;
        case CONTACT_NUMBER:
          document.getElementById("contact").style.backgroundColor = "#FBE9E9";
          document.getElementById("contact").focus();
          break;
      }
    } finally {
      if (res) {
        dispatch(authActions.login());
      }
    }
  };

  if (isAuth) {
    redirectToMainPage();
  }

  return (
    <div className="login-container">
      <Card
        title="Register Page"
        className="login-card p-shadow-24"
        style={{ width: "25rem", marginBottom: "2em" }}
      >
        <br />
        <div className="p-fluid">
          <div className="p-field">
            <InputText
              id="name"
              type="name"
              placeholder="Your Name"
              ref={nameRef}
              onKeyDown={() => resetInput()}
            />
          </div>
          <div className="login-form-between-padding"></div>
          <div className="p-field">
            <InputText
              id="username"
              type="username"
              placeholder="Username"
              ref={usernameRef}
              onKeyDown={() => resetInput()}
            />
          </div>
          <div className="login-form-between-padding"></div>
          <div className="p-field">
            <InputText
              id="email"
              type="email"
              placeholder="E-Mail"
              ref={emailRef}
              onKeyDown={() => resetInput()}
            />
          </div>
          <div className="login-form-between-padding"></div>
          <div className="p-field">
            <InputText
              id="contact"
              type="contact"
              placeholder="Contact Number"
              ref={contactNumberRef}
              onKeyDown={() => resetInput()}
            />
          </div>
          <div className="login-form-between-padding"></div>
          <div className="p-field">
            <InputText
              id="password"
              type="password"
              placeholder="Password"
              ref={passwordRef}
              onKeyDown={() => resetInput()}
            />
          </div>
          <br />
          <br />
          <div style={{ color: "red" }}>{errorMessage}</div>
          <br />
          <br />
          <div className="p-field">
            <Button label="Register" onClick={() => registerHandler()} />
          </div>
          <br />
          <br />
          <hr />
          <br />
          <div className="p-field">
            Have an account?{" "}
            <span
              onClick={() => redirectToMainPage()}
              style={{ textDecoration: "underline", cursor: "pointer" }}
            >
              Login here
            </span>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Register;
