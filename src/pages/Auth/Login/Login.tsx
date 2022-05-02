// @ts-nocheck
import "bootstrap/dist/css/bootstrap.min.css";
// import "./css/authStyles.css";
import { useNavigate } from "react-router-dom";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { useRef, useState } from "react";
import { login } from "./Login.actions";
import { authActions } from "../../../store/slices/authenticationSlice";
import { useDispatch } from "react-redux";
import { isInputEmail, passwordComplexityCheck, validEmailCheck, validUsernameCheck } from "../common/validations";
import { loginRequest } from "../services/loginService";

const Login = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const usernameRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const resetInput = () => {
    document.getElementById("username").style.backgroundColor = "white";
    document.getElementById("password").style.backgroundColor = "white";
    setErrorMessage("");
  };

  const showError = () => {
    document.getElementById("username").style.backgroundColor = "#FBE9E9";
    document.getElementById("password").style.backgroundColor = "#FBE9E9";
    document.getElementById("username").focus();
  }
  const loginHandler = async () => {
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;
    const response = await login(username, password);
    if (response.status === 200) {
      dispatch(authActions.login(response.data["access_token"]));
    } else {
      setErrorMessage(response.statusText);
      showError();
    }
  };

  const redirectToRegisterPage = () => {
    resetInput();
    navigate("/register");
  };

  const redirectToForgetPasswordPage = () => {
    resetInput();
    navigate("/forgetpassword");
  };


  return (
    <div className="login-container">
      <Card
        title="Login Page"
        className="login-card p-shadow-24"
        style={{ width: "25rem", marginBottom: "2em" }}
      >
        <br />
        <div className="p-fluid">
          <div className="p-field">
            <InputText
              id="username"
              type="username"
              placeholder="Username or E-Mail"
              ref={usernameRef}
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
            <span
              onClick={() => redirectToForgetPasswordPage()}
              style={{
                float: "right",
                fontSize: "90%",
                padding: "5px",
                cursor: "pointer",
              }}
            >
              Forget Password?
            </span>
            <br />
            <br />
            <br />
            <div style={{ color: "red" }}>{errorMessage}</div>
          </div>
          <br />
          <div className="p-field">
            <Button
              label="Login"
              id="loginBtn"
              onClick={() => loginHandler()}
            />
          </div>
          <br />
          <br />
          <hr />
          <br />
          <div>
            Don't have an account yet?{" "}
            <span
              onClick={() => redirectToRegisterPage()}
              style={{ textDecoration: "underline", cursor: "pointer" }}
            >
              Register now!
            </span>
          </div>
          <br />
        </div>
      </Card>
    </div>
  );
};

export default Login;
